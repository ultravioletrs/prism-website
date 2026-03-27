import { TrendingUp, Users, Heart, DollarSign, Gauge, Leaf } from 'lucide-react';

const metrics = [
    {
        icon: TrendingUp,
        value: 'New',
        label: 'Revenue Streams',
        description: 'Data collaboration enables new services and insights that weren\'t possible when operating in isolation.',
        source: 'Data monetization',
    },
    {
        icon: Gauge,
        value: 'Faster',
        label: 'Decision Making',
        description: 'Access to broader datasets and shared analytics accelerates time-to-insight for strategic decisions.',
        source: 'Operational efficiency',
    },
    {
        icon: Heart,
        value: 'Better',
        label: 'Customer Experience',
        description: 'Combined data enables more accurate demand forecasting, reducing stockouts and improving service.',
        source: 'Customer satisfaction',
    },
    {
        icon: DollarSign,
        value: 'Lower',
        label: 'Administrative Overhead',
        description: 'Eliminate manual data exchange processes, redundant reporting, and complex data sharing agreements.',
        source: 'Cost reduction',
    },
    {
        icon: Users,
        value: 'Earlier',
        label: 'Issue Detection',
        description: 'Pooled quality data across supply chains enables faster identification of defects and narrower recall scope.',
        source: 'Quality improvement',
    },
    {
        icon: Leaf,
        value: 'Accurate',
        label: 'ESG Reporting',
        description: 'Calculate product carbon footprints using actual supplier data instead of industry averages.',
        source: 'Sustainability',
    },
];

export function ROIMetrics() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Business Value
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Benefits of collaborative data platforms. Once the infrastructure is established,
                        additional use cases can be deployed with minimal incremental cost.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <metric.icon className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-primary mb-1">{metric.value}</div>
                            <h3 className="font-bold text-lg mb-2">{metric.label}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                {metric.description}
                            </p>
                            <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">
                                {metric.source}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Compounding Value Note */}
                <div className="mt-16 max-w-3xl mx-auto p-6 rounded-xl border border-brand-secondary/30 bg-brand-secondary/5 text-center">
                    <h3 className="font-bold text-lg mb-2">Compounding Value</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Once a partner is onboarded for one use case, the same secure infrastructure
                        supports additional applications—quality tracking, ESG reporting, capacity forecasting,
                        and more. Each additional use case leverages existing integrations.
                    </p>
                </div>
            </div>
        </section>
    );
}

