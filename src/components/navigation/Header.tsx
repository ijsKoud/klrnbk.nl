import { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navigation } from "@/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ThemeToggle from "./theme-toggle";

export const Header: FC = () => {
	return (
		<div className="w-screen grid place-items-center py-8 fixed z-[9999]">
			<div className="max-w-5xl w-full flex justify-end">
				<header className="flex gap-x-2">
					{navigation.map((item, idx) => (
						<TooltipProvider key={`navigation-item-${idx}`}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button variant="outline" size="icon">
										<Link href={item.href}>{item.icon}</Link>
										<span className="sr-only">{item.title}</span>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.title}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					))}

					<ThemeToggle />
				</header>
			</div>
		</div>
	);
};
