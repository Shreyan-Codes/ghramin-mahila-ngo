import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Heart, Stethoscope, BookOpen, Wrench, Scale, Baby, Users, Handshake, Check } from 'lucide-react';
import ImpactCounter from '@/components/sections/ImpactCounter';
import Timeline from '@/components/sections/Timeline';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-[#FCF8F1]">
      {/* SECTION 1 - HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-[#FCF8F1] via-[#FCF8F1] to-[#EEE5D7]/40">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D7A43B]/15 text-[#7B2431] text-xs md:text-sm font-semibold tracking-wide border border-[#D7A43B]/30">
              <span className="w-2 h-2 rounded-full bg-[#C96145] animate-pulse"></span>
              {t('hero.trustBadge')}
            </div>
            
            <p className="section-eyebrow text-[#C96145] font-bold uppercase tracking-wider text-sm">
              {t('hero.eyebrow')}
            </p>
            
            <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#242424] leading-tight">
              {t('hero.headline')}
            </h1>
            
            <p className="text-lg md:text-xl text-[#6C6A67] leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link href="/donate" className="btn-primary text-center px-8 py-3.5 rounded-full bg-[#7B2431] text-white hover:bg-[#5a1a24] transition-colors font-medium shadow-md">
                {t('hero.ctaPrimary')}
              </Link>
              <Link href="/about" className="btn-secondary text-center px-8 py-3.5 rounded-full border-2 border-[#7B2431] text-[#7B2431] hover:bg-[#7B2431] hover:text-white transition-colors font-medium">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/hero_community.jpg" 
                alt="Madhesi women and children in Siraha, Madhesh Province, Nepal"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                {locale === 'ne' ? 'सिराहा जिल्लामा सामुदायिक सशक्तिकरण कार्यक्रम' : 'Community empowerment in Siraha District'}
              </div>
            </div>
          </div>
        </div>
        <div className="mithila-border w-full h-2 mt-16 md:mt-24 opacity-70 bg-[#C96145]"></div>
      </section>

      {/* SECTION 2 - IMPACT SNAPSHOT */}
      <ImpactCounter 
        yearsLabel={t('impact.years')}
        womenLabel={t('impact.women')}
        girlsLabel={t('impact.girls')}
        communitiesLabel={t('impact.communities')}
      />

      {/* SECTION 3 - INTRODUCTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="section-title text-3xl md:text-4xl font-bold text-[#242424]">
                {t('intro.title')}
              </h2>
              <div className="mithila-divider w-24 h-1 bg-[#D7A43B]"></div>
              <p className="text-[#6C6A67] leading-relaxed text-lg">
                {t('intro.description')}
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#7B2431] font-semibold hover:underline">
                {t('intro.ctaLink')} &rarr;
              </Link>
            </div>
            <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 order-1 md:order-2">
              <Image 
                src="/images/intro_journey.jpg"
                alt="Ghramin Mahila community meeting in Siraha"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PROGRAMS */}
      <section className="py-16 md:py-24 bg-[#FCF8F1]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#242424] mb-4">
              {t('programs.title')}
            </h2>
            <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { slug: 'women-empowerment', img: '/images/hero_community.jpg', icon: <Users className="w-6 h-6 text-[#C96145]" /> },
              { slug: 'health-nutrition', img: '/images/health_camp.jpg', icon: <Stethoscope className="w-6 h-6 text-[#C96145]" /> },
              { slug: 'education-literacy', img: '/images/education_girls.jpg', icon: <BookOpen className="w-6 h-6 text-[#C96145]" /> },
              { slug: 'vocational-training', img: '/images/vocational_training.jpg', icon: <Wrench className="w-6 h-6 text-[#C96145]" /> },
              { slug: 'advocacy-justice', img: '/images/intro_journey.jpg', icon: <Scale className="w-6 h-6 text-[#C96145]" /> },
              { slug: 'child-development', img: '/images/education_girls.jpg', icon: <Baby className="w-6 h-6 text-[#C96145]" /> },
            ].map((prog) => (
              <div key={prog.slug} className="card bg-white rounded-xl shadow-sm border border-[#EEE5D7] overflow-hidden hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image 
                    src={prog.img}
                    alt={t(`programs.items.${prog.slug}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-2.5 rounded-full shadow-sm">
                    {prog.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#242424] mb-3">
                    {t(`programs.items.${prog.slug}.title`)}
                  </h3>
                  <p className="text-[#6C6A67] mb-6 flex-grow leading-relaxed text-sm">
                    {t(`programs.items.${prog.slug}.summary`)}
                  </p>
                  <Link href={`/programs/${prog.slug}`} className="text-[#7B2431] font-semibold hover:underline mt-auto inline-flex items-center gap-1.5 text-sm">
                    {t('programs.learnMore')} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - FEATURED IMPACT STORY */}
      <section className="py-16 md:py-24 bg-[#EEE5D7] relative">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#D7A43B]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-[#D7A43B] opacity-10">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 items-center relative z-10">
              <div className="md:col-span-2 relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-md">
                <Image 
                  src="/images/education_girls.jpg"
                  alt="Impact story beneficiary in Siraha"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-3 space-y-6">
                <div className="inline-block px-3.5 py-1 bg-[#FCF8F1] text-[#7B2431] text-xs font-bold uppercase tracking-wider rounded-full border border-[#7B2431]/20">
                  {t('story.title')}
                </div>
                <div className="text-[#6C6A67] italic text-lg md:text-xl border-l-4 border-[#D7A43B] pl-6 py-2">
                  "{t('story.placeholder')}"
                </div>
                <div className="bg-[#FCF8F1] border border-dashed border-[#C96145] p-4 rounded text-sm text-[#C96145] font-medium">
                  [Content awaiting approved, consent-verified story]
                </div>
                <Link href="/impact" className="btn-secondary inline-block px-6 py-2 rounded border border-[#242424] text-[#242424] hover:bg-[#242424] hover:text-white transition-colors">
                  {t('story.readMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - WHY OUR WORK MATTERS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#C96145] font-bold uppercase tracking-wide mb-2">{t('challenges.subtitle')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#242424] mb-4">
              {t('challenges.title')}
            </h2>
            <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="flex gap-4 items-center p-4 bg-[#FCF8F1] rounded-xl border border-[#EEE5D7]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7B2431] flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <p className="font-semibold text-[#242424]">{t(`challenges.items.${index}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - KEY ACHIEVEMENTS */}
      <section className="py-16 md:py-24 bg-[#FCF8F1]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#242424] mb-4">
              {t('achievements.title')}
            </h2>
            <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[0, 1, 2, 3, 4].map((index) => (
              <div key={index} className={`p-6 rounded-lg flex items-center gap-6 ${index % 2 === 0 ? 'bg-white' : 'bg-[#EEE5D7]/30'} border border-[#EEE5D7]`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D7A43B]/20 flex items-center justify-center text-[#D7A43B]">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium text-[#242424]">
                  {t(`achievements.items.${index}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - 30-YEAR JOURNEY TIMELINE */}
      <Timeline 
        title={t('timeline.title')}
        items={[0, 1, 2, 3, 4, 5, 6, 7].map(index => ({
          year: t(`timeline.items.${index}.year`),
          title: t(`timeline.items.${index}.title`),
          description: t(`timeline.items.${index}.description`)
        }))}
      />

      {/* SECTION 9 - GET INVOLVED */}
      <section className="py-16 md:py-24 bg-[#EEE5D7]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#242424] mb-4">
              {t('getInvolved.title')}
            </h2>
            <p className="text-[#6C6A67]">
              {t('getInvolved.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'volunteer', href: '/get-involved', icon: <Users className="w-10 h-10 text-[#7B2431]" /> },
              { id: 'partner', href: '/get-involved', icon: <Handshake className="w-10 h-10 text-[#7B2431]" /> },
              { id: 'donate', href: '/donate', icon: <Heart className="w-10 h-10 text-[#7B2431]" /> }
            ].map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center border-t-4 border-[#7B2431]">
                <div className="mb-6 bg-[#FCF8F1] p-4 rounded-full text-[#7B2431]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#242424] mb-3">
                  {t(`getInvolved.${item.id}.title`)}
                </h3>
                <p className="text-[#6C6A67] mb-8">
                  {t(`getInvolved.${item.id}.description`)}
                </p>
                <Link href={item.href} className="mt-auto font-semibold text-[#7B2431] border border-[#7B2431] px-6 py-2 rounded-full hover:bg-[#7B2431] hover:text-white transition-colors">
                  {t('common.learnMore')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - TRANSPARENCY AND TRUST */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-[#242424] mb-12 text-center">
            {t('transparency.title')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { key: 'registration', href: '/transparency' },
              { key: 'annualReports', href: '/transparency' },
              { key: 'auditReports', href: '/transparency' },
              { key: 'policies', href: '/transparency' },
              { key: 'governance', href: '/transparency' }
            ].map((item) => (
              <Link key={item.key} href={item.href} className="bg-[#FCF8F1] p-6 rounded-lg text-center border border-[#EEE5D7] flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow">
                <BookOpen className="w-8 h-8 text-[#6C6A67]" />
                <span className="text-sm font-semibold text-[#242424]">
                  {t(`transparency.${item.key}`)}
                </span>
                <span className="text-xs text-[#6C6A67]">[Document]</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - PARTNERS */}
      <section className="py-16 md:py-24 bg-[#FCF8F1]">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-[#242424] mb-8">
            साझेदार संस्थाहरू / Our Partners
          </h2>
          <div className="border-2 border-dashed border-[#EEE5D7] rounded-xl p-12 bg-white text-[#6C6A67]">
            साझेदार संस्थाहरूको लोगो यहाँ प्रदर्शित गरिनेछ। / Partner logos will be displayed here once provided.
          </div>
        </div>
      </section>

      {/* SECTION 12 - FINAL CTA */}
      <section className="bg-[#263A5F] py-20 relative overflow-hidden text-center">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            {t('cta.headline')}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate" className="btn-gold bg-[#D7A43B] text-[#242424] px-8 py-4 rounded font-bold hover:bg-[#c49333] transition-colors shadow-lg">
              {t('cta.support')}
            </Link>
            <Link href="/join" className="btn-secondary bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
              {t('cta.join')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
