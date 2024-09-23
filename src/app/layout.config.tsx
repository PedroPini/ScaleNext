import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import config from '@/config';
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
    nav: {
        title: config.appName,
    },
    links: [
        {
            text: 'Documentation',
            url: './docs',
            active: 'nested-url',
        },
    ],
};