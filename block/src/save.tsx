import { useBlockProps } from '@wordpress/block-editor';

const Save: React.FC = () => {
	return (
		<div {...useBlockProps.save()}>
			<div id="privacy-consent-banner"></div>
		</div>
	);
};

export default Save;
