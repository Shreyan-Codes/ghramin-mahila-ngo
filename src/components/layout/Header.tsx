"use client";

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const nextLocale = locale === 'ne' ? 'en' : 'ne';
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/programs', label: t('programs') },
    { href: '/impact', label: t('impact') },
    { href: '/stories', label: t('stories') },
    { href: '/news', label: t('news') },
    { href: '/get-involved', label: t('getInvolved') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md py-2' : 'py-4 border-b border-gray-100'
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#7B2431]">
            {locale === 'ne' ? 'ग्रामीण महिला' : 'Ghramin Mahila'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-[#242424] hover:text-[#7B2431] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 ml-4 border-l border-gray-200 pl-4">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#7B2431] hover:text-[#7B2431] transition-colors text-sm font-medium text-[#242424]"
              aria-label="Switch Language"
            >
              <Globe className="w-4 h-4" />
              {locale === 'ne' ? 'EN' : 'NE'}
            </button>
            <Link 
              href="/donate" 
              className="btn-primary bg-[#7B2431] text-white px-6 py-2 rounded-full hover:bg-[#5a1a24] transition-colors font-medium"
            >
              {t('donate')}
            </Link>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
           <button
              onClick={switchLocale}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-[#242424] hover:border-[#7B2431] hover:text-[#7B2431]"
              aria-label="Switch Language"
            >
              <Globe className="w-5 h-5" />
            </button>
          <button
            className="text-[#242424] hover:text-[#7B2431] min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col px-4 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#242424] hover:text-[#7B2431] font-medium text-lg py-3 px-2 border-b border-gray-50 flex items-center min-h-[48px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 pb-4 px-2">
              <Link
                href="/donate"
                className="flex justify-center items-center w-full bg-[#7B2431] text-white px-6 py-3 min-h-[48px] rounded-full hover:bg-[#5a1a24] transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('donate')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
