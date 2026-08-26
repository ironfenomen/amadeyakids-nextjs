import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { readFileSync } from "fs";
import path from "path";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { V36_SITE } from "@/lib/site.config";

/* world.js — AMADEYA WEB CORE (canonical: amadeya-web-core/js/world.js).
   Sync-копия: public/redesign/core/world.js (не редактировать; check-core — drift-гейт).
   Site-данные: V36_SITE (lib/site.config.ts) → window.__V36_SITE__ до исполнения. */
const WORLD_JS = readFileSync(
  path.join(process.cwd(), "public/redesign/core/world.js"),
  "utf8"
);

/* CSS-СПЛИТ (паттерн детокса/a26): критический слой первого экрана инлайнится
   в <head>, полный бандл отложен — media="print" → flip в 'all' на window load.
   Источник: scripts/build-css-split.mjs — после правки любого CSS:
   npm run css:split и бамп ?v= у kids-bundle.min.css ниже. */
const CRITICAL_CSS = readFileSync(
  path.join(process.cwd(), "public/redesign/kids-critical.min.css"),
  "utf8"
);

export const metadata: Metadata = {
  title: 'Частная детская  клиника "Амадея Кидс"',
  metadataBase: new URL("https://amadeyakids.ru"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* Тема JS (site-owned): модалка заявки → Telegram (/api/lead), MedFlex,
   cookie-consent, specialist-list. Бургер — ov-lite.js (vanilla),
   меню — world.js (Core, v2.1). */
const THEME_JS = [
  "/redesign/ov-lite.js",
  "/vendor/swiper/swiper-bundle.min.js?ver=11.2.10",
  "/wp-content/themes/amadeya-kids-redesign/assets/js/cookie-consent.js?ver=1.0.1",
  "/wp-content/themes/amadeya-kids-redesign/assets/js/modal-form.js?ver=1.0.2",
  "/wp-content/themes/amadeya-kids-redesign/assets/js/medflex-integration.js?ver=1.0.1",
  "/wp-content/themes/amadeya-kids-redesign/assets/js/specialist-list.js?ver=1.0.0",
];

/* Swiper-иниты главной в Core-грамматике (#people-swiper/#reviews-swiper) + flip
   отложенного CSS + появление плавающего WhatsApp после 400px (паттерн a26/детокс). */
const INIT_HOME = `(function(){var dl=document.querySelectorAll('link[data-defer-css]');function flipCss(){for(var i=0;i<dl.length;i++){dl[i].media='all';dl[i].removeAttribute('data-defer-css');}}if(document.readyState==='complete')flipCss();else window.addEventListener('load',flipCss);var tries=0;function init(){try{if(!window.Swiper){if(++tries<40)return setTimeout(init,150);}var pe=document.getElementById('people-swiper');if(pe&&!pe.classList.contains('swiper-initialized'))new Swiper('#people-swiper',{slidesPerView:'auto',loop:true,navigation:{nextEl:'.vrachi-button-next',prevEl:'.vrachi-button-prev'},breakpoints:{1280:{slidesPerView:4}}});var re=document.getElementById('reviews-swiper');if(re&&!re.classList.contains('swiper-initialized'))new Swiper('#reviews-swiper',{slidesPerView:'auto',loop:false,navigation:{prevEl:'.reviews-button-prev',nextEl:'.reviews-button-next'},breakpoints:{1280:{spaceBetween:-30,slidesPerView:2}}});}catch(e){}try{function wtShow(){var s=window.pageYOffset||document.documentElement.scrollTop;var el=document.querySelector('.fixed-whatsapp');if(!el)return;if(s>400)el.classList.add('is-show');else el.classList.remove('is-show');}window.addEventListener('scroll',wtShow,{passive:true});wtShow();}catch(e){}}if(document.readyState!=='loading')init();else document.addEventListener('DOMContentLoaded',init);})();`;

/* Я.Метрика 101957611 — точный код счётчика; tag.js отложен (первый жест или idle 4с),
   события до загрузки копятся в очереди ym.a (паттерн детокса/a26). */
const METRIKA_BLOCK = `<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        m.__ymLoad=function(){
            if(m.__ymLoading)return; m.__ymLoading=1;
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        };
        ['pointerdown','keydown','touchstart','scroll'].forEach(function(ev){
            window.addEventListener(ev, m.__ymLoad, {once:true, passive:true});
        });
        if('requestIdleCallback' in window){ requestIdleCallback(m.__ymLoad, {timeout:4000}); }
        else { setTimeout(m.__ymLoad, 4000); }
    })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
    ym(101957611,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/101957611" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru-RU">
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://booking.medflex.ru" />
        <link rel="dns-prefetch" href="https://yandex.ru" />
        {/* self-host шрифтов Web Core: Playfair Display + Golos Text (/fonts, sync из amadeya-web-core) */}
        <link rel="preload" href="/fonts/playfair-display-500-cyrillic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/golos-text-400-cyrillic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* CSS-порядок = каскад: токены Core → шрифты Core → Core (v36) → site-слой kids → swiper.
             Инлайнится ТОЛЬКО критический слой первого экрана; полный бандл отложен в <body> */}
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
      </head>
      <body>
        {/* Полный CSS-бандл — ОТЛОЖЕН (паттерн детокса/a26): первый экран рисует
            инлайн-critical из <head>, бандл догружает below-fold после load.
            ?v= бампить при каждой пересборке (npm run css:split). */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/redesign/kids-bundle.min.css?v=20260827a" media="print" data-defer-css="1" />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" href="/redesign/kids-bundle.min.css?v=20260827a" />
        </noscript>
        <noscript><div><img src="https://mc.yandex.ru/watch/101957611" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>

        <div className="__wrapper">
          <div className="__stretch">
            <main>
              <Header />
              {/* все страницы — тёмный регистр AM-WEB-DARK-01. .page — ТОЛЬКО у внутренних
                  страниц (route group (inner)/layout.tsx); главная без .page, как канон */}
              <div className="v36-dark">
                {children}
              </div>
            </main>
          </div>
          <Footer />
        </div>

        {/* redesign/v36: «мир»-фон — знак, свечение, зерно (все страницы) */}
        <div className="v36-world" aria-hidden="true">
          <div className="v36-world-glow" id="v36Glow" />
          <div className="v36-world-mark" id="v36Mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/redesign/mark.webp" width="488" height="485" alt="" />
          </div>
        </div>
        <div className="v36-grain" aria-hidden="true" />

        {/* MedFlex: round-виджет записи (KEEP AS KIDS OVERRIDE) + интеграция триггеров
            (medflex-integration.js в THEME_JS; фикс dc6ebef) */}
        <script defer src="https://booking.medflex.ru/components/round/round_widget_button.js" charSet="utf-8" />

        {/* Плавающий WhatsApp (паттерн детокса/a26): lottie-анимация wt.json на idle,
            появление после 400px скролла — wtShow в INIT_HOME; номер kids */}
        <a href="https://wa.me/+79886271777" target="_blank" rel="noopener" className="fixed-whatsapp" id="whatsapp-icon" aria-label="Написать в WhatsApp"></a>

        {/* THEME_JS — обычные defer-скрипты (не next/script): сохраняют порядок и не
             порождают preload-подсказки, отбирающие полосу у hero-фото (опыт a26). */}
        {THEME_JS.map((src) => (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script key={src} src={src} defer />
        ))}
        {/* Lottie для WhatsApp-виджета — на idle, как на каноне (262KB не на критическом пути) */}
        <Script id="wa-lottie" strategy="afterInteractive">
          {`(function(){function load(){if(window.__lottieLoaded)return;window.__lottieLoaded=1;var s=document.createElement('script');s.src='/template/amadeya/js/lottie.js';s.onload=function(){try{var el=document.getElementById('whatsapp-icon');if(window.bodymovin&&el)bodymovin.loadAnimation({container:el,path:'/images/wt.json',renderer:'svg',loop:true,autoplay:true});}catch(e){}};document.body.appendChild(s);}if('requestIdleCallback'in window){requestIdleCallback(load,{timeout:4000});}else{setTimeout(load,3000);}})();`}
        </Script>

        <Script id="v36-site-config" strategy="afterInteractive">
          {`window.__V36_SITE__=${JSON.stringify(V36_SITE)};`}
        </Script>
        <Script id="v36-world" strategy="afterInteractive">
          {WORLD_JS}
        </Script>
        {/* Ленивая загрузка iframe-карт (data-src → src при приближении к вьюпорту) */}
        <Script id="iframe-lazy" strategy="afterInteractive">
          {`(function(){var ifr=document.querySelectorAll('iframe[data-src]');if(!ifr.length)return;function go(el){if(el.dataset.src){el.src=el.dataset.src;el.removeAttribute('data-src');}}if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){go(e.target);io.unobserve(e.target);}});},{rootMargin:'300px'});ifr.forEach(function(e){io.observe(e);});}else{ifr.forEach(go);}})();`}
        </Script>
        {/* Swiper-иниты главной в грамматике Core. Охранены наличием элемента — на остальных страницах no-op. */}
        <Script id="v36-home-init" strategy="afterInteractive">
          {INIT_HOME}
        </Script>
        <script type="speculationrules" dangerouslySetInnerHTML={{ __html: `{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"\\\\/*"},{"not":{"href_matches":["\\\\/wp-*.php","\\\\/wp-admin\\\\/*","\\\\/wp-content\\\\/*","\\\\/*\\\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\\"nofollow\\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}` }} />
        <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: METRIKA_BLOCK }} />
      </body>
    </html>
  );
}
