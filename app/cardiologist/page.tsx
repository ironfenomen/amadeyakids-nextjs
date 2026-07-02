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
                    <span class="breadcrumb-current">Кардиолог</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Кардиолог</h1>
                        <p class="service-description">
                            Диагностика и лечение заболеваний сердечно-сосудистой системы у детей. Современные методы обследования и индивидуальный подход к каждому пациенту.
                        </p>
                        <a href="tel:+79886271777" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Забота о детском сердце</h2>
                    <p class="service-text">
                        Детская кардиология — это специализированная область медицины, занимающаяся диагностикой и лечением заболеваний сердца и сосудов у детей. Наши детские кардиологи имеют большой опыт работы с маленькими пациентами и используют современные методы диагностики.
                    </p>
                    <p class="service-text">
                        Мы проводим комплексное обследование сердечно-сосудистой системы, включая ЭКГ, ЭхоКГ, холтеровское мониторирование. Особое внимание уделяем раннему выявлению врожденных пороков сердца, нарушений ритма, артериальной гипертензии и других патологий.
                    </p>
                    <p class="service-text">
                        Наши специалисты работают с детьми всех возрастов — от новорожденных до подростков. Мы обеспечиваем бережный и комфортный подход к обследованию, учитывая особенности детского возраста и необходимость создания спокойной обстановки для маленьких пациентов.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления детской кардиологии</h2>
                    <p class="service-text">
                        Наши кардиологи специализируются на следующих направлениях:
                    </p>
                    <ul class="service-list">
                        <li>Диагностика и лечение врожденных пороков сердца</li>
                        <li>Нарушения сердечного ритма у детей</li>
                        <li>Артериальная гипертензия у детей и подростков</li>
                        <li>Воспалительные заболевания сердца (миокардиты, перикардиты)</li>
                        <li>Кардиомиопатии</li>
                        <li>Функциональные нарушения работы сердца</li>
                        <li>Профилактика сердечно-сосудистых заболеваний</li>
                        <li>Наблюдение после операций на сердце</li>
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
  title: "Кардиолог - Частная детская клиника \"Амадея Кидс\"",
  description: "Детский кардиолог в Ставрополе — клиника «Амадея Кидс». ЭКГ, ЭхоКГ, диагностика пороков и нарушений ритма у детей всех возрастов. Запись: +7 (988) 627-17-77.",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/cardiologist/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Кардиолог - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/cardiologist",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function CardiologistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/cardiologist/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/cardiologist/", "name": "Кардиолог"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/cardiologist/#webpage", "url": "https://amadeyakids.ru/cardiologist/", "name": "Кардиолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:17+00:00", "dateModified": "2025-11-22T10:12:17+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/cardiologist/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Кардиолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:17+00:00", "dateModified": "2025-11-22T10:12:17+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Кардиолог - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/cardiologist/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/cardiologist/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/cardiologist/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Кардиолог", "item": "https://amadeyakids.ru/cardiologist/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalService", "name": "Кардиолог", "description": "", "areaServed": "Ставрополь", "availableChannel": {"@type": "ServiceChannel", "serviceUrl": "https://amadeyakids.ru/cardiologist/"}, "provider": {"@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}}}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
