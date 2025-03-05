import type { FC, PropsWithChildren } from "react";

export const MainContent: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className="grid place-items-center">
			<div className="w-full max-w-5xl">{children}</div>
		</main>
	);
};
