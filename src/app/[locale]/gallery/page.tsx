import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import MaintenanceSection from '@/components/sections/MaintenanceSection';
import JsonLd from '@/components/seo/JsonLd';
import { buildPageMetadata } from '@/lib/seo';
import { breadcrumbSchema, graph, webPageSchema } from '@/lib/structured-data';

const PATH = '/gallery';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, path: PATH, seoKey: 'gallery' });
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const pageSchema = graph(
    webPageSchema({
      locale,
      path: PATH,
      name: t('seo.pages.gallery.title'),
      description: t('seo.pages.gallery.description'),
    }),
    breadcrumbSchema(locale, [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.gallery'), path: PATH },
    ])
  );

  return (
    <div className="pt-8 pb-16">
      <JsonLd data={pageSchema} />
      <MaintenanceSection pageTitle={t('nav.gallery')} />
    </div>
  );
}
