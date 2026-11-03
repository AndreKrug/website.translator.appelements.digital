"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FiChevronDown } from "react-icons/fi";
import type { AppHeroProps } from "@/types";
import AppInfo from "./AppInfo";
import StoreButtons from "./StoreButtons";
import TileField from "./TileField";

const up = (delay = 0) => ({
	initial: { opacity: 0, y: 28 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] as const },
});

const AppHero = ({
	title,
	description,
	storeLinks,
	logo,
	version,
	releaseDate,
}: AppHeroProps) => {
	const t = useTranslations("hero");
	const scrollToNextSection = () => {
		document
			.getElementById("screenshots")
			?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<section className="relative flex min-h-svh flex-col px-4 text-center md:px-8 md:text-left">
			<TileField />

			<div className="relative z-10 flex w-full max-w-2xl flex-1 flex-col items-center pt-28 pb-[380px] sm:pt-36 md:items-start md:justify-center md:pt-40 md:pb-24 lg:max-w-3xl">
				<motion.div
					{...up(0)}
					className="mb-10 flex flex-wrap items-center justify-center gap-4 md:mb-14 md:justify-start"
				>
					<img
						src={logo}
						alt={`${title} icon`}
						fetchPriority="high"
						loading="eager"
						className="h-16 w-16 rounded-2xl border border-gray-200/50 object-cover shadow-xl md:h-20 md:w-20 md:rounded-[1.375rem] dark:border-white/10"
					/>
					<span className="text-xl font-bold text-heading md:text-2xl">
						{title}
					</span>
				</motion.div>

				<motion.h1
					{...up(0.1)}
					className="mb-6 max-w-[400px] text-[2.5rem] font-bold leading-[115%] tracking-tight text-heading md:max-w-[640px] md:text-[3.5rem] lg:max-w-[820px] lg:text-7xl lg:leading-[100%]"
				>
					{t.rich("headline", {
						hl: (chunks) => (
							<span
								style={{
									background:
										"linear-gradient(90deg,#40ffaa,#4079ff,#40ffaa,#4079ff,#40ffaa) 0 0/200%",
									WebkitBackgroundClip: "text",
									backgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								{chunks}
							</span>
						),
					})}
				</motion.h1>

				<motion.p
					{...up(0.15)}
					className="mb-8 max-w-[400px] text-lg leading-[160%] text-gray-600 md:max-w-lg md:text-[1.375rem] lg:mb-12 dark:text-white/55"
				>
					{description ?? t("description")}
				</motion.p>

				<motion.div {...up(0.2)}>
					<StoreButtons storeLinks={storeLinks} className="md:justify-start" />
				</motion.div>

				<motion.div {...up(0.25)}>
					<AppInfo
						version={version}
						releaseDate={releaseDate}
						className="md:justify-start"
					/>
				</motion.div>
			</div>

			<motion.button
				type="button"
				onClick={scrollToNextSection}
				animate={{ y: [0, 8, 0] }}
				transition={{
					repeat: Number.POSITIVE_INFINITY,
					duration: 2.2,
					ease: "easeInOut",
				}}
				className="relative z-10 mx-auto mb-8 rounded-full border border-gray-300/80 bg-white/90 p-2.5 text-gray-700 shadow-md shadow-gray-300/40 backdrop-blur-sm transition hover:scale-105 hover:bg-white dark:border-white/20 dark:bg-black/35 dark:text-white/75 dark:shadow-black/40 dark:hover:bg-black/45"
				aria-label={t("scrollAria")}
			>
				<FiChevronDown size={26} strokeWidth={2.5} />
			</motion.button>
		</section>
	);
};

export default AppHero;
