import { Stethoscope, LineChart, Building2, Lock, Eye, Users } from 'lucide-react';

export function UseCases() {
    const sectors = [
        {
            icon: Stethoscope,
            title: "Healthcare",
            description: "Protect sensitive patient data and enable collaborative research. Securely share and analyze patient records, conduct research on medical data, and develop AI-driven healthcare solutions while maintaining data privacy."
        },
        {
            icon: LineChart,
            title: "Finance",
            description: "Enhance data security for financial institutions. Enable secure data sharing and collaborative financial analysis, risk assessments, and fraud detection models without exposing raw financial data."
        },
        {
            icon: Building2,
            title: "Government",
            description: "Ensure data security for critical government operations. Enable secure multi-party computation for collaborative analysis between departments and protect classified information."
        }
    ];

    const applications = [
        {
            title: "Confidential AI Workloads",
            description: "Execute confidential AI workloads in secure enclaves. Whether in private, hybrid, or public cloud environments, ensure that sensitive computations are encrypted and isolated."
        },
        {
            title: "Privacy-Preserving Analytics",
            description: "Perform data analytics without compromising privacy. Derive insights from sensitive datasets while maintaining compliance with GDPR, HIPAA, and other regulations."
        },
        {
            title: "Collaborative AI Development",
            description: "Foster innovation by enabling secure collaboration among AI developers. Share algorithms and datasets within trusted environments, ensuring intellectual property remains protected."
        }
    ];

    return (
        <section id="use-cases" className="py-20 bg-background">
            <div className="container px-4 md:px-6">

                {/* Sectors */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Where Prism AI is Used</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {sectors.map((sector, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                                <div className="p-3 bg-muted rounded-full">
                                    <sector.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl">{sector.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed text-justify">{sector.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Applications */}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Real-World Applications</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {applications.map((app, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 bg-muted/20 rounded-xl">
                                <h3 className="font-bold text-xl">{app.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed text-justify">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a href="mailto:info@ultraviolet.rs" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        Contact Us
                    </a>
                </div>

            </div>
        </section>
    );
}
