// CSS-сплит kids (паттерн детокса/a26): критический слой инлайнится в <head>,
// полный бандл грузится отложенно (media="print" → flip в 'all' на window load).
// Запуск после правки любого исходного CSS:  npm run css:split
// layout.tsx: инлайн = kids-critical.min.css; defer = kids-bundle.min.css?v=… (бампить!).
import { readFileSync, writeFileSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const pub = join(process.cwd(), "public");
const r = (f) => readFileSync(join(pub, f), "utf8");
const banner = (n) => `\n/* ==== ${n} ==== */\n`;

/* ---------------- ПОЛНЫЙ БАНДЛ (отложенный, 1 запрос) ---------------- */
const BUNDLE_SRC = [
  "redesign/tokens.css",
  "fonts/fonts.css",
  "redesign/v36.css",
  "redesign/kids.css",
  "vendor/swiper/swiper-bundle.min.css",
];
const bundle = BUNDLE_SRC.map((f) => banner(f) + r(f)).join("\n");

/* ---------------- КРИТИЧЕСКИЙ CSS (инлайн, первый экран) ---------------- */
function sliceBetween(css, fromMark, toMark, name) {
  const i1 = css.indexOf(fromMark);
  const i2 = toMark ? css.indexOf(toMark) : css.length;
  if (i1 < 0 || (toMark && (i2 < 0 || i2 < i1)))
    throw new Error(`critical: маркеры не найдены (${name})`);
  return css.slice(i1, i2);
}

const v36 = r("redesign/v36.css");
const kids = r("redesign/kids.css");

/* анти-overflow щит + каркас: до догрузки бандла below-fold блоки не рвут ширину */
const SKELETON = `
HTML, BODY { max-width:100%; overflow-x:hidden; }
img { max-width:100%; }
[hidden] { display:none; }
/* swiper-скелет: hero живёт в swiper — без него слайд ломает первый экран */
.swiper{ margin:0 auto; position:relative; overflow:hidden; list-style:none; padding:0; z-index:1 }
.swiper-wrapper{ position:relative; width:100%; height:100%; z-index:1; display:flex; box-sizing:content-box }
.swiper-slide{ position:relative; flex-shrink:0; width:100%; height:100% }
`;

const critical = [
  banner("tokens.css") + r("redesign/tokens.css"),
  banner("fonts.css") + r("fonts/fonts.css"),
  banner("skeleton-shield") + SKELETON,
  banner("kids: база (body/wrapper)") +
    sliceBetween(kids, "/* ---------- база ---------- */", "/* типографика контента", "kids база"),
  banner("kids: логотипы + cookie-баннер") +
    sliceBetween(kids, "/* ---------- логотипы в Core-шелле ---------- */", "ЧАСТЬ 2 — page family", "kids лого/cookie"),
  banner("v36: база..hero") +
    sliceBetween(v36, "/* ---------- база ---------- */", "/* ---------- офферы", "v36 база..hero"),
  banner("v36: hero-адаптив") +
    sliceBetween(v36, "/* ---------- адаптив ---------- */", "/* ---------- полироль", "v36 адаптив"),
  banner("v36: тёмная главная — первый экран") +
    sliceBetween(v36, "body:has(.v36-dark) .v36-world {", "/* секции главной прозрачны", "v36 dark first"),
  banner("v36: мобильная шапка + hero mobile") +
    sliceBetween(v36, "/* ---------- мобильная шапка", "/* ============ итерация 6", "v36 mobile header"),
  banner("kids: логотип kids (кикер)") +
    ".kids-logo{display:flex;align-items:center;gap:14px}.kids-logo-word{display:flex;flex-direction:column;line-height:1;font-family:var(--serif);font-weight:500;font-size:24px;letter-spacing:.14em;color:var(--parch)}.kids-logo-kicker{font-family:var(--sans);font-weight:600;font-size:10px;letter-spacing:.42em;text-transform:uppercase;color:var(--g2);margin-top:5px;padding-left:2px}@media only screen and (max-width:1279px){.kids-logo .kids-logo-word{font-size:19px}.kids-logo .kids-logo-kicker{font-size:8.5px}}",
].join("\n");

/* ---------------- запись + минификация ---------------- */
const tmpB = join(pub, "redesign/.kids-bundle.raw.css");
const tmpC = join(pub, "redesign/.kids-critical.raw.css");
writeFileSync(tmpB, bundle);
writeFileSync(tmpC, critical);
execSync(`npx -y csso-cli -i "${tmpB}" -o "${join(pub, "redesign/kids-bundle.min.css")}"`, { stdio: "inherit" });
execSync(`npx -y csso-cli -i "${tmpC}" -o "${join(pub, "redesign/kids-critical.min.css")}"`, { stdio: "inherit" });
rmSync(tmpB, { force: true });
rmSync(tmpC, { force: true });
console.log(
  "OK → kids-bundle.min.css", statSync(join(pub, "redesign/kids-bundle.min.css")).size, "байт |",
  "kids-critical.min.css", statSync(join(pub, "redesign/kids-critical.min.css")).size, "байт"
);
