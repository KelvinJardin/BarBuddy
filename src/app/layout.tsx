import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { Nav } from "@/components/Layout";
import { NextAuthProvider } from "@/components/Auth";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bar Buddy",
    description: "A simple cocktail recipe app using ingredients you have at home.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextAuthProvider>
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={theme}>
                            <Nav/>
                            {children}
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </NextAuthProvider>
            </body>
        </html>
    );
}
