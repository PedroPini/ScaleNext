import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs';
import "../globals.css";
import { cn } from "@/libs/utils"
import { ThemeProvider } from "@/components/theme-provider"
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
            {children}
        </div>
    );
}
