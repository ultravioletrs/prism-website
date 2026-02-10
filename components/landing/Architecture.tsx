import Image from 'next/image';

export function Architecture() {
    return (
        <section id="architecture" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Prism AI Architecture</h2>
                    <p className="text-muted-foreground text-lg">
                        A modular and scalable design optimized for confidential computing and privacy-preserving AI collaboration.
                    </p>
                </div>

                <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border/50 mb-20 bg-background dark:bg-white/95">
                    <Image
                        src="/img/prism-architecture.png"
                        alt="Prism AI Architecture Overview"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl">1. Cloud Services</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Microservices-based architecture orchestrated by Kubernetes. Includes Computations service for managing confidential workflows, Users service, and Authorization service for robust RBAC/ABAC controls.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl">2. TEE Manager</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Critical microservice running on host hardware. Dynamically deploys TEEs for computations and securely destroys them and all associated data after execution.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl">3. In-Enclave Agent</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Lightweight component running within each enclave. Coordinates algorithm execution, establishes TLS channels for secure uploads, and provides remote attestation.
                        </p>
                    </div>
                </div>

                {/* Cocos AI Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Open-Source Core with Cocos AI</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Core components including the TEE Manager and In-Enclave Agent are part of the open-source <a href="https://github.com/ultravioletrs/cocos" className="text-primary hover:underline font-medium">Cocos AI project</a>.
                            </p>
                            <p>
                                This ensures transparency, security, and community-driven innovation. Every computational node benefits from robust, tested TEE orchestration.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-border/50 bg-background dark:bg-white/95">
                        <Image
                            src="/img/prism-cocos.png"
                            alt="Open-source Core with Cocos AI"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
