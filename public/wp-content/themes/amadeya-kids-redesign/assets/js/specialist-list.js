(function() {
	function applySpecialistListModifiers(root) {
		var containers = (root || document).querySelectorAll('.service-sidebar .specialist-list');
		containers.forEach(function(container) {
			var cards = container.querySelectorAll('.specialist-card');
			var count = cards.length;
			container.classList.remove('specialist-list--1','specialist-list--2','specialist-list--3');
			if (count === 1) {
				container.classList.add('specialist-list--1');
				cards.forEach(function(card, idx){
					card.classList.toggle('specialist-card--tall', idx === 0);
				});
			} else if (count === 2) {
				container.classList.add('specialist-list--2');
				cards.forEach(function(card){ card.classList.remove('specialist-card--tall'); });
			} else if (count === 3) {
				container.classList.add('specialist-list--3');
				cards.forEach(function(card, idx){
					card.classList.toggle('specialist-card--tall', idx === 2);
				});
			} else {
				cards.forEach(function(card){ card.classList.remove('specialist-card--tall'); });
			}
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() { applySpecialistListModifiers(document); });
	} else {
		applySpecialistListModifiers(document);
	}

	if ('MutationObserver' in window) {
		var observer = new MutationObserver(function(mutations) {
			for (var i = 0; i < mutations.length; i++) {
				var m = mutations[i];
				if (m.type === 'childList') {
					applySpecialistListModifiers(document);
					break;
				}
			}
		});
		observer.observe(document.body, { childList: true, subtree: true });
	}
})();


