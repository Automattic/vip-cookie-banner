import gtmInit from './gtm-init';
import React from 'react';

gtmInit();

// @ts-ignore
const { render } = wp.element;

const LazyCookieBanner = React.lazy(() => import('./components/CookieBanner'))
const LazyDoNotSellDialog = React.lazy(() => import('./components/DoNotSellDialog'))

const App = () => {
	const selector = '#privacy-consent-banner';

	render(
		<React.Suspense>
			<LazyCookieBanner />
			<LazyDoNotSellDialog />
		</React.Suspense>,
		document.querySelector(selector)
	);
};

document.addEventListener('DOMContentLoaded', App, false);
