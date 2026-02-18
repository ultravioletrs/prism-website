import { Settings, UploadCloud, PlayCircle, MailOpen } from 'lucide-react';

export function HowItWorks() {
    const steps = [
        {
            icon: Settings,
            title: "Step 1",
            description: "User creates a Computation, defines characteristics, and participants. A secure VM (TEE) is provisioned and prepared for use."
        },
        {
            icon: UploadCloud,
            title: "Step 2",
            description: "Program and Data Providers upload programs and datasets into the enclave using secure CLI and remote attestation."
        },
        {
            icon: PlayCircle,
            title: "Step 3",
            description: "Programs are executed over combined datasets, coordinated by an in-enclave Agent, following the Computation manifest."
        },
        {
            icon: MailOpen,
            title: "Step 4",
            description: "Results are sent to the Result Consumer user as the algorithm completes execution inside the enclave."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">How Prism AI Works</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 bg-background rounded-full shadow-sm">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
