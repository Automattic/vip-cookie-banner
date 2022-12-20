import {
	CookieBanner as AutomatticCookieBanner,
	CookieBannerProps,
} from '@automattic/privacy-toolset';
import useCookieBannerContent from './use-cookie-banner-content';
import {
	convertBucketsToGTMOpts,
	getTrackingPrefs,
	refreshCountryCodeCookieGdpr,
	setTrackingPrefs,
	shouldSeeCookieBanner,
} from '../../utils';
import { useCallback, useEffect, useState } from 'react';
import cookie from 'cookie';

const CookieBannerInner = ({ onClose }: { onClose: () => void }) => {
	const content = useCookieBannerContent();

	const handleAccept = useCallback<CookieBannerProps['onAccept']>(
		(buckets) => {
			console.log({ buckets });
			setTrackingPrefs({
				ok: true,
				buckets: {
					...convertBucketsToGTMOpts(buckets),
					functionality_storage: true,
					personalization_storage: true,
					security_storage: true,
				},
			});
			onClose();
		},
		[onClose]
	);

	// TODO Replace cookie bannner view analytics action

	return <AutomatticCookieBanner content={content} onAccept={handleAccept} />;
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

const CookieBanner: React.FC = () => {
	return <CookieBannerContainer />;
};

export default CookieBanner;
