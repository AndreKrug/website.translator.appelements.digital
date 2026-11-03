"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocaleSwitcher } from "@/i18n/LocaleProvider";
import type { MarkdownLayoutProps } from "@/types";
import TableOfContents from "./TableOfContents";

const MarkdownLayout = ({
	content,
	title,
	lastUpdated,
}: MarkdownLayoutProps) => {
	const { locale } = useLocaleSwitcher();
	const t = useTranslations("legal");
	const { html, raw } = content[locale];

	return (
		<div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative mb-12 overflow-hidden rounded-2xl border border-gray-200/60 bg-white px-10 py-12 dark:border-white/8 dark:bg-white/4 md:px-16 md:py-14"
			>
				<span className="section-label mb-4 inline-flex">
					{t("sectionLabel")}
				</span>
				<h1 className="mb-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">
					{title[locale]}
				</h1>
				<p className="text-sm text-gray-500 dark:text-white/35">
					{t("lastUpdated")}: {lastUpdated}
				</p>
			</motion.div>

			<div className="flex gap-16">
				<motion.article
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="min-w-0 flex-1"
				>
					<div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
				</motion.article>

				<motion.aside
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="hidden w-64 shrink-0 xl:block"
				>
					<TableOfContents content={raw} />
				</motion.aside>
			</div>
		</div>
	);
};

export default MarkdownLayout;
