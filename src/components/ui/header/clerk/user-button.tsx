'use client'

import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';

// ManageSubscription function moved here
export default function NavbarUserButton() {
    const [loading, setLoading] = useState(false);

    const handleManageSubscription = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/stripe/create-portal-link');

            if (!response.ok) {
                console.error(`Failed to fetch: ${response.statusText}`);
                setLoading(false);
                return;
            }

            const data = await response.json();

            if (data?.url) {
                window.location.href = data.url; // Redirect to the Stripe portal
            } else {
                console.error('Failed to retrieve the Stripe portal URL');
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
            } else {
                console.error('An unexpected error occurred:', error);
            }
        } finally {
            setLoading(false);
        }
    };

    const DotIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>
    );

    return (
        <header>
            {!loading && (
                <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Action
                            label="Manage Subscription"
                            labelIcon={<DotIcon />}
                            onClick={handleManageSubscription}
                        />
                    </UserButton.MenuItems>
                </UserButton>
            )}
        </header>
    );
}
