import AuthButtons from './auth-buttons';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import NavLinks from './navlinks';
import ThemeToggle from '@/components/theme-toggle';
import { Card } from '@/components/ui/card';

const Navbar = () => (
    <Card className="container bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5">
        <Logo />
        <NavLinks />
        <div className="flex items-center">
            <AuthButtons />
            <MobileMenu />
            <ThemeToggle />
        </div>
    </Card>
);

export default Navbar;
