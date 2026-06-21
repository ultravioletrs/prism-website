import { TrendingUp, Users, Heart, DollarSign, Gauge, Leaf } from 'lucide-react';

const metrics = [
    {
        icon: TrendingUp,
        value: '9%',
        label: 'Revenue Growth',
        description: 'Annual revenue increase driven by data monetization, co-creation of new services, and predictive market intelligence.',
        source: 'Cross-industry average',
    },
    {
        icon: Gauge,
        value: '14%',
        label: 'Operational Productivity',
        description: 'Increase in efficiency from automated data flows, elimination of redundant reporting, and streamlined cross-company workflows.',
        source: 'Cross-industry average',
    },
    {
        icon: Heart,
        value: '15%',
        label: 'Customer Satisfaction',
        description: 'Improvement from enhanced personalization, predictive demand fulfillment preventing stockouts, and higher product quality.',
        source: 'Cross-industry average',
    },
    {
        icon: DollarSign,
        value: '11%',
        label: 'Cost Reduction',
        description: 'Year-over-year reduction from optimized inventory management, reduced administrative overhead, and shared analytical resources.',
        source: 'Cross-industry average',
    },
    {
        icon: Users,
        value: '4 mo',
        label: 'Earlier Error Detection',
        description: 'Critical manufacturing errors detected 4 months earlier. A potential 1.4M vehicle recall narrowed to just 14 vehicles.',
        source: 'Automotive (Catena-X)',
    },
    {
        icon: Leaf,
        value: '46%',
        label: 'PCF Reduction',
        description: 'Reduction in reported Product Carbon Footprint values using primary supplier data, with \u20AC10K saved per calculation.',
        source: 'Manufacturing (Catena-X)',
    },
];

export function ROIMetrics() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        ROI &amp; Business Value Metrics
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Data-sharing mature organizations realize significant financial and operational advantages.
                        The ROI of collaborative data platforms follows a non-linear trajectory&mdash;subsequent
                        use cases deploy with minimal incremental cost.
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
                    <h3 className="font-bold text-lg mb-2">The Compounding Value of the Ecosystem</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Once a supplier is onboarded for part quality tracking, the same secure infrastructure
                        immediately supports Product Carbon Footprint exchange for ESG reporting, capacity
                        forecasts for supply chain optimization, and more. Each additional use case deploys
                        with minimal cost, creating an unbeatable competitive edge that isolated organizations
                        cannot replicate.
                    </p>
                </div>
            </div>
        </section>
    );
}

