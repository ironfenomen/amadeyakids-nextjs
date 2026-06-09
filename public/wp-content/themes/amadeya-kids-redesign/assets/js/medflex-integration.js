(function() {
    'use strict';

    function initMedFlexIntegration() {
        const checkMedFlex = setInterval(() => {
            if (window.MedFlexWidget || document.querySelector('#medflexRoundWidgetData')) {
                clearInterval(checkMedFlex);
                setupBookingButton();
            }
        }, 100);

        setTimeout(() => {
            clearInterval(checkMedFlex);
            setupFallbackBooking();
        }, 5000);
    }

    function setupBookingButton() {
        const bookingButton = document.getElementById('medflex-booking-trigger');
        if (bookingButton) {
            bookingButton.addEventListener('click', openMedFlexBooking);
        }

        // Кнопки MedFlex на страницах услуг (вторая кнопка)
        const serviceBookingButtons = document.querySelectorAll('.booking-medflex');
        serviceBookingButtons.forEach(button => {
            button.addEventListener('click', openMedFlexBooking);
        });
    }

    function openMedFlexBooking(e) {
        e.preventDefault();
        
        if (window.MedFlexWidget && typeof window.MedFlexWidget.open === 'function') {
            window.MedFlexWidget.open();
        } else {
            const medflexUrl = 'https://booking.medflex.ru?user=d08403255205cfe5edb04db2691b5e68';
            window.open(medflexUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
        }
    }

    function setupFallbackBooking() {
        const bookingButton = document.getElementById('medflex-booking-trigger');
        if (bookingButton) {
            bookingButton.addEventListener('click', openMedFlexBooking);
        }

        // Кнопки MedFlex на страницах услуг (вторая кнопка)
        const serviceBookingButtons = document.querySelectorAll('.booking-medflex');
        serviceBookingButtons.forEach(button => {
            button.addEventListener('click', openMedFlexBooking);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMedFlexIntegration);
    } else {
        initMedFlexIntegration();
    }

})();
