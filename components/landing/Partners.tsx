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

function TickerStrip({ items, speed, direction }: { items: any[], speed: number, direction: 'left' | 'right' }) {
    const doubled = [...items, ...items];
    const animationClass = direction === 'left' ? 'animate-ticker-scroll-left' : 'animate-ticker-scroll-right';

    return (
        <div
            className="flex overflow-hidden group w-full"
            style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
        >
            <div
                className={`flex gap-3 w-max ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((item, i) => (
                    <div
                        key={`${item.name}-${i}`}
                        className="
                            flex items-center gap-3 px-5 py-3 rounded-full
                            border border-border/40
                            bg-background/80 backdrop-blur-sm
                            transition-all duration-300 cursor-default select-none
                            hover:border-border hover:bg-accent/50
                            dark:bg-white/[0.04] dark:border-white/10
                            dark:hover:bg-white/[0.08] dark:hover:border-white/20
                            shrink-0
                        "
                    >
                        <div className="relative h-7 w-16 shrink-0">
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain dark:brightness-[1.2] dark:contrast-[1.05]"
                            />
                        </div>
                        <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Partners() {
    return (
        <section className="relative border-y bg-muted/10 overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/20 to-transparent dark:via-indigo-950/10 pointer-events-none" />

            {/* Partners */}
            <div className="py-16 relative">
                <div className="container mx-auto px-4 md:px-6 mb-10">
                    <div className="text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                            Trusted Partners
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:to-blue-400">
                            Collaborating with leading organizations
                        </h2>
                        <p className="text-muted-foreground mt-2 text-sm">
                            in confidential computing and secure AI.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <TickerStrip items={partners} speed={40} direction="left" />
                </div>
            </div>
        </section>
    );
}
