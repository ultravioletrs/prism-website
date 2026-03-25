'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, ShieldCheck, Lock } from 'lucide-react';
import { useLeads } from '@/components/providers/LeadsProvider';

export function HealthcareHero() {
    const { openDemoModal } = useLeads();
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background text-foreground pt-32 md:pt-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-secondary/20 via-background to-background z-0" />
            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-3 py-1 text-sm font-medium text-brand-secondary backdrop-blur-sm">
                        <Stethoscope className="mr-2 h-4 w-4" />Healthcare Use Case
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-brand-secondary">
                        Healthcare Research &<br className="hidden md:block" /><span className="text-brand-secondary">Patient Data Analytics</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="max-w-[850px] text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Enable the next generation of healthcare AI without compromising patient privacy&mdash;institutional collaboration at <strong>HIPAA compliance scale</strong>. Build breakthrough diagnostic models across hospitals, pharma, and research institutions while patient data never leaves its source.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <button onClick={openDemoModal} className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer">Schedule a Demo<ArrowRight className="ml-2 h-4 w-4" /></button>
                        <Link href="/docs" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">Read Documentation</Link>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Stethoscope className="h-10 w-10 text-primary mb-4" /><h3 className="font-bold text-lg mb-2">Multi-Hospital Collaboration</h3><p className="text-muted-foreground text-sm">Hospitals collaboratively train AI models across patient populations without sharing raw records.</p>
                        </div>
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <ShieldCheck className="h-10 w-10 text-primary mb-4" /><h3 className="font-bold text-lg mb-2">Natively HIPAA Compliant</h3><p className="text-muted-foreground text-sm">Patient data never leaves the hospital. No complex BAAs required for multi-party research.</p>
                        </div>
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Lock className="h-10 w-10 text-primary mb-4" /><h3 className="font-bold text-lg mb-2">Hardware-Backed Security</h3><p className="text-muted-foreground text-sm">TEEs encrypt data at the processor level&mdash;inaccessible to cloud provider, host OS, and admins.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
