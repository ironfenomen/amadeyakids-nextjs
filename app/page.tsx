import type { Metadata } from "next";
import { preload } from "react-dom";

/* Главная Kids — canonical v36-грамматика (hero/mq/moment/nums/offers/posts/cta/people/reviews/map),
   контент — frozen из prod amadeyakids.ru (тексты/ссылки/фото-назначения сохранены).
   Фото: kids-hero (stock3) и kids-moment (stock6) — существующие фото сайта, WebP/AVIF derivatives. */
const pageContent = `<main>
    <!-- hero: один слой фото (у kids нет пары до/после) — .v36-hero + .v36-hero-photo -->
    <section class="banner-section" data-gx="70%" data-gy="26%" data-ms="1" data-mo=".055">
        <div class="swiper" id="service-banner-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="v36-hero swiper-no-swiping">
                        <div class="v36-hero-photo">
                            <picture>
                                <source type="image/avif" srcset="/redesign/kids-hero-390.avif 390w, /redesign/kids-hero-640.avif 640w, /redesign/kids-hero-768.avif 768w, /redesign/kids-hero-960.avif 960w, /redesign/kids-hero-1350.avif 1350w" sizes="100vw">
                                <source type="image/webp" srcset="/redesign/kids-hero-390.webp 390w, /redesign/kids-hero-640.webp 640w, /redesign/kids-hero-768.webp 768w, /redesign/kids-hero-960.webp 960w, /redesign/kids-hero-1350.webp 1350w" sizes="100vw">
                                <img decoding="async" draggable="false" src="/redesign/kids-hero.jpg" width="1350" height="1800" alt="Врач детской клиники «Амадея Кидс» с маленьким пациентом и мамой" fetchpriority="high">
                            </picture>
                        </div>
                        <div class="v36-hero-veil"></div>
                        <div class="v36-hero-in">
                            <div class="v36-eb"><i></i><span>Частная детская клиника · Ставрополь</span></div>
                            <h1><span class="ln"><span>Детская клиника</span></span> <span class="ln"><span><em>«Амадея Кидс»</em></span></span> <span class="ln"><span>в Ставрополе</span></span></h1>
                            <div class="v36-lead">
                                Профессиональная медицинская помощь детям в Ставрополе. Забота о здоровье вашего ребенка — наш приоритет!
                            </div>
                            <div class="v36-acts">
                                <a class="v36-btn v36-btn-g" href="/contacts/">Получить консультацию</a>
                                <a href="https://wa.me/+79886271777" class="v36-btn v36-btn-w" target="_blank" rel="noopener">Написать на WhatsApp</a>
                            </div>
                        </div>
                        <div class="v36-cue"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- бегущая строка: реальные направления клиники (из меню и карточек услуг) -->
    <div class="v36-mq" aria-hidden="true"><div>
        <span>Педиатрия</span><span>Кардиология</span><span>Аллергология</span><span>Психиатрия</span><span>Психология</span><span>Эндокринология</span><span>Гастроэнтерология</span><span>Дерматология</span><span>Выезд врача на дом</span>
        <span>Педиатрия</span><span>Кардиология</span><span>Аллергология</span><span>Психиатрия</span><span>Психология</span><span>Эндокринология</span><span>Гастроэнтерология</span><span>Дерматология</span><span>Выезд врача на дом</span>
    </div></div>

    <!-- full-bleed момент: цитата из реального отзыва prod (Марина О.) -->
    <div class="v36-moment" data-gx="50%" data-gy="50%" data-ms="2.1" data-mo=".04">
        <picture>
            <source type="image/avif" srcset="/redesign/kids-moment-390.avif 390w, /redesign/kids-moment-768.avif 768w, /redesign/kids-moment-981.avif 981w" sizes="100vw">
            <source type="image/webp" srcset="/redesign/kids-moment-390.webp 390w, /redesign/kids-moment-768.webp 768w, /redesign/kids-moment-981.webp 981w" sizes="100vw">
            <img loading="lazy" decoding="async" src="/redesign/kids-moment.jpg" width="981" height="1280" alt="Врач детской клиники «Амадея Кидс» осматривает ребёнка">
        </picture>
        <div class="__container"><div class="__side-padding">
            <blockquote>«Очень доброжелательное отношение к маленьким пациентам. Назначение доктора всегда нам помогает!»</blockquote>
            <div class="v36-moment-src">Елена К. <span>· отзыв о лечении детей</span></div>
        </div></div>
    </div>

    <!-- цифры клиники — реальные: 20 страниц специалистов, 8 направлений услуг,
         режим 7 дней в неделю, лицензия ООО «Амадея» от 2021 -->
    <div class="v36-nums-wrap" data-gx="18%" data-gy="68%" data-ms="1.5" data-mo=".045"><div class="__container"><div class="__side-padding">
        <div class="v36-nums">
            <div class="v36-num"><b data-to="20">20</b><span>специалистов: врачи, психологи, дефектологи, логопеды</span></div>
            <div class="v36-num"><b data-to="8">8</b><span>направлений — от педиатрии до детской психиатрии</span></div>
            <div class="v36-num"><b data-to="7">7</b><span>дней в неделю принимает клиника</span></div>
            <div class="v36-num"><b data-to="2021">2021</b><span>год получения медицинской лицензии</span></div>
        </div>
    </div></div></div>

    <!-- офферы: контент quick-services и booking-блока prod, разметка — canonical .offers -->
    <section class="offers-section" data-gx="14%" data-gy="24%" data-ms="1.4" data-mo=".05">
    <div class="__container">
        <div class="__side-padding">
            <div class="offers-wrapper">
                <div class="offer-item offer-1">
                    <div class="offer-inner">
                        <div class="offer-item-title">
                            <div class="offer-item-icon"></div>
                            <h2>Консультации и&nbsp;диагностика</h2>
                        </div>
                        <div class="offer-item-text">
                            <p>Профессиональные консультации врачей различных специальностей. Получите квалифицированную помощь и рекомендации по лечению.</p>
                            <p>Современное диагностическое оборудование для точной постановки диагноза. УЗИ, лабораторные анализы и другие виды обследований.</p>
                        </div>
                        <div class="offer-item-action">
                            <div class="offer-action-call">
                                <p>Запись на приём по телефону:</p>
                                <a href="tel:+79886271777">+7 (988) 627-17-77</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="offer-item offer-2" id="booking">
                    <div class="offer-inner">
                        <div class="offer-item-title">
                            <div class="offer-item-icon"></div>
                            <h2>Выезд врача на&nbsp;дом</h2>
                        </div>
                        <div class="offer-item-text">
                            <p>Забота о здоровье вашего ребенка — наш приоритет! Специалисты детской клиники «Амадея Кидс» готовы помочь в любой ситуации. Мы обеспечиваем комплексное лечение детских заболеваний: вирусных и инфекционных, заболеваний внутренних органов, психологических и неврологических расстройств. Наши врачи подходят к каждому маленькому пациенту с особым вниманием и заботой.</p>
                            <p>Вы можете вызвать врача на дом. Для этого просто свяжитесь с нами по телефону или оставьте заявку на сайте.</p>
                        </div>
                        <div class="offer-item-action">
                            <div class="offer-action-button">
                                <a class="button" href="javascript:;" data-kids-modal>Вызвать врача</a>
                            </div>
                            <div class="offer-action-button">
                                <button type="button" class="button" id="medflex-booking-trigger">Записаться на приём</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    <!-- услуги (.posts-block на светлой sheet) — 8 карточек prod, тексты/ссылки сохранены -->
    <section class="v36-sheet" data-gx="82%" data-gy="78%" data-ms="1.2" data-mo=".05">
        <div class="__container">
            <div class="__side-padding">
                <div class="section-title"><h2><span>Услуги</span> клиники</h2></div>
                <div class="posts-block">
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/redesign/kids-stock1-400.webp" srcset="/redesign/kids-stock1-400.webp 400w, /redesign/kids-stock1-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Педиатрия"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Педиатрия</h3>
                                <p>Комплексное медицинское обслуживание детей, профилактика и лечение заболеваний</p>
                                <a href="/pediatrics/" aria-label="Подробнее: Педиатрия">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/pediatrics/" aria-label="Подробнее: Педиатрия"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/redesign/kids-stock2-400.webp" srcset="/redesign/kids-stock2-400.webp 400w, /redesign/kids-stock2-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Кардиолог"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Кардиолог</h3>
                                <p>Диагностика и лечение заболеваний сердечно-сосудистой системы у детей</p>
                                <a href="/cardiologist/" aria-label="Подробнее: Кардиолог">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/cardiologist/" aria-label="Подробнее: Кардиолог"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/redesign/kids-stock3-400.webp" srcset="/redesign/kids-stock3-400.webp 400w, /redesign/kids-stock3-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Аллерголог-иммунолог"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Аллерголог-иммунолог</h3>
                                <p>Диагностика и лечение аллергических заболеваний, укрепление иммунитета</p>
                                <a href="/allergist-immunologist/" aria-label="Подробнее: Аллерголог-иммунолог">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/allergist-immunologist/" aria-label="Подробнее: Аллерголог-иммунолог"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/redesign/kids-stock4-400.webp" srcset="/redesign/kids-stock4-400.webp 400w, /redesign/kids-stock4-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Психиатр"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Психиатр</h3>
                                <p>Диагностика и лечение психических расстройств у детей и подростков</p>
                                <a href="/psychiatrist/" aria-label="Подробнее: Психиатр">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/psychiatrist/" aria-label="Подробнее: Психиатр"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/redesign/kids-stock5-400.webp" srcset="/redesign/kids-stock5-400.webp 400w, /redesign/kids-stock5-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Психолог"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Психолог</h3>
                                <p>Психологическое консультирование и коррекция поведения у детей</p>
                                <a href="/psychologist/" aria-label="Подробнее: Психолог">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/psychologist/" aria-label="Подробнее: Психолог"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/redesign/kids-stock6-400.webp" srcset="/redesign/kids-stock6-400.webp 400w, /redesign/kids-stock6-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Эндокринолог"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Эндокринолог</h3>
                                <p>Диагностика и лечение заболеваний эндокринной системы у детей</p>
                                <a href="/endocrinology/" aria-label="Подробнее: Эндокринолог">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/endocrinology/" aria-label="Подробнее: Эндокринолог"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/redesign/kids-stock7-400.webp" srcset="/redesign/kids-stock7-400.webp 400w, /redesign/kids-stock7-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Гастроэнтеролог"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Гастроэнтеролог</h3>
                                <p>Диагностика и лечение заболеваний желудочно-кишечного тракта у детей</p>
                                <a href="/gastroenterologist/" aria-label="Подробнее: Гастроэнтеролог">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/gastroenterologist/" aria-label="Подробнее: Гастроэнтеролог"></a>
                    </div>
                    <div class="post-item __line-block-item">
                        <div class="post-item-image"><img loading="lazy" decoding="async" src="/redesign/kids-stock8-400.webp" srcset="/redesign/kids-stock8-400.webp 400w, /redesign/kids-stock8-700.webp 700w" sizes="(max-width: 480px) 100vw, 150px" alt="Дерматолог"/></div>
                        <div class="post-item-desc">
                            <div class="post-item-title">
                                <h3>Дерматолог</h3>
                                <p>Диагностика и лечение кожных заболеваний у детей</p>
                                <a href="/dermatology/" aria-label="Подробнее: Дерматолог">Подробнее</a>
                            </div>
                        </div>
                        <a class="overlink" href="/dermatology/" aria-label="Подробнее: Дерматолог"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- контактная полоса + инлайн-форма (canonical .contact-block-2; отправка —
         существующий контракт modal-form.js #inline-callback-form → /api/lead → Telegram) -->
    <section class="v36-cta" data-gx="50%" data-gy="50%" data-ms="1.2" data-mo=".05">
        <div class="__container">
            <div class="__side-padding">
                <div class="contact-block-2">
                    <div class="contact-block-2-content">
                        <div>
                            <p>Позвоните нам и получите консультацию специалиста!</p>
                            <p>Работаем ежедневно.</p>
                        </div>
                        <div><a class="page-form-phone" href="tel:+79886271777">+7 (988) 627-17-77</a></div>
                    </div>
                    <div class="contact-block-2-form">
                        <div class="form-title">Оставьте заявку и мы сами Вам перезвоним!</div>
                        <div class="modal-error" id="inline-modal-error"></div>
                        <form id="inline-callback-form" novalidate>
                            <div class="form-row text">
                                <input type="text" id="inline-name" name="name" placeholder="Ваше имя" required>
                            </div>
                            <div class="form-row text">
                                <input type="tel" id="inline-phone" name="phone" placeholder="+7 (___) ___-__-__" required>
                            </div>
                            <div class="form-row checkbox">
                                <input type="checkbox" id="inline-privacy" name="privacy_agreement" required>
                                <label for="inline-privacy"><a href="/personal-data-consent/" target="_blank">Согласен</a> на&nbsp;обработку персональных данных в&nbsp;соответствии с&nbsp;<a href="/privacy-policy/" target="_blank">Политикой конфиденциальности</a>.</label>
                            </div>
                            <div class="form-row submit">
                                <button type="submit" class="modal-submit">Отправить заявку</button>
                            </div>
                        </form>
                        <div class="modal-success" id="inline-modal-success" style="display:none;">
                            <p class="modal-success-title">Заявка отправлена!</p>
                            <p class="modal-success-text">Ваша заявка принята, ожидайте звонка в ближайшее время</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- специалисты (.people-block swiper) — 6 карточек prod, фото/тексты сохранены -->
    <section class="reviews-section" id="experts" data-gx="50%" data-gy="30%" data-ms="1.1" data-mo=".06">
        <div class="__container">
            <div class="people-block">
                <div class="section-title"><h2><span>Специалисты</span> клиники</h2></div>
                <div class="swiper" id="people-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="eager" decoding="async" src="/redesign/kids-doc-mutaeva-480.webp" width="480" height="622" alt="Врач Мутаева Ольга Юрьевна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Мутаева</span><span>Ольга Юрьевна</span></div>
                                    <div class="people-item-spec">Психиатр, клинический психолог, нарколог, психолог, психотерапевт</div>
                                    <div class="people-item-exp">Стаж 21 год</div>
                                </div>
                                <a class="overlink" href="/detskij-psikhiatr-mutaeva-olga-yurev/" aria-label="Подробнее: Мутаева Ольга Юрьевна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="eager" decoding="async" src="/redesign/kids-doc-kron-480.webp" width="480" height="622" alt="Врач Крон Елена Ивановна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Крон</span><span>Елена Ивановна</span></div>
                                    <div class="people-item-spec">Психиатр, гирудотерапевт, нарколог, психотерапевт</div>
                                    <div class="people-item-exp">Стаж 32 года</div>
                                </div>
                                <a class="overlink" href="/vrach-psikhiatr-kron-elena-ivanovna/" aria-label="Подробнее: Крон Елена Ивановна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/redesign/kids-doc-kronartem-480.webp" width="480" height="622" alt="Врач Крон Артём Владимирович"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Крон</span><span>Артём Владимирович</span></div>
                                    <div class="people-item-spec">Травматолог</div>
                                    <div class="people-item-exp">Стаж 5 лет</div>
                                </div>
                                <a class="overlink" href="/vrachi-kliniki-amadeya-kids/" aria-label="Подробнее: Крон Артём Владимирович"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/redesign/kids-doc-fomenko-480.webp" width="300" height="300" alt="Врач Фоменко Оксана Анатольевна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Фоменко</span><span>Оксана Анатольевна</span></div>
                                    <div class="people-item-spec">Дерматолог, венеролог</div>
                                    <div class="people-item-exp">Стаж 21 год</div>
                                </div>
                                <a class="overlink" href="/dermatolog-fomenko-oksana-anatolev/" aria-label="Подробнее: Фоменко Оксана Анатольевна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/redesign/kids-doc-puchkova-480.webp" width="480" height="622" alt="Врач Пучкова Анастасия Андреевна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Пучкова</span><span>Анастасия Андреевна</span></div>
                                    <div class="people-item-spec">Клинический психолог, психолог</div>
                                    <div class="people-item-exp">Стаж 6 лет</div>
                                </div>
                                <a class="overlink" href="/klinicheskij-psikholog-puchkova-anasta/" aria-label="Подробнее: Пучкова Анастасия Андреевна"></a>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="people-item __line-block-item">
                                <div class="people-item-photo"><img loading="lazy" decoding="async" src="/redesign/kids-doc-malaeva-480.webp" width="300" height="300" alt="Малаева Муслимат Муслимовна"></div>
                                <div class="people-item-desc">
                                    <div class="people-item-name"><span>Малаева</span><span>Муслимат Муслимовна</span></div>
                                    <div class="people-item-spec">Медсестра</div>
                                    <div class="people-item-exp">Стаж 6 лет</div>
                                </div>
                                <a class="overlink" href="/vrachi-kliniki-amadeya-kids/" aria-label="Подробнее: Малаева Муслимат Муслимовна"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav-buttons">
                    <div class="swiper-nav-button swiper-button-prev vrachi-button-prev"></div>
                    <div class="swiper-nav-button swiper-button-next vrachi-button-next"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- отзывы (.reviews-block swiper на sheet) — 3 реальных отзыва prod, тексты и оценки сохранены -->
    <section class="reviews-section v36-sheet" id="reviews" data-gx="18%" data-gy="72%" data-ms="1.3" data-mo=".045">
        <div class="__container">
            <div class="reviews-block">
                <div class="section-title"><h2><span>Отзывы</span> пациентов</h2></div>
                <div class="swiper" id="reviews-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="reviews-item __line-block-item">
                                <div class="reviews-item-head">
                                    <div class="reviews-item-title"><h3>Любовь А.</h3><span class="kids-stars">★★★★★</span></div>
                                </div>
                                <div class="reviews-item-text">Хорошая клиника, уютная. Где нет толпы людей и лишнего времени ожидания. Администратор - приветливая девушка. Доктор, также приятная девушка. Выслушала жалобы, осмотрела максимально аккуратно, задала вопросы и быстро нашла причину. Успокоила, что ничего страшного, просто нужно больше времени. Слава Богу, так и вышло. Через неделю пошли на поправку.</div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="reviews-item __line-block-item">
                                <div class="reviews-item-head">
                                    <div class="reviews-item-title"><h3>Марина О.</h3><span class="kids-stars">★★★★★</span></div>
                                </div>
                                <div class="reviews-item-text">Данную клинику нашла в интернете, нужен был детский ортопед, быстро нашла и записалась на прием, перед приемом звонят и уточняют. Клиника приятная, чистая, в холле удобные диванчики, ребенку понравилась приятная музыка. Администратор приятная девушка, как могла развлекала дочь. Везде яркое красочное оформление, дочери очень понравилось.</div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="reviews-item __line-block-item">
                                <div class="reviews-item-head">
                                    <div class="reviews-item-title"><h3>Елена К.</h3><span class="kids-stars">★★★★★</span></div>
                                </div>
                                <div class="reviews-item-text">Данную клинику посещаем неоднократно при заболевании моих детей. Очень доброжелательное отношение к маленьким пациентам. Назначение доктора всегда нам помогает! Ничего лишнего не назначают. Имеется обратная связь от доктора, всегда спросит, как пациент себя чувствует, много рекомендаций. Данную клинику буду советовать всем своим близким Стоит дочке, сыну приболеть, сразу идём только в эту клинику. Высочайший профессионализм персонала.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav-buttons">
                    <div class="swiper-nav-button swiper-button-prev reviews-button-prev"></div>
                    <div class="swiper-nav-button swiper-button-next reviews-button-next"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- карта (.map-block) — iframe prod (тот же um-конструктор), ленивая загрузка через data-src -->
    <section class="map-section" id="contacts" data-gx="50%" data-gy="78%" data-ms=".95" data-mo=".06">
        <div class="__container">
            <div class="__side-padding">
                <div class="map-block">
                    <div class="map-block-content">
                        <h2>Где мы находимся?</h2>
                        <div class="contacts">
                            <p class="contact-row icon-location">г. Ставрополь, ул. 45 параллель, 26</p>
                            <p class="contact-row icon-phone"><a class="phone" href="tel:+79886271777">+7 (988) 627-17-77</a></p>
                            <p class="contact-row icon-time">Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00</p>
                        </div>
                    </div>
                    <div class="map-wrap">
                        <iframe loading="lazy" title="Карта проезда — Детская клиника «Амадея Кидс»" data-src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff54c15c03d1d03c9ba97adfd4ef6fdad7925212baa99bae88d52f19a6edc76d&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
`;

export const metadata: Metadata = {
  title: "Амадея Кидс — детская клиника в Ставрополе на 45 Параллель | педиатр, УЗИ, анализы",
  description: "Детская клиника «Амадея Кидс» в Ставрополе на ул. 45 Параллель, 26. Приём педиатра и узких детских специалистов, УЗИ, анализы, вызов врача на дом. Запись по тел. +7 (988) 627-17-77.",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: { canonical: "https://amadeyakids.ru/" },
  openGraph: {
    locale: "ru_RU",
    type: "website",
    title: "Амадея Кидс — детская клиника в Ставрополе на 45 Параллель | педиатр, УЗИ, анализы",
    description: "Детская клиника «Амадея Кидс» в Ставрополе на ул. 45 Параллель, 26. Приём педиатра и узких детских специалистов, УЗИ, анализы, вызов врача на дом. Запись по тел. +7 (988) 627-17-77.",
    url: "https://amadeyakids.ru/",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: ["https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png"],
  },
};

export default function HomePage() {
  // LCP: preload hero-фото (высокая очередь — паттерн канона)
  preload("/redesign/kids-hero-1350.avif", {
    as: "image",
    type: "image/avif",
    imageSrcSet:
      "/redesign/kids-hero-390.avif 390w, /redesign/kids-hero-640.avif 640w, /redesign/kids-hero-768.avif 768w, /redesign/kids-hero-960.avif 960w, /redesign/kids-hero-1350.avif 1350w",
    imageSizes: "100vw",
    fetchPriority: "high",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: LD_CLINIC }} />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </>
  );
}

/* JSON-LD — verbatim из prod (extractor 2026-08-26, _index.json _home). */
const LD_CLINIC = "{\"@context\":\"https://schema.org\",\"@type\":\"MedicalClinic\",\"@id\":\"https://amadeyakids.ru/#clinic\",\"name\":\"Детская клиника Амадея Кидс\",\"url\":\"https://amadeyakids.ru/\",\"telephone\":\"+7 (988) 627-17-77\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"ул. 45 Параллель, 26\",\"addressLocality\":\"Ставрополь\",\"addressRegion\":\"Ставропольский край\",\"postalCode\":\"355000\",\"addressCountry\":\"RU\"},\"geo\":{\"@type\":\"GeoCoordinates\",\"latitude\":45.0678,\"longitude\":41.9733},\"openingHoursSpecification\":[{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],\"opens\":\"07:30\",\"closes\":\"19:00\"},{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Sunday\"],\"opens\":\"07:30\",\"closes\":\"13:00\"}],\"medicalSpecialty\":[\"Pediatric\",\"GeneralPractice\"],\"areaServed\":{\"@type\":\"City\",\"name\":\"Ставрополь\"},\"image\":\"https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png\",\"logo\":\"https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg\",\"priceRange\":\"₽₽\",\"sameAs\":[\"https://vk.com/amadeyakids\",\"https://2gis.ru/stavropol/firm/amadeyakids\",\"https://yandex.ru/maps/org/amadeyakids\"]}";
