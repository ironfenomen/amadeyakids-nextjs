import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Частная детская  клиника \"Амадея Кидс\"",
  description: "Частная детская клиника Амадея Кидс в Ставрополе",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru-RU">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="/wp-content/themes/amadeya-kids-redesign/assets/css/styles.css" />
        <link rel="stylesheet" href="/wp-content/plugins/cookie-notice/css/front.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/amadeya-kids-redesign/assets/css/swiper-bundle.min.css" />
        {/* Yandex Metrika counter 101957611 */}
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
          ym(101957611,'init',{webvisor:true,clickmap:true,accurateTrackBounce:true,trackLinks:true});
        ` }} />
      </head>
      <body className="wp-singular page-template-default page page-id-213 wp-custom-logo wp-embed-responsive wp-theme-twentytwentyfour wp-child-theme-amadeya-kids-redesign cookies-not-set">
        <noscript><img src="https://mc.yandex.ru/watch/101957611" style={{position:'absolute',left:'-9999px'}} alt="" /></noscript>
        {children}
        <Script src="/wp-content/themes/amadeya-kids-redesign/assets/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/amadeya-kids-redesign/assets/js/header.js" strategy="afterInteractive" />
        <Script src="/wp-content/themes/amadeya-kids-redesign/assets/js/mobile-menu.js" strategy="afterInteractive" />
        <Script src="/wp-content/themes/amadeya-kids-redesign/assets/js/cookie-consent.js" strategy="afterInteractive" />
        <Script src="/wp-content/themes/amadeya-kids-redesign/assets/js/modal-form.js" strategy="afterInteractive" />
        <Script src="/wp-content/themes/amadeya-kids-redesign/assets/js/carousel.js" strategy="afterInteractive" />
        <Script src="/wp-content/themes/amadeya-kids-redesign/assets/js/carousel-booking.js" strategy="afterInteractive" />
        <Script src="/wp-content/themes/amadeya-kids-redesign/assets/js/specialist-list.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
