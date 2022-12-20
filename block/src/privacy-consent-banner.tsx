import DoNotSellDialog from './components/DoNotSellDialog';
import CookieBanner from './components/CookieBanner';
import gtmInit from './gtm-init';

gtmInit();

// @ts-ignore
const { render } = wp.element;

const App = () => {
	const selector = '#privacy-consent-banner';

	render(
		<>
			<CookieBanner />
			<DoNotSellDialog />
		</>,
		document.querySelector(selector)
	);
};

document.addEventListener('DOMContentLoaded', App, false);
