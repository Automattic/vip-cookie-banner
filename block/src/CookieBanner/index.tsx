import {
	CookieBanner as AutomatticCookieBanner,
	CookieBannerProps,
} from '@automattic/privacy-toolset';
import useCookieBannerContent from './use-cookie-banner-content';
import {
	getTrackingPrefs,
	refreshCountryCodeCookieGdpr,
	setTrackingPrefs,
	shouldSeeCookieBanner,
} from '../utils';
import { useCallback, useEffect, useState } from 'react';
import cookie from 'cookie';

const CookieBannerInner = ({ onClose }: { onClose: () => void }) => {
	const content = useCookieBannerContent();

	const handleAccept = useCallback<CookieBannerProps['onAccept']>(
		(buckets) => {
			setTrackingPrefs({ ok: true, buckets });
			onClose();
		},
		[onClose]
	);

	// TODO Replace cookie bannner view analytics action

	return <AutomatticCookieBanner content={content} onAccept={handleAccept} />;
};

const CookieBannerContainer = () => {
	const [show, setShow] = useState(false);

	// TODO GTM updata as soon as prefs updated
	useEffect(() => {
		const controller = new AbortController();

		refreshCountryCodeCookieGdpr(controller.signal)
			.then(() => {
				const cookies = cookie.parse(document.cookie);

				setShow(shouldSeeCookieBanner(cookies.country_code, getTrackingPrefs()));
			})
			.catch(() => {
				setShow(shouldSeeCookieBanner(undefined, getTrackingPrefs()));
			});

		return () => controller.abort();
	}, [setShow]);

	const handleClose = useCallback(() => {
		setShow(false);
	}, [setShow]);

	return show ? <CookieBannerInner onClose={handleClose} /> : null;
};

const CookieBanner: React.FC = () => {
	return <CookieBannerContainer />;
};

export default CookieBanner;
