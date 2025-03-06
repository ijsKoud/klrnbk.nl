import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";
import { ExperienceCard } from "./ui/experience-card";
import { getAge } from "@/lib/utils";
import { BIRTHDAY, CAREER_START } from "@/constants";
import Link from "next/link";

export const AboutMe: FC = () => {
	return (
		<div className="flex justify-between">
			<div className="max-w-lg flex flex-col gap-y-10">
				<h2 id="about-me" className="text-5xl leading-none font-bold">
					About me
				</h2>
				<p className="text-base leading-normal font-normal text-muted-foreground">
					I'm a {getAge(BIRTHDAY)} year-old full stack developer who's been immersed in the world of coding since 2020. Being mostly
					self-taught, my passion for open-source projects runs deep. I'm always enthusiastic about learning new technologies and
					techniques, constantly seeking to broaden my skill set.
				</p>
				<div className="flex gap-x-4">
					<Button variant="default">Learn more</Button>
					<Button variant="secondary" asChild>
						<Link href="/#contact">
							<Inbox /> Contact me
						</Link>
					</Button>
				</div>
			</div>

			<ExperienceCard years={getAge(CAREER_START)} />
		</div>
	);
};
