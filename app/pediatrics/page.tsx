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
                    <span class="breadcrumb-current">Педиатрия</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Педиатрия</h1>
                        <p class="service-description">
                            Комплексное медицинское обслуживание детей от рождения до 18 лет. Профилактика, диагностика и лечение заболеваний, наблюдение за развитием ребенка.
                        </p>
                        <a href="tel:+79886271777" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Комплексное наблюдение за здоровьем ребенка</h2>
                    <p class="service-text">
                        Педиатрия — это основа детского здравоохранения. Наши врачи-педиатры обеспечивают полноценное медицинское сопровождение ребенка на всех этапах его развития: от новорожденности до совершеннолетия.
                    </p>
                    <p class="service-text">
                        Мы проводим профилактические осмотры, вакцинацию, диагностику и лечение острых и хронических заболеваний, консультируем по вопросам питания, развития и воспитания детей. Особое внимание уделяем профилактике заболеваний и раннему выявлению возможных проблем со здоровьем.
                    </p>
                    <p class="service-text">
                        Наши педиатры работают в тесном сотрудничестве с узкими специалистами, обеспечивая комплексный подход к здоровью каждого ребенка. Мы заботимся не только о физическом, но и о психоэмоциональном развитии маленьких пациентов.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления педиатрии</h2>
                    <p class="service-text">
                        Наши педиатры оказывают широкий спектр медицинских услуг:
                    </p>
                    <ul class="service-list">
                        <li>Профилактические осмотры и диспансеризация</li>
                        <li>Вакцинация по национальному календарю прививок</li>
                        <li>Диагностика и лечение острых респираторных заболеваний</li>
                        <li>Лечение инфекционных заболеваний</li>
                        <li>Наблюдение за физическим и нервно-психическим развитием</li>
                        <li>Консультации по вопросам питания и вскармливания</li>
                        <li>Ведение детей с хроническими заболеваниями</li>
                        <li>Экстренная помощь при острых состояниях</li>
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
  title: "Педиатрия - Частная детская клиника \"Амадея Кидс\"",
  description: "Педиатр в Ставрополе — клиника «Амадея Кидс». Профилактические осмотры, вакцинация, лечение ОРВИ и хронических заболеваний у детей 0–18 лет. Запись: +7 (988) 627-17-77.",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/pediatrics/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Педиатрия - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/pediatrics",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function PediatricsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/pediatrics/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/pediatrics/", "name": "Педиатрия"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/pediatrics/#webpage", "url": "https://amadeyakids.ru/pediatrics/", "name": "Педиатрия - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:16+00:00", "dateModified": "2025-11-22T10:12:16+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/pediatrics/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Педиатрия - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:16+00:00", "dateModified": "2025-11-22T10:12:16+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Педиатрия - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/pediatrics/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/pediatrics/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/pediatrics/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Педиатрия", "item": "https://amadeyakids.ru/pediatrics/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalService", "name": "Педиатрия", "description": "", "areaServed": "Ставрополь", "availableChannel": {"@type": "ServiceChannel", "serviceUrl": "https://amadeyakids.ru/pediatrics/"}, "provider": {"@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}}}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
