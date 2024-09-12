import { Card } from '@/components/ui/card';

const NavbarSkeleton = () => (
    <Card className="container bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5 animate-pulse">
        {/* Logo Skeleton */}
        <div className="h-8 w-24 bg-gray-300 rounded-md"></div>

        {/* NavLinks Skeleton */}
        <div className="flex gap-4">
            <div className="h-6 w-16 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-16 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-16 bg-gray-300 rounded-md"></div>
        </div>

        {/* Right-side Elements Skeleton */}
        <div className="flex items-center gap-4">
            <div className="h-8 w-24 bg-gray-300 rounded-md"></div> {/* AuthButtons */}
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div> {/* MobileMenu */}
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div> {/* ThemeToggle */}
        </div>
    </Card>
);

export default NavbarSkeleton;
