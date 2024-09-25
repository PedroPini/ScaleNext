import Link from 'next/link';
import LandingsDropdown from '@/components/ui/header/dropdown-item';
import config from '@/config';

const NavLinks = () => (
    <ul className="hidden md:flex items-center gap-10 text-card-foreground ">
        {config.navigation.map((item, index) => (
            <li key={index} className={item.className || ''}>
                <Link href={item.href}>
                    {item.label}
                </Link>
            </li>
        ))}
        <LandingsDropdown />
    </ul>
);

export default NavLinks;
