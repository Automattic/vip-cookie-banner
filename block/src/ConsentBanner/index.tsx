import { CookieBanner } from '@automattic/privacy-toolset';
import useCookieBannerContent from './use-cookie-banner-content';
import { refreshCountryCodeCookieGdpr } from '../utils';
import { useEffect } from 'react';

type Buckets = {
	essential: boolean;
	analytics: boolean;
	advertising: boolean;
};

const ConsentAccept = (buckets: Buckets) => {
	console.log({ buckets });
};

const ConsentBanner: React.FC = () => {
	return (
		<CookieBanner
			content={useCookieBannerContent()}
			onAccept={(buckets) => ConsentAccept(buckets)}
		/>
	);
};

export default ConsentBanner;
