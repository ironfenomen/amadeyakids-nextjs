/* Мобильный первый экран статичен: один фон, ноль CSS-анимаций и cookie без переезда/задержки. */
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
import { spawn } from 'child_process';
const url = process.argv[2] || 'https://amadeya26.ru/';
const port = 9500 + (process.pid % 300);
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
  ws = new WebSocket(pages.find(t => t.type === 'page').webSocketDebuggerUrl);
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
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
  await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  await send('Fetch.enable', { patterns: [{ urlPattern: '*bundle.min.css*', requestStage: 'Request' }] });
  const evl = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result?.value;
  };
  await send('Page.navigate', { url });
  let earlyModal;
  for (let i = 0; i < 100; i++) {
    await sleep(50);
    earlyModal = await evl(`(() => {
      const modal = document.querySelector('.modal-overlay');
      if (!modal || !document.querySelector('link[data-defer-css]')) return null;
      const style = getComputedStyle(modal);
      return { display: style.display, visibility: style.visibility, opacity: style.opacity };
    })()`);
    if (earlyModal || await evl(`document.readyState==='complete'`)) break;
  }
  for (let i = 0; i < 100; i++) {
    await sleep(50);
    if (await evl(`document.readyState==='complete'&&!!document.querySelector('.v36-hero')`)) break;
  }
  await sleep(100);
  const state = await evl(`(() => {
    const hero = document.querySelector('.v36-hero');
    const warm = document.querySelector('.h36-warm');
    const cookie = document.querySelector('.cookie-consent,.cookies-notice-container');
    const bundle = [...document.querySelectorAll('link[rel=stylesheet]')].find(l => /bundle\.min\.css/.test(l.href));
    return {
      warmVisible: !!(warm && warm.getClientRects().length),
      heroLayerOk: !warm || !!(warm && warm.getClientRects().length),
      running: hero ? hero.getAnimations({subtree:true}).filter(a=>a.playState==='running').map(a=>a.animationName) : ['no-hero'],
      cookieDuration: cookie ? getComputedStyle(cookie).transitionDuration : 'missing',
      cookieVisible: cookie ? cookie.classList.contains('cookie-consent--visible')||cookie.classList.contains('is-show') : false,
      cssBlocking: !!bundle && (!bundle.media || bundle.media === 'all') && bundle.parentElement.tagName === 'HEAD' && !bundle.hasAttribute('data-defer-css')
    };
  })()`);
  const results = [
    ['штатная структура hero: два слоя там, где есть маска', state.heroLayerOk],
    ['полный CSS загружается в head до первой отрисовки', state.cssBlocking],
    ['мобильный hero без CSS-анимаций', state.running.length === 0],
    ['cookie без анимации переезда', state.cookieDuration.split(',').every(x => parseFloat(x) === 0)],
    ['cookie виден сразу после load, без отдельного таймера', state.cookieVisible],
    ['попап скрыт до явного открытия, включая ранний кадр', !earlyModal || earlyModal.display === 'none' || earlyModal.visibility === 'hidden' || earlyModal.opacity === '0']
  ];
  for (const [name, ok] of results) console.log(`${ok ? 'PASS' : 'FAIL'} | ${name}`);
  console.log(JSON.stringify({ ...state, earlyModal }));
  if (results.some(([, ok]) => !ok)) process.exitCode = 1;
} finally {
  if (ws) ws.close();
  chrome.kill();
}
