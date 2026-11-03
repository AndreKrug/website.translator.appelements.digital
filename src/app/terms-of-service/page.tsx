import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import MarkdownLayout from "@/components/Markdown";
import { parseMarkdown } from "@/components/Markdown/parseMarkdown";
import type { Locale } from "@/i18n/locales";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: "Read our terms and conditions for using this application.",
};

async function loadContent(locale: Locale) {
	const raw = fs.readFileSync(
		path.join(process.cwd(), `src/app/terms-of-service/terms.${locale}.md`),
		"utf-8",
	);
	const body = raw.replace(/^#[^\n]+\n+\*\*[^\n]+\n+/, "");
	const html = String(await parseMarkdown(body));
	return { html, raw: body };
}

export default async function TermsPage() {
	const [de, en] = await Promise.all([loadContent("de"), loadContent("en")]);

	return (
		<main className="px-4 pb-8 pt-8 md:px-6 md:pt-12">
			<div className="mx-auto max-w-375">
				<Breadcrumbs items={[{ labelKey: "legal.termsOfServiceTitle" }]} />
				<MarkdownLayout
					content={{ de, en }}
					title={{
						de: "Nutzungsbedingungen",
						en: "Terms of Service",
					}}
					lastUpdated="February 1, 2025"
				/>
			</div>
		</main>
	);
}
