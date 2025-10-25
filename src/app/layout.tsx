import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
	title: "Open Source Ghana - Building Africa's Open Source Future",
	description:
		"Join Ghana's vibrant community of developers, designers, and tech enthusiasts building innovative open source solutions that empower our continent and beyond.",
	keywords: [
		"open source",
		"Ghana",
		"Africa",
		"developers",
		"community",
		"technology",
		"programming",
		"software",
	],
	authors: [{ name: "Open Source Ghana Community" }],
	creator: "Open Source Ghana",
	publisher: "Open Source Ghana",
	openGraph: {
		title: "Open Source Ghana - Building Africa's Open Source Future",
		description:
			"Join Ghana's vibrant community of developers, designers, and tech enthusiasts building innovative open source solutions that empower our continent and beyond.",
		url: "https://opensourceghana.org",
		siteName: "Open Source Ghana",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Open Source Ghana - Building Africa's Open Source Future",
		description:
			"Join Ghana's vibrant community of developers, designers, and tech enthusiasts building innovative open source solutions that empower our continent and beyond.",
		creator: "@opensourceghana",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>{children}</body>
		</html>
	);
}
