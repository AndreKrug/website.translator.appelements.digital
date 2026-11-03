import type { Locale } from "@/i18n/locales";

export interface AppHeroProps {
	title: string;
	description?: string;
	logo: string;
	storeLinks: { apple: string; google: string };
	version?: string;
	releaseDate?: string;
}

export interface Feature {
	title: string;
	description: string;
	icon: string;
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface SocialLink {
	url: string;
	icon: string;
	label: string;
}

export interface MarkdownLayoutProps {
	content: Record<Locale, { html: string; raw: string }>;
	title: Record<Locale, string>;
	lastUpdated: string;
}

export interface PricingTier {
	name: string;
	price: string;
	period?: string;
	description: string;
	features: string[];
	cta: string;
	ctaHref: string;
	highlighted?: boolean;
	badge?: string;
}

export interface StoreData {
	name: string;
	description: string;
	logo: string;
	version?: string;
	releaseDate?: string;
	screenshots: string[];
	storeLinks: { apple: string; google: string };
}

export type ThemeMode = "light" | "dark" | "system";

export interface StoreButtonsProps {
	storeLinks: { apple: string; google: string };
	className?: string;
}

export interface AppInfoProps {
	version?: string;
	className?: string;
	releaseDate?: string;
}

export interface BreadcrumbItem {
	label?: string;
	labelKey?: string;
	href?: string;
}

export interface BreadcrumbsProps {
	items: BreadcrumbItem[];
}

export interface FeatureCardProps {
	feature: Feature;
	index: number;
}

export interface FAQCardProps {
	item: FAQItem;
	index: number;
}

export interface TierCardProps {
	tier: PricingTier;
	index: number;
}

export interface SocialLinksProps {
	items: SocialLink[];
}

export interface FooterProps {
	name: string;
	logo: string;
}

export interface Screenshot {
	src: string;
	/** Key under `screenshots.captions` in the messages */
	caption?: "standard" | "chat" | "local";
}

export interface GalleryProps {
	images: Screenshot[];
	onOpen: (index: number) => void;
}

export interface ScreenshotsProps {
	images: Screenshot[];
}
