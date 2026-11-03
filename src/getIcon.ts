import type { IconType } from "react-icons";
import {
	FiBox,
	FiCloud,
	FiCpu,
	FiHeart,
	FiImage,
	FiMessageSquare,
	FiShield,
	FiSliders,
	FiStar,
	FiTrendingUp,
	FiZap,
} from "react-icons/fi";
import { LuPlug } from "react-icons/lu";
import { MdTranslate } from "react-icons/md";
import {
	RiDiscordFill,
	RiFacebookFill,
	RiGithubFill,
	RiInstagramFill,
	RiLinkedinFill,
	RiTelegram2Fill,
	RiTwitterXFill,
	RiYoutubeFill,
} from "react-icons/ri";

const iconMap: Record<string, IconType> = {
	FiStar,
	FiZap,
	FiBox,
	FiHeart,
	FiTrendingUp,
	FiShield,
	FiCloud,
	FiSliders,
	FiCpu,
	FiImage,
	FiMessageSquare,
	LuPlug,
	MdTranslate,
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
	RiFacebookFill,
	RiLinkedinFill,
	RiYoutubeFill,
	RiGithubFill,
	RiDiscordFill,
};

export const getIcon = (name: string): IconType | null => iconMap[name] ?? null;
