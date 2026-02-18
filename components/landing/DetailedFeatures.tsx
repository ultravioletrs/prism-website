import Image, { StaticImageData } from 'next/image';
import prismUi from '@/public/img/prism-ui.png';
import policies from '@/public/img/policies.png';
import backends from '@/public/img/backends.png';
import runtimes from '@/public/img/runtimes.png';
import logs from '@/public/img/logs.png';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FeatureSectionProps {
    title: string;
    children: React.ReactNode;
    image: StaticImageData;
    imageAlt: string;
    reversed?: boolean;
    ctaText?: string;
    ctaHref?: string;
}

function FeatureSection({ title, children, image, imageAlt, reversed = false, ctaText, ctaHref }: FeatureSectionProps) {
    return (
        <div className={cn("py-20", reversed ? "bg-muted/30" : "bg-background")}>
            <div className="container px-4 md:px-6">
                <div className={cn("grid md:grid-cols-2 gap-12 items-center", reversed ? "md:grid-flow-dense" : "")}>
                    <div className={cn("space-y-6", reversed ? "md:col-start-2" : "")}>
                        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                        <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                            {children}
                        </div>
                        {ctaText && ctaHref && (
                            <div className="pt-4">
                                <Link
                                    href={ctaHref}
                                    {...(ctaHref.startsWith('http') ? { target: "_blank" } : {})}
                                    className="inline-flex items-center text-brand-secondary font-semibold hover:underline"
                                >
                                    {ctaText}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className={cn("relative w-full rounded-xl overflow-hidden shadow-xl border border-border/50 bg-background dark:bg-white/95", reversed ? "md:col-start-1" : "")}>
                        <Image
                            src={image}
                            alt={imageAlt}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function DetailedFeatures() {
    return (
        <section id="detailed-features" className="flex flex-col">
            {/* Intuitive UI */}
            <FeatureSection
                title="Intuitive User Interface"
                image={prismUi}
                imageAlt="Prism AI User Interface"
                reversed={true}
                ctaText="Try Prism"
                ctaHref="https://cloud.prism.ultraviolet.rs"
            >
                <p>
                    Simplify the management of confidential workloads with an intuitive interface. Navigate, configure, and monitor secure computations in real-time with ease.
                </p>
            </FeatureSection>

            {/* Security */}
            <FeatureSection
                title="Multi-tenant And Strong Security"
                image={policies}
                imageAlt="Security Policies"
                ctaText="Learn more"
                ctaHref="/docs"
            >
                <p>
                    Secure multi-tenancy ensures complete isolation of data and workloads. Benefit from fine-grained access control, end-to-end encryption, and rigorous authentication.
                </p>
            </FeatureSection>

            {/* BYO Backend */}
            <FeatureSection
                title="Bring Your Own Confidential Computing Backend"
                image={backends}
                imageAlt="Backend Infrastructure"
                reversed={true}
                ctaText="Learn more"
                ctaHref="/docs"
            >
                <p>
                    Flexible architecture supports any TEE-capable node, allowing you to bring your own backend. Seamless integration with our open-source HAL ensures secure execution across environments.
                </p>
            </FeatureSection>

            {/* Runtimes */}
            <FeatureSection
                title="Multiple Workload Runtime Support"
                image={runtimes}
                imageAlt="Supported Runtimes"
                ctaText="Try Prism"
                ctaHref="https://cloud.prism.ultraviolet.rs"
            >
                <p>
                    Execute a wide range of computational workloads within secure enclaves, from Python algorithms to containerized applications.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    <li className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span className="text-sm"><strong>Python AI Algorithms</strong></span></li>
                    <li className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span className="text-sm"><strong>Docker Containers</strong></span></li>
                    <li className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span className="text-sm"><strong>WebAssembly (Wasm)</strong></span></li>
                    <li className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span className="text-sm"><strong>ELF Binaries</strong></span></li>
                </ul>
            </FeatureSection>

            {/* Logs */}
            <FeatureSection
                title="Enclave Monitoring, Events, and Logs"
                image={logs}
                imageAlt="Logging and Monitoring"
                reversed={true}
                ctaText="Learn more"
                ctaHref="/docs"
            >
                <p>
                    Gain real-time insights into enclave health and performance. Comprehensive event tracking and detailed logs ensure auditability and compliance for all activities.
                </p>
            </FeatureSection>
        </section>
    );
}
