import { ShieldAlert, Database, Scale, AlertTriangle } from 'lucide-react';

const challenges = [
    {
        icon: ShieldAlert,
        title: 'Privacy & IP Risks',
        description:
            'Raw data often contains PII, PHI, or trade secrets. Sharing it risks IP leakage, reverse-engineering of profit margins, and regulatory violations under GDPR, HIPAA, and CCPA.',
    },
    {
        icon: Database,
        title: 'Inadequate Clean Rooms',
        description:
            'Traditional Data Clean Rooms rely on software-based access controls. The underlying data is still decrypted in cloud memory—vulnerable to insider threats and memory-scraping attacks.',
    },
    {
        icon: Scale,
        title: 'Antitrust Scrutiny',
        description:
            'The DOJ and FTC withdrew the 2000 Collaboration Guidelines in December 2024. Modern AI can de-anonymize "aggregated" data, making traditional information-sharing frameworks obsolete.',
    },
    {
        icon: AlertTriangle,
        title: 'Data Silos Limit AI',
        description:
            'ML models benefit from diverse datasets. Operating within a single organization\'s data limits the scope of analysis and model training.',
    },
];

export function Challenges() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        The Enterprise Data Collaboration Challenge
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Organizations face a difficult choice: leverage external data for better analytics,
                        or protect proprietary assets from exposure. Prism addresses this tradeoff.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-6 rounded-xl border border-border/50 hover:border-destructive/30 transition-colors bg-card"
                        >
                            <div className="shrink-0">
                                <div className="p-3 bg-destructive/10 rounded-lg">
                                    <challenge.icon className="h-6 w-6 text-destructive" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

