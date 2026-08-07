import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Wrench, PhoneCall, ArrowLeft } from 'lucide-react';

interface MaintenanceSectionProps {
  pageTitle: string;
}

export default function MaintenanceSection({ pageTitle }: MaintenanceSectionProps) {
  const t = useTranslations('maintenance');
  const locale = useLocale();

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 rounded-3xl border border-[#EEE5D7] shadow-sm text-center flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-[#FCF8F1] border-2 border-[#D7A43B]/40 flex items-center justify-center text-[#7B2431] mb-6">
          <Wrench className="w-10 h-10 animate-bounce" />
        </div>
        
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#7B2431]/10 text-[#7B2431] text-xs font-bold uppercase tracking-wider mb-4 border border-[#7B2431]/20">
          {pageTitle} — {t('title')}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#242424] mb-4 leading-tight">
          {t('heading')}
        </h2>

        <div className="mithila-divider w-24 h-1 bg-[#D7A43B] my-2"></div>

        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8 mt-2">
          {t('subheading')}
        </p>

        <div className="p-4 bg-[#FCF8F1] rounded-2xl border border-[#EEE5D7] mb-8 w-full max-w-md flex items-center justify-center gap-3 text-[#7B2431] font-semibold text-lg shadow-inner">
          <PhoneCall className="w-6 h-6 shrink-0" />
          <span>{t('phoneLabel')}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/contact"
            className="btn-primary px-8 py-3.5 rounded-full bg-[#7B2431] text-white hover:bg-[#5a1a24] transition-colors font-medium flex items-center justify-center gap-2 shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            {t('contactCta')}
          </Link>
          <Link
            href="/"
            className="btn-secondary px-8 py-3.5 rounded-full border-2 border-[#7B2431] text-[#7B2431] hover:bg-[#7B2431] hover:text-white transition-colors font-medium flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('homeCta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
