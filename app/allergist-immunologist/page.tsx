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
                    <span class="breadcrumb-current">Аллерголог-иммунолог</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Аллерголог-иммунолог</h1>
                        <p class="service-description">
                            Диагностика и лечение аллергических заболеваний у детей, укрепление иммунитета. Современные методы выявления аллергенов и эффективное лечение.
                        </p>
                        <a href="tel:+79886271777" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Помощь при аллергии и укрепление иммунитета</h2>
                    <p class="service-text">
                        Детская аллергология-иммунология — это специализация, направленная на диагностику и лечение аллергических заболеваний у детей, а также коррекцию нарушений иммунной системы. Аллергические реакции у детей требуют особого внимания и индивидуального подхода.
                    </p>
                    <p class="service-text">
                        Наши специалисты проводят комплексное обследование для выявления причин аллергии: кожные пробы, анализ крови на специфические иммуноглобулины, провокационные тесты. Мы разрабатываем индивидуальные схемы лечения, включающие медикаментозную терапию, аллерген-специфическую иммунотерапию (АСИТ) и рекомендации по образу жизни.
                    </p>
                    <p class="service-text">
                        Особое внимание мы уделяем профилактике аллергических заболеваний, обучению родителей правильному уходу за ребенком-аллергиком и созданию гипоаллергенной среды. Мы также помогаем укрепить иммунитет ребенка и предотвратить частые простудные заболевания.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления работы</h2>
                    <p class="service-text">
                        Наши аллергологи-иммунологи работают с различными аллергическими состояниями:
                    </p>
                    <ul class="service-list">
                        <li>Атопический дерматит и экзема</li>
                        <li>Бронхиальная астма у детей</li>
                        <li>Аллергический ринит и конъюнктивит</li>
                        <li>Пищевая аллергия</li>
                        <li>Крапивница и ангиоотеки</li>
                        <li>Лекарственная аллергия</li>
                        <li>Иммунодефицитные состояния</li>
                        <li>Частые простудные заболевания</li>
                        <li>Аллерген-специфическая иммунотерапия (АСИТ)</li>
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
  title: "Аллерголог-иммунолог - Частная детская клиника \"Амадея Кидс\"",
  description: "",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/allergist-immunologist/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Аллерголог-иммунолог - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/allergist-immunologist",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function AllergistImmunologistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/allergist-immunologist/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/allergist-immunologist/", "name": "Аллерголог-иммунолог"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/allergist-immunologist/#webpage", "url": "https://amadeyakids.ru/allergist-immunologist/", "name": "Аллерголог-иммунолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:17+00:00", "dateModified": "2025-11-22T10:12:17+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/allergist-immunologist/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/", "url": "https://amadeyakids.ru/author/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Аллерголог-иммунолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:17+00:00", "dateModified": "2025-11-22T10:12:17+00:00", "author": {"@id": "https://amadeyakids.ru/author/"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Аллерголог-иммунолог - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/allergist-immunologist/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/allergist-immunologist/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/allergist-immunologist/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Аллерголог-иммунолог", "item": "https://amadeyakids.ru/allergist-immunologist/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalService", "name": "Аллерголог-иммунолог", "description": "", "areaServed": "Ставрополь", "availableChannel": {"@type": "ServiceChannel", "serviceUrl": "https://amadeyakids.ru/allergist-immunologist/"}, "provider": {"@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}}}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
