"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const SESSION_KEY = 'gmksk-building-notice-seen';

// The notice is a one-per-browser-session thing, so whether it has already been
// dismissed lives in sessionStorage rather than in React state. sessionStorage
// does not exist while rendering on the server, so the server snapshot reports
// "already seen" and the modal is simply absent from the prerendered HTML.
const subscribeToSession = () => () => {};
const hasSeenOnClient = () => sessionStorage.getItem(SESSION_KEY) === '1';
const hasSeenOnServer = () => true;

export default function BuildingNoticeModal() {
  const hasSeen = useSyncExternalStore(subscribeToSession, hasSeenOnClient, hasSeenOnServer);
  const [isDismissed, setIsDismissed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = !hasSeen && !isDismissed;

  const close = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setIsDismissed(true);
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
          aria-label="बन्द गर्नुहोस्"
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/9] w-full bg-[#242424] rounded-t-xl overflow-hidden">
          <Image
            src="/images/building_construction.jpg"
            alt="धनगढीमाई नगरपालिका–११, सिराहामा रहेको संस्थाको आफ्नै भवन"
            fill
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 sm:p-8 text-center">
          <h2
            id="building-notice-title"
            className="text-3xl sm:text-4xl font-bold text-[#7B2431] leading-snug"
          >
            अब हामी आफ्नै घरमा
          </h2>

          <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto mt-5 mb-7"></div>

          <button
            onClick={close}
            className="inline-flex items-center justify-center px-8 py-3 min-h-[48px] rounded-full bg-[#7B2431] text-white font-medium hover:bg-[#5a1a24] transition-colors shadow-md"
          >
            बन्द गर्नुहोस्
          </button>
        </div>
      </div>
    </div>
  );
}
