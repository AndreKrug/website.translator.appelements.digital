"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/config";
import type { FooterProps } from "@/types";
import { fade, LEGAL_LINKS, NAV_LINKS } from "./links";

const FooterMobile = ({ name, logo }: FooterProps) => {
	const t = useTranslations();

	return (
		<motion.div {...fade(0)} className="flex flex-col gap-6 md:hidden">
			<div className="flex items-center justify-between">
				<a href="/" className="flex items-center gap-2.5">
					<img
						src={logo}
						alt={`${name} logo`}
						className="h-9 w-9 rounded-xl border border-gray-200/60 object-cover dark:border-white/10"
					/>
					<span className="font-bold tracking-tight text-gray-900 dark:text-white">
						{name}
					</span>
				</a>
				<div className="flex items-center gap-2">
					<LanguageSwitcher />
					<ThemeToggle />
				</div>
			</div>

			<div className="flex gap-8">
				<nav className="flex flex-1 gap-8">
					<div className="flex flex-col gap-3">
						{NAV_LINKS.slice(0, 3).map(({ key, href }) => (
							<a
								key={key}
								href={href}
								className="text-sm text-body transition-colors hover:text-heading"
							>
								{t(`nav.${key}`)}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-3">
						{NAV_LINKS.slice(3).map(({ key, href }) => (
							<a
								key={key}
								href={href}
								className="text-sm text-body transition-colors hover:text-heading"
							>
								{t(`nav.${key}`)}
							</a>
						))}
					</div>
				</nav>
				<div className="flex flex-col gap-3">
					{LEGAL_LINKS.map(({ key, href }) => (
						<a
							key={key}
							href={href}
							className="text-sm text-body transition-colors hover:text-heading"
						>
							{t(`footer.${key}`)}
						</a>
					))}
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex gap-2">
					<SocialLinks items={site.social} />
				</div>
				<p className="text-xs text-gray-400 dark:text-white/25">
					© {new Date().getFullYear()} {name}.
				</p>
			</div>
		</motion.div>
	);
};

export default FooterMobile;
