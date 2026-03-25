import { LineChart, Truck, Building2, Search, Leaf, Package } from 'lucide-react';

const useCases = [
    { icon: LineChart, title: 'Industry Benchmarking', description: 'Companies in the same industry collaborate on performance metrics, efficiency analysis, and market trends. The secure enclave computes industry averages, percentiles, and efficiency frontiers\u2014individual company data is never exposed.', benefit: 'Real-time, accurate benchmarks without third-party consultants' },
    { icon: Truck, title: 'Supply Chain Optimization', description: 'Suppliers and manufacturers collaborate on demand forecasting, logistics optimization, and capacity management. Securely pool inventory levels, shipping times, and demand signals to train predictive AI models.', benefit: '10\u201330% reduction in downstream finished goods inventory' },
    { icon: Building2, title: 'Consortium Analytics', description: 'Industry consortiums in automotive, retail, energy, and finance conduct joint analysis without antitrust concerns. Financial institutions pool transaction data for fraud detection and AML models with superior accuracy.', benefit: 'Cross-institutional AI models with no PII exposure' },
    { icon: Search, title: 'Market Intelligence', description: 'Competitors securely combine point-of-sale data, loyalty metrics, and demographic trends within a TEE. The output identifies emerging consumer trends and shifting demands\u2014without exposing specific sales volumes or pricing.', benefit: 'Real-time predictive market intelligence' },
    { icon: Leaf, title: 'ESG Reporting', description: 'Suppliers securely input primary energy and production data into an encrypted enclave to compute precise Product Carbon Footprints. Only the certified carbon metric is output\u2014operational secrets stay protected.', benefit: '46% reduction in reported PCF vs. industry averages' },
    { icon: Package, title: 'Competitive Product Analysis', description: 'Securely pool warranty claims, field failure data, and customer sentiment across an industry. AI identifies systemic component failures and shifting preferences without sharing proprietary engineering data.', benefit: 'Proactive product quality improvement' },
];

export function UseCasesGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">High-Value Enterprise Use Cases</h2>
                    <p className="text-muted-foreground text-lg">Confidential data consortiums enable unprecedented analytical depth across six primary enterprise scenarios&mdash;all powered by hardware-backed security.</p>
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

