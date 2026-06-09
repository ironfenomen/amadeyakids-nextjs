(function(){
	function setConsentAccepted(){
		try {
			localStorage.setItem('cookieConsentAccepted', '1');
		} catch(e) {
			document.cookie = 'cookieConsentAccepted=1; path=/; max-age=' + (60*60*24*365);
		}
	}

	function isConsentAccepted(){
		try {
			return localStorage.getItem('cookieConsentAccepted') === '1';
		} catch(e) {
			return document.cookie.indexOf('cookieConsentAccepted=1') !== -1;
		}
	}

	function showBanner(){
		var banner = document.querySelector('.cookie-consent');
		if (banner) {
			banner.classList.add('cookie-consent--visible');
			var btn = banner.querySelector('[data-accept-cookies]');
			if (btn) {
				btn.addEventListener('click', function(){
					setConsentAccepted();
					banner.classList.remove('cookie-consent--visible');
				});
			}
		}
	}

	document.addEventListener('DOMContentLoaded', function(){
		if (!isConsentAccepted()) {
			showBanner();
		}
	});
})();


