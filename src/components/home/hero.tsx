import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { PROFILE_ICON } from "@/constants";

export const HomeHero: FC = () => {
	return (
		<div className="flex justify-between items-center w-full max-md:flex-col-reverse gap-y-8">
			<div className="flex flex-col gap-y-8 max-md:w-full">
				<div className="flex flex-col gap-y-2">
					<h1 className="flex flex-col">
						<span className="text-3xl leading-none font-medium max-md:text-lg">HEY, MY NAME IS</span>
						<span className="text-5xl leading-none font-bold text-primary max-md:text-2xl">DAAN KLARENBEEK</span>
					</h1>
					<p className="max-w-lg text-lg leading-none font-normal text-muted-foreground">
						Full-stack developer building open-source apps for the internet. Learning something new everyday.
					</p>
				</div>

				<div className="flex gap-2 max-md:flex-col max-md:w-full">
					<Button variant="default" asChild>
						<Link href="/#about-me">
							About myself <ChevronRight />
						</Link>
					</Button>
					<Button variant="secondary">Write in guestbook</Button>
				</div>
			</div>

			<Avatar className="size-48">
				<AvatarImage src={PROFILE_ICON} alt="Image of Daan Klarenbeek" />
				<AvatarFallback>Daan</AvatarFallback>
			</Avatar>
		</div>
	);
};
