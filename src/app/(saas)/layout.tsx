import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs';
import "../globals.css";
import { cn } from "@/libs/utils"
import dynamic from 'next/dynamic';
import { ThemeProvider } from "@/components/theme-provider"
import NavbarSkeleton from "@/components/ui/header/navbar-skeleton"
import FooterSkeleton from "@/components/ui/footer-skeleton"
const Navbar = dynamic(() => import("@/components/ui/header/navbar"), {
    loading: () => <NavbarSkeleton />,
});
const Footer = dynamic(() => import("@/components/ui/footer"), {
    loading: () => <FooterSkeleton />,
});

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />

            {children}

            <Footer />
        </>

    );
}
