import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import config from '@/config';
// Dynamically import components
const SignInButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignInButton));
const SignedIn = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignedIn));
const SignedOut = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignedOut));
const UserButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.UserButton));
import { Button } from '@/components/ui/button';

const MobileMenu = () => (
    <div className="flex md:hidden mr-2 items-center gap-2">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5 rotate-0 scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {config.navigation.map((item, index) => (
                    <DropdownMenuItem key={index} className={item.className || ""}>
                        <a href={item.href}>{item.label}</a>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="secondary" className="w-full text-sm px-2">Login</Button>
                        </SignInButton>
                    </SignedOut>
                </DropdownMenuItem>
                <DropdownMenuItem><Button className="w-full text-sm">Get Started</Button></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <SignedIn><UserButton /></SignedIn>
    </div>
);

export default MobileMenu;
