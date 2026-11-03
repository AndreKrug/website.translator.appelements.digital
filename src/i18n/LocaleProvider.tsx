"use client";

import { NextIntlClientProvider } from "next-intl";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import de from "@/messages/de.json";
import en from "@/messages/en.json";
import {
	defaultLocale,
	isLocale,
	type Locale,
	matchBrowserLocale,
} from "./locales";

const messages = { de, en } satisfies Record<Locale, typeof de>;

const STORAGE_KEY = "locale";

interface LocaleSwitcherContextValue {
	locale: Locale;
	setLocale: (locale: Locale) => void;
}

const LocaleSwitcherContext = createContext<LocaleSwitcherContextValue | null>(
	null,
);

export const useLocaleSwitcher = () => {
	const ctx = useContext(LocaleSwitcherContext);
	if (!ctx) {
		throw new Error("useLocaleSwitcher must be used within LocaleProvider");
	}
	return ctx;
};

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
	const [locale, setLocaleState] = useState<Locale>(defaultLocale);

	// Runs only on the client: static export has no server request to read
	// the browser's language from, so the default locale is detected here
	// after the (defaultLocale) markup has already hydrated.
	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		const next = isLocale(stored)
			? stored
			: matchBrowserLocale(navigator.languages ?? [navigator.language]);
		setLocaleState(next);
	}, []);

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const setLocale = useCallback((next: Locale) => {
		localStorage.setItem(STORAGE_KEY, next);
		setLocaleState(next);
	}, []);

	const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

	return (
		<LocaleSwitcherContext.Provider value={value}>
			<NextIntlClientProvider
				locale={locale}
				messages={messages[locale]}
				timeZone="UTC"
			>
				{children}
			</NextIntlClientProvider>
		</LocaleSwitcherContext.Provider>
	);
};

export default LocaleProvider;
