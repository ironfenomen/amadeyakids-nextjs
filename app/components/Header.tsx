/* AMADEYA KIDS Header — Core-shell разметка (классы Web Core: .header/.nav/.menu-wrapper),
   содержимое — детской клиники (меню/телефон/адрес — frozen из prod).
   Логотип: canonical знак mark.webp (LOCKED, Core) + текстовый кикер «Амадея Кидс»
   (норматив логотипа, решение J-3). Поведение: ov-lite.js (бургер) + world.js (Core, меню v2.1). */
export default function Header() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<header>
      <div class="header">
        <div class="__container">
          <div class="__side-padding">
            <div class="header-items __line-blocks _items-center _content-justify">
              <div class="header-item header-item-logo">
                <a class="header-logo kids-logo" href="/" title="Детская клиника «Амадея Кидс»"><img src="/redesign/mark.webp" width="70" height="70" alt="Детская клиника «Амадея Кидс» в Ставрополе"><span class="kids-logo-word">АМАДЕЯ<span class="kids-logo-kicker">Кидс</span></span></a>
              </div>

              <div class="header-item header-item-slogan">
                <div class="header-slogan">Детская<br>клиника</div>
              </div>

              <div class="header-item header-item-social">
                <a class="social s-wt" href="https://wa.me/+79886271777" aria-label="Написать в WhatsApp"></a>
                <a class="social s-tg" href="https://t.me/+79886271777" aria-label="Написать в Telegram"></a>
              </div>

              <div class="header-item header-item-phones">
                <div class="header-item-phone">
                  <a class="header-phone phone-mob" href="tel:+79886271777">+7 (988) 627-17-77</a>
                  <span>г. Ставрополь, ул. 45 параллель, 26</span>
                </div>
              </div>

              <div class="header-item header-item-button">
                <a class="button" href="javascript:;" id="cta-link">Вызвать врача</a>
              </div>

              <div class="header-item header-menu-button __wn1024">
                <a href="javascript:;" class="menu-button" id="menu-button" data-content="main-menu" data-close_button="true" role="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="main-menu"><div class="menu-icon"></div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="__container">
          <div class="__side-padding">
            <div class="header-menu" id="main-menu">
              <nav aria-label="Основное меню">
                <div class="menu-wrapper">
                  <ul class="menu-items level-1">
                    <li class="level-1"><a href="/">Главная</a></li>
                    <li class="level-1"><a href="/services/">Услуги</a><ul class="menu-items level-2"><li class="level-2"><a href="/pediatrics/">Педиатрия</a></li><li class="level-2"><a href="/cardiologist/">Кардиолог</a></li><li class="level-2"><a href="/allergist-immunologist/">Аллерголог-иммунолог</a></li><li class="level-2"><a href="/psychiatrist/">Психиатр</a></li><li class="level-2"><a href="/psychologist/">Психолог</a></li><li class="level-2"><a href="/endocrinology/">Эндокринолог</a></li><li class="level-2"><a href="/gastroenterologist/">Гастроэнтеролог</a></li><li class="level-2"><a href="/dermatology/">Дерматолог</a></li></ul></li>
                    <li class="level-1"><a href="/doctors/">Наши специалисты</a></li>
                    <li class="level-1"><a href="/contacts/">Контакты</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>` }} />
  );
}
