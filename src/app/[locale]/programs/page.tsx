import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return { title: t('programs.title') || 'Programs' };
}

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const programs = [
    'women-empowerment',
    'health-nutrition',
    'education-literacy',
    'vocational-training',
    'advocacy-justice',
    'child-development'
  ];

  return (
    <main className="pt-8 pb-16">
      <section className="container-custom py-12 text-center">
        <h1 className="section-title text-4xl font-bold text-[#7B2431]">{t('programs.title')}</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">{t('programs.subtitle')}</p>
      </section>
      
      <section className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map(slug => (
            <div key={slug} className="card p-8 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#242424] mb-3">{t(`programs.items.${slug}.title`)}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{t(`programs.items.${slug}.summary`)}</p>
              <Link href={`/programs/${slug}`} className="btn-secondary w-full text-center mt-auto py-2.5 rounded-full border border-[#7B2431] text-[#7B2431] font-semibold hover:bg-[#7B2431] hover:text-white transition-colors">
                {t('programs.learnMore')} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
