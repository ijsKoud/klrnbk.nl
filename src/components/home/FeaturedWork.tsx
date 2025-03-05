import { GITHUB_NAME, projects } from "@/constants";
import { FC } from "react";
import { ProjectCard } from "./ui/project-card";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const FeaturedWork: FC = () => {
	return (
		<div className="flex flex-col items-center gap-y-10">
			<div className="flex flex-col items-center gap-y-5">
				<h2 className="text-5xl leading-none font-bold">Featured work</h2>
				<span className="text-base leading-normal font-normal text-center text-muted-foreground">
					I've worked on a variety of projects, ranging from simple websites to complex applications. Here are a few of my favorites.
				</span>
			</div>

			<div className="flex flex-wrap justify-center gap-4 w-full">
				{projects.map((project, idx) => (
					<ProjectCard key={idx} {...project} />
				))}
			</div>

			<Button asChild>
				<Link href={`https://github.com/${GITHUB_NAME}/repositories`}>
					View all projects <ChevronRight />
				</Link>
			</Button>
		</div>
	);
};
