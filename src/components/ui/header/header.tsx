import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
// import ShadcnKit from "@/components/icons/shadcn-kit";
import { nanoid } from "nanoid";
import Link from "next/link";
import config from "@/config";
import Image from "next/image";
import logo from "@/app/icon.png";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
const Navbar = () => {
    return (
        <Card className="container bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5">
            <div className="text-primary cursor-pointer" />
            {/* Your logo/name on large screens */}
            <div className="flex lg:flex-1">
                <Link
                    className="flex items-center gap-2 shrink-0 "
                    href="/"
                    title={`${config.appName} homepage`}
                >
                    <Image
                        src={logo}
                        alt={`${config.appName} logo`}
                        className="w-8"
                        placeholder="blur"
                        priority={true}
                        width={32}
                        height={32}
                    />
                    <span className="font-extrabold text-lg">{config.appName}</span>
                </Link>
            </div>
            <ul className="hidden md:flex items-center gap-10 text-card-foreground">
                {config.navigation.map((item, index) => (
                    <DropdownMenuItem key={index} className={item.className || ""}>
                        <a href={item.href}>{item.label}</a>
                    </DropdownMenuItem>
                ))}
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

            <div className="flex items-center">
                <SignedOut>
                    <SignInButton>
                        <Button variant="secondary" className="hidden md:block px-2">
                            Login
                        </Button>
                    </SignInButton>
                </SignedOut>

                <Button className="hidden md:block ml-2 mr-2">Get Started</Button>
                <SignedIn>
                    <div className="hidden md:block">
                        <UserButton />
                    </div>
                </SignedIn>
                <ThemeToggle />
            </div>
        </Card>
    );
};

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

export default Navbar;