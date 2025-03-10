import { cn } from "@/lib/utils";
import { FC } from "react";

export const ExperienceCard: FC<ExperienceCardProps> = ({ years, className }) => {
	return (
		<div className={cn("w-80 bg-secondary rounded-xl flex flex-col justify-center items-center gap-y-4 py-4", className)}>
			<span className="text-5xl leading-none font-bold max-md:text-lg">{years}+</span>
			<span className="text-lg leading-none font-medium text-muted-foreground max-md:text-xs">Years of experience</span>
		</div>
	);
};

export type ExperienceCardProps = {
	years: number;
	className?: string;
};
