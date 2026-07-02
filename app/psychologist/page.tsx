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
                    <span class="breadcrumb-current">Психолог</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Психолог</h1>
                        <p class="service-description">
                            Психологическое консультирование и коррекция поведения у детей. Помощь в решении эмоциональных проблем, трудностей в обучении и социальной адаптации.
                        </p>
                        <a href="tel:+79886271777" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Детская психология — помощь в развитии</h2>
                    <p class="service-text">
                        Детский психолог помогает ребенку справиться с эмоциональными трудностями, проблемами в поведении, 
                        трудностями в обучении и общении. Мы работаем с детьми всех возрастов — от дошкольников до подростков.
                    </p>
                    <p class="service-text">
                        Наши детские психологи используют игровые методы, арт-терапию, песочную терапию и другие подходы, 
                        подходящие для работы с детьми. Мы создаем безопасную и комфортную обстановку, где ребенок может 
                        выразить свои чувства и переживания, а родители получают поддержку и рекомендации.
                    </p>
                    <p class="service-text">
                        Мы работаем не только с детьми, но и с родителями, помогая понять причины проблем и найти 
                        оптимальные способы их решения. Семейное консультирование является важной частью нашей работы, 
                        так как проблемы ребенка часто связаны с семейными отношениями.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления детской психологии</h2>
                    <p class="service-text">
                        Наши психологи помогают решить следующие проблемы:
                    </p>
                    <ul class="service-list">
                        <li>Тревожность и страхи у детей</li>
                        <li>Агрессивное поведение и конфликты</li>
                        <li>Трудности в обучении и концентрации внимания</li>
                        <li>Проблемы адаптации в детском саду и школе</li>
                        <li>Эмоциональные проблемы и перепады настроения</li>
                        <li>Трудности в общении со сверстниками</li>
                        <li>Работа с последствиями стресса и травм</li>
                        <li>Поддержка при разводе родителей и других кризисных ситуациях</li>
                        <li>Работа с детьми с особенностями развития</li>
                        <li>Консультирование родителей по вопросам воспитания</li>
                    </ul>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/puchkova.jpg" alt="Пучкова Анастасия Андреевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Пучкова Анастасия Андреевна</h3>
                            <p class="specialist-title">Клинический психолог, психолог</p>
                            <p class="specialist-experience">Стаж 6 лет</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
`;

export const metadata: Metadata = {
  title: "Психолог - Частная детская клиника \"Амадея Кидс\"",
  description: "Детский психолог в Ставрополе — клиника «Амадея Кидс». Помощь при тревожности, поведенческих трудностях, проблемах адаптации. Консультация для детей и родителей. Запись: +7 (988) 627-17-77.",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/psychologist/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Психолог - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/psychologist",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function PsychologistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/psychologist/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/psychologist/", "name": "Психолог"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/psychologist/#webpage", "url": "https://amadeyakids.ru/psychologist/", "name": "Психолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:18+00:00", "dateModified": "2025-11-22T10:12:18+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/psychologist/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/", "url": "https://amadeyakids.ru/author/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Психолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:18+00:00", "dateModified": "2025-11-22T10:12:18+00:00", "author": {"@id": "https://amadeyakids.ru/author/"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Психолог - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/psychologist/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/psychologist/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/psychologist/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Психолог", "item": "https://amadeyakids.ru/psychologist/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalService", "name": "Психолог", "description": "", "areaServed": "Ставрополь", "availableChannel": {"@type": "ServiceChannel", "serviceUrl": "https://amadeyakids.ru/psychologist/"}, "provider": {"@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}}}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
