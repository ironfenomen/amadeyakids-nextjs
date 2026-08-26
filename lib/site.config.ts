/* AMADEYA KIDS — site-данные для AMADEYA WEB CORE (world.js).
   Sanctioned override: только объявленные поля (см. CORE-MANIFEST site_override_points).
   popupAttr: модалка Kids — modal-form.js (биндинг [data-kids-modal], #cta-link,
   #cta-link-booking, .service-booking-button) → POST /api/lead → Telegram. */
export const V36_SITE = {
  tel: "+7 (988) 627-17-77",
  telHref: "+79886271777",
  waHref: "+79886271777",
  ctaCall: "Вызвать врача",
  ctaWa: "Написать в WhatsApp",
  popupAttr: ' data-kids-modal="1"',
  addrHtml:
    "г. Ставрополь, ул. 45 параллель, 26<br>Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00",
} as const;
