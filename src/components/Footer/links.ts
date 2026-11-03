export const NAV_LINKS = [
	{ key: "features", href: "#features" },
	{ key: "screenshots", href: "#screenshots" },
	{ key: "faq", href: "#faq" },
] as const;

export const LEGAL_LINKS = [
	{ key: "privacyPolicy", href: "/privacy-policy" },
	{ key: "termsOfService", href: "/terms-of-service" },
] as const;

export const fade = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5, delay },
});
