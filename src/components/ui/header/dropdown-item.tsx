import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { nanoid } from "nanoid";

const landings = [
    {
        id: nanoid(),
        title: "Landing 01",
        route: "/project-management",
    },
    {
        id: nanoid(),
        title: "Landing 02",
        route: "/crm-landing",
    },
    {
        id: nanoid(),
        title: "Landing 03",
        route: "/ai-content-landing",
    },
    {
        id: nanoid(),
        title: "Landing 04",
        route: "/new-intro-landing",
    },
    {
        id: nanoid(),
        title: "Landing 05",
        route: "/about-us-landing",
    },
    {
        id: nanoid(),
        title: "Landing 06",
        route: "/contact-us-landing",
    },
    {
        id: nanoid(),
        title: "Landing 07",
        route: "/faqs-landing",
    },
    {
        id: nanoid(),
        title: "Landing 08",
        route: "/pricing-landing",
    },
    {
        id: nanoid(),
        title: "Landing 09",
        route: "/career-landing",
    },
];

const LandingsDropdown = () => {
    return (
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
    );
};

export default LandingsDropdown;
