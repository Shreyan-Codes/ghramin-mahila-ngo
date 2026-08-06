import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return { title: t('nav.gallery') };
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const photos = [
    {
      src: '/images/hero_community.jpg',
      title: locale === 'ne' ? 'महिला सशक्तिकरण र नेतृत्व बैठक' : 'Women Empowerment & Leadership Circle',
      location: 'Siraha, Madhesh Province',
      category: locale === 'ne' ? 'महिला सशक्तीकरण' : 'Women Empowerment'
    },
    {
      src: '/images/education_girls.jpg',
      title: locale === 'ne' ? 'बालिका शिक्षा अभियान र साक्षरता' : 'Girls Education & Literacy Drive',
      location: 'Siraha, Madhesh Province',
      category: locale === 'ne' ? 'शिक्षा' : 'Education'
    },
    {
      src: '/images/vocational_training.jpg',
      title: locale === 'ne' ? 'सिलाई तथा हस्तकला सीपमूलक तालिम' : 'Sewing & Handicrafts Skill Workshop',
      location: 'Siraha, Madhesh Province',
      category: locale === 'ne' ? 'व्यावसायिक तालिम' : 'Vocational Training'
    },
    {
      src: '/images/health_camp.jpg',
      title: locale === 'ne' ? 'ग्रामीण प्रजनन तथा पोषण स्वास्थ्य शिविर' : 'Maternal & Child Health Camp',
      location: 'Siraha, Madhesh Province',
      category: locale === 'ne' ? 'स्वास्थ्य' : 'Health'
    },
    {
      src: '/images/intro_journey.jpg',
      title: locale === 'ne' ? 'सामुदायिक समूह छलफल र सचेतना' : 'Community Discussion & Awareness',
      location: 'Siraha, Madhesh Province',
      category: locale === 'ne' ? 'सामुदायिक विकास' : 'Community Development'
    }
  ];

  return (
    <main className="pt-8 pb-16">
      <section className="container-custom py-8 text-center">
        <h1 className="section-title text-4xl font-bold text-[#7B2431]">
          {t('nav.gallery')}
        </h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          {locale === 'ne'
            ? 'सिराहा जिल्लामा विगत ३० वर्षदेखि सञ्चालित कार्यक्रम र सामुदायिक सहभागिताको दृश्य झलक'
            : 'Visual highlights of our 30-year journey alongside communities in Siraha District'}
        </p>
        <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto mt-4"></div>
      </section>

      <section className="container-custom py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image 
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white text-xs px-3 py-1 rounded-full font-medium">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#242424] group-hover:text-[#7B2431] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6C6A67] mt-1 flex items-center gap-1">
                  <span>📍</span> {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
