import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `
    <div class="container">
				<nav class="breadcrumbs">
					<a href="/">Главная</a>
					<span class="breadcrumb-separator">/</span>
					<span class="breadcrumb-current">Политика использования Cookie</span>
				</nav>

				<section class="service-why">
					
						<h1 class="service-title">Политика использования файлов Cookie</h1>
						<p class="service-description">Мы используем файлы Cookie для корректной работы сайта, анализа трафика и улучшения сервиса.</p>
					
				</section>

				<section class="service-why">
					<h2 class="service-section-title">Политика в отношении использования файлов cookie</h2>
					<p class="service-text">ООО «Амадея» (далее — Компания) обрабатывает данные, указанные в настоящем документе (далее — Политика), собранные в процессе использования посетителями нашего веб-сайта <a href="https://amadeyakids.ru" target="_blank" rel="noopener noreferrer">https://amadeyakids.ru</a> (далее — Сайт).</p>
					<p class="service-text">Настоящая Политика применяется в дополнение к общей Политике в отношении обработки персональных данных Компании, размещенной по адресу <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">https://amadeyakids.ru/privacy-policy</a>.</p>
					<p class="service-text">Политика использования файлов cookie описывает типы файлов cookie, цели их использования и способы управления ими.</p>
					<p class="service-text">Основанием для обработки Cookie является нажатие кнопки «Принять» в окне-уведомлении об обработке cookie, которое появляется при первом посещения сайта. Этим действием Вы даете свое согласие на обработку Ваших cookie. Вы также можете отказаться от обработки cookie в соответствии с пунктом 5 настоящей Политики.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">1. Что такое файлы cookie</h2>
					<p class="service-text">Файлы cookie — это небольшие фрагменты данных со служебной информацией о посещении сайта, которые сервер отправляет на ваше устройство. Файлы cookie запоминают информацию о ваших предпочтениях, позволяют в более удобном для вас режиме просматривать посещенные сайты в течение определенного времени.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">2. Как мы используем файлы cookie</h2>
					<p class="service-text">Компания использует файлы cookie для оптимизации функционирования Веб-сайта, обеспечения его работоспособности и повышения производительности, а также для анализа статистических данных о посещенных страницах и проведения маркетинговых исследований.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">3. Какие виды cookie мы используем</h2>
					<ul class="info-item">
						<li><strong>3.1 Обязательные cookie</strong> — минимальный набор Cookies, использование которых необходимо для обеспечения правильной и бесперебойной работы веб-сайта.</li>
						<li><strong>3.2 Сессионные cookie</strong> — существуют только во временной памяти в течение времени, когда пользователь находится на странице веб-сайта, и обычно удаляются после закрытия окна браузера. Позволяют помнить выбор на предыдущей странице, чтобы избежать повторного ввода информации.</li>
						<li><strong>3.3 Постоянные cookie</strong> — сохраняются на устройстве и не удаляются при закрытии браузера. Позволяют сохранять пользовательские настройки и использовать их в будущих сеансах.</li>
						<li><strong>3.4 Аналитические/маркетинговые cookie</strong> — содержат информацию о том, как Вы используете веб-сайт (посещаемые страницы, переходы по ссылкам). Используются для улучшения функционала и пользовательского опыта, а также для отслеживания переходов с сайтов партнёров и оценки результативности рекламных каналов.</li>
						<li><strong>3.5 Сторонние cookie</strong> — устанавливаются внешними сервисами (аналитические платформы, системы таргетинга, встроенный контент). Их использование регулируется политиками соответствующих сервисов.</li>
					</ul>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">4. Как мы обрабатываем Ваши cookie</h2>
					<p class="service-text">Мы обрабатываем полученные данные, в том числе, но не ограничиваясь, с использованием метрических программ и систем аналитики, таких как Яндекс.Метрика.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">5. Как отключить использование cookie</h2>
					<p class="service-text">Cookie устанавливаются в браузер на Вашем устройстве — в большинстве случаев это происходит автоматически. Вы можете отказаться от сохранения и использования cookie на своем устройстве или удалить уже сохраненные cookie в настройках Вашего браузера.</p>
					<p class="service-text">Однако отключение некоторых cookie может ограничить функциональность сайта или сделать недоступными отдельные его разделы.</p>
					<p class="service-text">Рекомендуется проверять настройки cookie на всех устройствах (компьютерах, смартфонах, планшетах), так как параметры применяются индивидуально для каждого браузера.</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">6. Веб-маяки (пиксельные теги)</h2>
					<p class="service-text">Наш Сайт, а также сторонние сервисы, задействованные в работе сайта, могут содержать веб-маяки — небольшие графические элементы, позволяющие фиксировать взаимодействие пользователей (например, переходы по ссылкам, заполнение форм и т.п.). Эти данные могут использоваться в аналитических и/или маркетинговых целях.</p>
					<p class="service-text">Веб-маяки, как правило, работают в связке с cookie, поэтому их отключение возможно через блокировку cookie.</p>
				</section>
            
	</div>
`;

export const metadata: Metadata = {
  title: "Частная детская  клиника \"Амадея Кидс\"",
  description: "Политика использования файлов Cookie на сайте детской клиники «Амадея Кидс» (Ставрополь). Описание типов cookie, целей их использования и способов отказа.",
  robots: "index, follow",
  alternates: { canonical: "https://amadeyakids.ru/cookie-policy" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Частная детская  клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/cookie-policy",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@graph": [{"@type": "Person", "@id": "https://amadeyakids.ru/#person", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru", "image": {"@type": "ImageObject", "@id": "https://amadeyakids.ru/#logo", "url": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "contentUrl": "https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg", "caption": "Частная детская  клиника &quot;Амадея Кидс&quot;", "inLanguage": "ru-RU"}}, {"@type": "WebSite", "@id": "https://amadeyakids.ru/#website", "url": "https://amadeyakids.ru", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "publisher": {"@id": "https://amadeyakids.ru/#person"}, "inLanguage": "ru-RU"}, {"@type": "BreadcrumbList", "@id": "#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": "1", "item": {"@id": "https://amadeyakids.ru", "name": "Главная"}}]}, {"@type": "CollectionPage", "@id": "#webpage", "url": "", "isPartOf": {"@id": "https://amadeyakids.ru/#website"}, "inLanguage": "ru-RU", "breadcrumb": {"@id": "#breadcrumb"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "MedicalClinic", "name": "Частная детская  клиника &quot;Амадея Кидс&quot;", "url": "https://amadeyakids.ru/", "telephone": "+7 (988) 627-17-77", "address": {"@type": "PostalAddress", "streetAddress": "г. Ставрополь, ул. 45 параллель, 26", "addressLocality": "Ставрополь", "addressCountry": "RU"}, "openingHours": ["Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00"], "image": "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png", "sameAs": []}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
