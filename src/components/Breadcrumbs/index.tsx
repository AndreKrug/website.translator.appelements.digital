"use client";

import { useTranslations } from "next-intl";
import { FiChevronRight, FiHome } from "react-icons/fi";
import type { BreadcrumbsProps } from "@/types";

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	const t = useTranslations();

	return (
		<nav className="mb-8 flex items-center gap-2 text-sm text-body">
			<a href="/" className="-ml-2 p-2 transition-colors hover:text-heading">
				<FiHome className="h-4 w-4" />
			</a>
			{items.map(({ label, labelKey, href }) => {
				const text = labelKey ? t(labelKey) : label;
				return (
					<div key={labelKey ?? label} className="flex items-center gap-2">
						<FiChevronRight className="h-4 w-4 text-gray-400 dark:text-white/20" />
						{href ? (
							<a
								href={href}
								className="font-medium transition-colors hover:text-heading"
							>
								{text}
							</a>
						) : (
							<span className="font-semibold text-heading">{text}</span>
						)}
					</div>
				);
			})}
		</nav>
	);
};

export default Breadcrumbs;
