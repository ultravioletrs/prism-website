import { Settings, UploadCloud, PlayCircle, MailOpen } from 'lucide-react';

const steps = [
    {
        icon: Settings,
        title: '1. Computation Definition',
        description:
            'A consortium administrator creates a Computation manifest, defining the exact analytics algorithm to run and the specific participants involved. A secure virtual machine (TEE) is provisioned.',
    },
    {
        icon: UploadCloud,
        title: '2. Secure Upload via Attestation',
        description:
            'Program Providers (analytics algorithms) and Data Providers (raw datasets) independently perform remote attestation. Once the enclave integrity is verified, they upload assets directly into the TEE over encrypted channels.',
    },
    {
        icon: PlayCircle,
        title: '3. Coordinated Execution',
        description:
            'Within the enclave, a dedicated in-enclave agent coordinates execution of the programs over the combined datasets. The algorithm cannot deviate from its pre-approved function, nor leak data outside the enclave.',
    },
    {
        icon: MailOpen,
        title: '4. Result Consumption',
        description:
            'Raw data is securely destroyed from memory upon completion. Only the final, aggregated analytics results are sent to the designated Result Consumer. No party ever sees another\u2019s raw data.',
    },
];

export function HowItWorksEnterprise() {
    return (
        <section className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Secure Multi-Party Collaboration Workflow
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A strictly orchestrated four-step process designed to maintain absolute data
                        sovereignty throughout the entire analytics lifecycle.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="p-4 bg-background rounded-full shadow-sm border border-border/50">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

