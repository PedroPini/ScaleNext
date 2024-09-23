import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
    subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <RootProvider>{children}</RootProvider>
        </div>
    );
}
