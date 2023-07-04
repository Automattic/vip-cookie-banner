export type ShortText = string;
export type LongText = React.ReactNode | string;

export type Buckets = {
	essential: boolean;
	analytics: boolean;
	advertising: boolean;
};

export type GranularConsentContent = {
	name: ShortText;
	description: LongText;
};

export type SimpleConsentContent = {
	description: LongText;
	customizeButton: ShortText;
	acceptAllButton: ShortText;
};

export type CustomizedConsentContent = {
	description: LongText;
	categories: Record< keyof Buckets, GranularConsentContent >;
	acceptSelectionButton: ShortText;
};
