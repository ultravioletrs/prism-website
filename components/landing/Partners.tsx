import Image from 'next/image';
import { cn } from '@/lib/cn';

const partners = [
    { name: 'IF', logo: '/img/logos/if.png' },
    { name: 'ETF', logo: '/img/logos/etf.png' },
    { name: 'European Commission', logo: '/img/logos/eu.png' },
    { name: 'Telefónica', logo: '/img/logos/telefonica.png' },
    { name: 'VTT', logo: '/img/logos/vtt.png' },
    { name: 'Fujitsu', logo: '/img/logos/fujitsu.png' },
    { name: 'Fraunhofer', logo: '/img/logos/fraunhofer.png' },
    { name: 'TNO', logo: '/img/logos/tno.png' },
    { name: 'Ericsson', logo: '/img/logos/ericsson.png' },
    { name: 'Nokia', logo: '/img/logos/nokia.png' },
    { name: 'Inserm', logo: '/img/logos/inserm.png' },
    { name: 'TU Eindhoven', logo: '/img/logos/tue.png' },
    { name: 'Thales', logo: '/img/logos/thales.png' },
    { name: 'Imdea', logo: '/img/logos/imdea.svg' },
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

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-70 dark:opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex items-center justify-center p-4 h-20 w-32 md:w-40">
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                width={160}
                                height={80}
                                className={cn(
                                    "object-contain max-h-12 w-auto",
                                    partner.name !== 'VTT' && partner.name !== 'TU Eindhoven' && "dark:invert"
                                )}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
