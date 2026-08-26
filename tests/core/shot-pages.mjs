/* Полностраничные скрины всех страниц (1440) для визуальной приёмки.
   node /tmp/shot-pages.mjs <base> <start> <end> [width] */
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
import { spawn } from 'child_process';
import { writeFileSync, mkdirSync } from 'fs';
const base = (process.argv[2] || 'http://localhost:3013').replace(/\/$/, '');
const START = +(process.argv[3] || 0), END = +(process.argv[4] || 99), W = +(process.argv[5] || 1440);
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
const PORT = 9372;
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
await send('Emulation.setDeviceMetricsOverride', { width: W, height: W > 500 ? 900 : 844, deviceScaleFactor: W > 500 ? 1 : 2, mobile: W < 500 });
for (const p of PAGES) {
  await send('Page.navigate', { url: base + p });
  let ok = false; for (let i = 0; i < 30; i++) { await sleep(400); ok = await evl(`document.readyState==='complete'&&!!document.querySelector('.header')`); if (ok) break; }
  await sleep(700);
  await evl(`(async function(){var h=document.body.scrollHeight;var y=0;while(y<h){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,280));y+=Math.round(window.innerHeight*0.8);}window.scrollTo(0,0);await new Promise(r=>setTimeout(r,600));return true;})()`);
  /* cookie-баннер скрываем для чистой приёмки */
  await evl(`(function(){var c=document.querySelector('.cookies-notice-container');if(c)c.style.display='none';return true;})()`);
  await sleep(300);
  const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 58, captureBeyondViewport: true });
  const slug = p.replace(/\//g, '') || 'home';
  writeFileSync(`/tmp/pages/all-${slug}-${W}.jpg`, Buffer.from(s.data, 'base64'));
  console.log('shot', p);
}
chrome.kill(); process.exit(0);
