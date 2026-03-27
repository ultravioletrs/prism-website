import { Hospital, FlaskConical, Microscope } from 'lucide-react';

const examples = [
    {
        icon: Hospital,
        title: 'Multi-Hospital Readmission Prediction',
        context: 'What Prism Enables',
        description: 'Regional hospital networks can collaboratively train readmission risk models across their combined patient populations. Each hospital retains full custody of patient records while contributing to a shared model that benefits all participants.',
        highlights: [
            'Patient data never leaves hospital infrastructure',
            'Combined model learns from diverse patient demographics',
            'No Data Use Agreements required between participating hospitals',
            'Each hospital can withdraw participation at any time',
        ],
    },
    {
        icon: Microscope,
        title: 'Cross-Institutional Imaging Analysis',
        context: 'What Prism Enables',
        description: 'Research institutions can pool imaging data for diagnostic model training without centralizing sensitive scans. Prism coordinates model training across sites while MRI, CT, and X-ray data remains within each institution\'s secure environment.',
        highlights: [
            'Models train on diverse scanner types and patient populations',
            'Reduces bias from single-institution datasets',
            'DICOM data stays behind hospital firewalls',
            'Hardware attestation verifies algorithm integrity before training',
        ],
    },
    {
        icon: FlaskConical,
        title: 'Pharma-Hospital Data Collaboration',
        context: 'What Prism Enables',
        description: 'Pharmaceutical companies can validate drug efficacy against real-world hospital outcomes without hospitals exposing patient records or pharma exposing proprietary compound data. Both parties contribute to shared analysis while protecting their sensitive assets.',
        highlights: [
            'Hospitals retain patient data sovereignty',
            'Pharma protects proprietary research data',
            'Results computed in hardware-isolated enclaves',
            'Audit trails document all computation without exposing inputs',
        ],
    },
];

export function RealWorldExamples() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Healthcare Scenarios</h2>
                    <p className="text-muted-foreground text-lg">How Prism enables collaborative healthcare AI while keeping sensitive data under institutional control.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {examples.map((ex, i) => (
                        <div key={i} className="p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors bg-card">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg"><ex.icon className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{ex.title}</h3>
                                    <span className="text-xs font-medium text-brand-secondary uppercase tracking-wider">{ex.context}</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{ex.description}</p>
                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Results</h4>
                                {ex.highlights.map((h, j) => (
                                    <div key={j} className="flex items-start gap-2">
                                        <span className="text-primary font-bold text-sm mt-0.5">&#x2713;</span>
                                        <span className="text-sm text-muted-foreground">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

