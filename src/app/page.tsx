import { AboutMe } from "@/components/home/about-me";
import { Contact } from "@/components/home/contact";
import { FeaturedWork } from "@/components/home/featured-work";
import { HomeHero } from "@/components/home/hero";
import { MainContent } from "@/components/main-content";

export default function Home() {
	return (
		<MainContent>
			<div className="h-screen grid place-items-center">
				<div className="w-full top-20 sticky">
					<HomeHero />
				</div>
			</div>

			<div className="flex flex-col gap-y-96 mt-8">
				<AboutMe />
				<FeaturedWork />
				{/* <Contact /> */}
			</div>
		</MainContent>
	);
}
