import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import MarkdownLayout from "@/components/Markdown";
import { parseMarkdown } from "@/components/Markdown/parseMarkdown";
import type { Locale } from "@/i18n/locales";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Learn how we collect, use, and protect your personal information.",
};

async function loadContent(locale: Locale) {
	const raw = fs.readFileSync(
		path.join(process.cwd(), `src/app/privacy-policy/privacy.${locale}.md`),
		"utf-8",
	);
	const body = raw.replace(/^#[^\n]+\n+\*\*[^\n]+\n+/, "");
	const html = String(await parseMarkdown(body));
	return { html, raw: body };
}

export default async function PrivacyPage() {
	const [de, en] = await Promise.all([loadContent("de"), loadContent("en")]);

	return (
		<main className="px-4 pb-8 pt-8 md:px-6 md:pt-12">
			<div className="mx-auto max-w-375">
				<Breadcrumbs items={[{ labelKey: "legal.privacyPolicyTitle" }]} />
				<MarkdownLayout
					content={{ de, en }}
					title={{
						de: "Datenschutzerklärung",
						en: "Privacy Policy",
					}}
					lastUpdated="February 1, 2025"
				/>
			</div>
		</main>
	);
}
