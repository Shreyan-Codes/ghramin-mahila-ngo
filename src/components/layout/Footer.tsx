"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { MapPin, Phone, Globe } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tOrg = useTranslations('org');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const tPrograms = useTranslations('programs.items');

  const programSlugs = [
    'women-empowerment',
    'health-nutrition',
    'education-literacy',
    'vocational-training',
    'advocacy-justice',
    'child-development',
  ] as const;

  return (
    <footer className="bg-[#242424] text-[#EEE5D7] pt-16 pb-8 mt-auto">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Mission */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold text-white leading-snug">
              {tOrg('name')}
            </Link>
            <p className="text-sm text-[#D7A43B]">{tOrg('tagline')}</p>
            <p className="text-sm leading-relaxed text-gray-300">
              {t('mission')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">{t('quickLinks')}</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('about')}</Link></li>
              <li><Link href="/programs" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('programs')}</Link></li>
              <li><Link href="/gallery" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('gallery')}</Link></li>
              <li><Link href="/transparency" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('transparency')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('contact')}</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">{t('programs')}</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              {programSlugs.map((slug) => (
                <li key={slug}>{tPrograms(`${slug}.title`)}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">{t('contactTitle')}</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D7A43B] shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{t('address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D7A43B] shrink-0" />
                <a href="tel:+9779849875540" className="text-base font-semibold hover:text-[#D7A43B] transition-colors">
                  {t('phone')}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400 text-center lg:text-left">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{t('privacy')}</Link>
            <Link href="/safeguarding" className="hover:text-white transition-colors">{t('safeguarding')}</Link>

            <div className="flex items-center gap-2 sm:border-l border-gray-600 sm:pl-6">
              <Globe className="w-4 h-4" />
              <button
                onClick={() => switchLocale('ne')}
                className={`hover:text-white transition-colors min-h-[44px] min-w-[32px] flex items-center justify-center ${locale === 'ne' ? 'text-white font-semibold' : ''}`}
                aria-label="Switch to Nepali"
              >
                NE
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => switchLocale('en')}
                className={`hover:text-white transition-colors min-h-[44px] min-w-[32px] flex items-center justify-center ${locale === 'en' ? 'text-white font-semibold' : ''}`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
