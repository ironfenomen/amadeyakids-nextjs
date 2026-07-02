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
                    <span class="breadcrumb-current">Психиатр</span>
                </nav>

                <section class="service-hero">
                    <div class="service-hero-content">
                        <h1 class="service-title">Психиатр</h1>
                        <p class="service-description">
                            Диагностика и лечение психических расстройств у детей и подростков. Бережный подход к психическому здоровью ребенка, комплексная помощь и поддержка.
                        </p>
                        <a href="tel:+79886271777" class="service-call-button">Позвонить</a>
                    </div>
                    
                </section>

                <section class="service-why">
                    <h2 class="service-section-title">Забота о психическом здоровье детей</h2>
                    <p class="service-text">
                        Детская психиатрия — это специализированная область медицины, занимающаяся диагностикой и лечением психических расстройств у детей и подростков. Психическое здоровье ребенка требует особого внимания и бережного подхода.
                    </p>
                    <p class="service-text">
                        Наши детские психиатры проводят комплексную диагностику психических расстройств, используя современные методы оценки психического состояния. Мы работаем с различными проблемами: нарушения поведения, эмоциональные расстройства, тревожность, депрессия, расстройства аутистического спектра, СДВГ и другими состояниями.
                    </p>
                    <p class="service-text">
                        Мы обеспечиваем комплексный подход к лечению, сочетая медикаментозную терапию с психотерапией и поддержкой семьи. Наши специалисты работают в тесном сотрудничестве с психологами, логопедами и другими специалистами, обеспечивая всестороннюю помощь ребенку и его семье.
                    </p>
                    <button type="button" class="service-booking-button">Заказать обратный звонок</button>
                </section>

                <section class="service-individual">
                    <h2 class="service-section-title">Направления детской психиатрии</h2>
                    <p class="service-text">
                        Наши психиатры специализируются на следующих проблемах:
                    </p>
                    <ul class="service-list">
                        <li>Расстройства аутистического спектра (РАС)</li>
                        <li>Синдром дефицита внимания и гиперактивности (СДВГ)</li>
                        <li>Тревожные расстройства у детей</li>
                        <li>Депрессивные состояния</li>
                        <li>Нарушения поведения и адаптации</li>
                        <li>Эмоциональные расстройства</li>
                        <li>Нарушения сна</li>
                        <li>Психосоматические расстройства</li>
                        <li>Работа с последствиями стресса и травм</li>
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
  title: "Психиатр - Частная детская клиника \"Амадея Кидс\"",
  description: "Детский психиатр в Ставрополе — клиника «Амадея Кидс». Диагностика и лечение СДВГ, тревожных расстройств, расстройств аутистического спектра у детей. Запись: +7 (988) 627-17-77.",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/psychiatrist/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Психиатр - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/psychiatrist",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function PsychiatristPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/psychiatrist/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/psychiatrist/", "name": "Психиатр"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/psychiatrist/#webpage", "url": "https://amadeyakids.ru/psychiatrist/", "name": "Психиатр - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:17+00:00", "dateModified": "2025-11-22T10:12:17+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/psychiatrist/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Психиатр - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:17+00:00", "dateModified": "2025-11-22T10:12:17+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Психиатр - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/psychiatrist/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/psychiatrist/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/psychiatrist/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Психиатр", "item": "https://amadeyakids.ru/psychiatrist/"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalService", "name": "Психиатр", "description": "", "areaServed": "Ставрополь", "availableChannel": {"@type": "ServiceChannel", "serviceUrl": "https://amadeyakids.ru/psychiatrist/"}, "provider": {"@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}}}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
