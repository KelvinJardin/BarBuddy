import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { Nav } from "@/components/Layout";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bar Buddy",
    description: "A simple cocktail recipe app using ingredients you have at home.",
};

const pageTitleMap = {
    "/": "Home",
    "/cocktails": "Cocktails",
    "/ingredients": "Ingredients",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <Nav/>
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
