import type { FC, PropsWithChildren } from "react";
import { ScrollElementIntoView } from "./navigation/scroll-element-into-view";

export const MainContent: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className="grid place-items-center">
			<div className="w-full max-w-5xl px-2">{children}</div>
			<ScrollElementIntoView />
		</main>
	);
};
