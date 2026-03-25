'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLeads } from '@/components/providers/LeadsProvider';

export function HealthcareCTA() {
    const { openDemoModal } = useLeads();
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl border border-brand-secondary/30 bg-gradient-to-br from-brand-secondary/5 to-primary/5">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Accelerate Healthcare AI?</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Enable the next generation of healthcare AI without compromising patient privacy. Collaborate across hospitals, pharma, and research institutions&mdash;all at HIPAA compliance scale, powered by Prism AI.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={openDemoModal} className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer">Schedule a Demo<ArrowRight className="ml-2 h-4 w-4" /></button>
                        <Link href="/docs" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">Explore Documentation</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

