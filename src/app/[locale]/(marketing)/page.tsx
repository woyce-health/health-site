import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { AarogyaInteractive } from '@/components/AarogyaInteractive';
import { AiTransparencySection } from '@/components/sections/AiTransparencySection';
import { CtaSection } from '@/components/sections/CtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ForDoctorsSection } from '@/components/sections/ForDoctorsSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { PricingSection } from '@/components/sections/PricingSection';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { SmallFeaturesSection } from '@/components/sections/SmallFeaturesSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { WedgeSection } from '@/components/sections/WedgeSection';
import { WontDoSection } from '@/components/sections/WontDoSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNav } from '@/components/SiteNav';

export const metadata: Metadata = {
  title: 'Aarogya — Healthcare, reimagined for India',
  description:
    'An AI-powered care platform built for the way India actually lives — across languages, families, and providers.',
};

export default async function IndexPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <AarogyaInteractive />
      <SiteNav />
      <HeroSection />
      <TrustedSection />
      <PhilosophySection />
      <WedgeSection />
      <FeaturesSection />
      <SmallFeaturesSection />
      <TimelineSection />
      <HowItWorksSection />
      <ForDoctorsSection />
      <QuoteSection />
      <TrustSection />
      <AiTransparencySection />
      <WontDoSection />
      <RoadmapSection />
      <MetricsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </>
  );
}
