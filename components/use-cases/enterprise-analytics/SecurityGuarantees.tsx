import { Cpu, Fingerprint, Code2, Users, ShieldCheck, Container } from 'lucide-react';

const guarantees = [
    {
        icon: Cpu,
        title: 'Trusted Execution Environments (TEEs)',
        description:
            'Prism AI leverages Intel TDX and AMD SEV-SNP hardware-backed TEEs. Memory pages are encrypted using keys generated and managed entirely by the hardware processor. Even the hypervisor, host OS, and cloud provider hold zero access to these keys.',
    },
    {
        icon: Fingerprint,
        title: 'Remote Attestation',
        description:
            'Before uploading data, participants mathematically verify the enclave is secure, running on genuine hardware, and executing the exact analytical code agreed upon by the consortium. The hardware root of trust generates a cryptographic quote with a hash measurement of the entire software stack.',
    },
    {
        icon: Code2,
        title: 'Open-Source HAL (Cocos AI)',
        description:
            'Built on Cocos AI, an open-source platform providing a robust Hardware Abstraction Layer. Secure enclave management, confidential VM orchestration, and remote attestation mechanisms are independently auditable\u2014eliminating proprietary black-box risks.',
    },
    {
        icon: Users,
        title: 'Hierarchical Access Control',
        description:
            'Fine-grained RBAC and ABAC policies ensure strict role delineation. A Dataset Provider can upload data but cannot view the Algorithm Provider\u2019s code. Neither can view output unless designated as a Result Consumer.',
    },
    {
        icon: ShieldCheck,
        title: 'End-to-End Encryption',
        description:
            'All traffic and data processing is fully encrypted. Data remains encrypted in transit, at rest, and in use within the TEE. Raw data is securely destroyed from memory after computation; only aggregated results are output.',
    },
    {
        icon: Container,
        title: 'Versatile Secure Runtimes',
        description:
            'Support for WebAssembly (Wasm), Docker containers, Python AI algorithms, and standard ELF Linux binaries. Enterprise data science teams deploy existing ML models into the secure enclave without code refactoring.',
    },
];

export function SecurityGuarantees() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Security &amp; Confidentiality Guarantees
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Hardware-backed, mathematically verifiable security ensures absolute data
                        sovereignty for every consortium participant.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {guarantees.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start space-y-4 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                        >
                            <div className="p-3 bg-muted rounded-full">
                                <item.icon className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

