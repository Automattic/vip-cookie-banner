import cookie from 'cookie';
import isCountryInGdprZone from './is-country-in-gdpr-zone';
import isRegionInCcpaZone from './is-region-in-ccpa-zone';

export const TRACKING_PREFS_COOKIE_V1 = 'gtm_options';

export type TrackingPrefs = {
	ok: boolean;
	buckets: {
		ad_storage: boolean;
		analytics_storage: boolean;
		functionality_storage: true;
		personalization_storage: true;
		security_storage: true;
	};
};

const prefsDisallowAll: TrackingPrefs = {
	ok: false,
	buckets: {
		ad_storage: false,
		analytics_storage: false,
		functionality_storage: true,
		personalization_storage: true,
		security_storage: true,
	},
};

const prefsAllowAll: TrackingPrefs = {
	ok: false,
	buckets: {
		ad_storage: true,
		analytics_storage: true,
		functionality_storage: true,
		personalization_storage: true,
		security_storage: true,
	},
};

export const parseTrackingPrefs = (
	cookieV1?: string,
	defaultPrefs = prefsDisallowAll
): TrackingPrefs => {
	const { ok, buckets }: Partial<TrackingPrefs> = cookieV1 ? JSON.parse(cookieV1) : {};

	if (typeof ok === 'boolean') {
		return {
			ok,
			buckets: {
				...defaultPrefs.buckets,
				...buckets,
			},
		};
	}

	return defaultPrefs;
};

/**
 * Returns consents for every Cookie Jar bucket based on privacy driven approach
 *
 * WARNING: this function only works on the client side.
 *
 * @returns Whether we may track the current user
 */
export default function getTrackingPrefs(): TrackingPrefs {
	const cookies = cookie.parse(document.cookie);
	const isCountryGdpr = isCountryInGdprZone(cookies.country_code);
	const isCountryCcpa = isRegionInCcpaZone(cookies.country_code, cookies.region);

	if (!isCountryGdpr && !isCountryCcpa) {
		return prefsAllowAll;
	}

	// default tracking mechanism for GDPR is opt-in, for CCPA is opt-out:
	const defaultPrefs = isCountryGdpr ? prefsDisallowAll : prefsAllowAll;

	const { ok, buckets } = parseTrackingPrefs(cookies[TRACKING_PREFS_COOKIE_V1], defaultPrefs);

	if (isCountryCcpa) {
		// For CCPA, only the advertising bucket is relevant, the rest are always true
		return {
			ok,
			buckets: {
				...prefsAllowAll.buckets,
				ad_storage: buckets.ad_storage,
			},
		};
	}

	// For CCPA, only the advertising bucket is relevant, the rest are always true
	return { ok, buckets };
}