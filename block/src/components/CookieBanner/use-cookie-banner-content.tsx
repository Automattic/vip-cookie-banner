// import type { CookieBannerProps } from '@automattic/privacy-toolset';
import { __ } from '@wordpress/i18n';

const useCookieBannerContent = () => {
	return {
		simpleConsent: {
			description: (
				<>
					<p>
						{__(
							'As an open source company, we take your privacy seriously and want to be as transparent as possible. So: We use cookies to collect some personal data from you (like your browsing data, IP addresses, and other unique identifiers). Some of these cookies we absolutely need in order to make things work, and others you can choose in order to optimize your experience while using our site and services.',
							'automattic-privacy-toolset'
						)}
					</p>
				</>
			),
			acceptAllButton: __('Accept all', 'automattic-privacy-toolset'),
			customizeButton: __('Customize', 'automattic-privacy-toolset'),
		},
		customizedConsent: {
			description: (
				<>
					<p>
						{__(
							'As an open source company, we take your privacy seriously and want to be as transparent as possible. So: We use cookies to collect some personal data from you (like your browsing data, IP addresses, and other unique identifiers). Some of these cookies we absolutely need in order to make things work, and others you can choose in order to optimize your experience while using our site and services.',
							'automattic-privacy-toolset'
						)}
					</p>
				</>
			),
			categories: {
				essential: {
					name: __('Required', 'automattic-privacy-toolset'),
					description: __(
						'These cookies are essential for our websites and services to perform basic functions and are necessary for us to operate certain features, like allowing registered users to authenticate and perform account-related functions, storing preferences set by users (like account name, language, and location), and ensuring our services operate properly.',
						'automattic-privacy-toolset'
					),
				},
				analytics: {
					name: __('Analytics', 'automattic-privacy-toolset'),
					description: __(
						'These cookies allow us to optimize performance by collecting information on how users interact with our websites.',
						'automattic-privacy-toolset'
					),
				},
				advertising: {
					name: __('Advertising', 'automattic-privacy-toolset'),
					description: __(
						'We and our advertising partners set these cookies to provide you with relevant content and to understand that content’s effectiveness.',
						'automattic-privacy-toolset'
					),
				},
			},
			acceptSelectionButton: __('Accept selection', 'automattic-privacy-toolset'),
		},
	};
};

export default useCookieBannerContent;
