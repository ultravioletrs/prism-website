import Image from 'next/image';

const partners = [
    { name: 'Target', logo: '/img/logos/target.png' },
    { name: 'Greennet', logo: '/img/logos/greennet.png' },
    { name: 'European Commission', logo: '/img/logos/eu.png' },
    { name: 'Telefónica', logo: '/img/logos/telefonica.png' },
    { name: 'TU Eindhoven', logo: '/img/logos/tue.png' },
    { name: 'TNO', logo: '/img/logos/tno.png' },
    { name: 'Intel PARC', logo: '/img/logos/parc.png' },
    { name: 'VTT', logo: '/img/logos/vtt.png' },
    { name: 'ETF', logo: '/img/logos/etf.png' },
    { name: 'Linux Foundation', logo: '/img/logos/lf.png' },
];

export function Partners() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tight">Trusted Partners</h2>
                    <p className="text-muted-foreground mt-2">
                        Collaborating with leading organizations in confidential computing and secure AI.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex items-center justify-center p-4 h-20 w-32 md:w-40">
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                width={160}
                                height={80}
                                className="object-contain max-h-12 w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
