import cookie from 'cookie';
import { getTrackingPrefs, TRACKING_PREFS_COOKIE_V1 } from '.';
import type { TrackingPrefs } from '.';
import type { GTMConsentOptions } from '../gtm-init';
import { convertPrefsToGTMOpts } from './convert-prefs';

// type TrackingPrefsData = Partial<Omit<TrackingPrefs, 'buckets'> & { buckets:  }>;

const COOKIE_MAX_AGE = 60 * 60 * 24 * (365.25 / 2); /* six months; 365.25 -> avg days in year */

const setTrackingPrefs = (newPrefs: TrackingPrefs): TrackingPrefs | false => {
	if (newPrefs.buckets) {
		const { ok, buckets } = getTrackingPrefs();

		const newOptions = {
			ok: typeof newPrefs.ok === 'boolean' ? newPrefs.ok : ok,
			isDefault: false,
			buckets: {
				...buckets,
				...newPrefs.buckets,
			},
		} as TrackingPrefs;

		document.cookie = cookie.serialize(TRACKING_PREFS_COOKIE_V1, JSON.stringify(newOptions), {
			path: '/',
			maxAge: COOKIE_MAX_AGE,
		});

		if (typeof gtag === 'function') {
			const opts = convertPrefsToGTMOpts(newOptions);
			gtag('consent', 'update', opts);
		}

		return newOptions;
	}

	return false;
};

export default setTrackingPrefs;
