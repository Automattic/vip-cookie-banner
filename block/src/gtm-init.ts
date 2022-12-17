import { getTrackingPrefs, TrackingPrefs } from './utils';

window.dataLayer = window.dataLayer || [];

type GTMConsentOptions = {
	ad_storage: 'granted' | 'denied';
	analytics_storage: 'granted' | 'denied';
	functionality_storage: 'granted' | 'denied';
	personalization_storage: 'granted' | 'denied';
	security_storage: 'granted' | 'denied';
	wait_for_update: number;
};

const defaultConsentOpts: GTMConsentOptions = {
	ad_storage: 'denied',
	analytics_storage: 'granted',
	functionality_storage: 'granted',
	personalization_storage: 'granted',
	security_storage: 'granted',
	wait_for_update: 1000,
};

const convertPrefsToGTMOpts = (prefs: TrackingPrefs) => {
	const pref = prefs.buckets;

	return {
		ad_storage: pref.ad_storage ? 'granted' : 'denied',
		analytics_storage: pref.analytics_storage ? 'granted' : 'denied',
		functionality_storage: pref.functionality_storage ? 'granted' : 'denied',
		personalization_storage: pref.personalization_storage ? 'granted' : 'denied',
		security_storage: pref.security_storage ? 'granted' : 'denied',
	} as GTMConsentOptions;
};

function gtag() {
	window.dataLayer.push(arguments);
	console.log(window.dataLayer);
}

const gtmInit = () => {
	gtag('consent', 'default', defaultConsentOpts);

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

	const prefs = getTrackingPrefs();

	if (prefs) {
		const opts = convertPrefsToGTMOpts(prefs);
		gtag('consent', 'update', opts);
	}
};

export default gtmInit;
