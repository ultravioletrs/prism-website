import { createMetadata } from '@/lib/metadata';
import { EnterpriseAnalyticsHero } from '@/components/use-cases/enterprise-analytics/Hero';
import { Challenges } from '@/components/use-cases/enterprise-analytics/Challenges';
import { UseCasesGrid } from '@/components/use-cases/enterprise-analytics/UseCasesGrid';
import { AntitrustCompliance } from '@/components/use-cases/enterprise-analytics/AntitrustCompliance';
import { SecurityGuarantees } from '@/components/use-cases/enterprise-analytics/SecurityGuarantees';
import { IndustryScenarios } from '@/components/use-cases/enterprise-analytics/IndustryScenarios';
import { ROIMetrics } from '@/components/use-cases/enterprise-analytics/ROIMetrics';
import { HowItWorksEnterprise } from '@/components/use-cases/enterprise-analytics/HowItWorksEnterprise';
import { EnterpriseCTA } from '@/components/use-cases/enterprise-analytics/EnterpriseCTA';

export const metadata = createMetadata({
    title: 'Enterprise Analytics & Cross-Company Collaboration | Prism AI',
    description:
        'Turn competitive data into competitive advantage. Collaborate with industry peers on analytics, benchmarking, and market research—while keeping your data strictly confidential. The Kaggle for enterprise analytics.',
    openGraph: {
        title: 'Enterprise Analytics & Cross-Company Collaboration | Prism AI',
        description:
            'Turn competitive data into competitive advantage. Collaborate with industry peers on analytics, benchmarking, and market research—while keeping your data strictly confidential.',
    },
});

export default function EnterpriseAnalyticsPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <EnterpriseAnalyticsHero />
            <Challenges />
            <UseCasesGrid />
            <AntitrustCompliance />
            <SecurityGuarantees />
            <HowItWorksEnterprise />
            <IndustryScenarios />
            <ROIMetrics />
            <EnterpriseCTA />
        </main>
    );
}

