import { Inter as FontSans } from "next/font/google"
import "../globals.css";
import Navbar from "@/components/ui/header/navbar"
import Footer from "@/components/ui/footer"

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
