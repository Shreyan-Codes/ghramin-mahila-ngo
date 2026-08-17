"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { X, Phone, HardHat } from 'lucide-react';

const SESSION_KEY = 'gmksk-building-notice-seen';

export default function BuildingNoticeModal() {
  const t = useTranslations('buildingNotice');
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === '1') return;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="building-notice-title"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#FCF8F1] rounded-2xl shadow-2xl border-4 border-[#D7A43B]/40"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={close}
          aria-label={t('close')}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/9] w-full bg-[#242424] rounded-t-xl overflow-hidden">
          <Image
            src="/images/building_construction.jpg"
            alt={t('imageAlt')}
            fill
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 sm:p-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#D7A43B]/20 text-[#7B2431] text-xs font-bold uppercase tracking-wider border border-[#D7A43B]/40">
            <HardHat className="w-4 h-4" />
            {t('badge')}
          </div>

          <h2
            id="building-notice-title"
            className="text-2xl sm:text-3xl font-bold text-[#242424] mb-4 leading-tight"
          >
            {t('title')}
          </h2>

          <p className="text-[#6C6A67] leading-relaxed mb-7">
            {t('body')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+9779849875540"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full bg-[#7B2431] text-white font-medium hover:bg-[#5a1a24] transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              {t('cta')}
            </a>
            <button
              onClick={close}
              className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full border-2 border-[#7B2431] text-[#7B2431] font-medium hover:bg-[#7B2431] hover:text-white transition-colors"
            >
              {t('continue')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
