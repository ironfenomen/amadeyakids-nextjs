/* Приёмочная матрица главной: десктоп 1440 + мобильный 390 против макета v36-16.
   Запуск: node /tmp/audit-home.mjs [url] */
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
import { spawn } from 'child_process';
import { writeFileSync } from 'fs';
const base = (process.argv[2] || 'http://localhost:3013').replace(/\/$/, '');
const PORT = 9361;
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, '--window-size=1440,900', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
await new Promise(r => setTimeout(r, 2500));
const page = (await (await fetch(`http://127.0.0.1:${PORT}/json`)).json()).find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const send = (m, p) => new Promise(res => { const i = ++id; const h = e => { const d = JSON.parse(e.data); if (d.id === i) { ws.removeEventListener('message', h); res(d.result); } }; ws.addEventListener('message', h); ws.send(JSON.stringify({ id: i, method: m, params: p })); });
await new Promise(r => ws.addEventListener('open', r));
await send('Page.enable');
const evl = async e => { const r = await send('Runtime.evaluate', { expression: e, returnByValue: true }); return r && r.result ? r.result.value : undefined; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const results = [];
function rep(id, desc, ok, detail) { results.push(!!ok); console.log((ok ? 'PASS' : 'FAIL') + ' | ' + id + ' | ' + desc + (detail ? ' | ' + detail : '')); }
async function shot(name) { const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 70, captureBeyondViewport: true }); writeFileSync(name, Buffer.from(s.data, 'base64')); }
async function waitHero() { let ok = false; for (let i = 0; i < 40; i++) { await sleep(500); ok = await evl(`!!document.querySelector('.h36-stage .h36-warm')`); if (ok) break; } await sleep(1500); return ok; }

/* ================== ДЕСКТОП 1440 ================== */
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: base + '/' });
await waitHero();
await evl(`document.fonts.ready.then(function(){return true;})`); /* ждём шрифты — иначе T-01 флакует на свежем dev */

rep('T-01', '[D] шрифт Playfair Display загружен', await evl(`document.fonts.check('16px "Playfair Display"')`));
rep('T-02', '[D] шрифт Golos Text загружен', await evl(`document.fonts.check('16px "Golos Text"')`));
rep('T-03', '[D] токены макета на :root', await evl(`(function(){var s=getComputedStyle(document.documentElement);var g=function(n){return s.getPropertyValue(n).trim().toLowerCase();};return g('--gold')==='#d6b366'&&g('--abyss')==='#0e223d'&&g('--parch')==='#f7f3ea';})()`));
rep('T-04', '[D] без горизонтального скролла', await evl(`document.documentElement.scrollWidth<=window.innerWidth+1`));

rep('H-01', '[D] hero-слайдер: 2 слоя (утро/вечер)', await evl(`!!document.querySelector('.h36-stage .h36-cold')&&!!document.querySelector('.h36-stage .h36-warm')`));
rep('H-02', '[D] hero без подписей «утро/вечер» и хинта', await evl(`(function(){var t=(document.querySelector('.h36-stage')||{}).innerText||'';return !/тёплый вечер|серое утро|Проведите/i.test(t);})()`));
rep('H-03', '[D] hero без водяного знака', await evl(`(function(){var h=document.querySelector('.h36-stage');if(!h)return 'no-hero';var before=getComputedStyle(h,'::before').backgroundImage;var after=getComputedStyle(h,'::after').backgroundImage;return !/mark|logo/i.test(before+after);})()`));
rep('H-04', '[D] CTA hero «Получить консультацию» есть', await evl(`(function(){var a=[...document.querySelectorAll('.v36-hero a,.h36-stage a')].find(x=>/Получить консультацию/i.test(x.textContent));return !!a;})()`));

rep('HD-01', '[D] шапка прозрачна поверх hero', await evl(`(function(){var s=getComputedStyle(document.querySelector('.header'));return s.backgroundColor==='rgba(0, 0, 0, 0)'||s.backgroundColor==='transparent';})()`));
await evl(`window.scrollTo(0,700)`); await sleep(900);
rep('HD-02', '[D] шапка твердеет после скролла', await evl(`(function(){var s=getComputedStyle(document.querySelector('.header'));return s.backgroundColor!=='rgba(0, 0, 0, 0)'&&s.backgroundColor!=='transparent';})()`));
rep('HD-02b', '[D] полоса меню делит стекло с шапкой', await evl(`(function(){var n=document.querySelector('.nav');return n&&n.classList.contains('on')&&getComputedStyle(n).backgroundColor==='rgba(4, 24, 49, 0.88)';})()`));
rep('HD-03', '[D] телефон шапки +7 (988) 852-37-77', await evl(`(document.querySelector('.header')||{}).innerText&&/852.?37.?77/.test(document.querySelector('.header').innerText)`));
rep('HD-04', '[D] бургер-иконка золотая', await evl(`(function(){var m=document.querySelector('#menu-button .menu-icon');return m&&/214, 179, 102|242, 223, 160/.test(getComputedStyle(m).backgroundColor);})()`));
await evl(`window.scrollTo(0,0)`); await sleep(400);

rep('M-01', '[D] бегущая строка: стационар + наркомания', await evl(`(function(){var t=(document.querySelector('.v36-mq')||{}).innerText||'';return /Стационар/.test(t)&&/наркомании/i.test(t);})()`));
rep('M-02', '[D] бегущая строка анимируется', await evl(`(function(){var m=document.querySelector('.v36-mq > div');return m&&getComputedStyle(m).animationName!=='none';})()`));

rep('N-01', '[D] цифры макета 9/17/300+/2021', await evl(`(function(){var t=(document.querySelector('.v36-nums')||{}).innerText||'';return /\\b9\\b/.test(t)&&/\\b17\\b/.test(t)&&/300\\+/.test(t)&&/2021/.test(t);})()`));

rep('S-01', '[D] карточек услуг >= 4', await evl(`document.querySelectorAll('.posts-block .post-item').length>=4`), await evl(`document.querySelectorAll('.posts-block .post-item').length`) + ' шт');
rep('S-02', '[D] «Подробнее» без пилюли (hairline-андерлайн)', await evl(`(function(){var a=document.querySelector('.post-item-title a');if(!a)return 'no-a';var s=getComputedStyle(a);var bf=getComputedStyle(a,'::before');return (bf.content==='none'||bf.content==='""'&&bf.width==='0px'||bf.backgroundImage==='none'&&parseFloat(s.paddingLeft)===0)&&s.borderTopWidth==='0px'&&parseFloat(s.borderBottomWidth)===1;})()`), await evl(`(function(){var a=document.querySelector('.post-item-title a');var s=getComputedStyle(a);return 'padL='+s.paddingLeft+' bB='+s.borderBottomWidth+' before='+getComputedStyle(a,'::before').content;})()`));
rep('S-03', '[D] «Подробнее» со стрелкой →', await evl(`(function(){var a=document.querySelector('.post-item-title a');return getComputedStyle(a,'::after').content.includes('→');})()`));

rep('D-01', '[D] врачи: >= 4 карточек с фото', await evl(`(function(){var c=[...document.querySelectorAll('.people-item, .dcard')];return c.length>=4&&c.every(x=>x.querySelector('img'));})()`), await evl(`document.querySelectorAll('.people-item, .dcard').length`) + ' шт');

rep('Q-01', '[D] цитата «Куда мы только не обращались»', await evl(`/Куда мы только не обращались/.test(document.body.innerText)`));
rep('Q-02', '[D] фото врача в цитате загружено', await evl(`(function(){var i=document.querySelector('.v36-moment img');return i&&i.src.includes('moment-doctor')&&i.naturalWidth>0;})()`));

rep('F-01', '[D] финал: текст про 15 минут', await evl(`/Администратор перезвонит в течени[еи] 15 минут/.test(document.body.innerText)`));
rep('F-02', '[D] подвал главной прозрачный (живой мир-фон)', await evl(`(function(){var s=getComputedStyle(document.querySelector('footer'));return s.backgroundColor==='rgba(0, 0, 0, 0)'||s.backgroundColor==='transparent';})()`));

rep('W-01', '[D] мир-знак дышит', await evl(`(function(){var m=document.querySelector('.v36-world-mark img');return m&&getComputedStyle(m).animationName==='v36breathe';})()`));
rep('R-01', '[D] reveal-анимации срабатывают при скролле', await evl(`(async function(){window.scrollTo(0,document.body.scrollHeight*0.5);await new Promise(r=>setTimeout(r,1200));return !!document.querySelector('.rv.in, .lw.in, [data-gx].in, .in');})()`));
await evl(`window.scrollTo(0,0)`); await sleep(400);
await shot('/tmp/home-1440.jpg');

/* ================== МОБИЛЬНЫЙ 390 ================== */
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
await send('Page.navigate', { url: base + '/' });
await waitHero();

rep('TM-04', '[M] без горизонтального скролла', await evl(`document.documentElement.scrollWidth<=window.innerWidth+1`));
rep('HDM-00', '[M] шапка фиксирована', await evl(`getComputedStyle(document.querySelector('.header')).position==='fixed'`));
await evl(`window.scrollTo(0,700)`); await sleep(800);
rep('HDM-02', '[M] шапка стеклянная после скролла', await evl(`(function(){var h=document.querySelector('.header');return h.classList.contains('on')&&getComputedStyle(h).backgroundColor==='rgba(4, 24, 49, 0.88)';})()`));
await evl(`window.scrollTo(0,0)`); await sleep(500);
rep('HM-04', '[M] CTA hero высотой >= 44px', await evl(`(function(){var a=[...document.querySelectorAll('.v36-hero a,.h36-stage a')].find(x=>/Получить консультацию/i.test(x.textContent));return a&&a.getBoundingClientRect().height>=44;})()`));
rep('HDM-01', '[M] телефон виден в шапке', await evl(`(function(){var p=document.querySelector('.header-phone');if(!p)return 'no-el';var r=p.getBoundingClientRect();return r.width>0&&r.height>0;})()`));
rep('DM-01', '[M] рельса врачей скроллится', await evl(`(function(){var r=document.querySelector('.people-block .swiper-wrapper, .drail, .people-line');if(!r)return 'no-rail';var w=r.closest('div');return r.scrollWidth>window.innerWidth+20;})()`));
rep('WM-02', '[M] параллакс мира при скролле', await evl(`(async function(){var m=document.querySelector('.v36-world');if(!m)return 'no-world';var t0=getComputedStyle(m).transform;window.scrollTo(0,1500);await new Promise(r=>setTimeout(r,700));var t1=getComputedStyle(m).transform;window.scrollTo(0,0);return t0!==t1;})()`));
rep('SM-02', '[M] «Подробнее» без пилюли', await evl(`(function(){var a=document.querySelector('.post-item-title a');if(!a)return 'no-a';var s=getComputedStyle(a);return s.borderTopWidth==='0px'&&parseFloat(s.borderBottomWidth)===1&&parseFloat(s.paddingLeft)===0;})()`));
await shot('/tmp/home-390.jpg');

const fails = results.filter(r => !r).length;
console.log('\n=== ГЛАВНАЯ: ' + (results.length - fails) + '/' + results.length + ' PASS ===');
chrome.kill(); process.exit(fails ? 1 : 0);
