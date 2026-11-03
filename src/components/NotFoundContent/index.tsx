"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FiArrowLeft } from "react-icons/fi";

const NotFoundContent = () => {
	const t = useTranslations("notFound");

	return (
		<main className="flex min-h-[calc(100vh-320px)] flex-col items-center justify-center px-4 py-16 text-center">
			<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-picton-500">
				{t("eyebrow")}
			</p>
			<h1 className="mb-5 text-5xl font-black tracking-tight text-gray-900 sm:text-6xl dark:text-white">
				{t("heading")}
			</h1>
			<p className="mb-10 max-w-sm text-base leading-relaxed text-gray-500 dark:text-white/45">
				{t("description")}
			</p>
			<Link
				href="/"
				className="inline-flex items-center gap-2.5 rounded-xl bg-picton-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-picton-700 hover:shadow-lg active:scale-95"
			>
				<FiArrowLeft className="h-4 w-4" />
				{t("backHome")}
			</Link>
		</main>
	);
};

export default NotFoundContent;
