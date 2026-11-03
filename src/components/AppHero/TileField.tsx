"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
	FiBookOpen,
	FiCpu,
	FiFileText,
	FiGlobe,
	FiLock,
	FiMail,
	FiMessageSquare,
	FiMic,
	FiRepeat,
} from "react-icons/fi";
import { LuArrowLeftRight, LuLanguages } from "react-icons/lu";
import { MdTranslate } from "react-icons/md";

type Tile = { icon: IconType } | { label: string };

const tiles: Record<string, Tile> = {
	tr: { icon: MdTranslate },
	lang: { icon: LuLanguages },
	swap: { icon: LuArrowLeftRight },
	globe: { icon: FiGlobe },
	doc: { icon: FiFileText },
	chat: { icon: FiMessageSquare },
	mic: { icon: FiMic },
	repeat: { icon: FiRepeat },
	book: { icon: FiBookOpen },
	lock: { icon: FiLock },
	cpu: { icon: FiCpu },
	mail: { icon: FiMail },
	de: { label: "DE" },
	en: { label: "EN" },
	fr: { label: "FR" },
	es: { label: "ES" },
	zh: { label: "文" },
	ja: { label: "あ" },
	ar: { label: "ع" },
	uml: { label: "Ä" },
};

// Staggered layout; null leaves a gap so the field reads as loose tiles, not a solid block
const layout: (string | null)[][] = [
	[null, null, "de", "chat", null, "en", "lang", "tr"],
	[null, "tr", "doc", null, "zh", "swap", "fr", null],
	["globe", null, "en", "book", "repeat", null, "mail", "ja"],
	[null, "ja", "lock", "tr", null, "es", "cpu", "de"],
	["mic", "uml", null, "doc", "ar", "chat", null, "globe"],
	[null, "swap", "de", null, "globe", "lang", "tr", "en"],
	["es", null, "mail", "fr", null, "mic", "zh", null],
];

const TileField = () => {
	const reduceMotion = useReducedMotion();

	return (
		<div
			aria-hidden="true"
			className="tile-field-mask pointer-events-none absolute inset-x-0 bottom-0 h-[360px] select-none md:inset-y-0 md:right-[calc(50%-50vw)] md:left-[42%] md:h-auto"
		>
			<div className="absolute top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2 [--tile:3.75rem] sm:[--tile:5rem] md:left-[66%] lg:[--tile:7rem]">
				<div
					className="grid gap-3 sm:gap-5 lg:gap-7"
					style={{
						// Fixed tracks: fractional columns shrink below the tile size and make tiles overlap
						gridTemplateColumns: "repeat(8, var(--tile))",
						gridAutoRows: "var(--tile)",
						transform: "rotateX(55deg) rotateZ(40deg)",
					}}
				>
					{layout.flatMap((row, r) =>
						row.map((key, c) => {
							const id = `${r}-${c}`;
							if (!key) return <div key={id} />;
							const tile = tiles[key];
							const accent = (r + c) % 3 === 0;
							return (
								<motion.div
									key={id}
									initial={
										reduceMotion ? false : { opacity: 0, y: 24, scale: 0.9 }
									}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										delay: 0.2 + (r + c) * 0.05,
										ease: [0.22, 0.61, 0.36, 1],
									}}
									className="flex h-full w-full items-center justify-center rounded-[22%] border border-gray-200/70 bg-white shadow-[0_18px_30px_-12px_rgba(3,105,161,0.25)] dark:border-white/10 dark:bg-[#111417] dark:shadow-[0_18px_30px_-12px_rgba(0,0,0,0.6)]"
								>
									{"icon" in tile ? (
										<tile.icon
											className={`h-1/2 w-1/2 ${accent ? "text-picton-900 dark:text-picton-300" : "text-picton-600 dark:text-picton-400"}`}
										/>
									) : (
										<span
											className={`text-xl font-bold sm:text-2xl lg:text-3xl ${accent ? "text-picton-900 dark:text-picton-300" : "text-picton-600 dark:text-picton-400"}`}
										>
											{tile.label}
										</span>
									)}
								</motion.div>
							);
						}),
					)}
				</div>
			</div>
		</div>
	);
};

export default TileField;
