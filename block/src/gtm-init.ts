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

	const prefs = getTrackingPrefs();

	if (prefs) {
		const opts = convertPrefsToGTMOpts(prefs);
		gtag('consent', 'update', opts);
	}

	gtag('js', new Date());
	gtag('config', 'GTM-5QBVTK7');
};

export default gtmInit;
