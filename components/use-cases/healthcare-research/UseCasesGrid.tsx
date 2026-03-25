import { FlaskConical, HeartPulse, Pill, Dna, ScanLine } from 'lucide-react';

const useCases = [
    { icon: FlaskConical, title: 'Multi-Hospital Clinical Trials', description: 'Hospitals collaborate on patient outcomes research and drug efficacy studies. AI agents parse EHR data locally via FHIR standards, returning only aggregate cohort availability\u2014never raw patient lists.', benefit: 'Years of DUA negotiation compressed to days' },
    { icon: HeartPulse, title: 'Disease Research Collaboration', description: 'Institutions build AI models for cancer, diabetes, and cardiovascular detection across diverse patient populations. Horizontal collaboration scales sample size; vertical collaboration links clinical outcomes with genomics.', benefit: '92% diagnostic accuracy vs. 89% centralized' },
    { icon: Pill, title: 'Pharmaceutical Development', description: 'Pharma companies securely access hospital real-world data for drug target validation and toxicity prediction. Blockchain audit trails ensure no participant can reverse-engineer proprietary compound libraries.', benefit: '$50M\u2013$100M savings per successful drug asset' },
    { icon: Dna, title: 'Personalized Medicine', description: 'Federated learning over multi-omic data (genomics, proteomics, metabolomics) enables personalized treatment recommendations. Reinforcement learning models dynamically refine chemotherapy scheduling and insulin dosing.', benefit: 'Overcome small-cohort, high-dimensionality limits' },
    { icon: ScanLine, title: 'Medical Imaging AI', description: 'Collaborate on MRI, CT, and X-ray analysis across institutions. Models trained on 100K distributed scans across 50 hospitals are exponentially more robust than 2K homogeneous scans from one center.', benefit: 'Eliminates domain shift across scanner brands' },
];

export function UseCasesGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Healthcare Scenarios</h2>
                    <p className="text-muted-foreground text-lg">Prism AI enables transformative clinical use cases that were previously impossible due to privacy regulations and data fragmentation.</p>
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
