import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import MaintenanceSection from '@/components/sections/MaintenanceSection';
import JsonLd from '@/components/seo/JsonLd';
import { buildPageMetadata } from '@/lib/seo';
import { breadcrumbSchema, graph, webPageSchema } from '@/lib/structured-data';
import { PROGRAM_SLUGS, type ProgramSlug } from '@/lib/site';

export function generateStaticParams() {
  return PROGRAM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!PROGRAM_SLUGS.includes(slug as ProgramSlug)) {
    return {};
  }

  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    path: `/programs/${slug}`,
    seoKey: 'programDetail',
    values: { program: t(`programs.items.${slug}.title`) },
  });
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!PROGRAM_SLUGS.includes(slug as ProgramSlug)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations();

  const path = `/programs/${slug}`;
  const programName = t(`programs.items.${slug}.title`);

  const pageSchema = graph(
    webPageSchema({
      locale,
      path,
      name: t('seo.pages.programDetail.title', { program: programName }),
      description: t(`programs.items.${slug}.summary`),
    }),
    breadcrumbSchema(locale, [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.programs'), path: '/programs' },
      { name: programName, path },
    ])
  );

  return (
    <div className="pt-8 pb-16">
      <JsonLd data={pageSchema} />
      <MaintenanceSection pageTitle={programName} />
    </div>
  );
}
