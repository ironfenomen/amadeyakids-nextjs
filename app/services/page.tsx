import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Наши услуги</h1>
            <p class="page-description">Полный спектр медицинских услуг для детей в нашем центре</p>
        </div>

        <div class="key-services__grid">
            <a href="/pediatrics/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock1.jpg" alt="Педиатрия">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Педиатрия</h4>
                    </div>
                    <p class="key-services__description">Комплексное медицинское обслуживание детей, профилактика и лечение заболеваний</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/cardiologist/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock2.jpg" alt="Кардиолог">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Кардиолог</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение заболеваний сердечно-сосудистой системы у детей</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/allergist-immunologist/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock3.jpg" alt="Аллерголог-иммунолог">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Аллерголог-иммунолог</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение аллергических заболеваний, укрепление иммунитета</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/psychiatrist/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock4.jpg" alt="Психиатр">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Психиатр</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение психических расстройств у детей и подростков</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/psychologist/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock5.jpg" alt="Психолог">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Психолог</h4>
                    </div>
                    <p class="key-services__description">Психологическое консультирование и коррекция поведения у детей</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/endocrinology/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock6.jpg" alt="Эндокринолог">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Эндокринолог</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение заболеваний эндокринной системы у детей</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/gastroenterologist/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock7.jpg" alt="Гастроэнтеролог">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Гастроэнтеролог</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение заболеваний желудочно-кишечного тракта у детей</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>

            <a href="/dermatology/" class="key-services__card">
                <div class="key-services__image">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock8.jpg" alt="Дерматолог">
                </div>
                <div class="key-services__content">
                    <div class="key-services__card-title">
                        <h4>Дерматолог</h4>
                    </div>
                    <p class="key-services__description">Диагностика и лечение кожных заболеваний у детей</p>
                    <span class="key-services__link">Подробнее</span>
                </div>
            </a>
        </div>
    </div>
`;

export const metadata: Metadata = {
  title: "Услуги - Частная детская клиника \"Амадея Кидс\"",
  description: "",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/services/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Услуги - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/services",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/services/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/services/", "name": "Услуги"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/services/#webpage", "url": "https://amadeyakids.ru/services/", "name": "Услуги - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:14+00:00", "dateModified": "2025-11-22T10:12:14+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/services/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Услуги - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:14+00:00", "dateModified": "2025-11-22T10:12:14+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Услуги - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/services/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/services/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/services/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://amadeyakids.ru/services/"}]}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
