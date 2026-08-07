import { getTranslations, setRequestLocale } from 'next-intl/server';
import MaintenanceSection from '@/components/sections/MaintenanceSection';

export default async function SafeguardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-8 pb-16">
      <MaintenanceSection pageTitle={t('footer.safeguarding')} />
    </main>
  );
}
