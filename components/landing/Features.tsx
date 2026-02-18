import { Shield, Server, Lock, Code, Cpu, Activity, Share2, Layers } from 'lucide-react';

const features = [
    {
        icon: Layers,
        title: 'Computation Management',
        description: 'Define, orchestrate, and execute confidential AI workloads inside Trusted Execution Environments (TEEs) with ease.',
    },
    {
        icon: Shield,
        title: 'Fine-Grained Access Control',
        description: 'RBAC and ABAC policies ensure only authorized entities access metadata, while data remains isolated in enclaves.',
    },
    {
        icon: Server,
        title: 'Secure VM Provisioning',
        description: 'Manage encrypted virtual machines isolated for integrity and confidentiality across cloud and on-premise environments.',
    },
    {
        icon: Cpu,
        title: 'Hardware Abstraction',
        description: ' robust HAL ensures secure execution and isolation across different TEE hardware providers.',
    },
    {
        icon: Share2,
        title: 'In-Enclave Agent',
        description: 'A dedicated agent coordinates execution, secure data upload, and attestation within the enclave.',
    },
    {
        icon: Lock,
        title: 'End-to-End Encryption',
        description: 'All traffic and data processing are fully encrypted, protecting confidentiality and integrity.',
    },
    {
        icon: Code,
        title: 'SDK and CLI',
        description: 'Robust developer tools streamline the development and orchestration of secure workloads.',
    },
    {
        icon: Activity,
        title: 'Logging & Instrumentation',
        description: 'Full observability with Grafana, Prometheus, and OpenTracing integration for monitoring performance.',
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Prism AI Features</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive platform capabilities for secure, confidential, and collaborative AI workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl border bg-card hover:bg-brand-secondary/5 transition-colors"
                        >
                            <div className="h-12 w-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center mb-4 group-hover:bg-brand-secondary/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-brand-secondary" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
