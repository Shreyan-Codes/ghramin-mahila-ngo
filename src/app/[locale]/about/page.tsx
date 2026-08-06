import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Heart, Scale, ShieldCheck, Users, Eye, Sparkles, UserCheck, Award } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return { title: t('about.title') };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const valueKeys = [
    { key: 'dignity', icon: Heart },
    { key: 'equality', icon: Scale },
    { key: 'inclusion', icon: Users },
    { key: 'transparency', icon: Eye },
    { key: 'accountability', icon: ShieldCheck },
    { key: 'participation', icon: Sparkles },
    { key: 'justice', icon: UserCheck },
    { key: 'communityLeadership', icon: Award },
  ] as const;

  return (
    <main className="pt-8 pb-16">
      {/* Hero Header */}
      <section className="container-custom py-12 text-center">
        <p className="text-[#C96145] font-bold uppercase tracking-wide mb-2">
          {locale === 'ne' ? 'सिराहा, मधेस प्रदेश, नेपाल' : 'Siraha, Madhesh Province, Nepal'}
        </p>
        <h1 className="section-title text-4xl md:text-5xl font-bold text-[#7B2431]">
          {t('about.title')}
        </h1>
        <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto mt-4"></div>
      </section>

      {/* Background Section */}
      <section className="container-custom py-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7B2431] mb-6">
            {t('about.background.title')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {t('about.background.content')}
          </p>
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#FCF8F1] rounded-2xl border border-[#EEE5D7]">
            <div className="w-12 h-12 rounded-full bg-[#7B2431] text-white flex items-center justify-center font-bold text-xl mb-6">
              V
            </div>
            <h2 className="text-2xl font-bold text-[#242424] mb-4">
              {t('about.vision.title')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('about.vision.content')}
            </p>
          </div>

          <div className="p-8 bg-[#FCF8F1] rounded-2xl border border-[#EEE5D7]">
            <div className="w-12 h-12 rounded-full bg-[#C96145] text-white flex items-center justify-center font-bold text-xl mb-6">
              M
            </div>
            <h2 className="text-2xl font-bold text-[#242424] mb-4">
              {t('about.mission.title')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('about.mission.content')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="container-custom py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#242424] mb-3">
            {t('about.values.title')}
          </h2>
          <p className="text-gray-600">
            {locale === 'ne' ? 'हाम्रा मार्गदर्शन गर्ने सिद्धान्तहरू' : 'The guiding principles behind everything we do'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {valueKeys.map(({ key, icon: Icon }) => (
            <div key={key} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:border-[#7B2431] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FCF8F1] text-[#7B2431] flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#242424]">
                {t(`about.values.items.${key}`)}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Working Area & Governance */}
      <section className="container-custom py-12">
        <div className="bg-[#263A5F] text-white p-8 md:p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl font-bold">
            {locale === 'ne' ? 'सिराहा जिल्ला, मधेस प्रदेश' : 'Siraha District, Madhesh Province'}
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            {locale === 'ne'
              ? 'विगत ३० वर्षदेखि ग्रामीण तथा सीमान्तकृत समुदायको हक अधिकार र विकासका लागि प्रतिबद्ध।'
              : 'Dedicated to community leadership, women empowerment, and child development for over 30 years.'}
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-gold inline-block font-semibold px-8 py-3 rounded-full">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
