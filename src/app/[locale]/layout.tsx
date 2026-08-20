import { Inter, Noto_Sans_Devanagari } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BuildingNoticeModal from '@/components/sections/BuildingNoticeModal';
import JsonLd from '@/components/seo/JsonLd';
import { graph, organizationSchema, websiteSchema } from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-devanagari',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale });

  // Organization and WebSite nodes are site-wide; individual pages add their
  // own WebPage / BreadcrumbList nodes that reference them by @id.
  const siteSchema = graph(
    organizationSchema(locale, t('metadata.description')),
    websiteSchema(locale, t('org.name'))
  );

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${notoDevanagari.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <JsonLd data={siteSchema} />
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-to-content">
            {locale === 'ne' ? 'मुख्य सामग्रीमा जानुहोस्' : 'Skip to main content'}
          </a>
          <BuildingNoticeModal />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
