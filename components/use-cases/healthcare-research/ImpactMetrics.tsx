import { Clock, DollarSign, Target, ShieldCheck, TrendingUp, Activity } from 'lucide-react';

const metrics = [
    { icon: Clock, value: 'Days', label: 'Time-to-Research', description: 'Data acquisition and legal setup compressed from months/years to days. No DUAs or BAAs needed\u2014algorithms travel to the data.', compare: 'vs. months\u2013years traditionally' },
    { icon: Target, value: '0.81', label: 'AUROC Parity', description: 'Federated models achieve 0.81 pooled AUROC across 1.4M+ participants\u2014statistically matching centralized models at 0.82.', compare: 'Privacy adds zero accuracy cost' },
    { icon: Activity, value: '92%', label: 'Diagnostic Accuracy', description: 'Federated diagnostic models achieve 92% accuracy vs. 89% for centralized methods, thanks to exposure to wider structural heterogeneity.', compare: 'vs. 89% centralized' },
    { icon: DollarSign, value: '$50\u2013100M', label: 'Pharma Cost Savings', description: 'Savings per successful drug asset through accelerated federated research, automated cohort matching, and reduced trial recruitment spend.', compare: 'Per drug development cycle' },
    { icon: ShieldCheck, value: '$10.93M', label: 'Breach Cost Avoided', description: 'Average healthcare breach cost in 2023. Decentralized architecture eliminates the centralized PHI target\u2014even a compromised orchestrator yields only encrypted gradients.', compare: 'Per breach avoided' },
    { icon: TrendingUp, value: '6 min', label: 'Computational Overhead', description: 'Maximum additional training time for federated models with full cryptographic protections vs. insecure local methods.', compare: 'Negligible performance cost' },
];

export function ImpactMetrics() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Impact Metrics</h2>
                    <p className="text-muted-foreground text-lg">Quantifiable proof that privacy-preserving AI matches or exceeds centralized systems in accuracy while delivering transformative time and cost savings.</p>
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
                                <th className="text-left p-4 font-bold text-primary">Prism AI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Data Acquisition</td>
                                <td className="p-4 text-muted-foreground">Months to years (DUAs/BAAs)</td>
                                <td className="p-4 text-muted-foreground">Days to weeks (data stays sovereign)</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Diagnostic Accuracy</td>
                                <td className="p-4 text-muted-foreground">Prone to bias and domain shift</td>
                                <td className="p-4 text-muted-foreground">Robust across demographics and hardware</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Security Risk</td>
                                <td className="p-4 text-muted-foreground">Critical\u2014pooled PHI target ($10.93M avg. breach)</td>
                                <td className="p-4 text-muted-foreground">Minimal\u2014natively HIPAA/GDPR/CCPA compliant</td>
                            </tr>
                            <tr className="border-b border-border/50">
                                <td className="p-4 font-semibold text-foreground">Financial Cost</td>
                                <td className="p-4 text-muted-foreground">High cloud storage and data egress costs</td>
                                <td className="p-4 text-muted-foreground">Edge compute; $50\u2013100M savings per drug asset</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

