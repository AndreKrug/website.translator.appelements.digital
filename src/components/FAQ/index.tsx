"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { memo } from "react";
import { fillRepo } from "@/config";
import type { FAQItem } from "@/types";
import FAQCard from "./FAQCard";

const FAQ = () => {
	const t = useTranslations("faq");
	const items = (t.raw("items") as FAQItem[]).map((item) => ({
		question: fillRepo(item.question),
		answer: fillRepo(item.answer),
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

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{items.map((item, index) => (
					<FAQCard key={item.question} item={item} index={index} />
				))}
			</div>
		</div>
	);
};

export default memo(FAQ);
