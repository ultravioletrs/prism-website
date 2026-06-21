import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { HealthcareHero } from '@/components/use-cases/healthcare-research/Hero';
import { Challenges } from '@/components/use-cases/healthcare-research/Challenges';
import { UseCasesGrid } from '@/components/use-cases/healthcare-research/UseCasesGrid';
import { RegulatoryCompliance } from '@/components/use-cases/healthcare-research/RegulatoryCompliance';
import { TechnicalArchitecture } from '@/components/use-cases/healthcare-research/TechnicalArchitecture';
import { RealWorldExamples } from '@/components/use-cases/healthcare-research/RealWorldExamples';
import { ImpactMetrics } from '@/components/use-cases/healthcare-research/ImpactMetrics';
import { HealthcareCTA } from '@/components/use-cases/healthcare-research/HealthcareCTA';

export const metadata: Metadata = createMetadata({
    title: 'Healthcare Research & Patient Data Analytics | Prism AI',
    description:
        'Enable the next generation of healthcare AI without compromising patient privacy. Multi-institutional collaboration at HIPAA compliance scale—powered by confidential computing.',
    openGraph: {
        title: 'Healthcare Research & Patient Data Analytics | Prism AI',
        description:
            'Enable the next generation of healthcare AI without compromising patient privacy. Multi-institutional collaboration at HIPAA compliance scale.',
    },
});

export default function HealthcareResearchPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <HealthcareHero />
            <Challenges />
            <UseCasesGrid />
            <RegulatoryCompliance />
            <TechnicalArchitecture />
            <RealWorldExamples />
            <ImpactMetrics />
            <HealthcareCTA />
        </main>
    );
}

