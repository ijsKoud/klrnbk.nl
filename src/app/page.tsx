import { AboutMe } from "@/components/home/AboutMe";
import { Contact } from "@/components/home/Contact";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { HomeHero } from "@/components/home/Hero";
import { MainContent } from "@/components/MainContent";

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
				<Contact />
			</div>
		</MainContent>
	);
}
