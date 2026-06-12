import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `<article id="post-1475" class="post-1475 page type-page status-publish hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Врачи клиники &#171;Амадея Кидс&#187;</h1>
                </header>

                <div class="entry-content">
                                    </div>
            </article>`;

export const metadata: Metadata = {
  title: "Врачи клиники \"Амадея Кидс\" - Частная детская клиника \"Амадея Кидс\"",
  description: "",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Врачи клиники \"Амадея Кидс\" - Частная детская клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function VrachiKlinikiAmadeyaKidsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": ["Organization", "Person"], "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "logo": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}, "image": {"@id": "https://amadeyakids.ru/#logo"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}, {"@type": "ListItem", "position": "2", "item": {"@id": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/", "name": "Врачи клиники &#171;Амадея Кидс&#187;"}}]}, {"@type": "WebPage", "@id": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/#webpage", "url": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/", "name": "Врачи клиники &quot;Амадея Кидс&quot; - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-03-23T07:31:50+00:00", "dateModified": "2025-03-23T07:40:18+00:00", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/#breadcrumb"}}, {"@type": "Person", "@id": "https://amadeyakids.ru/author/admin/", "name": "admin", "url": "https://amadeyakids.ru/author/admin/", "image": {"@type": "ImageObject", "@id": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "url": "https://secure.gravatar.com/avatar/f3e0ca583ffc99ed6e721aa64f36365f3d35cf56420d5505137de3874bb3f082?s=96&amp;d=mm&amp;r=g", "caption": "admin", "inLanguage": "ru-RU"}}, {"@type": "Article", "headline": "Врачи клиники &quot;Амадея Кидс&quot; - Частная детская клиника &quot;Амадея Кидс&quot;", "datePublished": "2025-03-23T07:31:50+00:00", "dateModified": "2025-03-23T07:40:18+00:00", "author": {"@id": "https://amadeyakids.ru/author/admin/", "name": "admin"}, "publisher": {"@id": "https://amadeyakids.ru/#person"}, "name": "Врачи клиники &quot;Амадея Кидс&quot; - Частная детская клиника &quot;Амадея Кидс&quot;", "@id": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/#richSnippet", "isPartOf": {"@id": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/#webpage"}, "inLanguage": "ru-RU", "mainEntityOfPage": {"@id": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/#webpage"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "item": "https://amadeyakids.ru/"}, {"@type": "ListItem", "position": 2, "name": "Врачи клиники &#171;Амадея Кидс&#187;", "item": "https://amadeyakids.ru/%d0%b2%d1%80%d0%b0%d1%87%d0%b8-%d0%ba%d0%bb%d0%b8%d0%bd%d0%b8%d0%ba%d0%b8-%d0%b0%d0%bc%d0%b0%d0%b4%d0%b5%d1%8f-%d0%ba%d0%b8%d0%b4%d1%81/"}]}` }} />
      <Header />
      <main>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        </div>
      </main>
      <Footer />
    </>
  );
}
