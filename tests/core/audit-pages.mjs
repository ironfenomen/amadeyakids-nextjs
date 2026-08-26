/* Петля редизайна: аудит всех внутренних страниц.
   node /tmp/audit-pages.mjs <base> <start> <end>
   Проверки на страницу × 2 ширины (1440, 390). Скриншоты падений в /tmp/pages/. */
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
import { spawn } from 'child_process';
import { writeFileSync, mkdirSync } from 'fs';
const base = (process.argv[2] || 'http://localhost:3013').replace(/\/$/, '');
const START = +(process.argv[3] || 0), END = +(process.argv[4] || 99);
const PAGES = [
  '/narkolog/', '/nevrolog/', '/psihiatr/', '/psiholog/', '/psihoterapevt/', '/terapevt/',
  '/detoksikaciya-ot-alkogolya/', '/kodirovanie-ot-alkogolizma/', '/lechenie-alkogolizma/',
  '/vyvod-iz-zapoya/', '/uzi-diagnostika-v-stavropole/',
  '/bobrova-aleksandra/', '/borisova-elena/', '/boyunsuzova-zuhra/', '/kamolikova-zhanna/',
  '/kron-elena/', '/kumratova-natalya/', '/lavrentev-ilya/', '/mozharuk-darya/',
  '/cookie-policy/', '/privacy-policy/', '/privacy-accept/',
  '/vrachi/', '/reviews/', '/akcii-kliniki-amadeya-detoks/', '/alko/', '/medic/', '/rehab/',
  '/uslugi-na-glavnuyu/', '/kontakty/',
  '/lechenie-narkomanii-v-stavropole/', '/detoksikaciya-narkozavisimyh/', '/snyatie-lomki/',
  '/reabilitaciya-narkozavisimyh/', '/reabilitaciya-alkogolikov/', '/centr-osnova/'
].slice(START, END);
mkdirSync('/tmp/pages', { recursive: true });
const PORT = 9371;
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, '--window-size=1440,900', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
await new Promise(r => setTimeout(r, 2500));
const page = (await (await fetch(`http://127.0.0.1:${PORT}/json`)).json()).find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const send = (m, p) => new Promise(res => { const i = ++id; const h = e => { const d = JSON.parse(e.data); if (d.id === i) { ws.removeEventListener('message', h); res(d.result); } }; ws.addEventListener('message', h); ws.send(JSON.stringify({ id: i, method: m, params: p })); });
await new Promise(r => ws.addEventListener('open', r));
await send('Page.enable');
const evl = async e => { const r = await send('Runtime.evaluate', { expression: e, returnByValue: true, awaitPromise: true }); return r && r.result ? r.result.value : undefined; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const report = {};
async function shot(name) { const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 62, captureBeyondViewport: true }); writeFileSync(name, Buffer.from(s.data, 'base64')); }
async function settle() { /* прогрев: lazy-фото + reveal */
  await evl(`(async function(){var h=document.body.scrollHeight;var y=0;while(y<h){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,260));y+=Math.round(window.innerHeight*0.8);}window.scrollTo(0,0);await new Promise(r=>setTimeout(r,500));return true;})()`);
}
async function checks(w) {
  const tag = w > 500 ? 'D' : 'M';
  const out = [];
  const add = (id, desc, ok, det) => { out.push({ id: id + '-' + tag, desc, ok: !!ok, det: det || '' }); };
  add('P01', 'H1 есть и непустой', await evl(`(function(){var h=document.querySelector('h1');return h&&h.textContent.trim().length>2;})()`));
  add('P02', 'без горизонтального скролла', await evl(`document.documentElement.scrollWidth<=window.innerWidth+1`));
  add('P03', 'заголовки в Playfair', await evl(`(function(){var h=document.querySelector('h1');return h&&/Playfair/i.test(getComputedStyle(h).fontFamily);})()`));
  add('P04', 'фиолета темы (#4B4FAC) нет в вычисленных стилях', await evl(`(function(){var bad=0;var els=document.querySelectorAll('body *');for(var i=0;i<els.length;i++){var s=getComputedStyle(els[i]);if((s.color+s.backgroundColor+s.borderColor).indexOf('75, 79, 172')>-1){bad++;if(bad>2)break;}}return bad===0;})()`));
  add('P05', 'битых изображений нет', await evl(`(function(){var bad=[...document.querySelectorAll('img')].filter(i=>i.complete&&i.naturalWidth===0&&i.offsetParent!==null);return bad.length;})()`) === 0, '');
  add('P06', 'подвал с телефоном', await evl(`(function(){var f=document.querySelector('footer');return f&&/852.?37.?77/.test(f.innerText);})()`));
  add('P07', 'мир-фон жив (breathe)', await evl(`(function(){var m=document.querySelector('.v36-world-mark img');return m&&getComputedStyle(m).animationName==='v36breathe';})()`));
  add('P09', 'страница тёмная (v36-dark + мир тёмный)', await evl(`(function(){var d=document.querySelector('.v36-dark');var w=document.querySelector('.v36-world');if(!d||!w)return false;var bg=getComputedStyle(w).backgroundImage;return bg.indexOf('7, 29, 51')>-1||bg.indexOf('18, 42, 68')>-1;})()`));
  if (w < 500) {
    add('P08', 'тап-цели .button >= 44px', await evl(`(function(){var bad=[...document.querySelectorAll('.button')].filter(b=>b.offsetParent!==null&&b.getBoundingClientRect().height<43);return bad.length;})()`) === 0);
  }
  return out;
}
for (const w of [1440, 390]) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: w > 500 ? 900 : 844, deviceScaleFactor: w > 500 ? 1 : 2, mobile: w < 500 });
  if (w < 500) await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  for (const p of PAGES) {
    await send('Page.navigate', { url: base + p });
    let ok = false; for (let i = 0; i < 30; i++) { await sleep(400); ok = await evl(`!!document.querySelector('.header')&&document.readyState==='complete'`); if (ok) break; }
    await sleep(800);
    await settle();
    const res = await checks(w);
    report[p] = report[p] || [];
    report[p].push(...res);
    const fails = res.filter(r => !r.ok);
    if (fails.length) {
      const slug = p.replace(/\//g, '') || 'home';
      await shot(`/tmp/pages/${slug}-${w}.jpg`);
      console.log(`FAIL | ${p} [${w}] | ` + fails.map(f => f.id + '(' + f.desc + ')').join(', '));
    } else {
      console.log(`PASS | ${p} [${w}] | ${res.length}/${res.length}`);
    }
  }
}
writeFileSync(`/tmp/pages-report-${START}-${END}.json`, JSON.stringify(report, null, 1));
const all = Object.values(report).flat();
const bad = all.filter(r => !r.ok).length;
console.log(`\n=== СТРАНИЦЫ ${START}..${END}: ${all.length - bad}/${all.length} PASS ===`);
chrome.kill(); process.exit(bad ? 1 : 0);
