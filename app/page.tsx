import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

const pageContent = `
    <section class="hero-banner">
        <div class="container">
            <div class="hero-banner__content">
                <div class="hero-banner__content-left">
                    <div class="hero-banner__text-content">
                        <h1 class="hero-banner__title">Детская клиника «Амадея Кидс» в Ставрополе</h1>
                        <p class="hero-banner__subtitle">Профессиональная медицинская помощь детям в Ставрополе. Забота
                            о здоровье вашего ребенка — наш приоритет!</p>
                    </div>
                    <div class="hero-banner__buttons-container">
                        <div class="hero-banner__actions">
                            <a href="/contacts/"
                                class="hero-banner__button hero-banner__button--primary">Получить консультацию</a>
                            <a href="https://wa.me/+79886271777"
                                class="hero-banner__button hero-banner__button--secondary" target="_blank"
                                rel="noopener">Написать на WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="quick-services">
        <div class="container">
            <div class="quick-services__grid">
                <div class="quick-service-card">
                    <div class="quick-service-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <title>Heart-pulse-fill SVG Icon</title>
                            <g fill="currentColor">
                                <path
                                    d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642l-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                                <path
                                    d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956L6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                            </g>
                        </svg>
                    </div>
                    <div class="quick-service-card__content">
                        <h3 class="quick-service-card__title">Консультация врачей</h3>
                        <p class="quick-service-card__description">Профессиональные консультации врачей различных
                            специальностей. Получите квалифицированную помощь и рекомендации по лечению.</p>
                        <a href="/contacts/"
                            class="quick-service-card__button">Записаться</a>
                    </div>
                </div>

                <div class="quick-service-card">
                    <div class="quick-service-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                            <title>Diagnostic SVG Icon</title>
                            <path fill="currentColor"
                                d="M1920 128v1792H128V128zM256 256v1024h150l109-109q19-19 45-19t45 19l177 176l244-947q5-21 22-34t40-14q23 0 40 13t22 36l102 417h156q22 0 39 13t23 35l72 286h250V256zm1536 1536v-512h-300q-23 0-40-13t-22-36l-72-285h-156q-23 0-40-13t-22-36l-54-218l-208 809q-5 21-22 34t-40 14q-26 0-45-19l-211-211l-83 83q-19 19-45 19H256v384z" />
                        </svg>
                    </div>
                    <div class="quick-service-card__content">
                        <h3 class="quick-service-card__title">Диагностика</h3>
                        <p class="quick-service-card__description">Современное диагностическое оборудование для точной
                            постановки диагноза. УЗИ, лабораторные анализы и другие виды обследований.</p>
                        <a href="/services/"
                            class="quick-service-card__button">Узнать больше</a>
                    </div>
                </div>

                <div class="quick-service-card">
                    <div class="quick-service-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <title>Ambulance SVG Icon</title>
                            <path fill="currentColor"
                                d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z" />
                        </svg>
                    </div>
                    <div class="quick-service-card__content">
                        <h3 class="quick-service-card__title">Вызов врача на дом</h3>
                        <p class="quick-service-card__description">Вызов врача на дом в удобное для вас время.
                            Экстренная помощь и плановые визиты специалистов на дому.</p>
                        <a href="tel:+79886271777"
                            class="quick-service-card__button">Вызвать врача</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="key-services">
        <div class="container">
            <div class="key-services__title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Task-list-square-ltr-20-regular SVG Icon</title>
                    <path fill="currentColor"
                        d="M9.354 7.104a.5.5 0 0 0-.708-.708L7.234 7.808l-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.016zm0 4.292a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363l1.412-1.413a.5.5 0 0 1 .708 0M11 12a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm-.5-4.5A.5.5 0 0 1 11 7h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                </svg>
                <h2><span>Услуги</span> клиники</h2>
            </div>
            <div class="key-services__grid">
                <a href="/pediatrics/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock1.jpg" alt="Педиатрия" loading="lazy" decoding="async">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Педиатрия</h4>
                        </div>
                        <p class="key-services__description">Комплексное медицинское обслуживание детей, профилактика и
                            лечение заболеваний</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <a href="/cardiologist/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock2.jpg" alt="Кардиолог" loading="lazy" decoding="async">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Кардиолог</h4>
                        </div>
                        <p class="key-services__description">Диагностика и лечение заболеваний сердечно-сосудистой
                            системы у детей</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <a href="/allergist-immunologist/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock3.jpg"
                            alt="Аллерголог-иммунолог" loading="lazy" decoding="async">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Аллерголог-иммунолог</h4>
                        </div>
                        <p class="key-services__description">Диагностика и лечение аллергических заболеваний, укрепление
                            иммунитета</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <a href="/psychiatrist/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock4.jpg" alt="Психиатр" loading="lazy" decoding="async">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Психиатр</h4>
                        </div>
                        <p class="key-services__description">Диагностика и лечение психических расстройств у детей и
                            подростков</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <a href="/psychologist/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock5.jpg" alt="Психолог" loading="lazy" decoding="async">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Психолог</h4>
                        </div>
                        <p class="key-services__description">Психологическое консультирование и коррекция поведения у
                            детей</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <a href="/endocrinology/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock6.jpg"
                            alt="Эндокринолог" loading="lazy" decoding="async">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Эндокринолог</h4>
                        </div>
                        <p class="key-services__description">Диагностика и лечение заболеваний эндокринной системы у
                            детей</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <a href="/gastroenterologist/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock7.jpg"
                            alt="Гастроэнтеролог" loading="lazy" decoding="async">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Гастроэнтеролог</h4>
                        </div>
                        <p class="key-services__description">Диагностика и лечение заболеваний желудочно-кишечного
                            тракта у детей</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

                <a href="/dermatology/" class="key-services__card">
                    <div class="key-services__image">
                        <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/stock8.jpg" alt="Дерматолог" loading="lazy" decoding="async">
                    </div>
                    <div class="key-services__content">
                        <div class="key-services__card-title">
                            <h4>Дерматолог</h4>
                        </div>
                        <p class="key-services__description">Диагностика и лечение кожных заболеваний у детей</p>
                        <span class="key-services__link">Подробнее</span>
                    </div>
                </a>

            </div>
        </div>
    </section>

    <section class="experts" id="experts">
        <div class="container">
            <div class="experts__title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <title>User-doctor SVG Icon</title>
                    <path fill="currentColor"
                        d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1c-6-.6-12.1-.9-18.3-.9h-91.4c-6.2 0-12.3.3-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48" />
                </svg>
                <h2><span>Специалисты</span> клиники</h2>
            </div>
            <div class="experts__carousel">
                <div class="swiper experts-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/mutaeva.jpg"
                                        alt="Мутаева Ольга Юрьевна" class="expert-card__image" loading="lazy" decoding="async">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Мутаева Ольга Юрьевна</h3>
                                    <p class="expert-card__specialty">Психиатр, клинический психолог, нарколог,
                                        психолог, психотерапевт</p>
                                    <p class="expert-card__experience">Стаж 21 год</p>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/kron.jpg"
                                        alt="Крон Елена Ивановна" class="expert-card__image" loading="lazy" decoding="async">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Крон Елена Ивановна</h3>
                                    <p class="expert-card__specialty">Психиатр, гирудотерапевт, нарколог, психотерапевт
                                    </p>
                                    <p class="expert-card__experience">Стаж 32 года</p>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/kronartem.jpg"
                                        alt="Крон Артём Владимирович" class="expert-card__image" loading="lazy" decoding="async">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Крон Артём Владимирович</h3>
                                    <p class="expert-card__specialty">Травматолог</p>
                                    <p class="expert-card__experience">Стаж 5 лет</p>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/fomenko.jpg"
                                        alt="Фоменко Оксана Анатольевна" class="expert-card__image" loading="lazy" decoding="async">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Фоменко Оксана Анатольевна</h3>
                                    <p class="expert-card__specialty">Дерматолог, венеролог</p>
                                    <p class="expert-card__experience">Стаж 21 год</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/puchkova.jpg"
                                        alt="Пучкова Анастасия Андреевна" class="expert-card__image" loading="lazy" decoding="async">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Пучкова Анастасия Андреевна</h3>
                                    <p class="expert-card__specialty">Клинический психолог, психолог</p>
                                    <p class="expert-card__experience">Стаж 6 лет</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="expert-card">
                                <div class="expert-card__photo">
                                    <img src="/wp-content/themes/amadeya-kids-redesign/assets/img/malaeva.jpg"
                                        alt="Малаева Муслимат Муслимовна" class="expert-card__image" loading="lazy" decoding="async">
                                </div>
                                <div class="expert-card__info">
                                    <h3 class="expert-card__name">Малаева Муслимат Муслимовна</h3>
                                    <p class="expert-card__specialty">Медсестра</p>
                                    <p class="expert-card__experience">Стаж 6 лет</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="swiper-button-prev experts__arrow experts__arrow--prev">
                    <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
                            fill="currentColor" />
                    </svg>
                </div>
                <div class="swiper-button-next experts__arrow experts__arrow--next">
                    <svg width="32" height="32" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M338.752 919.296a64 64 0 0 1 0-90.496L655.552 512l-316.8-316.8a64 64 0 0 1 90.496-90.496l362.048 362.048a64 64 0 0 1 0 90.496L429.248 919.296a64 64 0 0 1-90.496 0"
                            fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <section class="booking" id="booking">
        <div class="container">
            <div class="booking__content">
                <div class="booking__top-button">
                    <button type="button" class="booking__appointment-button" id="medflex-booking-trigger">Записаться на
                        приём</button>
                </div>
                <div class="booking__title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <title>House-check SVG Icon</title>
                        <g fill="currentColor">
                            <path
                                d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
                            <path
                                d="M12.5 16a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1.679-4.493l-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547l1.17-1.951a.5.5 0 1 1 .858.514" />
                        </g>
                    </svg>
                    <h2><span>Выезд врача</span> на дом</h2>
                </div>
                <div class="booking__main-content">
                    <div class="booking__text-content">
                        <p class="booking__description">Забота о здоровье вашего ребенка — наш приоритет! Специалисты
                            детской клиники «Амадея Кидс» готовы помочь в любой ситуации. Мы обеспечиваем комплексное
                            лечение детских заболеваний: вирусных и инфекционных, заболеваний внутренних органов,
                            психологических и неврологических расстройств. Наши врачи подходят к каждому маленькому
                            пациенту с особым вниманием и заботой.</p>
                        <p class="booking__description">Вы можете вызвать врача на дом. Для этого просто свяжитесь с
                            нами по телефону или оставьте заявку на сайте.</p>
                    </div>
                    <div class="booking__bottom-button">
                        <button type="button" class="site-header__button" id="cta-link-booking">Вызвать врача</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="reviews" id="reviews">
        <div class="container">
            <div class="reviews__block">
                <div class="reviews__title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <title>Review-response-solid SVG Icon</title>
                        <path fill="currentColor"
                            d="M2029 1939q19 19 19 45t-19 45t-45 19t-45-19l-785-784q-95 80-210 121t-240 42q-97 0-187-25t-168-71t-143-110t-110-142t-71-169T0 704q0-97 25-187t71-168t110-143T348 96t169-71T704 0q97 0 187 25t168 71t143 110t110 142t71 169t25 187q0 124-41 239t-122 211zM1146 525l-135-135l-435 434l-156-156l-136 136l292 292z" />
                    </svg>
                    <h2><span>Отзывы</span> пациентов</h2>
                </div>
                <div class="reviews__carousel">
                    <div class="swiper reviews-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="review-card">
                                    <div class="review-card__header">
                                        <h4 class="review-card__name">Любовь А.</h4>
                                        <div class="review-card__rating">
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                        </div>
                                    </div>
                                    <p class="review-card__text">Хорошая клиника, уютная. Где нет толпы людей и лишнего
                                        времени ожидания. Администратор - приветливая девушка.
                                        Доктор, также приятная девушка. Выслушала жалобы, осмотрела максимально
                                        аккуратно, задала вопросы и быстро нашла причину.
                                        Успокоила, что ничего страшного, просто нужно больше времени. Слава Богу, так и
                                        вышло. Через неделю пошли на поправку.
                                    </p>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="review-card">
                                    <div class="review-card__header">
                                        <h4 class="review-card__name">Марина О.</h4>
                                        <div class="review-card__rating">
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                        </div>
                                    </div>
                                    <p class="review-card__text">Данную клинику нашла в интернете, нужен был детский
                                        ортопед, быстро нашла и записалась на прием, перед приемом звонят и уточняют.
                                        Клиника приятная, чистая, в холле удобные диванчики, ребенку понравилась
                                        приятная музыка.
                                        Администратор приятная девушка, как могла развлекала дочь.
                                        Везде яркое красочное оформление, дочери очень понравилось.</p>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="review-card">
                                    <div class="review-card__header">
                                        <h4 class="review-card__name">Елена К.</h4>
                                        <div class="review-card__rating">
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                            <span class="star star--filled">★</span>
                                        </div>
                                    </div>
                                    <p class="review-card__text">Данную клинику посещаем неоднократно при заболевании
                                        моих детей.
                                        Очень доброжелательное отношение к маленьким пациентам. Назначение доктора
                                        всегда нам помогает!
                                        Ничего лишнего не назначают. Имеется обратная связь от доктора, всегда спросит,
                                        как пациент себя чувствует, много рекомендаций.
                                        Данную клинику буду советовать всем своим близким Стоит дочке, сыну приболеть,
                                        сразу идём только в эту клинику.
                                        Высочайший профессионализм персонала.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-prev reviews-button-prev"></div>
                        <div class="swiper-button-next reviews-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="map" id="contacts">
        <div class="container">
            <div class="map__wrapper">
                <div class="map__info">
                    <h3 class="map__subtitle">Где мы находимся?</h3>
                    <div class="map__contacts">
                        <p class="map__address">
                            г. Ставрополь, ул. 45 параллель, 26                        </p>
                        <p class="map__phone">Телефон: <a
                                href="tel:+79886271777">+7 (988) 627-17-77</a>
                        </p>
                        <p class="map__hours">Время работы:
                            Пн — Сб 7:30 — 19:00, Вс 7:30 — 13:00                        </p>
                    </div>
                </div>
                <div class="map__container">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff54c15c03d1d03c9ba97adfd4ef6fdad7925212baa99bae88d52f19a6edc76d&amp;source=constructor"
                        width="1200" height="400" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </section>
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
    url: "https://amadeyakids.ru",
    siteName: "Частная детская  клиника \"Амадея Кидс\"",
    images: [{ url: "https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png",   alt: "" }],
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"MedicalClinic","@id":"https://amadeyakids.ru/#clinic","name":"Детская клиника Амадея Кидс","url":"https://amadeyakids.ru/","telephone":"+7 (988) 627-17-77","address":{"@type":"PostalAddress","streetAddress":"ул. 45 Параллель, 26","addressLocality":"Ставрополь","addressRegion":"Ставропольский край","postalCode":"355000","addressCountry":"RU"},"geo":{"@type":"GeoCoordinates","latitude":45.0678,"longitude":41.9733},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"07:30","closes":"19:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Sunday"],"opens":"07:30","closes":"13:00"}],"medicalSpecialty":["Pediatric","GeneralPractice"],"areaServed":{"@type":"City","name":"Ставрополь"},"image":"https://amadeyakids.ru/wp-content/themes/amadeya-kids-redesign/assets/img/logo.png","logo":"https://amadeyakids.ru/wp-content/uploads/2023/12/logo.svg","priceRange":"₽₽","sameAs":["https://vk.com/amadeyakids","https://2gis.ru/stavropol/firm/amadeyakids","https://yandex.ru/maps/org/amadeyakids"]}` }} />
      <Header />
      <main dangerouslySetInnerHTML={{ __html: pageContent }} />
      <Footer />
    </>
  );
}
