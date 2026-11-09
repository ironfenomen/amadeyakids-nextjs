/* На таче граница hero неподвижна без жеста; ручной drag продолжает работать. */
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
import { spawn } from 'child_process';
const url = process.argv[2] || 'https://amadeya26.ru/';
const port = 9700 + (process.pid % 200);
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
    if (!data.id || !pending.has(data.id)) return;
    const { resolve, reject } = pending.get(data.id);
    pending.delete(data.id);
    data.error ? reject(data.error) : resolve(data.result);
  });
  await new Promise(r => ws.addEventListener('open', r, { once: true }));
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
  await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  const evl = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result?.value;
  };
  await send('Page.navigate', { url });
  await sleep(1000);
  const singleLayer = await evl(`!!document.querySelector('.v36-hero')&&!document.querySelector('.h36-stage')`);
  if (singleLayer) {
    console.log('PASS | однослойный hero: автодвижущейся границы нет');
  } else {
    let ready = false;
    for (let i = 0; i < 60; i++) {
      await sleep(100);
      ready = await evl(`!!document.querySelector('.h36-stage .h36-warm')?.style.getPropertyValue('--x')`);
      if (ready) break;
    }
    if (!ready) throw new Error('hero не инициализировался');
    const coarse = await evl(`matchMedia('(pointer: coarse)').matches`);
    const samples = [];
    for (let i = 0; i < 14; i++) {
      await sleep(500);
      samples.push(await evl(`parseFloat(document.querySelector('.h36-stage .h36-warm').style.getPropertyValue('--x'))`));
    }
    const min = Math.min(...samples), max = Math.max(...samples);
    const stable = max - min <= 0.02;
    console.log(`${coarse ? 'PASS' : 'FAIL'} | touch viewport: pointer=coarse`);
    console.log(`${stable ? 'PASS' : 'FAIL'} | без жеста граница неподвижна 7с | min=${min}% max=${max}% delta=${(max - min).toFixed(2)}%`);
    const beforeDrag = samples[samples.length - 1];
    await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 100, y: 400 }] });
    for (let x = 110; x <= 200; x += 10) {
      await send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: 400 }] });
      await sleep(20);
    }
    await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await sleep(300);
    const afterDrag = await evl(`parseFloat(document.querySelector('.h36-stage .h36-warm').style.getPropertyValue('--x'))`);
    const dragOk = Math.abs(afterDrag - beforeDrag) > 5;
    console.log(`${dragOk ? 'PASS' : 'FAIL'} | ручной drag меняет границу | ${beforeDrag}% → ${afterDrag}%`);
    if (!coarse || !stable || !dragOk) process.exitCode = 1;
  }
} finally {
  if (ws) ws.close();
  chrome.kill();
}
