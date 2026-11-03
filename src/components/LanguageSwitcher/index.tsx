"use client";

import { useTranslations } from "next-intl";
import { FiGlobe } from "react-icons/fi";
import { useLocaleSwitcher } from "@/i18n/LocaleProvider";
import { locales } from "@/i18n/locales";

const LanguageSwitcher = () => {
	const t = useTranslations("languageSwitcher");
	const { locale, setLocale } = useLocaleSwitcher();

	return (
		<div className="relative inline-flex items-center">
			<FiGlobe className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-gray-500 dark:text-white/40" />
			<select
				aria-label={t("srLabel")}
				value={locale}
				onChange={(e) => setLocale(e.target.value as (typeof locales)[number])}
				className="cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-100/60 py-1.5 pl-8 pr-7 text-xs font-medium text-gray-700 transition-colors hover:text-gray-900 dark:border-white/10 dark:bg-white/4 dark:text-white/70 dark:hover:text-white"
			>
				{locales.map((code) => (
					<option key={code} value={code}>
						{t(code)}
					</option>
				))}
			</select>
			<svg
				aria-hidden="true"
				viewBox="0 0 20 20"
				className="pointer-events-none absolute right-2 h-3 w-3 text-gray-500 dark:text-white/40"
			>
				<path
					d="M5 7.5L10 12.5L15 7.5"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default LanguageSwitcher;
