import { Shield, ShieldCheck } from 'lucide-react';

const comparisonRows = [
    {
        risk: 'Information Exchange',
        traditional: 'Data is pooled in a central database; risk of indirect visibility into competitor operations.',
        prism: 'Data remains encrypted in memory. Competitors never possess, view, or exchange each other\u2019s raw data.',
    },
    {
        risk: 'Algorithmic Collusion',
        traditional: 'Algorithms ingest raw competitor data, raising concerns of automated price-fixing.',
        prism: 'Models are trained on encrypted data within a TEE. The platform outputs aggregated insights without retaining or exposing the granular inputs.',
    },
    {
        risk: 'Third-Party Conduits',
        traditional: 'Third-party analytics vendors aggregate data, acting as a hub for conscious information sharing.',
        prism: 'The TEE prevents even the third-party infrastructure provider or software vendor from accessing the raw data.',
    },
    {
        risk: 'De-anonymization',
        traditional: 'Advanced AI can reverse-engineer aggregated datasets to identify specific competitor strategies.',
        prism: 'Differential privacy techniques and hardware isolation make reverse-engineering of individual inputs significantly harder.',
    },
];

export function AntitrustCompliance() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Antitrust &amp; Regulatory Compliance
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Regulatory scrutiny of data collaboration is increasing. Prism's architecture
                        helps address concerns about anticompetitive information exchange.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                    <div className="p-6 rounded-xl border border-border/50 bg-card">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-secondary/10 rounded-lg">
                                <Shield className="h-5 w-5 text-brand-secondary" />
                            </div>
                            <h3 className="font-bold text-lg">The Cortland Standard (2025)</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Regulatory guidance increasingly scrutinizes third-party software that uses
                            competitor data. TEE-based platforms act as isolated environments where
                            participants cannot access each other's raw inputs.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border border-border/50 bg-card">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-brand-secondary/10 rounded-lg">
                                <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                            </div>
                            <h3 className="font-bold text-lg">Pro-Competitive by Design</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The architecture prevents participants from accessing each other's raw data,
                            reducing the mechanism for price signaling or tacit collusion. Joint analytics
                            can serve pro-competitive purposes.
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <h3 className="text-xl font-bold text-center mb-8">Traditional Collaboration vs. Confidential Computing</h3>
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left p-4 font-bold text-foreground">Antitrust Risk</th>
                                <th className="text-left p-4 font-bold text-destructive">Traditional Approach</th>
                                <th className="text-left p-4 font-bold text-primary">With Prism</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row, index) => (
                                <tr key={index} className="border-b border-border/50">
                                    <td className="p-4 font-semibold text-foreground align-top">{row.risk}</td>
                                    <td className="p-4 text-muted-foreground align-top">{row.traditional}</td>
                                    <td className="p-4 text-muted-foreground align-top">{row.prism}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

