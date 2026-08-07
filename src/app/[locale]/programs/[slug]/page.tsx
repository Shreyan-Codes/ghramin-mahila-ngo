import { getTranslations, setRequestLocale } from 'next-intl/server';
import MaintenanceSection from '@/components/sections/MaintenanceSection';

const SLUGS = [
  'women-empowerment',
  'health-nutrition',
  'education-literacy',
  'vocational-training',
  'advocacy-justice',
  'child-development'
];

export async function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  return { title: `Program: ${slug}` };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-8 pb-16">
      <MaintenanceSection pageTitle={`${t('nav.programs')} (${slug})`} />
    </main>
  );
}
