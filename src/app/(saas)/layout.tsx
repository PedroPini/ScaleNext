import { Inter as FontSans } from 'next/font/google'
import '../globals.css';
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/header/navbar'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gradient-to-b from-background to-secondary">

            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
