import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { AarogyaInteractive } from '@/components/AarogyaInteractive';
import { CtaSection } from '@/components/sections/CtaSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { TrustSection } from '@/components/sections/TrustSection';
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
      <FeaturesSection />
      <HowItWorksSection />
      <QuoteSection />
      <TrustSection />
      <CtaSection />
      <SiteFooter />
    </>
  );
}
