import { Fingerprint, Database, Brain, ShieldAlert } from 'lucide-react';

const challenges = [
    { icon: Fingerprint, title: 'De-identification Is a Myth', description: 'Advanced ML algorithms can cross-reference de-identified datasets with external databases to re-identify patients. Genomic sequences and MRI brain topology act as biological fingerprints\u2014stripping names changes nothing.' },
    { icon: Database, title: 'Data Silos & Interoperability', description: 'Patient data is scattered across EHR systems, PACS, LIS, and clinical registries. Establishing Data Use Agreements across jurisdictions has historically delayed multi-center studies by years.' },
    { icon: Brain, title: 'Algorithmic Bias & Domain Shift', description: 'Models trained at a single institution overfit to local demographics, scanners, and workflows. An AI trained on one MRI scanner brand can fail catastrophically on scans from another\u2014perpetuating healthcare disparities.' },
    { icon: ShieldAlert, title: 'Cyberattack Surface', description: 'Healthcare suffers the highest breach costs of any industry\u2014$10.93M average per breach in 2023. Centralizing PHI into shared data lakes multiplies the attack surface and regulatory exposure.' },
];

export function Challenges() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">The Healthcare Data Dilemma</h2>
                    <p className="text-muted-foreground text-lg">Robust healthcare AI demands vast, diverse datasets&mdash;yet sharing patient data is heavily regulated, technically risky, and operationally prohibitive. Prism AI eliminates this paradox.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {challenges.map((c, i) => (
                        <div key={i} className="flex gap-4 p-6 rounded-xl border border-border/50 hover:border-destructive/30 transition-colors bg-card">
                            <div className="shrink-0"><div className="p-3 bg-destructive/10 rounded-lg"><c.icon className="h-6 w-6 text-destructive" /></div></div>
                            <div><h3 className="font-bold text-lg mb-2">{c.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

