import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";
import { ExperienceCard } from "./ui/experience-card";
import { getAge } from "@/lib/utils";
import { BIRTHDAY, CAREER_START, LINKED_IN_URL } from "@/constants";
import Link from "next/link";

export const AboutMe: FC = () => {
	return (
		<div className="flex justify-between max-md:flex-col">
			<div className="max-w-lg flex flex-col gap-y-10 max-md:max-w-full">
				<h2 id="about-me" className="text-5xl leading-none font-bold max-md:text-2xl">
					About me
				</h2>
				<p className="text-base leading-normal font-normal text-muted-foreground max-md:text-xs">
					I&apos;m a {getAge(BIRTHDAY)} year-old full stack developer who&apos;s been immersed in the world of coding since 2020. Being
					mostly self-taught, my passion for open-source projects runs deep. I&apos;m always enthusiastic about learning new technologies
					and techniques, constantly seeking to broaden my skill set.
				</p>

				<ExperienceCard className="md:hidden w-full" years={getAge(CAREER_START)} />

				<div className="flex gap-x-4">
					<Button className="max-md:w-full" variant="default" asChild>
						<Link href={LINKED_IN_URL}>Learn more</Link>
					</Button>
					<Button className="max-md:w-full" variant="secondary" asChild>
						<Link href="/#contact">
							<Inbox /> Contact me
						</Link>
					</Button>
				</div>
			</div>

			<ExperienceCard className="max-md:hidden" years={getAge(CAREER_START)} />
		</div>
	);
};
