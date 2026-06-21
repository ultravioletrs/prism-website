import { Car, FlaskConical, Zap, ShoppingCart } from 'lucide-react';

const scenarios = [
    {
        icon: Car,
        title: 'Automotive: Catena-X Network',
        industry: 'Automotive',
        description:
            'Catena-X serves as a federated data ecosystem allowing the entire automotive value chain to exchange information securely while maintaining strict data sovereignty.',
        highlights: [
            'Errors detected 4 months earlier than traditional methods',
            'Potential 1.4M vehicle recall narrowed to just 14 vehicles',
            '46% reduction in reported Product Carbon Footprint values',
            '\u20AC10,000 saved per PCF calculation vs. manual audits',
        ],
    },
    {
        icon: FlaskConical,
        title: 'Pharma: MELLODDY Consortium',
        industry: 'Pharmaceutical',
        description:
            'Ten competing pharmaceutical giants\u2014including AstraZeneca, Bayer, GSK, and Novartis\u2014collaboratively trained predictive AI models on 2.6 billion confidential data points and 21 million small molecules.',
        highlights: [
            'Raw data never left the firewalls of respective owners',
            'Proprietary chemical structures never exposed to competitors',
            'Global model outperformed any individual company\u2019s isolated models',
            'Significant improvements in predicting pharmacokinetics and safety',
        ],
    },
    {
        icon: Zap,
        title: 'Energy: Gaia-X & Energy Data-X',
        industry: 'Energy',
        description:
            'European sovereign data spaces facilitate real-time coordination between decentralized renewable energy generators, storage systems, and consumers for grid optimization.',
        highlights: [
            'Real-time visibility into grid behavior via smart meter gateways',
            'Aggregated EV fleet capacity for split-second discharge decisions',
            'Digital twins for predictive maintenance on high-voltage transformers',
            'Reduced need for auxiliary gas turbine startups',
        ],
    },
    {
        icon: ShoppingCart,
        title: 'Retail & Technology Ecosystems',
        industry: 'Retail',
        description:
            'Retailers, logistics providers, and payment processors securely match customer conversion signals against ad exposure data across platforms to optimize marketing spend.',
        highlights: [
            'Align ad spend with actual buyer intent across platforms',
            'Halt campaigns targeting already-converted customers',
            'Recapture millions in wasted advertising spend',
            'Full GDPR and CCPA compliance maintained throughout',
        ],
    },
];

export function IndustryScenarios() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Industry-Specific Scenarios
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Real-world consortiums driving transformative business value across
                        automotive, pharmaceutical, energy, and retail sectors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {scenarios.map((scenario, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors bg-card"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <scenario.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">{scenario.title}</h3>
                                    <span className="text-xs font-medium text-brand-secondary uppercase tracking-wider">
                                        {scenario.industry}
                                    </span>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {scenario.description}
                            </p>

                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                                    Key Results
                                </h4>
                                {scenario.highlights.map((highlight, hIndex) => (
                                    <div key={hIndex} className="flex items-start gap-2">
                                        <span className="text-primary font-bold text-sm mt-0.5">&#x2713;</span>
                                        <span className="text-sm text-muted-foreground">{highlight}</span>
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

