"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { memo } from "react";
import type { GalleryProps } from "@/types";

const Gallery = ({ images, onOpen }: GalleryProps) => {
	const t = useTranslations("screenshots");

	return (
		<div>
			<div className="mb-10 flex flex-col items-center gap-4 text-center">
				<motion.span
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="section-label"
				>
					{t("label")}
				</motion.span>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.05 }}
					className="section-heading"
				>
					{t("headingPrefix")}{" "}
					<span className="accent">{t("headingAccent")}</span>
				</motion.h2>
			</div>

			<div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
				{images.map(({ src, caption }, index) => {
					const title = caption
						? t(`captions.${caption}.title`)
						: `${t("imageAlt")} ${index + 1}`;
					return (
						<motion.figure
							// biome-ignore lint/suspicious/noArrayIndexKey: screenshot list has no stable id
							key={index}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="md:last:odd:col-span-2 lg:last:odd:col-span-1"
						>
							<button
								type="button"
								onClick={() => onOpen(index)}
								className="group block w-full cursor-zoom-in focus:outline-none"
							>
								<img
									src={src}
									alt={title}
									loading={index < 2 ? "eager" : "lazy"}
									className="aspect-16/10 w-full rounded-2xl border border-gray-200 object-cover object-top shadow-xl transition-all duration-300 will-change-transform group-hover:-translate-y-1.5 group-hover:shadow-2xl group-focus-visible:ring-2 group-focus-visible:ring-picton-500 dark:border-white/10"
								/>
							</button>
							{caption && (
								<figcaption className="mt-5 px-1">
									<h3 className="mb-1.5 text-lg font-semibold text-heading md:text-xl">
										{title}
									</h3>
									<p className="text-body text-sm leading-relaxed md:text-base">
										{t(`captions.${caption}.description`)}
									</p>
								</figcaption>
							)}
						</motion.figure>
					);
				})}
			</div>
		</div>
	);
};

export default memo(Gallery);
