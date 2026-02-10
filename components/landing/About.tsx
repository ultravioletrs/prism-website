import Image from 'next/image';

export function About() {
    return (
        <section id="prism-ai" className="py-20 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted/20 dark:bg-white/5">
                        {/* Placeholder for Prism Concept Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                            <Image
                                src="/img/prism-concept.png"
                                alt="Prism AI Architecture"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Secure Multi-Party Collaboration
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Prism AI is a confidential computing platform designed to help
                                organizations securely execute sensitive AI workloads inside
                                Trusted Execution Environments (TEEs).
                            </p>
                            <p>
                                It enables the deployment of encrypted virtual machines across private,
                                hybrid, and public cloud infrastructures while preserving data confidentiality.
                            </p>
                            <p>
                                Through secure orchestration and remote attestation, data remains protected
                                at all times—even from the infrastructure provider itself.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
