

export default function Layout({ children }: { children: React.ReactNode }) {
    return (



        <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
            {children}
        </div>
    );
}
