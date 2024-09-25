import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import NavbarUserButton from '@/components/ui/header/clerk/user-button'
// Dynamically import components
const SignInButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignInButton));
const SignedIn = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignedIn));
const SignedOut = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignedOut));


const AuthButtons = () => (
    <div className="flex items-center">
        <SignedOut>
            <SignInButton>
                <Button variant="secondary" className="hidden md:block px-2">Login</Button>
            </SignInButton>
        </SignedOut>
        <Button className="hidden md:block ml-2 mr-2">Get Started</Button>
        <SignedIn>
            <div className="hidden md:block"><NavbarUserButton /> </div>
        </SignedIn>
    </div>
);

export default AuthButtons;
