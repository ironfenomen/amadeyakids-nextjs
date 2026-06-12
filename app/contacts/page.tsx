import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Контакты</h1>
            <p class="page-description">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div class="contacts-content">
            <div class="contact-info">
                <div class="contact-card">
                    <h3>Адрес</h3>
                    <div class="contact-item">
                        <svg class="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                        </svg>
                        <div>
                            <p class="contact-text">г. Ставрополь, ул. 45 параллель, 26</p>
                        </div>
                    </div>
                </div>

                <div class="contact-card">
                    <h3>Телефон</h3>
                    <div class="contact-item">
                        <svg class="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                        </svg>
                        <div>
                            <p class="contact-text">
                                <a href="tel:+79886271777">+7 (988) 627-17-77</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="contact-card">
                    <h3>Время работы</h3>
                    <div class="contact-item">
                        <svg class="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
                        </svg>
                        <div>
                            <p class="contact-text">Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00</p>
                        </div>
                    </div>
                </div>

                <div class="contact-card">
                    <h3>Социальные сети</h3>
                    <div class="site-header__social">
                <a href="https://wa.me/+79886271777" class="social-link social-link--whatsapp" target="_blank" rel="noopener">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
                    </svg>
                </a>
                <a href="https://t.me/+79886271777" class="social-link social-link--telegram" target="_blank" rel="noopener">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor"/>
                    </svg>
                </a>
            </div>
                </div>
            </div>

            <div class="modal-form-container">
                <h3>Оставьте заявку — мы перезвоним</h3>
                <div class="modal-error" id="inline-modal-error"></div>
                <form class="modal-form" id="inline-callback-form">
                    <div class="form-group">
                        <label for="inline-name">Имя *</label>
                        <input type="text" id="inline-name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="inline-phone">Номер телефона *</label>
                        <input type="tel" id="inline-phone" name="phone" required>
                    </div>
                    <div class="modal-checkbox">
                        <input type="checkbox" id="inline-privacy" name="privacy_agreement" required>
                        <label for="inline-privacy">
                            Нажимая "отправить" вы принимаете 
                            <a href="/privacy-policy/" target="_blank">политику конфиденциальности</a>
                        </label>
                    </div>
                    <button type="submit" class="modal-submit">Отправить</button>
                </form>
                <div class="modal-success" id="inline-modal-success" style="display: none;">
                    <div class="modal-success-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3 class="modal-success-title">Заявка отправлена!</h3>
                    <p class="modal-success-text">Ваша заявка принята, ожидайте звонка в ближайшее время</p>
                </div>
            </div>
        </div>

        <div class="map-container">
            <h3>Как нас найти</h3>
            <div class="map__container">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff54c15c03d1d03c9ba97adfd4ef6fdad7925212baa99bae88d52f19a6edc76d&amp;source=constructor" width="1200" height="400" frameborder="0"></iframe>
                </div>
        </div>
    </div>
`;

export const metadata: Metadata = {
  title: "Контакты - Частная детская клиника \"Амадея Кидс\"",
  description: "",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/contacts/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Контакты - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/contacts",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function ContactsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/contacts/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/contacts/", "name": "Контакты"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/contacts/#webpage", "url": "https://amadeyakids.ru/contacts/", "name": "Контакты - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:16+00:00", "dateModified": "2025-11-22T10:12:16+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/contacts/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Контакты - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-11-22T10:12:16+00:00", "dateModified": "2025-11-22T10:12:16+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Контакты - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/contacts/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/contacts/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/contacts/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Контакты", "item": "https://amadeyakids.ru/contacts/"}]}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
