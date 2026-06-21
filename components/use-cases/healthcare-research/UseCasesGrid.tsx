import { FlaskConical, HeartPulse, Pill, Dna, ScanLine } from 'lucide-react';

const useCases = [
    { icon: FlaskConical, title: 'Multi-Hospital Clinical Trials', description: 'Hospitals collaborate on patient outcomes research and drug efficacy studies. Algorithms query EHR data locally via FHIR standards, returning only aggregate cohort metrics—never raw patient lists.', benefit: 'No Data Use Agreements required' },
    { icon: HeartPulse, title: 'Disease Research Collaboration', description: 'Institutions build AI models for cancer, diabetes, and cardiovascular detection across diverse patient populations. Combined datasets improve model robustness without centralizing sensitive records.', benefit: 'Larger, more diverse training datasets' },
    { icon: Pill, title: 'Pharmaceutical Development', description: 'Pharma companies access hospital real-world evidence for drug target validation and toxicity prediction. Computation occurs in hardware enclaves—neither party exposes proprietary data to the other.', benefit: 'Real-world validation without data sharing' },
    { icon: Dna, title: 'Personalized Medicine', description: 'Multi-omic data (genomics, proteomics, metabolomics) from multiple institutions trains personalized treatment models. Each institution retains custody of patient genetic data.', benefit: 'Broader datasets, local data control' },
    { icon: ScanLine, title: 'Medical Imaging AI', description: 'Collaborate on MRI, CT, and X-ray analysis across institutions. Models trained on distributed scans across multiple hospitals see more scanner types and patient demographics than single-site models.', benefit: 'Reduced bias from diverse training data' },
];

export function UseCasesGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Healthcare Scenarios</h2>
                    <p className="text-muted-foreground text-lg">Prism enables clinical collaboration that was previously blocked by privacy regulations and data fragmentation.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((uc, i) => (
                        <div key={i} className="flex flex-col p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors bg-card group">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4"><uc.icon className="h-6 w-6 text-primary" /></div>
                            <h3 className="font-bold text-xl mb-3">{uc.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{uc.description}</p>
                            <div className="pt-3 border-t border-border/50"><p className="text-xs font-semibold text-primary">&nearr; {uc.benefit}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
