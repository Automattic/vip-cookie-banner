import { TrackingPrefs } from './get-tracking-prefs';

type Buckets = {
	essential: boolean;
	analytics: boolean;
	advertising: boolean;
};

type GTMConsentOptions = {
	ad_storage: 'granted' | 'denied';
	analytics_storage: 'granted' | 'denied';
	functionality_storage: 'granted' | 'denied';
	personalization_storage: 'granted' | 'denied';
	security_storage: 'granted' | 'denied';
	wait_for_update: number;
};

const convertBucketsToGTMOpts = (
	buckets: Buckets
): Pick<TrackingPrefs['buckets'], 'ad_storage' | 'analytics_storage'> => {
	return {
		ad_storage: buckets.advertising,
		analytics_storage: buckets.analytics,
	};
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

export { convertBucketsToGTMOpts, convertPrefsToGTMOpts };
export type { GTMConsentOptions };
