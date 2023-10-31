import { getTrackingPrefs } from './utils';
import { convertPrefsToGTMOpts } from './utils';
import type { GTMConsentOptions } from './utils';

const GDPRRegions = [
  // European Member countries
  'AT', // Austria
  'BE', // Belgium
  'BG', // Bulgaria
  'CY', // Cyprus
  'CZ', // Czech Republic
  'DE', // Germany
  'DK', // Denmark
  'EE', // Estonia
  'ES', // Spain
  'FI', // Finland
  'FR', // France
  'GR', // Greece
  'HR', // Croatia
  'HU', // Hungary
  'IE', // Ireland
  'IT', // Italy
  'LT', // Lithuania
  'LU', // Luxembourg
  'LV', // Latvia
  'MT', // Malta
  'NL', // Netherlands
  'PL', // Poland
  'PT', // Portugal
  'RO', // Romania
  'SE', // Sweden
  'SI', // Slovenia
  'SK', // Slovakia
  'GB', // United Kingdom
  // Single Market Countries that GDPR applies to
  'CH', // Switzerland
  'IS', // Iceland
  'LI', // Liechtenstein
  'NO', // Norway
] as GTMConsentOptions['region'];

const CCPARegions = [
  'US'
] as GTMConsentOptions['region'];

// For clarity, all 3 defaults are explicitly set
// here, even though technically this can be done with
// GDPR and a default.

const defaultConsentOptsGDPR: GTMConsentOptions = {
	ad_storage: 'denied',
	analytics_storage: 'denied',
	functionality_storage: 'granted',
	personalization_storage: 'granted',
	security_storage: 'granted',
  wait_for_update: 5000,
  region: GDPRRegions,
};

const defaultConsentOptsCCPA: GTMConsentOptions = {
	ad_storage: 'granted',
	analytics_storage: 'granted',
	functionality_storage: 'granted',
	personalization_storage: 'granted',
	security_storage: 'granted',
  wait_for_update: 5000,
  region: CCPARegions,
};

const defaultConsentOpts: GTMConsentOptions = {
	ad_storage: 'granted',
	analytics_storage: 'granted',
	functionality_storage: 'granted',
	personalization_storage: 'granted',
	security_storage: 'granted',
  wait_for_update: 5000,
};

window.dataLayer = window.dataLayer || [];

export function gtag( ...args: any[] ) {
  window.dataLayer.push(arguments);
}

const gtmInit = () => {
	gtag('consent', 'default', defaultConsentOptsGDPR);
	gtag('consent', 'default', defaultConsentOptsCCPA);
	gtag('consent', 'default', defaultConsentOpts);

	const prefs = getTrackingPrefs();

	if ( prefs && ! prefs.isDefault ) {
		const opts = convertPrefsToGTMOpts(prefs);
		gtag('consent', 'update', opts);
	}

	gtag('js', new Date());
	gtag('config', 'GTM-5QBVTK7');
};

  export default gtmInit;
