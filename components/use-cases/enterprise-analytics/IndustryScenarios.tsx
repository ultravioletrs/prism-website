import { Car, FlaskConical, Zap, ShoppingCart } from 'lucide-react';

const scenarios = [
    {
        icon: Car,
        title: 'Automotive Supply Chain',
        industry: 'Automotive',
        description:
            'OEMs and suppliers collaborate on quality tracking, demand forecasting, and carbon footprint calculations without exposing proprietary production data to each other.',
        highlights: [
            'Pool quality data across the supply chain for earlier defect detection',
            'Narrow recall scope by tracing issues to specific batches',
            'Calculate product carbon footprints using actual supplier data',
            'Maintain data sovereignty for each participant',
        ],
    },
    {
        icon: FlaskConical,
        title: 'Pharmaceutical Research',
        industry: 'Pharmaceutical',
        description:
            'Competing pharma companies can train joint models on combined datasets for drug discovery and safety prediction, without exposing proprietary compound libraries.',
        highlights: [
            'Raw data stays within each company\'s firewall',
            'Proprietary chemical structures remain confidential',
            'Combined models benefit from larger training datasets',
            'Hardware attestation verifies algorithm integrity',
        ],
    },
    {
        icon: Zap,
        title: 'Energy Grid Coordination',
        industry: 'Energy',
        description:
            'Energy generators, storage operators, and grid managers coordinate capacity and demand without exposing operational details or pricing strategies.',
        highlights: [
            'Aggregate capacity data for grid balancing',
            'Coordinate EV fleet charging without exposing individual patterns',
            'Predictive maintenance using pooled equipment data',
            'Maintain competitive separation between participants',
        ],
    },
    {
        icon: ShoppingCart,
        title: 'Retail Analytics',
        industry: 'Retail',
        description:
            'Retailers, logistics providers, and payment processors analyze customer patterns and optimize operations without exposing transaction-level data.',
        highlights: [
            'Match conversion signals across platforms privately',
            'Optimize marketing spend using combined insights',
            'Identify trends from pooled point-of-sale data',
            'Maintain GDPR and CCPA compliance',
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
                        How Prism enables cross-company collaboration across industries while protecting proprietary data.
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

