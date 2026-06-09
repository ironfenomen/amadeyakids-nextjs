(function(){
	document.addEventListener('DOMContentLoaded', function(){
		const expertsSwiper = new Swiper('.experts-swiper', {
			slidesPerView: 5,
			spaceBetween: 20,
			loop: true,
			centeredSlides: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			effect: 'slide',
			speed: 600,
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 12,
					centeredSlides: false,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 16,
					centeredSlides: false,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 20,
					centeredSlides: false,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 20,
					centeredSlides: false,
				},
				1400: {
					slidesPerView: 5,
					spaceBetween: 20,
					centeredSlides: false,
				},
			},
			grabCursor: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		});

		const reviewsSwiper = new Swiper('.reviews-swiper', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			centeredSlides: false,
			navigation: {
				nextEl: '.reviews-button-next',
				prevEl: '.reviews-button-prev',
			},
			effect: 'slide',
			speed: 600,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					centeredSlides: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					centeredSlides: false,
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,
				},
			},
			grabCursor: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		});
	});
})();