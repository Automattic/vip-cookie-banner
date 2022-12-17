import CookieBanner from './components/CookieBanner';
import gtmInit from './gtm-init';

gtmInit();

// @ts-ignore
const { render } = wp.element;

const renderFrontEnd = () => {
	const selector = '#privacy-consent-banner';

	render(<CookieBanner />, document.querySelector(selector));
};

document.addEventListener('DOMContentLoaded', renderFrontEnd, false);
