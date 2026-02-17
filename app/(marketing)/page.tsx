import { Hero } from '@/components/landing/Hero';
import { Partners } from '@/components/landing/Partners';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';
import { About } from '@/components/landing/About';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { DetailedFeatures } from '@/components/landing/DetailedFeatures';
import { UseCases } from '@/components/landing/UseCases';
import { FAQ } from '@/components/landing/FAQ';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Prism | Secure Computation Platform',
  description: 'Prism is a secure computation platform that allows you to run computations on sensitive data without exposing it.',
  openGraph: {
    title: 'Prism | Secure Computation Platform',
    description: 'Prism is a secure computation platform that allows you to run computations on sensitive data without exposing it.',
  },
});

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Partners />

      <div id="about">
        <About />
      </div>

      <Features />


      <HowItWorks />

      <DetailedFeatures />

      <UseCases />

      <Pricing />

      <FAQ />
    </main>
  );
}
