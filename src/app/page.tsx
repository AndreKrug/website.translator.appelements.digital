import AppHero from "@/components/AppHero";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Screenshots from "@/components/Screenshots";
import { screenshots, site } from "@/config";
import { fetchStoreData } from "@/fetchStoreData";

export default async function HomePage() {
	const storeData = await fetchStoreData();

	const app = {
		name: storeData.name ?? site.name,
		description: storeData.description,
		logo: storeData.logo ?? site.logo,
		storeLinks: storeData.storeLinks ?? site.storeLinks,
		version: storeData.version ?? site.version,
		releaseDate: storeData.releaseDate ?? site.releaseDate,
		screenshots: storeData.screenshots?.map((src) => ({ src })) ?? screenshots,
	};

	return (
		<main className="container mx-auto px-3 md:px-6">
			<AppHero
				title={app.name}
				description={app.description}
				logo={app.logo}
				storeLinks={app.storeLinks}
				version={app.version}
				releaseDate={app.releaseDate}
			/>
			<section id="screenshots" className="mb-16 scroll-mt-8 md:mb-24">
				<Screenshots images={app.screenshots} />
			</section>
			<section id="features" className="mb-16 scroll-mt-8 md:mb-24">
				<Features />
			</section>
			<section id="pricing" className="mb-16 scroll-mt-8 md:mb-24">
				<Pricing />
			</section>
			<section id="faq" className="mb-16 scroll-mt-8 md:mb-24">
				<FAQ />
			</section>
		</main>
	);
}
