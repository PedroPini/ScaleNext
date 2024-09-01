import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { landings } from '@/components/ui/header/landings'; // Assume landings data is moved here
import Link from "next/link";
const NavLinks = () => (
    <ul className="hidden md:flex items-center gap-10 text-card-foreground">
        <li className="text-primary font-medium"><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <span className="cursor-pointer">Pages</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    {landings.map((page) => (
                        <DropdownMenuItem key={page.id}>
                            <Link href={page.route}>{page.title}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </li>
    </ul>
);

export default NavLinks;
