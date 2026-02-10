import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface FeatureSectionProps {
    title: string;
    children: React.ReactNode;
    image: string;
    imageAlt: string;
    reversed?: boolean;
}

function FeatureSection({ title, children, image, imageAlt, reversed = false }: FeatureSectionProps) {
    return (
        <div className={cn("py-20", reversed ? "bg-muted/30" : "bg-background")}>
            <div className="container px-4 md:px-6">
                <div className={cn("grid md:grid-cols-2 gap-12 items-center", reversed ? "md:grid-flow-dense" : "")}>
                    <div className={cn("space-y-6", reversed ? "md:col-start-2" : "")}>
                        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                        <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                            {children}
                        </div>
                    </div>
                    <div className={cn("relative aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-border/50 bg-background dark:bg-white/95", reversed ? "md:col-start-1" : "")}>
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-contain p-4"
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
                image="/img/prism-ui.png"
                imageAlt="Prism AI User Interface"
                reversed={true}
            >
                <p>
                    Prism AI features an intuitive user interface designed to simplify the management and orchestration of confidential workloads. The UI is crafted to enhance user experience, providing seamless navigation, easy configuration, and real-time monitoring of computational tasks.
                </p>
                <p>
                    With a user-centric design, Prism AI offering comprehensive controls and visual aids, enables users to effortlessly set up, monitor, and manage secure computations.
                </p>
            </FeatureSection>

            {/* Security */}
            <FeatureSection
                title="Multi-tenant And Strong Security"
                image="/img/policies.png"
                imageAlt="Security Policies"
            >
                <p>
                    Prism AI is built with multi-tenancy and robust security in mind, ensuring that each tenant's data and computations remain isolated and protected.
                </p>
                <p>
                    With advanced security features such as fine-grained access control, encryption at rest and in transit, and rigorous authentication mechanisms, Prism AI guarantees the confidentiality and integrity of all data and computations.
                </p>
            </FeatureSection>

            {/* BYO Backend */}
            <FeatureSection
                title="Bring Your Own Confidential Computing Backend"
                image="/img/backends.png"
                imageAlt="Backend Infrastructure"
                reversed={true}
            >
                <p>
                    Prism AI is designed with a flexible architecture that supports multiple computational backends, adhering to a "bring your own backend" approach. This flexibility allows the integration of any TEE-capable node into the infrastructure.
                </p>
                <p>
                    Through seamless integration with the open-source Hardware Abstraction Layer (HAL) provided by the Cocos AI platform, Prism AI enables efficient and secure execution of confidential workloads across various environments.
                </p>
            </FeatureSection>

            {/* Runtimes */}
            <FeatureSection
                title="Multiple Workload Runtime Support"
                image="/img/runtimes.png"
                imageAlt="Supported Runtimes"
            >
                <p>
                    Prism AI is designed to support a wide range of computational workloads within secure enclaves, enhancing its versatility and adaptability.
                </p>
                <ul className="space-y-2 mt-4">
                    <li className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span><strong>Python AI Algorithms:</strong> Leverage Python's extensive ecosystem for ML and data science.</span></li>
                    <li className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span><strong>Docker Containers:</strong> Deploy containerized applications with all dependencies.</span></li>
                    <li className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span><strong>WebAssembly (Wasm):</strong> Execute lightweight, high-performance code efficiently.</span></li>
                    <li className="flex gap-2 items-start"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span><strong>ELF Binaries:</strong> Run executable Linux binaries and custom applications.</span></li>
                </ul>
            </FeatureSection>

            {/* Logs */}
            <FeatureSection
                title="Enclave Monitoring, Events, and Logs"
                image="/img/logs.png"
                imageAlt="Logging and Monitoring"
                reversed={true}
            >
                <p>
                    Prism AI offers comprehensive monitoring, event tracking, and logging capabilities to ensure the security and integrity of computations within secure enclaves.
                </p>
                <p>
                    The platform continuously monitors the health and performance of enclaves, providing real-time insights. Additionally, Prism AI generates detailed event logs, capturing significant activities for audit purposes and compliance.
                </p>
            </FeatureSection>
        </section>
    );
}
