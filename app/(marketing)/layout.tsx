import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import type { ReactNode } from 'react';
import { LeadsProvider } from '@/components/providers/LeadsProvider';
import DemoRequestModalTrigger from '@/components/DemoRequestModalTrigger';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <LeadsProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <DemoRequestModalTrigger />
      </div>
    </LeadsProvider>
  );
}
