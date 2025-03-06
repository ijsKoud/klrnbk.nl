import { FC } from "react";

export const ExperienceCard: FC<ExperienceCardProps> = ({ years }) => {
	return (
		<div className="w-80 bg-secondary rounded-xl flex flex-col justify-center items-center gap-y-4">
			<span className="text-5xl leading-none font-bold">{years}+</span>
			<span className="text-lg leading-none font-medium text-muted-foreground">Years of experience</span>
		</div>
	);
};

export type ExperienceCardProps = {
	years: number;
};
