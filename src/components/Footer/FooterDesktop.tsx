"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/config";
import type { FooterProps } from "@/types";
import { fade, LEGAL_LINKS, NAV_LINKS } from "./links";

const colHeader = (title: string) => (
	<p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-white/30">
		{title}
	</p>
);

const navLink = (label: string, href: string) => (
	<a
		key={label}
		href={href}
		className="group flex items-center gap-2 text-sm text-body transition-colors hover:text-heading"
	>
		<span className="h-px w-0 bg-picton-500 transition-all duration-300 group-hover:w-3" />
		{label}
	</a>
);

const FooterDesktop = ({ name, logo }: FooterProps) => {
	const t = useTranslations();

	return (
		<div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-8 lg:gap-12">
			<motion.div {...fade(0)} className="flex flex-col gap-5">
				<a href="/" className="flex items-center gap-3">
					<img
						src={logo}
						alt={`${name} logo`}
						className="h-10 w-10 rounded-xl border border-gray-200/60 object-cover dark:border-white/10"
					/>
					<span className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
						{name}
					</span>
				</a>
				<p className="max-w-60 text-sm leading-relaxed text-body">
					{t("meta.description")}
				</p>
				<div className="flex flex-wrap gap-2">
					<a
						href={site.storeLinks.apple}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2.5 rounded-xl bg-gray-900 px-4 py-2.5 transition-all duration-200 hover:opacity-80 dark:bg-white"
					>
						<FaApple className="h-4 w-4 shrink-0 text-white dark:text-black" />
						<span className="text-left">
							<span className="block text-[9px] font-normal leading-tight text-white/60 dark:text-black/50">
								{t("storeButtons.downloadFor")}
							</span>
							<span className="block text-xs font-bold leading-tight text-white dark:text-black">
								{t("storeButtons.macos")}
							</span>
						</span>
					</a>
					<a
						href={site.storeLinks.google}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 transition-all duration-200 hover:bg-gray-50 dark:border-white/12 dark:bg-white/6 dark:hover:bg-white/10"
					>
						<FaGooglePlay className="h-4 w-4 shrink-0 text-gray-800 dark:text-white" />
						<span className="text-left">
							<span className="block text-[9px] font-normal leading-tight text-gray-500 dark:text-white/45">
								{t("storeButtons.downloadFor")}
							</span>
							<span className="block text-xs font-bold leading-tight text-gray-900 dark:text-white">
								{t("storeButtons.windows")}
							</span>
						</span>
					</a>
				</div>
				<p className="mt-auto text-xs text-gray-400 dark:text-white/25">
					© {new Date().getFullYear()} {name}. {t("footer.allRightsReserved")}
				</p>
			</motion.div>

			<motion.div {...fade(0.1)} className="flex flex-col gap-4">
				{colHeader(t("footer.product"))}
				<nav className="flex flex-col gap-3">
					{NAV_LINKS.map(({ key, href }) => navLink(t(`nav.${key}`), href))}
				</nav>
			</motion.div>

			<motion.div {...fade(0.15)} className="flex flex-col gap-4">
				{colHeader(t("footer.legal"))}
				<nav className="flex flex-col gap-3">
					{LEGAL_LINKS.map(({ key, href }) =>
						navLink(t(`footer.${key}`), href),
					)}
				</nav>
			</motion.div>

			<motion.div {...fade(0.2)} className="flex flex-col items-end gap-4">
				{colHeader(t("footer.followUs"))}
				<div className="flex flex-wrap justify-end gap-2">
					<SocialLinks items={site.social} />
				</div>
				<div className="flex items-center gap-2">
					<LanguageSwitcher />
					<ThemeToggle />
				</div>
			</motion.div>
		</div>
	);
};

export default FooterDesktop;
