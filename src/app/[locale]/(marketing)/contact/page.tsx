import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNav } from '@/components/SiteNav';

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ContactPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function ContactPage(props: ContactPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return (
    <>
      <SiteNav />
      <main className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <h1>{t('heading')}</h1>
        <p style={{ maxWidth: '600px', marginTop: '1rem' }}>{t('subheading')}</p>
      </main>
      <SiteFooter />
    </>
  );
}
