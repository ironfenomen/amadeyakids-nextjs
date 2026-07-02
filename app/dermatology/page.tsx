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
                    <span class="breadcrumb-current">Дерматолог</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Дерматолог</h1>
                        <p class="service-description">Диагностика и лечение кожных заболеваний у детей. 
                        Бережный подход к детской коже, современные методики лечения.</p>
                        <a href="tel:+79886271777" class="service-call-button">Позвонить</a>
                    </div>
                   
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Забота о детской коже</h2>
                    <p class="service-text">
                        Детская дерматология требует особого подхода, так как кожа ребенка более чувствительна и требует 
                        бережного обращения. Наши детские дерматологи имеют большой опыт работы с маленькими пациентами 
                        и используют щадящие методы диагностики и лечения.
                    </p>
                    <p class="service-text">
                        Мы проводим диагностику и лечение различных кожных заболеваний у детей: атопический дерматит, 
                        диатезы, потница, кожные инфекции, аллергические реакции, вирусные заболевания кожи и другие проблемы. 
                        Особое внимание уделяем профилактике кожных заболеваний и правильному уходу за детской кожей.
                    </p>
                    <p class="service-text">
                        Наши специалисты разрабатывают индивидуальные схемы лечения, учитывающие возраст ребенка, 
                        особенности его кожи и сопутствующие заболевания. Мы обеспечиваем комфортную обстановку для 
                        маленьких пациентов и их родителей, объясняя все процедуры доступным языком.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления детской дерматологии</h2>
                    <p class="service-text">
                        Наши дерматологи работают с различными кожными проблемами у детей:
                    </p>
                    <ul class="service-list">
                        <li>Атопический дерматит и экзема</li>
                        <li>Диатезы и аллергические высыпания</li>
                        <li>Потница и опрелости</li>
                        <li>Бактериальные и грибковые инфекции кожи</li>
                        <li>Вирусные заболевания (бородавки, контагиозный моллюск)</li>
                        <li>Педикулез и другие паразитарные заболевания</li>
                        <li>Проблемы с ногтями у детей</li>
                        <li>Родимые пятна и гемангиомы</li>
                        <li>Рекомендации по уходу за детской кожей</li>
                        <li>Профилактика кожных заболеваний</li>
                    </ul>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <!-- Специалист (существующий) -->
                    <div class="specialist-card">
                        <div class="specialist-image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/fomenko.jpg" alt="Фоменко Оксана Анатольевна " class="specialist-photo">
                    </div>
                    <div class="specialist-info">
                        <h3 class="specialist-name">Фоменко Оксана Анатольевна </h3>
                        <p class="specialist-title">Дерматолог, венеролог</p>
                        <p class="specialist-experience">Стаж 21 год</p>
                    </div>
                </div>
            </aside>
        </div>
    </div>
`;

export const metadata: Metadata = {
  title: "Дерматолог - Частная детская клиника \"Амадея Кидс\"",
  description: "Детский дерматолог в Ставрополе — клиника «Амадея Кидс». Диагностика и лечение атопического дерматита, экземы, аллергических высыпаний. Запись: +7 (988) 627-17-77.",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/dermatology/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Дерматолог - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/dermatology",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function DermatologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/dermatology/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/dermatology/", "name": "Дерматолог"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/dermatology/#webpage", "url": "https://amadeyakids.ru/dermatology/", "name": "Дерматолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:19+00:00", "dateModified": "2025-11-22T10:12:19+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/dermatology/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Дерматолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:19+00:00", "dateModified": "2025-11-22T10:12:19+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Дерматолог - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/dermatology/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/dermatology/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/dermatology/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Дерматолог", "item": "https://amadeyakids.ru/dermatology/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalService", "name": "Дерматолог", "description": "", "areaServed": "Ставрополь", "availableChannel": {"@type": "ServiceChannel", "serviceUrl": "https://amadeyakids.ru/dermatology/"}, "provider": {"@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}}}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
