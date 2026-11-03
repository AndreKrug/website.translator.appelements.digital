"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { memo } from "react";
import { site } from "@/config";
import type { PricingTier } from "@/types";
import TierCard from "./TierCard";

// t.raw() skips ICU interpolation, so repository placeholders are filled in here
const fillRepo = (text: string) =>
	text
		.replaceAll("{repoUrl}", site.repository.url)
		.replaceAll("{repoHost}", site.repository.host);

const Pricing = () => {
	const t = useTranslations("pricing");
	const tiers = (t.raw("tiers") as PricingTier[]).map((tier) => ({
		...tier,
		price: fillRepo(tier.price),
		description: fillRepo(tier.description),
		features: tier.features.map(fillRepo),
		ctaHref: fillRepo(tier.ctaHref),
	}));

	return (
		<div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4 }}
				className="mb-12 flex flex-col items-center text-center"
			>
				<span className="section-label mb-4">{t("label")}</span>
				<h2 className="section-heading max-w-2xl">
					{t("headingPrefix")}{" "}
					<span className="accent">{t("headingAccent")}</span>
				</h2>
			</motion.div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{tiers.map((tier, index) => (
					<TierCard key={tier.name} tier={tier} index={index} />
				))}
			</div>
		</div>
	);
};

export default memo(Pricing);
