import { CookieBannerProps } from '@automattic/privacy-toolset/dist/types';
import { useCallback, useEffect, useState } from 'react';
import useCookieBannerContent from './ConsentBanner/use-cookie-banner-content';
import {
	getTrackingPrefs,
	refreshCountryCodeCookieGdpr,
	setTrackingPrefs,
	shouldSeeCookieBanner,
} from './utils';
import { CookieBanner } from '@automattic/privacy-toolset';
import cookie from 'cookie';
import gtmInit from './gtm-init';

gtmInit();

// @ts-ignore
const { render } = wp.element;

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

	return <CookieBanner content={content} onAccept={handleAccept} />;
};

const CookieBannerContainer = () => {
	const [show, setShow] = useState(false);

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

const renderFrontEnd = () => {
	const selector = '#privacy-consent-banner';

	render(<CookieBannerContainer />, document.querySelector(selector));
};

document.addEventListener('DOMContentLoaded', renderFrontEnd, false);
