"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const tPrograms = useTranslations('programs.items');

  const programs = [
    { slug: 'women-empowerment', labelKey: 'women-empowerment.title' as const },
    { slug: 'health-nutrition', labelKey: 'health-nutrition.title' as const },
    { slug: 'education-literacy', labelKey: 'education-literacy.title' as const },
    { slug: 'vocational-training', labelKey: 'vocational-training.title' as const },
    { slug: 'advocacy-justice', labelKey: 'advocacy-justice.title' as const },
    { slug: 'child-development', labelKey: 'child-development.title' as const },
  ];

  return (
    <footer className="bg-[#242424] text-[#EEE5D7] pt-16 pb-8 mt-auto">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-3xl font-bold text-white">
              {locale === 'ne' ? 'ग्रामीण महिला' : 'Ghramin Mahila'}
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              {t('mission')}
            </p>
            <div className="flex items-center gap-4">
              <a href="[PLACEHOLDER_FB_URL]" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-[#D7A43B] hover:text-[#242424] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="[PLACEHOLDER_YT_URL]" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-[#D7A43B] hover:text-[#242424] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="[PLACEHOLDER_IG_URL]" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-[#D7A43B] hover:text-[#242424] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">{t('quickLinks')}</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('about')}</Link></li>
              <li><Link href="/impact" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('impact')}</Link></li>
              <li><Link href="/stories" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('stories')}</Link></li>
              <li><Link href="/news" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('news')}</Link></li>
              <li><Link href="/get-involved" className="hover:text-[#D7A43B] transition-colors py-1 inline-block">{tNav('getInvolved')}</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">{tNav('programs')}</h3>
            <ul className="flex flex-col gap-3">
              {programs.map(prog => (
                <li key={prog.slug}>
                  <Link href={`/programs/${prog.slug}`} className="hover:text-[#D7A43B] transition-colors py-1 inline-block">
                    {tPrograms(prog.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{tNav('contact')}</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D7A43B] shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{t('address')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D7A43B] shrink-0" />
                  <a href="tel:9849875540" className="text-sm hover:text-[#D7A43B] transition-colors">{t('phone')}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D7A43B] shrink-0" />
                  <a href="mailto:info@ghraminmahila.org.np" className="text-sm hover:text-[#D7A43B] transition-colors">{t('email')}</a>
                </li>
              </ul>
            </div>
            
            <div className="mt-2">
              <h4 className="text-sm font-semibold text-white mb-2">{t('newsletter')}</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder={t('emailPlaceholder')} 
                  className="form-input w-full px-3 py-2 text-[#242424] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7A43B] min-h-[44px]"
                  aria-label="Email Address"
                />
                <button type="submit" className="bg-[#D7A43B] text-[#242424] px-4 py-2 rounded-md font-semibold hover:bg-[#e0b55c] transition-colors shrink-0 min-h-[44px]">
                  {t('subscribe')}
                </button>
              </form>
            </div>
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
