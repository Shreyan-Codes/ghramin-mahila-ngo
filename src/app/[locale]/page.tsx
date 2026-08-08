import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Heart, Stethoscope, BookOpen, Wrench, Scale, Baby, Users, Handshake, Check, Phone } from 'lucide-react';
import ImpactCounter from '@/components/sections/ImpactCounter';
import PhotoGallery from '@/components/sections/PhotoGallery';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: { absolute: t('metadata.title') },
    description: t('metadata.description'),
  };
}

const PROGRAMS = [
  { slug: 'women-empowerment', icon: Users },
  { slug: 'health-nutrition', icon: Stethoscope },
  { slug: 'education-literacy', icon: BookOpen },
  { slug: 'vocational-training', icon: Wrench },
  { slug: 'advocacy-justice', icon: Scale },
  { slug: 'child-development', icon: Baby },
] as const;

const GALLERY_IMAGES = [
  '/images/health_awareness.jpg',
  '/images/program_session.jpg',
  '/images/education_children.jpg',
  '/images/child_support.jpg',
  '/images/relief_distribution.jpg',
  '/images/school_visit.jpg',
];

const SUPPORT_CARDS = [
  { id: 'volunteer', icon: Users },
  { id: 'partner', icon: Handshake },
  { id: 'donate', icon: Heart },
] as const;

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const metrics = t.raw('impact.metrics') as { value: string; label: string }[];
  const galleryCaptions = t.raw('gallery.captions') as string[];
  const photos = GALLERY_IMAGES.map((src, i) => ({ src, caption: galleryCaptions[i] }));

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

            <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#242424] leading-tight">
              {t('hero.headline')}
            </h1>

            <p className="text-lg md:text-xl text-[#6C6A67] leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <a href="#programs" className="btn-primary text-center px-8 py-3.5 rounded-full bg-[#7B2431] text-white hover:bg-[#5a1a24] transition-colors font-medium shadow-md">
                {t('hero.ctaPrimary')}
              </a>
              <a href="tel:+9779849875540" className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#7B2431] text-[#7B2431] hover:bg-[#7B2431] hover:text-white transition-colors font-medium">
                <Phone className="w-4 h-4" />
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/hero_community.jpg"
                alt={t('hero.imageCaption')}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                {t('hero.imageCaption')}
              </div>
            </div>
          </div>
        </div>
        <div className="mithila-border w-full h-2 mt-16 md:mt-24 opacity-70 bg-[#C96145]"></div>
      </section>

      {/* SECTION 2 - IMPACT SNAPSHOT */}
      <ImpactCounter metrics={metrics} />

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
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 order-1 md:order-2">
              <Image
                src="/images/awareness_program.jpg"
                alt={t('gallery.captions.1')}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PROGRAMS */}
      <section id="programs" className="py-16 md:py-24 bg-[#FCF8F1] scroll-mt-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#242424] mb-4">
              {t('programs.title')}
            </h2>
            <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto mb-4"></div>
            <p className="text-[#6C6A67]">{t('programs.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map(({ slug, icon: Icon }) => (
              <div
                key={slug}
                className="card bg-white rounded-xl p-7 shadow-sm border border-[#EEE5D7] hover:shadow-lg hover:border-[#D7A43B]/50 transition-all flex flex-col h-full"
              >
                <div className="mb-5 w-12 h-12 rounded-full bg-[#FCF8F1] border border-[#EEE5D7] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#C96145]" />
                </div>
                <h3 className="text-xl font-bold text-[#242424] mb-3">
                  {t(`programs.items.${slug}.title`)}
                </h3>
                <p className="text-[#6C6A67] leading-relaxed text-sm mb-5">
                  {t(`programs.items.${slug}.summary`)}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {(t.raw(`programs.items.${slug}.focusAreas`) as string[]).slice(0, 3).map((area) => (
                    <li
                      key={area}
                      className="text-xs font-medium text-[#7B2431] bg-[#7B2431]/8 border border-[#7B2431]/15 rounded-full px-3 py-1"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - PHOTOS FROM OUR WORK */}
      <PhotoGallery
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
        photos={photos}
      />

      {/* SECTION 6 - WHY OUR WORK MATTERS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#C96145] font-bold uppercase tracking-wide mb-2">{t('challenges.subtitle')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#242424] mb-4">
              {t('challenges.title')}
            </h2>
            <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {(t.raw('challenges.items') as string[]).map((item, index) => (
              <div key={item} className="flex gap-4 items-center p-4 bg-[#FCF8F1] rounded-xl border border-[#EEE5D7]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7B2431] flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <p className="font-semibold text-[#242424]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - KEY ACHIEVEMENTS */}
      <section className="py-16 md:py-24 bg-[#FCF8F1]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#242424] mb-4">
              {t('achievements.title')}
            </h2>
            <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {(t.raw('achievements.items') as string[]).map((item, index) => (
              <div key={item} className={`p-6 rounded-lg flex items-center gap-6 ${index % 2 === 0 ? 'bg-white' : 'bg-[#EEE5D7]/40'} border border-[#EEE5D7]`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D7A43B]/20 flex items-center justify-center text-[#D7A43B]">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-lg font-medium text-[#242424]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - WORK WITH US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#242424] mb-4">
              {t('support.title')}
            </h2>
            <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto mb-4"></div>
            <p className="text-[#6C6A67]">
              {t('support.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SUPPORT_CARDS.map(({ id, icon: Icon }) => (
              <div key={id} className="bg-[#FCF8F1] p-8 rounded-xl border border-[#EEE5D7] shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center border-t-4 border-t-[#7B2431]">
                <div className="mb-6 bg-white p-4 rounded-full text-[#7B2431] border border-[#EEE5D7]">
                  <Icon className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold text-[#242424] mb-3">
                  {t(`support.${id}.title`)}
                </h3>
                <p className="text-[#6C6A67] mb-8">
                  {t(`support.${id}.description`)}
                </p>
                <Link href="/contact" className="mt-auto font-semibold text-[#7B2431] border border-[#7B2431] px-6 py-2 rounded-full hover:bg-[#7B2431] hover:text-white transition-colors">
                  {t('support.cta')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - FINAL CTA */}
      <section className="bg-[#263A5F] py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            {t('cta.headline')}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+9779849875540" className="btn-gold inline-flex items-center justify-center gap-2 bg-[#D7A43B] text-[#242424] px-8 py-4 rounded font-bold hover:bg-[#c49333] transition-colors shadow-lg">
              <Phone className="w-5 h-5" />
              {t('cta.support')}
            </a>
            <Link href="/contact" className="btn-secondary bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
              {t('cta.join')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
