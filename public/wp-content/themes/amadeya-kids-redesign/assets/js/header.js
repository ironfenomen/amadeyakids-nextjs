(function(){
	function setText(id, value){
		var el = document.getElementById(id);
		if (el && value) el.textContent = value;
	}
	function setLink(id, href, text){
		var el = document.getElementById(id);
		if (!el) return;
		if (href) el.setAttribute('href', href);
		if (text) el.textContent = text;
	}

	document.addEventListener('DOMContentLoaded', function(){
		var cfg = window.siteConfig || {};
		setText('brand-name', cfg.brandName);
		setText('center-type', cfg.centerType);
		setText('address', cfg.address);
		setText('hours', cfg.hours);
		setLink('phone', cfg.phone ? ('tel:' + cfg.phone) : '', cfg.phoneDisplay);
		setLink('cta-link', cfg.ctaLink);
		setLink('whatsapp-link', cfg.whatsapp);
		setLink('telegram-link', cfg.telegram);
	});

	document.addEventListener('DOMContentLoaded', function() {
		const dropdownItems = document.querySelectorAll('.main-nav__item--dropdown');

		window.addEventListener('resize', function() {
			if (window.innerWidth > 768) {
				dropdownItems.forEach(item => {
					item.classList.remove('active');
				});
			}
		});
	});
})();
