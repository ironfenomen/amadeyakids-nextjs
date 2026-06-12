import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageContent = `
    <div class="container">
				<nav class="breadcrumbs">
					<a href="/">Главная</a>
					<span class="breadcrumb-separator">/</span>
					<span class="breadcrumb-current">Согласие на обработку персональных данных</span>
				</nav>

				<section class="service-why">
						<h1 class="service-section-title">Согласие на обработку персональных данных</h1>
						<p class="service-description">Пользователь предоставляет согласие при отправке форм на сайте, включая сбор, хранение и использование в целях оказания услуг и обратной связи.</p>
				</section>

				<section class="service-why">
					<h2 class="service-section-title">Согласие на обработку персональных данных</h2>
					<p class="service-text">Настоящим документом, в соответствии с положениями Федерального закона № 152-ФЗ «О персональных данных» от 27 июля 2006 года, я, субъект персональных данных (далее – Пользователь), время использования мною веб-сайта по адресу: <a href="https://amadeyakids.ru" target="_blank" rel="noopener noreferrer">https://amadeyakids.ru</a> (далее – Сайт), выражаю свое добровольное, осознанное и однозначное согласие на обработку моих персональных данных Обществу с ограниченной ответственностью «Амадея» (далее – Оператор), зарегистрированному по адресу: г. Ставрополь, ул. 45 параллель, 26</p>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">Согласие выдано на обработку следующих категорий персональных данных:</h2>
					<ul class="info-item">
						<li>Данные, указанные в специальных формах на сайте. К ним относятся: фамилия, имя, адрес электронной почты (e-mail), номер телефона и другая аналогичная информация, на основании которой можно идентифицировать субъекта персональных данных.</li>
						<li>Файлы cookie, которые могут включать, но не ограничиваются следующими данными: параметры сессии, дата и время доступа к Сайту, адрес посещаемой страницы, источник входа, реферер (адрес предыдущей страницы), информация о поведении (включая количество и наименование просмотренных страниц), прочие технические данные (данные о технических средствах и характеристиках используемого оборудования, включая мобильные устройства, и способах технологического взаимодействия с сайтом и его сервисами, включая вид операционной системы Пользователя, тип браузера, географическое положение, данные о провайдере и другое), об активности Пользователя при использовании сайта, об информации об ошибках, выдаваемых Пользователю, о скачанных файлах, инструментах, данные об активности Пользователя на веб-сайте, в том числе данные, полученные посредством применения метрических программ и аналитических систем, таких как Яндекс.Метрика;</li>
						<li>IP-адрес и статистика об IP-адресах.</li>
					</ul>
				</section>

				<section class="service-individual">
					<h2 class="service-section-title">Я даю согласие на обработку своих персональных данных в следующих целях:</h2>
					<ul class="info-item">
						<li>Для получения доступа к Сайту, его содержимому и функциональным возможностям Сайта.</li>
						<li>Для использования услуг и сервисов, доступных на Сайте, включая обработку запросов и заявок.</li>
						<li>Для обеспечения обратной связи, включая отправку уведомлений и запросов.</li>
						<li>Для подтверждения полноты предоставленных персональных данных.</li>
						<li>Для сбора статистических и/или аналитических данных.</li>
						<li>Для улучшения качества работы Сайта и его сервисов, повышения удобства их использования и разработки новых функций и возможностей.</li>
					</ul>
				</section>

				<section class="service-individual">
					<p class="service-text">Согласие выдано на обработку персональных данных смешанным (автоматизированным и неавтоматизированным) способом с соблюдением мер, обеспечивающих их защиту от несанкционированного доступа.</p>
					<p class="service-text">Компания имеет право обрабатывать персональные данные пользователя, включая их сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), блокирование, удаление и уничтожение.</p>
					<p class="service-text">Настоящим подтверждаю свое согласие с Политикой данных ООО «Центр 7» в отношении обработки персональных данных, размещенной на странице по адресу: <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">https://amadeyakids.ru/privacy-policy</a>, а также с согласие с Политикой в отношении обработки файлов cookie, размещенной на странице по адресу <a href="/cookie-policy/" target="_blank" rel="noopener noreferrer">https://amadeyakids.ru/cookie-policy</a>.</p>
					<p class="service-text">Настоящее Согласие дается на неопределенный срок и может быть отозвано мной в любое время путем направления письменного уведомления на адрес Оператора. Отзыв согласия не влияет на законность обработки персональных данных, осуществленной до момента отзыва согласия.</p>
				</section>
            
	</div>
`;

export const metadata: Metadata = {
  title: "Частная детская  клиника \"Амадея Кидс\"",
  description: "",
  robots: "index, follow",
  alternates: { canonical: "https://amadeyakids.ru/personal-data-consent" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Частная детская  клиника \"Амадея Кидс\"",
    description: "",
    url: "https://amadeyakids.ru/personal-data-consent",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function PersonalDataConsentPage() {
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
