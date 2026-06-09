(function(){
	document.addEventListener('DOMContentLoaded', function(){
		if (!window.Swiper) { return; }
		const container = document.querySelector('.booking-experts-swiper');
		if (!container) { return; }

		new Swiper('.booking-experts-swiper', {
			loop: true,
			spaceBetween: 16,
			slidesPerView: 2,
			centeredSlides: false,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			speed: 600,
			pagination: {
				el: '.booking-experts-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.booking-experts-next',
				prevEl: '.booking-experts-prev',
			},
			breakpoints: {
				320: { slidesPerView: 1, spaceBetween: 12 },
				640: { slidesPerView: 2, spaceBetween: 14 },
				1024: { slidesPerView: 2, spaceBetween: 16 },
			}
		});
	});
})();


