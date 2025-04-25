import type { Metadata } from "next";
import "./globals.css";
import CosmosBackground from "@/components/CosmosBackground";

export const metadata: Metadata = {
	title: "Black Tie Events",
	keywords: ["events", "black tie", "weddings", "parties"],
	authors: [{ name: "Black Tie Events" }],
	creator: "Black Tie Events",
	description: "Black Tie Events | All Rights Reserved",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased min-h-screen">{children}</body>
		</html>
	);
}
