import "./globals.css";
import UnderConstructionDiag from "@/components/UnderConstructionDiag";

import {
    ClerkProvider,
} from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html
                lang="en"
                className={`${GeistSans.variable} ${GeistMono.variable}`}
            >
                <body>{children}</body>
            </html>
            <UnderConstructionDiag></UnderConstructionDiag>
        </ClerkProvider>
    );
}
