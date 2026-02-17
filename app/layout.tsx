import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Outfit, Sen } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const sen = Sen({
  subsets: ['latin'],
  variable: '--font-sen',
});

import type { Metadata } from 'next';

import { createMetadata, baseUrl } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: {
    template: '%s | Prism',
    default: 'Prism',
  },
  description: 'The secure computation platform for sensitive data.',
  metadataBase: new URL(baseUrl),
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${sen.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background text-foreground font-body">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
