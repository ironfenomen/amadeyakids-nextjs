/* Первый кадр против кадра после deferred CSS: меню, шапка и hero не должны прыгать. */
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
import { spawn } from 'child_process';
const url = process.argv[2] || 'https://amadeyakids.ru/';
const port = 9400 + (process.pid % 300);
const chrome = spawn(CHROME, [`--remote-debugging-port=${port}`, '--headless=new', '--window-size=390,844', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let ws;
try {
  let pages;
  for (let i = 0; i < 40; i++) {
    await sleep(250);
    try { pages = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); break; } catch {}
  }
  if (!pages) throw new Error('Chrome CDP не поднялся');
  const page = pages.find(t => t.type === 'page');
  ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const requestId = ++id;
    pending.set(requestId, { resolve, reject });
    ws.send(JSON.stringify({ id: requestId, method, params }));
  });
  ws.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      data.error ? reject(data.error) : resolve(data.result);
    } else if (data.method === 'Fetch.requestPaused') {
      const request = data.params;
      setTimeout(() => send('Fetch.continueRequest', { requestId: request.requestId }).catch(() => {}), 1500);
    }
  });
  await new Promise(r => ws.addEventListener('open', r, { once: true }));
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await send('Fetch.enable', { patterns: [{ urlPattern: '*kids-bundle.min.css*', requestStage: 'Request' }] });
  const evl = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result?.value;
  };
  const snapshot = `(() => {
    const header = document.querySelector('.header');
    const menu = document.getElementById('main-menu');
    const hero = document.querySelector('#service-banner-swiper,.v36-hero');
    return {
      ready: document.readyState,
      deferred: !!document.querySelector('link[data-defer-css]'),
      menuVisible: !!(menu && menu.getClientRects().length),
      headerHeight: header ? header.getBoundingClientRect().height : null,
      heroY: hero ? hero.getBoundingClientRect().y : null,
      heroHeight: hero ? hero.getBoundingClientRect().height : null
    };
  })()`;
  await send('Page.navigate', { url });
  let initial;
  for (let i = 0; i < 80; i++) {
    await sleep(50);
    initial = await evl(snapshot);
    if (initial?.deferred && initial.headerHeight !== null && initial.heroY !== null) break;
  }
  let final;
  for (let i = 0; i < 100; i++) {
    await sleep(100);
    final = await evl(snapshot);
    if (final?.ready === 'complete' && !final.deferred) break;
  }
  await sleep(800);
  final = await evl(snapshot);
  const results = [
    ['меню скрыто до клика на первом кадре', initial.menuVisible === false],
    ['высота шапки не меняется после CSS', Math.abs(initial.headerHeight - final.headerHeight) <= 1],
    ['hero не сдвигается по вертикали после CSS', Math.abs(initial.heroY - final.heroY) <= 1],
    ['высота hero не меняется после CSS', Math.abs(initial.heroHeight - final.heroHeight) <= 1]
  ];
  for (const [name, ok] of results) console.log(`${ok ? 'PASS' : 'FAIL'} | ${name}`);
  console.log('initial=' + JSON.stringify(initial));
  console.log('final=' + JSON.stringify(final));
  if (results.some(([, ok]) => !ok)) process.exitCode = 1;
} finally {
  if (ws) ws.close();
  chrome.kill();
}
