import { Button } from '@wordpress/components';
import { useEffect, useState } from 'react';
import ConsentBanner from './ConsentBanner';
import { refreshCountryCodeCookieGdpr } from './utils';
const { render } = wp.element;

const click = () => {
	gtag('consent', 'update', {
		ad_storage: 'granted',
		analytics_storage: 'denied',
	});
};
const FrontEnd: React.FC = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		refreshCountryCodeCookieGdpr(controller.signal)
			.then(() => {
				const cookies = cookie.parse(document.cookie);
				// setShow(shouldSeeCookieBanner(cookies.country_code, getTrackingPrefs()));
			})
			.catch(() => {
				// setShow(shouldSeeCookieBanner(undefined, getTrackingPrefs()));
			});

		return () => controller.abort();
	}, [setShow]);

	return <Button onClick={() => click()}>Test</Button>;
};

const renderFrontEnd = () => {
	const selector = '#privacy-consent-banner';

	render(<FrontEnd />, document.querySelector(selector));
};

document.addEventListener('DOMContentLoaded', renderFrontEnd, false);
