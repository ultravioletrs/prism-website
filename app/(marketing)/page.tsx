import { Hero } from '@/components/landing/Hero';
import { Partners } from '@/components/landing/Partners';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';
import { About } from '@/components/landing/About';
import { Architecture } from '@/components/landing/Architecture';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { DetailedFeatures } from '@/components/landing/DetailedFeatures';
import { UseCases } from '@/components/landing/UseCases';
import { FAQ } from '@/components/landing/FAQ';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Partners />

      <div id="about">
        <About />
      </div>

      <Features />

      <Architecture />

      <HowItWorks />

      <DetailedFeatures />

      <UseCases />

      <FAQ />

      <Pricing />
    </main>
  );
}
