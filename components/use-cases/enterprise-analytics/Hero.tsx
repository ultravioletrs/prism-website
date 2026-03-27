'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Building2, Shield } from 'lucide-react';
import { useLeads } from '@/components/providers/LeadsProvider';

export function EnterpriseAnalyticsHero() {
    const { openDemoModal } = useLeads();

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background text-foreground pt-32 md:pt-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-secondary/20 via-background to-background z-0" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-3 py-1 text-sm font-medium text-brand-secondary backdrop-blur-sm"
                    >
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Enterprise Use Case
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-brand-secondary"
                    >
                        Enterprise Analytics &<br className="hidden md:block" />
                        <span className="text-brand-secondary">Cross-Company Collaboration</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[850px] text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                        Collaborate with industry peers on shared analytics while keeping your data confidential.
                        Prism enables cross-company computation where each participant retains full custody of their proprietary data.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                    >
                        <button
                            onClick={openDemoModal}
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                        >
                            Schedule a Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                        <Link
                            href="/docs"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Read Documentation
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left"
                    >
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Building2 className="h-10 w-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Consortium Analytics</h3>
                            <p className="text-muted-foreground text-sm">Industry consortiums conduct joint analysis without antitrust concerns or IP exposure.</p>
                        </div>
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Shield className="h-10 w-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Antitrust Compliant</h3>
                            <p className="text-muted-foreground text-sm">Hardware-enforced isolation prevents participants from accessing each other's raw data.</p>
                        </div>
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <BarChart3 className="h-10 w-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Shared Insights</h3>
                            <p className="text-muted-foreground text-sm">Derive insights from combined datasets that no single organization could produce alone.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

