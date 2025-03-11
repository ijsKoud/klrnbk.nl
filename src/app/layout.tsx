import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/navigation/Header";
import Providers from "./providers";
import { PROFILE_ICON } from "@/constants";

const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	metadataBase: new URL("https://klrnbk.nl"),
	title: { template: "Daan Klarenbeek - %s", default: "Daan Klarenbeek - Full-stack developer building apps for the internet" },
	description: "Full-stack developer building apps for the internet",
	twitter: { card: "summary" },
	openGraph: {
		title: "Daan Klarenbeek",
		description: "Full-stack developer building apps for the internet",
		images: [{ url: PROFILE_ICON, alt: "Profile picture", type: "image/png" }]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="scroll-smooth" lang="en">
			<body className={`${interSans.variable} antialiased`}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
