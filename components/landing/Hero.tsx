'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Cpu } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background text-foreground pt-32 md:pt-0">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
                    >
                        <Shield className="mr-2 h-4 w-4" />
                        Confidential Computing Platform
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
                    >
                        Secure AI Collaboration <br className="hidden md:block" />
                        in <span className="text-primary">Trusted Environments</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[800px] text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                        Prism AI enables privacy-preserving AI and secure multi-party collaboration
                        inside Trusted Execution Environments (TEEs). Deploy encrypted workloads
                        on cloud or on-premises with full data confidentiality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                    >
                        <Link
                            href="https://cloud.prism.ultraviolet.rs"
                            target="_blank"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Try Prism Cloud
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="/docs"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Read Documentation
                        </Link>
                    </motion.div>

                    {/* Feature Grid Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left"
                    >
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Lock className="h-10 w-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Encrypted Execution</h3>
                            <p className="text-muted-foreground text-sm">Data remains encrypted during processing within secure enclaves.</p>
                        </div>
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Cpu className="h-10 w-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Hardware-Backed</h3>
                            <p className="text-muted-foreground text-sm">Leverages Intel TDX and AMD SEV-SNP</p>
                        </div>
                        <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <Shield className="h-10 w-10 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Remote Attestation</h3>
                            <p className="text-muted-foreground text-sm">Cryptographic verification of workload integrity and identity.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
