"use client";

import type { FooterProps } from "@/types";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = ({ name, logo }: FooterProps) => (
	// The ::before layer bleeds to the full viewport width and covers the dotted page background
	<footer className="relative isolate mt-8 px-3 pb-8 pt-12 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:border-t before:border-gray-200 before:bg-white before:content-[''] md:px-6 md:pt-16 dark:before:border-white/8 dark:before:bg-[#0c0c0d]">
		<div className="container mx-auto">
			<FooterDesktop name={name} logo={logo} />
			<FooterMobile name={name} logo={logo} />
		</div>
	</footer>
);

export default Footer;
