import { Clock, DollarSign, Target, ShieldCheck, TrendingUp, Activity } from 'lucide-react';

const metrics = [
    { icon: Clock, value: 'Days', label: 'Time-to-Research', description: 'Data acquisition and legal setup reduced from months to days. No DUAs or BAAs needed—algorithms travel to the data instead.', compare: 'vs. months traditionally' },
    { icon: Target, value: 'Comparable', label: 'Model Accuracy', description: 'Privacy-preserving models can match centralized training accuracy. Data stays distributed while model quality remains competitive.', compare: 'No accuracy tradeoff' },
    { icon: Activity, value: 'Broader', label: 'Training Diversity', description: 'Models trained across institutions see more patient demographics, scanner types, and clinical workflows than single-site datasets.', compare: 'More representative models' },
    { icon: DollarSign, value: 'Reduced', label: 'Legal & Admin Costs', description: 'Skip months of Data Use Agreement negotiations. Institutions collaborate without the legal overhead of traditional data sharing.', compare: 'Streamlined partnerships' },
    { icon: ShieldCheck, value: 'Lower', label: 'Breach Exposure', description: 'No centralized PHI repository to target. Patient data stays within institutional boundaries, reducing attack surface.', compare: 'Decentralized by design' },
    { icon: TrendingUp, value: 'Minimal', label: 'Computational Overhead', description: 'Hardware-based encryption adds modest overhead compared to unprotected computation. TEEs handle encryption at the processor level.', compare: 'Acceptable performance cost' },
];

export function ImpactMetrics() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Impact Metrics</h2>
                    <p className="text-muted-foreground text-lg">Key benefits of privacy-preserving collaboration for healthcare AI development.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {metrics.map((m, i) => (
                        <div key={i} className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors text-center">
                            <div className="flex justify-center mb-4"><div className="p-3 bg-primary/10 rounded-full"><m.icon className="h-6 w-6 text-primary" /></div></div>
                            <div className="text-4xl font-bold text-primary mb-1">{m.value}</div>
                            <h3 className="font-bold text-lg mb-2">{m.label}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{m.description}</p>
                            <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">{m.compare}</span>
                        </div>
                    ))}
                </div>

                {/* KPI Table */}
                <div className="max-w-5xl mx-auto mt-16 overflow-x-auto">
                    <h3 className="text-xl font-bold text-center mb-8">Centralized vs. Privacy-Preserving AI</h3>
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left p-4 font-bold text-foreground">KPI</th>
                                <th className="text-left p-4 font-bold text-destructive">Centralized</th>
                                <th className="text-left p-4 font-bold text-primary">Prism</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Data Acquisition</td>
                                <td className="p-4 text-muted-foreground">Months to years (DUAs/BAAs)</td>
                                <td className="p-4 text-muted-foreground">Days to weeks (data stays in place)</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Model Diversity</td>
                                <td className="p-4 text-muted-foreground">Limited to single-institution data</td>
                                <td className="p-4 text-muted-foreground">Trains across multiple institutions</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Security Risk</td>
                                <td className="p-4 text-muted-foreground">Centralized PHI creates high-value target</td>
                                <td className="p-4 text-muted-foreground">Data stays distributed, smaller attack surface</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Legal Overhead</td>
                                <td className="p-4 text-muted-foreground">Complex BAA negotiations per partner</td>
                                <td className="p-4 text-muted-foreground">Simplified agreements, data never shared</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

