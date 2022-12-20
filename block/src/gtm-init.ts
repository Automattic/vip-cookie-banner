import { getTrackingPrefs } from './utils';
import { convertPrefsToGTMOpts } from './utils';
import type { GTMConsentOptions } from './utils';

const defaultConsentOpts: GTMConsentOptions = {
	ad_storage: 'denied',
	analytics_storage: 'granted',
	functionality_storage: 'granted',
	personalization_storage: 'granted',
	security_storage: 'granted',
	wait_for_update: 5000,
};

window.dataLayer = window.dataLayer || [];

function gtag() {
	window.dataLayer.push(arguments);
}

const gtmInit = () => {
	gtag('consent', 'default', defaultConsentOpts);
	console.log(window.dataLayer);

	(function (w, d, s, l, i) {
		// w.datalayer = w.dataLayer || [];
		// w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
		const f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', 'GTM-5QBVTK7');

	const prefs = getTrackingPrefs();

	console.log({ prefs });

	if (prefs) {
		const opts = convertPrefsToGTMOpts(prefs);
		gtag('consent', 'update', opts);
		console.log(window.dataLayer);
	}

	gtag('js', new Date());
	gtag('config', 'GTM-5QBVTK7');
};

export default gtmInit;
