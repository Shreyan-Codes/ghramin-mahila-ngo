import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

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
  const tProg = await getTranslations(`programs.items.${slug as 'women-empowerment'}`);
  const tNav = await getTranslations('nav');
  const tCommon = await getTranslations('common');

  let focusAreas: string[] = [];
  try {
    // @ts-ignore
    focusAreas = tProg.raw('focusAreas') || [];
  } catch (e) {
    focusAreas = [];
  }

  return (
    <main className="pt-8 pb-16">
      <section className="container-custom py-8">
        <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#7B2431] transition-colors">{tNav('home')}</Link>
          <span>/</span>
          <Link href="/programs" className="hover:text-[#7B2431] transition-colors">{tNav('programs')}</Link>
          <span>/</span>
          <span className="text-[#7B2431] font-medium">{tProg('title')}</span>
        </div>
        <h1 className="section-title text-4xl mb-4">{tProg('title')}</h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">{tProg('summary')}</p>
      </section>

      <section className="container-custom py-12 bg-[#FCF8F1] rounded-2xl my-8">
        <h2 className="text-2xl font-bold mb-4 text-[#7B2431]">
          {locale === 'ne' ? 'मुख्य प्राथमिकता क्षेत्रहरू' : 'Main Focus Areas'}
        </h2>
        {focusAreas.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusAreas.map((area, idx) => (
              <li key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C96145] shrink-0" />
                <span className="font-medium text-gray-800">{area}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">[Focus area details]</p>
        )}
      </section>

      <section className="container-custom py-12">
        <h2 className="text-2xl font-bold mb-4 text-[#242424]">
          {locale === 'ne' ? 'लक्षित वर्ग र कार्यक्षेत्र' : 'Target Beneficiaries & Working Area'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-lg text-[#7B2431] mb-2">
              {locale === 'ne' ? 'लक्षित वर्ग' : 'Target Beneficiaries'}
            </h3>
            <p className="text-gray-700">
              {locale === 'ne' 
                ? 'मधेसी महिला, बालबालिका, बालिकाहरू र सिराहा जिल्लाका सीमान्तकृत समुदायहरू' 
                : 'Madhesi women, girls, children, and marginalized communities in Siraha District'}
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-lg text-[#7B2431] mb-2">
              {locale === 'ne' ? 'कार्यक्षेत्र' : 'Working Location'}
            </h3>
            <p className="text-gray-700">
              {locale === 'ne'
                ? 'सिराहा जिल्ला, मधेस प्रदेश, नेपाल'
                : 'Siraha District, Madhesh Province, Nepal'}
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom py-12">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">[Photo 1]</div>
          <div className="aspect-video bg-gray-200 flex items-center justify-center">[Photo 2]</div>
        </div>
      </section>

      <section className="container-custom py-12 text-center">
        <Link href="/donate" className="btn-primary">Support This Program</Link>
      </section>
    </main>
  );
}
