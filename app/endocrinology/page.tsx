import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `
    <div class="container">
        <div class="service-layout">
            <!-- Основной контент -->
            <div class="service-main">
                <!-- Хлебные крошки -->
                <nav class="breadcrumbs">
                    <a href="/">Главная</a>
                    <span class="breadcrumb-separator">/</span>
                    <a href="/services/">Медицинские услуги</a>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-current">Эндокринолог</span>
                </nav>

                <!-- Заголовок услуги -->
                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Эндокринолог</h1>
                        <p class="service-description">
                            Диагностика и лечение заболеваний эндокринной системы у детей. Наблюдение за ростом и развитием ребенка, 
                            коррекция гормональных нарушений, помощь при сахарном диабете и других эндокринных патологиях.
                        </p>
                        <a href="tel:+79886271777" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <!-- Почему выбирают -->
                <section class="service-why">
                    <h2 class="service-section-title">Детская эндокринология — забота о росте и развитии</h2>
                    <p class="service-text">
                        Детская эндокринология — это специализация, занимающаяся диагностикой и лечением заболеваний 
                        эндокринной системы у детей. Гормональные нарушения у детей могут влиять на рост, развитие, 
                        обмен веществ и общее здоровье ребенка, поэтому требуют особого внимания.
                    </p>
                    <p class="service-text">
                        Наши детские эндокринологи проводят комплексную диагностику, используя современные методы 
                        лабораторных и инструментальных исследований. Мы работаем с различными проблемами: нарушения роста, 
                        проблемы с весом, сахарный диабет, заболевания щитовидной железы, нарушения полового развития, 
                        проблемы с надпочечниками и другие эндокринные патологии.
                    </p>
                    <p class="service-text">
                        Особое внимание мы уделяем наблюдению за ростом и развитием ребенка, раннему выявлению проблем 
                        и их коррекции. Наши специалисты работают не только с детьми, но и с родителями, объясняя 
                        особенности заболевания и обучая правильному уходу и контролю.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <!-- Индивидуальный план -->
                <section class="service-individual">
                    <h2 class="service-section-title">Направления детской эндокринологии</h2>
                    <p class="service-text">
                        Наши эндокринологи помогают решить следующие проблемы:
                    </p>
                    <ul class="service-list">
                        <li>Нарушения роста (низкорослость, высокорослость)</li>
                        <li>Проблемы с весом (ожирение, недостаток веса)</li>
                        <li>Сахарный диабет 1 и 2 типа у детей</li>
                        <li>Заболевания щитовидной железы (гипотиреоз, гипертиреоз)</li>
                        <li>Нарушения полового развития (раннее или задержка)</li>
                        <li>Заболевания надпочечников</li>
                        <li>Проблемы с кальциевым обменом</li>
                        <li>Метаболический синдром</li>
                        <li>Наблюдение за развитием ребенка</li>
                    </ul>
                    <button type="button" class="service-booking-button booking-medflex" id="medflex-booking-service-2">Записаться на приём</button>
                </section>
            </div>

            <!-- Боковая панель -->
            <aside class="service-sidebar">
                <div class="specialist-list">
                    <div class="specialist-card">
                        <div class="specialist-image">
                            <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/grigoriadis.jpg" alt="Григориадис Лариса Феодосиевна" class="specialist-photo">
                        </div>
                        <div class="specialist-info">
                            <h3 class="specialist-name">Григориадис Лариса Феодосиевна</h3>
                            <p class="specialist-title">Детский эндокринолог</p>
                            <p class="specialist-experience">Стаж 11 лет</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
`;

export const metadata: Metadata = {
  title: "Эндокринолог - Частная детская клиника \"Амадея Кидс\"",
  description: "Детский эндокринолог в Ставрополе — клиника «Амадея Кидс». Диагностика нарушений роста, сахарного диабета, болезней щитовидной железы. Запись: +7 (988) 627-17-77.",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/endocrinology/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Эндокринолог - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/endocrinology",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function EndocrinologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/endocrinology/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/endocrinology/", "name": "Эндокринолог"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/endocrinology/#webpage", "url": "https://amadeyakids.ru/endocrinology/", "name": "Эндокринолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:18+00:00", "dateModified": "2025-11-22T10:12:18+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/endocrinology/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Эндокринолог - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:18+00:00", "dateModified": "2025-11-22T10:12:18+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Эндокринолог - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/endocrinology/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/endocrinology/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/endocrinology/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Эндокринолог", "item": "https://amadeyakids.ru/endocrinology/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalService", "name": "Эндокринолог", "description": "", "areaServed": "Ставрополь", "availableChannel": {"@type": "ServiceChannel", "serviceUrl": "https://amadeyakids.ru/endocrinology/"}, "provider": {"@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}}}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
