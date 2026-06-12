import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Наши специалисты</h1>
            <p class="page-description">Опытные врачи и специалисты нашего медицинского центра</p>
        </div>

        <div class="experts-grid">
            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/mutaeva.jpg" alt="Мутаева Ольга Юрьевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Мутаева Ольга Юрьевна</h3>
                    <p class="expert-card__specialty">Психиатр, клинический психолог, нарколог, психолог, психотерапевт, рефлексотерапевт</p>
                    <p class="expert-card__experience">Стаж 21 год</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психиатрия</li>
                            <li>Наркология</li>
                            <li>Психотерапия</li>
                            <li>Клиническая психология</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/kron.jpg" alt="Крон Елена Ивановна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Крон Елена Ивановна</h3>
                    <p class="expert-card__specialty">Психиатр, гирудотерапевт, нарколог, психотерапевт</p>
                    <p class="expert-card__experience">Стаж 32 года</p>
                    <div class="expert-card__services">
                        <h4>Специализация:</h4>
                        <ul>
                            <li>Психиатрия</li>
                            <li>Наркология</li>
                            <li>Психотерапия</li>
                            <li>Гирудотерапия</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/kronartem.jpg" alt="Крон Артём Владимирович" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Крон Артём Владимирович</h3>
                    <p class="expert-card__specialty">Травматолог</p>
                    <p class="expert-card__experience">Стаж 5 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/chimshit.jpg" alt="Чимшит Анна Фаритовна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Чимшит Анна Фаритовна</h3>
                    <p class="expert-card__specialty">Функциональный диагност</p>
                    <p class="expert-card__experience">Стаж 18 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/minin.jpg" alt="Минин Юрий Владимирович" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Минин Юрий Владимирович</h3>
                    <p class="expert-card__specialty">Мануальный терапевт, реабилитолог, физиотерапевт</p>
                    <p class="expert-card__experience">Стаж 40 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/rahmatulina.jpg" alt="Рахматулина Елена Николаевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Рахматулина Елена Николаевна</h3>
                    <p class="expert-card__specialty">Врач УЗИ</p>
                    <p class="expert-card__experience">Стаж 30 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stepanyan.jpg" alt="Степанян Виктория Владимировна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Степанян Виктория Владимировна</h3>
                    <p class="expert-card__specialty">Врач УЗИ</p>
                    <p class="expert-card__experience">Стаж 26 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/malaeva.jpg" alt="Малаева Муслимат Муслимовна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Малаева Муслимат Муслимовна</h3>
                    <p class="expert-card__specialty">Медсестра</p>
                    <p class="expert-card__experience">Стаж 6 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/fomenko.jpg" alt="Фоменко Оксана Анатольевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Фоменко Оксана Анатольевна</h3>
                    <p class="expert-card__specialty">Дерматолог, венеролог</p>
                    <p class="expert-card__experience">Стаж 21 год</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/ushakova.jpg" alt="Ушакова (Глазова) Олеся Викторовна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Ушакова (Глазова) Олеся Викторовна</h3>
                    <p class="expert-card__specialty">Психолог</p>
                    <p class="expert-card__experience">Стаж 8 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/puchkova.jpg" alt="Пучкова Анастасия Андреевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Пучкова Анастасия Андреевна</h3>
                    <p class="expert-card__specialty">Клинический психолог, психолог</p>
                    <p class="expert-card__experience">Стаж 6 лет</p>
                </div>
            </div>


            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/grigoriadis.jpg" alt="Григориадис Лариса Феодосиевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Григориадис Лариса Феодосиевна</h3>
                    <p class="expert-card__specialty">Детский эндокринолог</p>
                    <p class="expert-card__experience">Стаж 11 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/vlasenko.jpg" alt="Власенко Валерий Андреевич" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Власенко Валерий Андреевич</h3>
                    <p class="expert-card__specialty">Педиатр</p>
                    <p class="expert-card__experience">Стаж 2 года</p>
                </div>
            </div>


            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/blohina.jpg" alt="Блохина Юлия Алексеевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Блохина Юлия Алексеевна</h3>
                    <p class="expert-card__specialty">Психолог, детский психолог</p>
                    <p class="expert-card__experience">Стаж 17 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/zakrevskaya.jpg" alt="Закревская Нелли Геннадьевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Закревская Нелли Геннадьевна</h3>
                    <p class="expert-card__specialty">Дефектолог</p>
                    <p class="expert-card__experience">Стаж 1 год</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/parmon.jpg" alt="Пармон Анастасия Сергеевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Пармон Анастасия Сергеевна</h3>
                    <p class="expert-card__specialty">Детский психиатр, психиатр</p>
                    <p class="expert-card__experience">Стаж 4 года</p>
                </div>
            </div>



            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/domracheva.jpg" alt="Домрачёва Екатерина Александровна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Домрачёва Екатерина Александровна</h3>
                    <p class="expert-card__specialty">Педиатр</p>
                    <p class="expert-card__experience">Стаж 2 года</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/rusanova.jpg" alt="Боброва (Русанова) Мария Юрьевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Боброва (Русанова) Мария Юрьевна</h3>
                    <p class="expert-card__specialty">Детский аллерголог, аллерголог, педиатр</p>
                    <p class="expert-card__experience">Стаж 6 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/nartova.jpg" alt="Нартова Лариса Алексеевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Нартова Лариса Алексеевна</h3>
                    <p class="expert-card__specialty">Педиатр, детский инфекционист</p>
                    <p class="expert-card__experience">Стаж 34 года</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/kornienko.jpg" alt="Корниенко Наталья Николаевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Корниенко Наталья Николаевна</h3>
                    <p class="expert-card__specialty">Детский психолог, психолог</p>
                    <p class="expert-card__experience">Стаж 22 года</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/abdulkarimova.jpg" alt="Абдулкаримова Патимат Магомедовна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Абдулкаримова Патимат Магомедовна</h3>
                    <p class="expert-card__specialty">Детский невролог</p>
                    <p class="expert-card__experience">Стаж 5 лет</p>
                </div>
            </div>

            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stepurina.jpg" alt="Степурина Анна Андреевна" class="expert-card__image" loading="lazy" decoding="async">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Степурина Анна Андреевна</h3>
                    <p class="expert-card__specialty">ЛОР, детский ЛОР</p>
                    <p class="expert-card__experience">Стаж 18 лет</p>
                </div>
            </div>
            <div class="expert-card">
                <div class="expert-card__photo">
                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/rizhikova.jpg" alt="Рыжонкова Анна Александровна" class="expert-card__image">
                </div>
                <div class="expert-card__info">
                    <h3 class="expert-card__name">Рыжонкова Анна Александровна</h3>
                    <p class="expert-card__specialty">Детский невролог, психиатр</p>
                    <p class="expert-card__experience">Стаж 24 года</p>
                </div>
            </div>
        </div>
    </div>
`;

export const metadata: Metadata = {
  title: "Наши специалисты - Частная детская клиника \"Амадея Кидс\"",
  description: "",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/doctors/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Наши специалисты - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/doctors",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function DoctorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/doctors/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/doctors/", "name": "Наши специалисты"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/doctors/#webpage", "url": "https://amadeyakids.ru/doctors/", "name": "Наши специалисты - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:15+00:00", "dateModified": "2026-02-02T20:39:22+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/doctors/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Наши специалисты - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:15+00:00", "dateModified": "2026-02-02T20:39:22+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Наши специалисты - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/doctors/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/doctors/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/doctors/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Наши специалисты", "item": "https://amadeyakids.ru/doctors/"}]}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
