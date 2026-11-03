import type { Screenshot, SocialLink } from "@/types";

export const storeConfig = {
	/** Set to true to pull live metadata from the App Store at build time */
	fetchRealData: false,
	/** Numeric App Store app ID (without the "id" prefix) */
	appStoreAppId: 686449807,
} as const;

/**
 * Source code repository. Changing `url` (e.g. to Codeberg) updates the
 * download links and the pricing cards; Forgejo/Codeberg use the same
 * `/releases/download/<tag>/<file>` layout as GitHub.
 */
const repository = {
	host: "GitHub",
	url: "https://github.com/AndreKrug/app.translate",
};

/** Fills `{repoUrl}` / `{repoHost}` in message texts read via `t.raw()`, which skips ICU interpolation */
export const fillRepo = (text: string) =>
	text
		.replaceAll("{repoUrl}", repository.url)
		.replaceAll("{repoHost}", repository.host);

const version = "0.0.4";

export const site = {
	name: "LLM-Translator",
	url: "https://translator.appelements.digital",
	description: "Ihre Texte. Ihre Kontrolle. Professionell übersetzt.",
	logo: "/AppIcon.png",
	keywords: ["mobile app", "landing page", "nextjs", "react", "typescript"],
	repository,
	storeLinks: {
		// macOS DMG download URL
		apple: `${repository.url}/releases/download/v${version}/translator-macos.dmg`,
		// Windows EXE download URL
		google: `${repository.url}/releases/download/v${version}/translator-windows-setup-${version}.exe`,
	},
	version,
	releaseDate: "July 05, 2026",
	social: [
		{ url: "#", icon: "RiInstagramFill", label: "Instagram" },
		{ url: "#", icon: "RiTelegram2Fill", label: "Telegram" },
		{ url: "#", icon: "RiTwitterXFill", label: "X (Twitter)" },
	] as SocialLink[],
} as const;

export const screenshots: Screenshot[] = [
	{ src: "/assets/screenshots/standard-translator.png", caption: "standard" },
	{ src: "/assets/screenshots/chat-translator.png", caption: "chat" },
	{ src: "/assets/screenshots/local-llm.png", caption: "local" },
];
