import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google'
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider'
import config from '@/config';
import { cn } from '@/libs/utils'
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: config.appName,
  description: config.appDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: 'hsl(263.4, 70%, 50.4%)', // change this value (you can get it from you're css variables, make sure to include 'hsl' and commas)
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >

          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            themes={['light', 'dark']}
            disableTransitionOnChange
          >
            <main className="flex min-h-screen flex-col  justify-between">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
