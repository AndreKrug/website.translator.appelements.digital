"use client";

import { useTranslations } from "next-intl";
import type { AppInfoProps } from "@/types";

const AppInfo = ({
	version,
	minimumOS,
	releaseDate,
	className = "",
}: AppInfoProps) => {
	const t = useTranslations("hero");
	if (!version && !minimumOS && !releaseDate) return null;
	return (
		<div className={`flex flex-wrap justify-center gap-2 ${className}`}>
			{version && (
				<span className="info-badge text-xs">
					<span className="font-medium text-gray-500 dark:text-white/40">
						{t("version")}
					</span>
					<span className="font-semibold text-heading">{version}</span>
				</span>
			)}
			{minimumOS && (
				<span className="info-badge text-xs">
					<span className="font-medium text-gray-500 dark:text-white/40">
						{t("requires")}
					</span>
					<span className="font-semibold text-heading">iOS {minimumOS}+</span>
				</span>
			)}
			{releaseDate && (
				<span className="info-badge text-xs">
					<span className="font-medium text-gray-500 dark:text-white/40">
						{t("updated")}
					</span>
					<span className="font-semibold text-heading">{releaseDate}</span>
				</span>
			)}
		</div>
	);
};

export default AppInfo;
