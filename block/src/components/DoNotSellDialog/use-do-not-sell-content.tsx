import { __ } from '@wordpress/i18n';

export const useDoNotSellContent = () => {
	return {
		title: __('Do Not Sell or Share My Data', 'automattic-privacy-toolset'),
		longDescription: (
			<>
				<p>
					{__(
						'Your privacy is critically important to us so we strive to be transparent in how we are collecting, using, and sharing your information. We use cookies and other technologies to help us identify and track visitors to our sites, to store usage and access preferences for our services, to track and understand email campaign effectiveness, and to deliver targeted ads. Learn more in ',
						'automattic-privacy-toolset'
					)}
					<a href="https://automattic.com/privacy/" target="_blank">
						our Privacy Policy
					</a>
					{__(' and ', 'automattic-privacy-toolset')}
					<a href="https://automattic.com/cookies/" target="_blank">
						our Cookie Policy
					</a>
					.
				</p>
				<p>
					{__(
						'Like many websites, we share some of the data we collect through cookies with certain third party advertising and analytics vendors. The personal information we share includes online identifiers; internet or other network or device activity (such as cookie information, other device identifiers, and IP address); and geolocation data (approximate location information from your IP address). We do not share information that identifies you personally, like your name or contact information.',
						'automattic-privacy-toolset'
					)}
				</p>
				<p>
					{__(
						'We never directly sell your personal information in the conventional sense (i.e., for money), but in some U.S. states the sharing of your information with advertising/analytics vendors can be considered a “sale” of your information, which you may have the right to opt out of. To opt out, click the link below.',
						'automattic-privacy-toolset'
					)}
				</p>
				<p>
					{__(
						'Our opt-out is managed through cookies, so if you delete cookies, your browser is set to delete cookies automatically after a certain length of time, or if you visit sites in a different browser, you’ll need to make this selection again.',
						'automattic-privacy-toolset'
					)}
				</p>
				<p>
					{__(
						'If you have any questions about this opt out, or how we honor your legal rights, you can contact us at ',
						'automattic-privacy-toolset'
					)}
					<a href="mailto:vipprivacyshield@automattic.com">vipprivacyshield@automattic.com</a>.
				</p>
			</>
		),
		toggleLabel: __('Do Not Sell or Share My Data'),
		closeButton: __('Close'),
	};
};
