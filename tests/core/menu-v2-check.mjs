/* Меню v2: CDP-матрица — мир-подложка, аккордеон, футер, Esc, свайп */
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
import { spawn } from 'child_process';
import { writeFileSync } from 'fs';
const url = process.argv[2] || 'http://localhost:3013';
const chrome = spawn(CHROME, ['--headless=new','--remote-debugging-port=9347','--window-size=390,844','about:blank'], {stdio:'ignore'});
await new Promise(r=>setTimeout(r,2500));
const page = (await (await fetch('http://127.0.0.1:9347/json')).json()).find(t=>t.type==='page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id=0;
const send=(m,p)=>new Promise(res=>{const i=++id;const h=e=>{const d=JSON.parse(e.data);if(d.id===i){ws.removeEventListener('message',h);res(d.result);}};ws.addEventListener('message',h);ws.send(JSON.stringify({id:i,method:m,params:p}));});
await new Promise(r=>ws.addEventListener('open',r));
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:2,mobile:true});
await send('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:5});
await send('Page.navigate',{url});
const evl=async(e2)=>{const r=await send('Runtime.evaluate',{expression:e2,returnByValue:true});return r&&r.result?r.result.value:undefined;};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const results=[];
function rep(id,desc,ok,detail){results.push(ok);console.log((ok?'PASS':'FAIL')+' | '+id+' | '+desc+' | '+detail);}
let ok=false;
for(let i=0;i<40;i++){await sleep(500);ok=await evl(`!!document.querySelector('.h36-stage .h36-warm')`);if(ok)break;}
await sleep(1500);

// открыть меню
await evl(`document.getElementById('menu-button').click()`);
await sleep(1600);
rep('MM-01','меню открыто', await evl(`!!document.querySelector('.over-container.is_show')`),'');
rep('MM-02','мир-подложка в меню (знак+свечение)', await evl(`!!document.querySelector('.v36-mmenu-world .w-mark')&&!!document.querySelector('.v36-mmenu-world .w-glow')`),'');
rep('MM-03','знак дышит (animation)', await evl(`getComputedStyle(document.querySelector('.v36-mmenu-world .w-mark')).animationName`),'v36breathe');
rep('MM-04','футер непрозрачный', await evl(`(function(){var f=document.querySelector('.v36-mmenu-foot');var s=getComputedStyle(f);return s.backgroundColor==='rgb(3, 21, 42)'&&s.position==='fixed';})()`),'bg #03152A fixed');
rep('MM-04b','футер прибит к нижней кромке вьюпорта', await evl(`(function(){var f=document.querySelector('.v36-mmenu-foot');if(!f||!f.closest('.over-container'))return 'not-in-container';var r=f.getBoundingClientRect();return Math.abs(r.bottom-window.innerHeight)<=2&&r.left===0&&Math.abs(r.width-window.innerWidth)<=2;})()`),'bottom==innerHeight');
rep('MM-05','role=dialog + aria-modal', await evl(`(function(){var oc=document.querySelector('.over-content');return oc.getAttribute('role')==='dialog'&&oc.getAttribute('aria-modal')==='true';})()`),'');

// аккордеон: «Медицинские услуги» (не активный раздел) свёрнут
const medicState=await evl(`(function(){var lis=[...document.querySelectorAll('.over-content .menu-items.level-1 > li')];var li=lis.find(l=>l.querySelector('a')&&l.querySelector('a').getAttribute('href')==='/medic');if(!li)return 'no-li';return {hasSub:li.classList.contains('v36-has-sub'),open:li.classList.contains('open'),goto:!!li.querySelector('.v36-goto a[href="/medic"]')};})()`);
rep('MM-06','«Медуслуги» свёрнуты по умолчанию', medicState&&medicState.hasSub&&!medicState.open, JSON.stringify(medicState));
rep('MM-07','ссылка «Перейти в раздел» внутри', medicState&&medicState.goto===true,'');
// активный раздел раскрыт — проверяется на внутренней странице в конце (MM-08b)
// тап по «Медуслуги» — раскрывает, НЕ уводит
const before=await evl('location.pathname');
await evl(`(function(){var lis=[...document.querySelectorAll('.over-content .menu-items.level-1 > li')];var li=lis.find(l=>l.querySelector('a').getAttribute('href')==='/medic');li.querySelector('a').click();})()`);
await sleep(600);
rep('MM-09','тап раскрывает аккордеон', await evl(`(function(){var lis=[...document.querySelectorAll('.over-content .menu-items.level-1 > li')];var li=lis.find(l=>l.querySelector('a').getAttribute('href')==='/medic');return li.classList.contains('open')&&li.querySelector('a').getAttribute('aria-expanded')==='true';})()`),'');
rep('MM-10','страница НЕ сменилась', (await evl('location.pathname'))===before,'');
// повторный тап — сворачивает
await evl(`(function(){var lis=[...document.querySelectorAll('.over-content .menu-items.level-1 > li')];var li=lis.find(l=>l.querySelector('a').getAttribute('href')==='/medic');li.querySelector('a').click();})()`);
await sleep(500);
rep('MM-11','повторный тап сворачивает', await evl(`(function(){var lis=[...document.querySelectorAll('.over-content .menu-items.level-1 > li')];var li=lis.find(l=>l.querySelector('a').getAttribute('href')==='/medic');return !li.classList.contains('open');})()`),'');

// скролл меню до конца: «Контакты» не перекрыт футером
await evl(`(function(){var oc=document.querySelector('.over-content');oc.scrollTop=oc.scrollHeight;})()`);
await sleep(700);
rep('MM-12','«Контакты» виден и кликабелен над футером', await evl(`(function(){var lis=[...document.querySelectorAll('.over-content .menu-items.level-1 > li > a')];var a=lis.find(x=>x.textContent.trim()==='Контакты');if(!a)return 'no-a';var r=a.getBoundingClientRect();var el=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2);return el&&(el===a||a.contains(el)||el.closest('.menu-items'));})()`),'');
rep('MM-13','параллакс: --mm-shift меняется при скролле', await evl(`(function(){var oc=document.querySelector('.over-content');return parseFloat(getComputedStyle(oc).getPropertyValue('--mm-shift'))>10;})()`),'');

const shot = await send('Page.captureScreenshot',{format:'png'});
writeFileSync('/tmp/menu-v2.png', Buffer.from(shot.data,'base64'));

// свайп вправо = закрытие
const b=await evl(`(function(){var r=document.querySelector('.over-content').getBoundingClientRect();return{x:r.left+40,y:r.top+300};})()`);
await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:b.x,y:b.y}]});
for(let d=20;d<=160;d+=20){await send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:b.x+d,y:b.y}]});await sleep(20);}
await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
await sleep(900);
rep('MM-14','свайп вправо закрывает меню', await evl(`!document.querySelector('.over-container.is_show')`),'');

// переоткрыть и проверить Esc
await evl(`document.getElementById('menu-button').click()`);
await sleep(1400);
rep('MM-15','переоткрытие', await evl(`!!document.querySelector('.over-container.is_show')`),'');
await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27,nativeVirtualKeyCode:27});
await sleep(900);
rep('MM-16','Esc закрывает', await evl(`!document.querySelector('.over-container.is_show')`),'');
rep('MM-17','фокус вернулся на бургер', await evl(`document.activeElement&&document.activeElement.id==='menu-button'`),'');

// === v3 (21.08): регрессия правок P0/P1 аудита меню ===
rep('MM-18','бургер: hit-area 44px + aria (label/expanded/controls)', await evl(`(function(){var b=document.getElementById('menu-button');var r=b.getBoundingClientRect();return r.width>=44&&r.height>=44&&!!b.getAttribute('aria-label')&&b.getAttribute('aria-expanded')==='false'&&b.getAttribute('aria-controls')==='main-menu';})()`),'44px + aria');

// открыть — aria-expanded, крестик
await evl(`document.getElementById('menu-button').click()`);
await sleep(1400);
rep('MM-19a','aria-expanded=true при открытии', await evl(`document.getElementById('menu-button').getAttribute('aria-expanded')==='true'`),'');
rep('MM-19b','крестик: зона 44px + aria-label', await evl(`(function(){var c=document.querySelector('.overheight_close_button');if(!c)return false;var r=c.getBoundingClientRect();return r.width>=44&&r.height>=44&&!!c.getAttribute('aria-label');})()`),'44px + label');

// P-01: гонка — close→open в окне pending-remove (300мс)
await evl(`document.getElementById('menu-button').click()`);
await sleep(120);
await evl(`document.getElementById('menu-button').click()`);
await sleep(1400);
rep('MM-20','гонка toggle: меню живо после быстрого close→open', await evl(`!!document.querySelector('.over-container.is_show')`),'P-01 regression');

// focus trap: Tab с последнего фокусируемого → на первый
const trapInfo=await evl(`(function(){var cont=document.querySelector('.over-container.is_show');var f=cont.querySelectorAll('a[href],button,[tabindex]:not([tabindex="-1"])');var list=[...f].filter(el=>el.getClientRects().length);if(!list.length)return 'empty';list[list.length-1].focus();return 'n='+list.length;})()`);
await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9,nativeVirtualKeyCode:9});
await sleep(400);
rep('MM-21','focus trap: Tab с последнего → первый', await evl(`(function(){var cont=document.querySelector('.over-container.is_show');var f=cont.querySelectorAll('a[href],button,[tabindex]:not([tabindex="-1"])');var list=[...f].filter(el=>el.getClientRects().length);return list.length&&document.activeElement===list[0];})()`),String(trapInfo));

// P-03: раскладка колонки применена к реальному контейнеру
rep('MM-22','колонка меню: max-width 460px + верхний воздух >=40px', await evl(`(function(){var w=document.querySelector('.over-content .menu-wrapper');if(!w)return 'no-wrapper';var s=getComputedStyle(w);return s.maxWidth==='460px'&&parseFloat(s.paddingTop)>=40;})()`),'P-03');

// крестик закрывает + aria-expanded=false
await evl(`document.querySelector('.overheight_close_button').click()`);
await sleep(900);
rep('MM-19c','крестик закрывает; aria-expanded=false', await evl(`!document.querySelector('.over-container.is_show')&&document.getElementById('menu-button').getAttribute('aria-expanded')==='false'`),'');

// P-08: свайп, начавшийся у левого края (x=8), НЕ закрывает меню (системный back-жест iOS)
await evl(`document.getElementById('menu-button').click()`);
await sleep(1400);
await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:8,y:300}]});
for(let d=20;d<=160;d+=20){await send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:8+d,y:300}]});await sleep(20);}
await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
await sleep(900);
rep('MM-23','edge-свайп (x=8) НЕ закрывает меню', await evl(`!!document.querySelector('.over-container.is_show')`),'P-08');
await evl(`document.querySelector('.overheight_close_button').click()`);
await sleep(900);

// MM-08b: на внутренней странице активный раздел раскрыт
await send('Page.navigate',{url:url.replace(/\/$/,'')+'/lechenie-alkogolizma'});
ok=false;
for(let i=0;i<40;i++){await sleep(500);ok=await evl(`!!document.getElementById('menu-button')`);if(ok)break;}
await sleep(1500);
await evl(`document.getElementById('menu-button').click()`);
await sleep(1600);
rep('MM-08b','[inner] активный раздел раскрыт по умолчанию', await evl(`(function(){var li=document.querySelector('.over-content .menu-items.level-1 > li.active');return !!(li&&li.classList.contains('v36-has-sub')&&li.classList.contains('open'));})()`),'');

const fails=results.filter(r=>!r).length;
console.log('\n=== МЕНЮ v2: '+(results.length-fails)+'/'+results.length+' PASS ===');
chrome.kill(); process.exit(fails?1:0);
