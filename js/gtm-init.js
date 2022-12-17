window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
	console.log({ arguments });
}

gtag('consent', 'default', {
	ad_storage: 'denied',
	analytics_storage: 'granted',
	functionality_storage: 'granted',
	personalization_storage: 'granted',
	security_storage: 'granted',
});

(function (w, d, s, l, i) {
	w[l] = w[l] || [];
	w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
	const f = d.getElementsByTagName(s)[0],
		j = d.createElement(s),
		dl = l != 'dataLayer' ? '&l=' + l : '';
	j.async = true;
	j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
	f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-5QBVTK7');
