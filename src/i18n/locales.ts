export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const isLocale = (value: string | null | undefined): value is Locale =>
	!!value && (locales as readonly string[]).includes(value);

/** Maps a BCP 47 browser language tag (e.g. "en-US") to a supported locale. */
export const matchBrowserLocale = (languages: readonly string[]): Locale => {
	for (const lang of languages) {
		const base = lang.slice(0, 2).toLowerCase();
		if (isLocale(base)) return base;
	}
	return defaultLocale;
};
