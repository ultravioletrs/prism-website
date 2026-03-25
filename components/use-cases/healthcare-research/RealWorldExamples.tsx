import { Globe, FlaskConical, Pill } from 'lucide-react';

const examples = [
    {
        icon: Globe,
        title: 'EXAM Study: COVID-19 Oxygen Prediction',
        context: 'Multi-Center Clinical Trial',
        description: 'During the COVID-19 pandemic, 20 institutions across North America, Europe, and Asia collaboratively trained an AI model to predict oxygen requirements of symptomatic patients. Not a single patient record crossed international borders.',
        highlights: [
            '20 institutions across 3 continents collaborated seamlessly',
            'Multimodal data: CT images, radiology reports, clinical vitals',
            'Global model achieved unprecedented accuracy and generalizability',
            'Directly guided rapid treatment decisions and hospital resource allocation',
        ],
    },
    {
        icon: Pill,
        title: 'MELLODDY: Federated Drug Discovery',
        context: 'Pharmaceutical Consortium',
        description: 'Ten competing pharmaceutical giants\u2014including AstraZeneca, Bayer, GSK, and Novartis\u2014collaboratively trained predictive models on 2.6 billion confidential data points and 21 million small molecules using federated learning with blockchain audit trails.',
        highlights: [
            'Raw data never left the firewalls of respective owners',
            'Proprietary chemical structures never exposed to competitors',
            'Global model outperformed any individual company\u2019s isolated models',
            'Blockchain DLT ensured immutable audit trail of every model update',
        ],
    },
    {
        icon: FlaskConical,
        title: 'Multi-Center Breast Cancer Diagnostics',
        context: 'Disease Research Collaboration',
        description: 'A collaborative study that traditionally required up to six years of administrative negotiations for Data Use Agreements was executed in a fraction of the time using federated computation, allowing researchers to utilize contemporary, clinically relevant data.',
        highlights: [
            'Eliminated years of DUA negotiation delays',
            'Researchers worked with current, relevant clinical data',
            'Federated model added only 6 minutes of overhead vs. local training',
            'Full GDPR and HIPAA compliance maintained throughout',
        ],
    },
];

export function RealWorldExamples() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Real-World Examples</h2>
                    <p className="text-muted-foreground text-lg">Proven implementations demonstrating how privacy-preserving collaboration drives breakthrough clinical outcomes.</p>
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

