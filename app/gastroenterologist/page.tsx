import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `
    <div class="container">
        <div class="service-layout">
            <div class="service-main">
                <nav class="breadcrumbs">
                    <a href="/">Главная</a>
                    <span class="breadcrumb-separator">/</span>
                    <a href="/services/">Медицинские услуги</a>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-current">Гастроэнтеролог</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Гастроэнтеролог</h1>
                        <p class="service-description">
                            Диагностика и лечение заболеваний желудочно-кишечного тракта у детей. Бережный подход к здоровью пищеварительной системы ребенка.
                        </p>
                        <a href="tel:+79886271777" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Здоровье пищеварительной системы ребенка</h2>
                    <p class="service-text">
                        Детская гастроэнтерология — это специализация, занимающаяся диагностикой и лечением заболеваний органов пищеварения у детей. Проблемы с пищеварением у детей требуют особого внимания и своевременной диагностики.
                    </p>
                    <p class="service-text">
                        Наши детские гастроэнтерологи проводят комплексное обследование желудочно-кишечного тракта, используя современные методы диагностики: УЗИ органов брюшной полости, лабораторные анализы, при необходимости — эндоскопические исследования. Мы работаем с широким спектром заболеваний: гастриты, язвенная болезнь, заболевания кишечника, гепатиты, панкреатиты и другие патологии.
                    </p>
                    <p class="service-text">
                        Особое внимание мы уделяем правильному питанию детей, коррекции рациона при различных заболеваниях ЖКТ и профилактике проблем с пищеварением. Наши специалисты разрабатывают индивидуальные схемы лечения, учитывающие возраст ребенка, особенности его развития и специфику заболевания.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления детской гастроэнтерологии</h2>
                    <p class="service-text">
                        Наши гастроэнтерологи специализируются на следующих проблемах:
                    </p>
                    <ul class="service-list">
                        <li>Гастриты и гастродуодениты</li>
                        <li>Язвенная болезнь желудка и двенадцатиперстной кишки</li>
                        <li>Заболевания кишечника (колиты, энтериты)</li>
                        <li>Запоры и диарея у детей</li>
                        <li>Синдром раздраженного кишечника</li>
                        <li>Заболевания печени и желчного пузыря</li>
                        <li>Панкреатиты</li>
                        <li>Пищевые аллергии и непереносимости</li>
                        <li>Коррекция питания при заболеваниях ЖКТ</li>
                    </ul>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалисты будут добавлены позже -->
                </div>
            </aside>
        </div>
    </div>
`;

export const metadata: Metadata = {
  title: "Гастроэнтеролог - Частная детская клиника \"Амадея Кидс\"",
  description: "",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/gastroenterologist/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Гастроэнтеролог - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/gastroenterologist",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function GastroenterologistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/gastroenterologist/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/gastroenterologist/", "name": "Гастроэнтеролог"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/gastroenterologist/#webpage", "url": "https://amadeyakids.ru/gastroenterologist/", "name": "Гастроэнтеролог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:18+00:00", "dateModified": "2025-11-22T10:12:18+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/gastroenterologist/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Гастроэнтеролог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:18+00:00", "dateModified": "2025-11-22T10:12:18+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Гастроэнтеролог - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/gastroenterologist/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/gastroenterologist/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/gastroenterologist/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Гастроэнтеролог", "item": "https://amadeyakids.ru/gastroenterologist/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalService", "name": "Гастроэнтеролог", "description": "", "areaServed": "Ставрополь", "availableChannel": {"@type": "ServiceChannel", "serviceUrl": "https://amadeyakids.ru/gastroenterologist/"}, "provider": {"@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}}}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
