'use client';

import Link from 'next/link';
import React from 'react';

const Blocked = () => {
    return (

        <main className="relative bg-neutral text-neutral-content h-screen w-full flex flex-col justify-center gap-8 items-center p-10">
            <h1 className="text-xl md:text-2xl font-medium">
                Hm, Access Blocked
            </h1>
            <p>Try again in 1 minute</p>

            <div>
                <Link className="link" href="/">
                    Login
                </Link>{' '}
                or{' '}
                <Link className="link" href="/">
                    Home
                </Link>
            </div>
        </main>

    );
};

export default Blocked;