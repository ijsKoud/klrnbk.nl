import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HomeHero: FC = () => {
	return (
		<div className="flex justify-between items-center w-full">
			<div className="flex flex-col gap-y-8">
				<div className="flex flex-col gap-y-2">
					<h1 className="flex flex-col">
						<span className="text-3xl leading-none font-medium">HEY, MY NAME IS</span>
						<span className="text-5xl leading-none font-bold text-primary">DAAN KLARENBEEK</span>
					</h1>
					<p className="max-w-lg text-lg leading-none font-normal text-muted-foreground">
						Full-stack developer building open-source apps for the internet. Learning something new everyday.
					</p>
				</div>

				<div className="flex gap-x-2">
					<Button variant="default">
						About myself <ChevronRight />
					</Button>
					<Button variant="secondary">Write in guestbook</Button>
				</div>
			</div>

			<Avatar className="size-48">
				<AvatarImage src="https://github.com/ijskoud.png" alt="Image of Daan Klarenbeek" />
				<AvatarFallback>Daan</AvatarFallback>
			</Avatar>
		</div>
	);
};
