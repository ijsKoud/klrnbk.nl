import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";
import { ProjectCardProps } from "./types";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, links }) => {
	return (
		<div className="w-md flex flex-col gap-y-4 max-md:w-80">
			<div className="w-md h-72 max-h-72 bg-secondary rounded-xl max-md:max-h-52 max-md:max-w-80">
				{image && (
					<AspectRatio className="h-72 overflow-hidden rounded-xl max-md:h-52" ratio={16 / 9}>
						<img src={image} className="object-cover" alt={`Preview of project ${title}`} />
					</AspectRatio>
				)}
			</div>

			<div className="flex flex-col gap-y-1">
				<div className="flex justify-between items-center">
					<h3 className="text-xl leading-none font-bold max-md:text-lg">{title}</h3>
					<div className="flex items-center gap-x-0.5">
						{links.map((link, idx) => (
							<Button key={idx} variant="ghost" size="icon" asChild>
								<Link href={link.url}>
									{link.icon}
									<span className="sr-only">{link.description}</span>
								</Link>
							</Button>
						))}
					</div>
				</div>

				<p className="text-small leading-normal font-normal text-muted-foreground max-md:text-xs">{description}</p>
			</div>
		</div>
	);
};
