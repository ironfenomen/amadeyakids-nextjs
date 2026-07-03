export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__top">
        <a href="https://amadeyakids.ru/" className="site-header__logo" aria-label='Частная детская  клиника "Амадея Кидс"'>
          <img
            src="/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png"
            alt='Частная детская  клиника "Амадея Кидс"'
            className="site-header__logo-image"
          />
        </a>
        <div className="site-header__info">
          <div className="site-header__info-top">
            <div className="site-header__info-line">
              <span className="site-header__type" id="center-type">Детская клиника Амадея Кидс</span>
            </div>
          </div>
          <div className="site-header__info-bottom">
            <div className="site-header__info-line">
              <span className="site-header__address" id="address">г. Ставрополь, ул. 45 параллель, 26</span>
            </div>
            <div className="site-header__info-line">
              <span className="site-header__hours" id="hours">Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00</span>
            </div>
            <div className="site-header__info-line">
              <a className="site-header__phone" id="phone" href="tel:+79886271777">+7 (988) 627-17-77</a>
            </div>
          </div>
        </div>
        <div className="site-header__actions">
          <div className="site-header__social">
            <a href="https://wa.me/+79886271777" className="social-link social-link--whatsapp" target="_blank" rel="noopener">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://t.me/+79886271777" className="social-link social-link--telegram" target="_blank" rel="noopener">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor"/>
              </svg>
            </a>
          </div>
          <button type="button" className="site-header__button" id="cta-link">Вызвать врача</button>
        </div>
        <div className="site-header__mobile">
          <a className="site-header__mobile-phone" href="tel:+79886271777">+7 (988) 627-17-77</a>
          <button className="main-nav__toggle" aria-label="Открыть меню">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <div className="main-nav__overlay"></div>
          <ul className="main-nav__list">
            <li className="main-nav__item"><a className="main-nav__link" href="https://amadeyakids.ru/">Главная</a></li>
            <li className="main-nav__item main-nav__item--dropdown">
              <div className="main-nav__link">
                <a href="https://amadeyakids.ru/uslugi-chastnoj-detskoj-kliniki-amade/" className="main-nav__link-text">Услуги</a>
                <svg className="main-nav__arrow" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <ul className="main-nav__dropdown">
                <li><a href="https://amadeyakids.ru/pediatrics/">Педиатрия</a></li>
                <li><a href="https://amadeyakids.ru/detskij-kardiolog/">Кардиолог</a></li>
                <li><a href="https://amadeyakids.ru/detskij-allergolog-immunolog-v-stavropole/">Аллерголог-иммунолог</a></li>
                <li><a href="https://amadeyakids.ru/detskaya-psikhiatriya/">Психиатр</a></li>
                <li><a href="https://amadeyakids.ru/detskij-psikholog/">Психолог</a></li>
                <li><a href="https://amadeyakids.ru/detskaya-endokrinologiya/">Эндокринолог</a></li>
                <li><a href="https://amadeyakids.ru/detskaya-gastroentorologiya-v-stavropole/">Гастроэнтеролог</a></li>
                <li><a href="https://amadeyakids.ru/detskaya-dermatologiya/">Дерматолог</a></li>
              </ul>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="https://amadeyakids.ru/vrachi-kliniki-amadeya-kids/">Наши специалисты</a></li>
            <li className="main-nav__item"><a className="main-nav__link" href="https://amadeyakids.ru/contacts/">Контакты</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
