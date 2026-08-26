/* AMADEYA KIDS Footer — Core-shell разметка (v36-final CTA + footer-items грамматика канона),
   содержимое — детской клиники (frozen из prod: реквизиты, контакты, дисклеймеры).
   Cookie: .cookie-consent + cookie-consent.js (site). MedFlex: round-виджет + integration
   (site; контур записи — KEEP AS KIDS OVERRIDE). */
export default function Footer() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<footer data-gx="50%" data-gy="50%" data-ms=".85" data-mo=".11">
      <div class="__container">
        <div class="__side-padding">
          <div class="footer">
            <div class="v36-final">
              <h2 class="v36-final-title">Запишитесь <em>на приём</em></h2>
              <p class="v36-final-sub">Вы можете вызвать врача на дом. Для этого просто свяжитесь<br>с нами по телефону или оставьте заявку на сайте.</p>
              <div class="v36-final-acts">
                <a class="v36-btn v36-btn-g" href="javascript:;" data-kids-modal="1">Вызвать врача</a>
                <a class="v36-btn v36-btn-w" href="tel:+79886271777">Позвонить</a>
              </div>
              <a class="v36-final-phone" href="tel:+79886271777">+7 (988) 627-17-77</a>
            </div>

            <div class="footer-items __line-blocks _column _row-w1024">
              <div class="footer-item footer-logo">
                <a class="kids-logo kids-logo--footer" href="/" title="Детская клиника «Амадея Кидс»"><img src="/redesign/mark.webp" width="100" height="100" alt="Детская клиника «Амадея Кидс»"><span class="kids-logo-word">АМАДЕЯ<span class="kids-logo-kicker">Кидс</span></span></a>
              </div>

              <div class="footer-item footer-company">
                <p>Общество с ограниченной ответственностью «Амадея»</p>
                <p>ИНН/ОГРН: 2635248939/1212600004165 · Лицензия на осуществление медицинской деятельности Л041-01197-26/00327766</p>
                <p>Имеются противопоказания. Необходима консультация специалиста.</p>
              </div>

              <div class="footer-item footer-contacts">
                <p><a class="footer-phone" href="tel:+79886271777">+7 (988) 627-17-77</a></p>
                <p>г. Ставрополь, ул. 45 параллель, 26</p>
                <p><a class="footer-email" href="mailto:litehstavlab@gmail.com">litehstavlab@gmail.com</a></p>
                <p>Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00</p>
              </div>

              <div class="footer-item footer-item-menu">
                <div class="footer-item-social">
                  <a class="social s-wt" href="https://wa.me/+79886271777" aria-label="Написать в WhatsApp"></a>
                  <a class="social s-tg" href="https://t.me/+79886271777" aria-label="Написать в Telegram"></a>
                </div>
              </div>
            </div>

            <div class="footer-items footer-item-copyright __line-blocks _column _row-w1024">
              <div class="footer-copyright">© 2026, «Детская клиника Амадея Кидс»</div>
              <div class="footer-low-menu">
                <a href="/privacy-policy/" target="_blank">Политики обработки персональных данных</a>
                <a href="/personal-data-consent/" target="_blank">Согласие на обработку персональных данных</a>
                <a href="/cookie-policy/" target="_blank">Политика использования cookie</a>
              </div>
            </div>

            <div class="footer-items footer-notice">
              <p>Все предложения на сайте носят исключительно информационный характер и ни при каких условиях не являются публичной офертой определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</p>
              <p>Посещая сайт amadeyakids.ru вы предоставляете согласие на обработку данных о посещении (данные cookies и иные пользовательские данные), сбор которых осуществляется автоматически, на условиях <a href="/cookie-policy/" target="_blank">Политики</a> в отношении использования файлов cookie.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="cookie-consent" aria-live="polite" aria-label="Уведомление о файлах cookie">
      <div class="container cookie-consent__container">
        <div class="cookie-consent__text">
          Наш сайт использует cookie-файлы. Подробнее —
          <a href="/cookie-policy/" class="cookie-consent__link">политика использования cookie</a>.
        </div>
        <button type="button" class="cookie-consent__button" data-accept-cookies>Принять</button>
      </div>
      <button type="button" class="cookie-consent__close" data-accept-cookies aria-label="Скрыть уведомление">×</button>
    </div>
` }} />
  );
}
