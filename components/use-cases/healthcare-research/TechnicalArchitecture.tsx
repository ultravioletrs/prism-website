import { Cpu, Fingerprint, Code2, FileText, Layers, ShieldCheck } from 'lucide-react';

const techItems = [
    { icon: Cpu, title: 'Trusted Execution Environments (TEEs)', description: 'AMD SEV-SNP and Intel TDX hardware enclaves encrypt data at the processor level. Decryption keys remain within the physical processor—not accessible to the hypervisor, host OS, or cloud provider.' },
    { icon: Fingerprint, title: 'Remote Attestation (aTLS)', description: 'Before computation begins, remote attestation generates cryptographic proof that the enclave runs the expected algorithm on genuine secure hardware. Participants can verify before sharing data.' },
    { icon: Code2, title: 'Open-Source Foundation (Cocos AI)', description: 'Built on the open-source Cocos AI platform for deploying Confidential VMs across public clouds, private data centers, and on-premise servers. The codebase is auditable.' },
    { icon: FileText, title: 'EHR Integration (FHIR / HL7)', description: 'Clinical APIs using FHIR and HL7 V2 standards allow secure queries to structured data (vitals, demographics) and unstructured notes from EHR systems within the enclave.' },
    { icon: Layers, title: 'DICOM Imaging Pipeline', description: 'A gateway behind the hospital firewall routes DICOM streams from MRI/CT modalities to the local encrypted node, returning results as DICOM Secondary Capture overlays or Structured Reports.' },
    { icon: ShieldCheck, title: 'Privacy-Enhancing Technologies', description: 'Supports Differential Privacy for statistical protection, and Secure Multi-Party Computation where multiple parties contribute inputs without exposing them to each other.' },
];

export function TechnicalArchitecture() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Architecture for Healthcare</h2>
                    <p className="text-muted-foreground text-lg">How Prism integrates with hospital IT systems while keeping patient data protected through hardware-based security.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {techItems.map((item, i) => (
                        <div key={i} className="flex flex-col items-start space-y-4 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                            <div className="p-3 bg-muted rounded-full"><item.icon className="h-7 w-7 text-primary" /></div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* PETs comparison table */}
                <div className="max-w-5xl mx-auto mt-16 overflow-x-auto">
                    <h3 className="text-xl font-bold text-center mb-8">Privacy-Enhancing Technologies Comparison</h3>
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left p-4 font-bold text-foreground">Technology</th>
                                <th className="text-left p-4 font-bold text-foreground">Mechanism</th>
                                <th className="text-left p-4 font-bold text-foreground">Healthcare Application</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">TEEs</td>
                                <td className="p-4 text-muted-foreground">Hardware-isolated encrypted enclaves</td>
                                <td className="p-4 text-muted-foreground">Executing AI over multi-omic data securely</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Differential Privacy</td>
                                <td className="p-4 text-muted-foreground">Calibrated statistical noise injection</td>
                                <td className="p-4 text-muted-foreground">Preventing membership inference in clinical trials</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Homomorphic Encryption</td>
                                <td className="p-4 text-muted-foreground">Computation on encrypted ciphertexts</td>
                                <td className="p-4 text-muted-foreground">Cloud-based genomic analysis and diagnostic scoring</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">SMPC</td>
                                <td className="p-4 text-muted-foreground">Distributed computation; no party sees inputs</td>
                                <td className="p-4 text-muted-foreground">Joint statistical analysis between competing pharma firms</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
