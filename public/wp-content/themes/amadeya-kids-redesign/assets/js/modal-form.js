(function() {
    'use strict';

    const config = {
        webhookUrl: '/api/lead',
        privacyPolicyUrl: window.siteConfig?.privacyPolicyUrl || '/privacy-policy/',
        utmCollectorUrl: window.siteConfig?.utmCollectorUrl || '',
        successMessage: 'Ваша заявка принята, ожидайте звонка в ближайшее время',
        errorMessage: 'Произошла ошибка при отправке заявки. Попробуйте еще раз или позвоните нам напрямую.'
    };

    let modalOverlay = null;
    let modalContent = null;
    let modalForm = null;
    let modalSuccess = null;
    let modalError = null;
    let inlineForm = null;
    let inlineSuccess = null;
    let inlineError = null;

    function init() {
        createModalHTML();
        cacheUtmFromLocation();
        bindEvents();
    }

    function cacheUtmFromLocation() {
        try {
            const params = new URLSearchParams(window.location.search);
            const keys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
            const utm = {};
            let has = false;
            keys.forEach(k => {
                const v = params.get(k);
                if (v) { utm[k] = v; has = true; }
            });
            if (has) {
                utm.landing = window.location.href;
                utm.ts = new Date().toISOString();
                localStorage.setItem('amadeya_utm', JSON.stringify(utm));
            }
        } catch (e) {}
    }

    function getCachedUtm() {
        try {
            const raw = localStorage.getItem('amadeya_utm');
            return raw ? JSON.parse(raw) : {};
        } catch (e) { return {}; }
    }

    function sendUtmBeaconIfConfigured(extra) {
        if (!config.utmCollectorUrl) return;
        try {
            const urlObj = new URL(config.utmCollectorUrl);
            const utm = getCachedUtm();
            Object.entries(utm).forEach(([k,v]) => { if (v) urlObj.searchParams.set(k, v); });
            if (extra) { Object.entries(extra).forEach(([k,v]) => { if (v) urlObj.searchParams.set(k, v); }); }
            if (navigator.sendBeacon) {
                navigator.sendBeacon(urlObj.toString());
            } else {
                fetch(urlObj.toString(), { method: 'GET', mode: 'no-cors' });
            }
        } catch (e) {}
    }

    function createModalHTML() {
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" type="button" aria-label="Закрыть модальное окно">&times;</button>
                
                <!-- Форма -->
                <div class="modal-form-container">
                    <h2 class="modal-title">Вызвать врача</h2>
                    <div class="modal-error" id="modal-error"></div>
                    <form class="modal-form" id="doctor-call-form">
                        <div class="form-group">
                            <label for="patient-name">Имя *</label>
                            <input type="text" id="patient-name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="patient-phone">Номер телефона *</label>
                            <input type="tel" id="patient-phone" name="phone" required>
                        </div>
                        <div class="modal-checkbox">
                            <input type="checkbox" id="privacy-agreement" name="privacy_agreement" required>
                            <label for="privacy-agreement">
                                Нажимая "отправить" вы принимаете 
                                <a href="${config.privacyPolicyUrl}" target="_blank">политику конфиденциальности</a>
                            </label>
                        </div>
                        <button type="submit" class="modal-submit">Отправить</button>
                    </form>
                </div>

                <!-- Сообщение об успехе -->
                <div class="modal-success" id="modal-success" style="display: none;">
                    <div class="modal-success-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3 class="modal-success-title">Заявка отправлена!</h3>
                    <p class="modal-success-text">${config.successMessage}</p>
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);

        modalContent = modalOverlay.querySelector('.modal-content');
        modalForm = modalOverlay.querySelector('#doctor-call-form');
        modalSuccess = modalOverlay.querySelector('#modal-success');
        modalError = modalOverlay.querySelector('#modal-error');

        inlineForm = document.getElementById('inline-callback-form');
        inlineSuccess = document.getElementById('inline-modal-success');
        inlineError = document.getElementById('inline-modal-error');
    }

    function bindEvents() {
        const ctaButton = document.getElementById('cta-link');
        if (ctaButton) {
            ctaButton.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        }

        const ctaButtonBooking = document.getElementById('cta-link-booking');
        if (ctaButtonBooking) {
            ctaButtonBooking.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        }

        const serviceBookingButtons = document.querySelectorAll('.service-booking-button:not(.booking-medflex)');
        serviceBookingButtons.forEach(function(btn){
            btn.addEventListener('click', function(e){
                e.preventDefault();
                openModal();
            });
        });

        // Закрытие модального окна
        const closeButton = modalOverlay.querySelector('.modal-close');
        closeButton.addEventListener('click', closeModal);

        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        modalForm.addEventListener('submit', handleFormSubmit);
        if (inlineForm) {
            inlineForm.addEventListener('submit', handleInlineFormSubmit);
            const inlineInputs = inlineForm.querySelectorAll('input[required]');
            inlineInputs.forEach(input => {
                input.addEventListener('blur', validateInlineField);
                input.addEventListener('input', clearInlineFieldError);
            });
        }

        const inputs = modalForm.querySelectorAll('input[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }

    function openModal() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            const firstInput = modalForm.querySelector('input[required]');
            if (firstInput) {
                firstInput.focus();
            }
        }, 300);
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            resetForm();
        }, 300);
    }

    function resetForm() {
        modalForm.reset();
        modalForm.style.display = 'block';
        modalSuccess.style.display = 'none';
        hideError();
        clearAllFieldErrors();
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const formData = new FormData(modalForm);
        const data = {
            name: formData.get('name').trim(),
            phone: formData.get('phone').trim(),
            privacy_agreement: formData.get('privacy_agreement') === 'on',
            source: 'doctor_call_modal',
            site: 'amadeyakids.ru',
            siteName: 'Амадея Детская',
            timestamp: new Date().toISOString(),
            utm: getCachedUtm()
        };

        sendToWebhook(data);
    }

    function handleInlineFormSubmit(e) {
        e.preventDefault();

        if (!validateInlineForm()) {
            return;
        }

        const formData = new FormData(inlineForm);
        const data = {
            name: formData.get('name').trim(),
            phone: formData.get('phone').trim(),
            privacy_agreement: formData.get('privacy_agreement') === 'on',
            source: 'doctor_call_inline_contacts',
            site: 'amadeyakids.ru',
            siteName: 'Амадея Детская',
            timestamp: new Date().toISOString(),
            utm: getCachedUtm()
        };

        const submitButton = inlineForm.querySelector('.modal-submit');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Отправка...';
        if (inlineError) {
            inlineError.textContent = '';
            inlineError.classList.remove('show');
        }

        let inlineRequest;
        try {
            const isBitrixLeadAdd = /crm\.lead\.add\.json/i.test(config.webhookUrl);
            if (isBitrixLeadAdd) {
                const urlObj = new URL(config.webhookUrl);
                urlObj.searchParams.set('FIELDS[NAME]', data.name || '');
                urlObj.searchParams.set('FIELDS[PHONE][0][VALUE]', data.phone || '');
                if (!urlObj.searchParams.get('FIELDS[PHONE][0][VALUE_TYPE]')) {
                    urlObj.searchParams.set('FIELDS[PHONE][0][VALUE_TYPE]', 'MOBILE');
                }
                const utm = data.utm || {};
                if (utm.utm_source) urlObj.searchParams.set('FIELDS[UTM_SOURCE]', utm.utm_source);
                if (utm.utm_medium) urlObj.searchParams.set('FIELDS[UTM_MEDIUM]', utm.utm_medium);
                if (utm.utm_campaign) urlObj.searchParams.set('FIELDS[UTM_CAMPAIGN]', utm.utm_campaign);
                if (utm.utm_content) urlObj.searchParams.set('FIELDS[UTM_CONTENT]', utm.utm_content);
                if (utm.utm_term) urlObj.searchParams.set('FIELDS[UTM_TERM]', utm.utm_term);
                if (!urlObj.searchParams.get('FIELDS[TITLE]')) {
                    urlObj.searchParams.set('FIELDS[TITLE]', 'Амадея Детская - Вызов врача');
                }
                if (!urlObj.searchParams.get('FIELDS[COMMENTS]')) {
                    urlObj.searchParams.set('FIELDS[COMMENTS]', 'Заявка с сайта Амадея Детская (amadeyakids.ru)\nИсточник: ' + (data.source || 'doctor_call_inline_contacts'));
                }
                inlineRequest = fetch(urlObj.toString(), { method: 'GET' });
            } else {
                inlineRequest = fetch(config.webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            }
        } catch (e) {
            inlineRequest = Promise.reject(e);
        }

        inlineRequest
        .then(response => {
            if (response.ok) {
                sendUtmBeaconIfConfigured({ form: 'inline' });
                inlineForm.style.display = 'none';
                if (inlineSuccess) inlineSuccess.style.display = 'block';
            } else {
                throw new Error('Ошибка сервера');
            }
        })
        .catch(error => {
            console.error('Ошибка отправки формы:', error);
            if (inlineError) {
                inlineError.textContent = config.errorMessage;
                inlineError.classList.add('show');
            }
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        });
    }

    function validateForm() {
        let isValid = true;
        
        const nameInput = modalForm.querySelector('#patient-name');
        const nameRegex = /^[а-яёА-ЯЁa-zA-Z\s\-']+$/;
        if (!nameInput.value.trim()) {
            showFieldError(nameInput, 'Введите ваше имя');
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            showFieldError(nameInput, 'Имя должно содержать минимум 2 символа');
            isValid = false;
        } else if (!nameRegex.test(nameInput.value.trim())) {
            showFieldError(nameInput, 'Имя может содержать только буквы, пробелы, дефисы и апострофы');
            isValid = false;
        }

        const phoneInput = modalForm.querySelector('#patient-phone');
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneInput.value.trim()) {
            showFieldError(phoneInput, 'Введите номер телефона');
            isValid = false;
        } else if (!phoneRegex.test(phoneInput.value.trim())) {
            showFieldError(phoneInput, 'Введите корректный номер телефона');
            isValid = false;
        }

        const agreementInput = modalForm.querySelector('#privacy-agreement');
        if (!agreementInput.checked) {
            showError('Необходимо принять политику конфиденциальности');
            isValid = false;
        }

        return isValid;
    }

    function validateInlineForm() {
        let isValid = true;

        const nameInput = inlineForm.querySelector('#inline-name');
        const phoneInput = inlineForm.querySelector('#inline-phone');
        const agreementInput = inlineForm.querySelector('#inline-privacy');

        const nameRegex = /^[а-яёА-ЯЁa-zA-Z\s\-']+$/;
        if (!nameInput.value.trim()) {
            showInlineFieldError(nameInput, 'Введите ваше имя');
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            showInlineFieldError(nameInput, 'Имя должно содержать минимум 2 символа');
            isValid = false;
        } else if (!nameRegex.test(nameInput.value.trim())) {
            showInlineFieldError(nameInput, 'Имя может содержать только буквы, пробелы, дефисы и апострофы');
            isValid = false;
        }

        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneInput.value.trim()) {
            showInlineFieldError(phoneInput, 'Введите номер телефона');
            isValid = false;
        } else if (!phoneRegex.test(phoneInput.value.trim())) {
            showInlineFieldError(phoneInput, 'Введите корректный номер телефона');
            isValid = false;
        }

        if (!agreementInput.checked) {
            if (inlineError) {
                inlineError.textContent = 'Необходимо принять политику конфиденциальности';
                inlineError.classList.add('show');
            }
            isValid = false;
        }

        return isValid;
    }

    function validateInlineField(e) {
        const field = e.target;
        const value = field.value.trim();
        if (field.hasAttribute('required') && !value) {
            showInlineFieldError(field, 'Это поле обязательно для заполнения');
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                showInlineFieldError(field, 'Введите корректный номер телефона');
            }
        } else if (field.id === 'inline-name' && value) {
            const nameRegex = /^[а-яёА-ЯЁa-zA-Z\s\-']+$/;
            if (value.length < 2) {
                showInlineFieldError(field, 'Имя должно содержать минимум 2 символа');
            } else if (!nameRegex.test(value)) {
                showInlineFieldError(field, 'Имя может содержать только буквы, пробелы, дефисы и апострофы');
            }
        }
    }

    function clearInlineFieldError(e) {
        const field = e.target;
        field.classList.remove('error');
        const errorMsg = field.parentNode.querySelector('.field-error');
        if (errorMsg) {
            errorMsg.remove();
        }
    }

    function showInlineFieldError(field, message) {
        field.classList.add('error');
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) existingError.remove();
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '4px';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    // Валидация отдельного поля
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();

        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'Это поле обязательно для заполнения');
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                showFieldError(field, 'Введите корректный номер телефона');
            }
        } else if (field.id === 'patient-name' && value) {
            const nameRegex = /^[а-яёА-ЯЁa-zA-Z\s\-']+$/;
            if (value.length < 2) {
                showFieldError(field, 'Имя должно содержать минимум 2 символа');
            } else if (!nameRegex.test(value)) {
                showFieldError(field, 'Имя может содержать только буквы, пробелы, дефисы и апострофы');
            }
        }
    }

    function clearFieldError(e) {
        const field = e.target;
        field.classList.remove('error');
        const errorMsg = field.parentNode.querySelector('.field-error');
        if (errorMsg) {
            errorMsg.remove();
        }
    }

    function showFieldError(field, message) {
        field.classList.add('error');
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '4px';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    function clearAllFieldErrors() {
        const errorFields = modalForm.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
        
        const errorMessages = modalForm.querySelectorAll('.field-error');
        errorMessages.forEach(msg => msg.remove());
    }

    function showError(message) {
        modalError.textContent = message;
        modalError.classList.add('show');
    }

    function hideError() {
        modalError.classList.remove('show');
    }

    function sendToWebhook(data) {
        const submitButton = modalForm.querySelector('.modal-submit');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Отправка...';
        hideError();

        if (!config.webhookUrl) {
            showError('Не настроен URL вебхука. Обратитесь к администратору.');
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            return;
        }

        let requestPromise;
        try {
            const isBitrixLeadAdd = /crm\.lead\.add\.json/i.test(config.webhookUrl);
            if (isBitrixLeadAdd) {
                const urlObj = new URL(config.webhookUrl);
                urlObj.searchParams.set('FIELDS[NAME]', data.name || '');
                urlObj.searchParams.set('FIELDS[PHONE][0][VALUE]', data.phone || '');
                if (!urlObj.searchParams.get('FIELDS[PHONE][0][VALUE_TYPE]')) {
                    urlObj.searchParams.set('FIELDS[PHONE][0][VALUE_TYPE]', 'MOBILE');
                }
                const utm = data.utm || {};
                if (utm.utm_source) urlObj.searchParams.set('FIELDS[UTM_SOURCE]', utm.utm_source);
                if (utm.utm_medium) urlObj.searchParams.set('FIELDS[UTM_MEDIUM]', utm.utm_medium);
                if (utm.utm_campaign) urlObj.searchParams.set('FIELDS[UTM_CAMPAIGN]', utm.utm_campaign);
                if (utm.utm_content) urlObj.searchParams.set('FIELDS[UTM_CONTENT]', utm.utm_content);
                if (utm.utm_term) urlObj.searchParams.set('FIELDS[UTM_TERM]', utm.utm_term);
                if (!urlObj.searchParams.get('FIELDS[TITLE]')) {
                    urlObj.searchParams.set('FIELDS[TITLE]', 'Заявка с сайта - Амадея Детская');
                }
                if (!urlObj.searchParams.get('FIELDS[COMMENTS]')) {
                    urlObj.searchParams.set('FIELDS[COMMENTS]', 'Заявка с сайта Амадея Детская (amadeyakids.ru)\nИсточник: ' + (data.source || 'doctor_call_modal'));
                }
                requestPromise = fetch(urlObj.toString(), { method: 'GET' });
            } else {
                requestPromise = fetch(config.webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            }
        } catch (e) {
            requestPromise = Promise.reject(e);
        }

        requestPromise
        .then(response => {
            if (response.ok) {
                sendUtmBeaconIfConfigured({ form: 'modal' });
                showSuccess();
            } else {
                throw new Error('Ошибка сервера');
            }
        })
        .catch(error => {
            console.error('Ошибка отправки формы:', error);
            showError(config.errorMessage);
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        });
    }

    // Показать сообщение об успехе
    function showSuccess() {
        modalForm.style.display = 'none';
        modalSuccess.style.display = 'block';
        
        // Автоматическое закрытие через 3 секунды
        setTimeout(() => {
            closeModal();
        }, 3000);
    }

    window.DoctorCallModal = {
        open: openModal,
        close: closeModal,
        setWebhookUrl: function(url) {
            config.webhookUrl = url;
        },
        setPrivacyPolicyUrl: function(url) {
            config.privacyPolicyUrl = url;
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
