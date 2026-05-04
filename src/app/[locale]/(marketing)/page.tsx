import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { AarogyaInteractive } from '@/components/AarogyaInteractive';
import { CtaSection } from '@/components/CtaSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { QuoteSection } from '@/components/QuoteSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNav } from '@/components/SiteNav';
import { TrustedSection } from '@/components/TrustedSection';
import { TrustSection } from '@/components/TrustSection';

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
