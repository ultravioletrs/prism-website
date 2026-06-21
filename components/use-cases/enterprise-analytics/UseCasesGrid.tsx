import { LineChart, Truck, Building2, Search, Leaf, Package } from 'lucide-react';

const useCases = [
    { icon: LineChart, title: 'Industry Benchmarking', description: 'Companies in the same industry collaborate on performance metrics and efficiency analysis. The secure enclave computes industry averages and percentiles—individual company data is never exposed.', benefit: 'Accurate benchmarks without exposing proprietary data' },
    { icon: Truck, title: 'Supply Chain Optimization', description: 'Suppliers and manufacturers collaborate on demand forecasting and capacity management. Pool inventory levels, shipping times, and demand signals to train predictive models.', benefit: 'Better forecasting from combined datasets' },
    { icon: Building2, title: 'Consortium Analytics', description: 'Industry consortiums conduct joint analysis without exposing member data. Financial institutions can pool transaction patterns for fraud detection while keeping individual records private.', benefit: 'Cross-institutional models without data sharing' },
    { icon: Search, title: 'Market Intelligence', description: 'Companies combine point-of-sale data, loyalty metrics, and demographic trends within a TEE. Output identifies consumer trends without exposing specific sales volumes or pricing.', benefit: 'Market insights from pooled data' },
    { icon: Leaf, title: 'ESG Reporting', description: 'Suppliers input energy and production data into an encrypted enclave to compute Product Carbon Footprints. Only the certified metric is output—operational details stay protected.', benefit: 'Accurate carbon reporting with data privacy' },
    { icon: Package, title: 'Product Quality Analysis', description: 'Pool warranty claims, field failure data, and customer feedback across an industry. Identify systemic issues and trends without sharing proprietary engineering data.', benefit: 'Industry-wide quality insights' },
];

export function UseCasesGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">High-Value Enterprise Use Cases</h2>
                    <p className="text-muted-foreground text-lg">How enterprises use confidential computing to collaborate on analytics while protecting proprietary data.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="flex flex-col p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors bg-card group">
                            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                                <useCase.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">{useCase.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{useCase.description}</p>
                            <div className="pt-3 border-t border-border/50">
                                <p className="text-xs font-semibold text-primary">&nearr; {useCase.benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

