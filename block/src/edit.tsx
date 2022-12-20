import { useBlockProps } from '@wordpress/block-editor';

const Edit: React.FC = () => {
	return (
		<div {...useBlockProps()}>
			<div id="privacy-consent-banner">Consent Banner Placeholder</div>
		</div>
	);
};

export default Edit;
