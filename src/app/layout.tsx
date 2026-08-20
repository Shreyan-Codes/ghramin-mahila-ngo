import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ORG, SITE_URL, VERIFICATION } from '@/lib/site';

/**
 * Fonts, <html> and <body> live in `app/[locale]/layout.tsx` so they can carry
 * the active locale. This root layout only supplies site-wide metadata
 * defaults, which each route then narrows in its own `generateMetadata`.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${ORG.name.ne}`,
    default: `${ORG.name.ne} — ${ORG.name.en}`,
  },
  description:
    'धनगढीमाई नगरपालिका–११, सिराहामा महिला र बालबालिकाको सशक्तिकरण, शिक्षा र विकासका लागि ३० वर्षभन्दा बढी समयदेखि क्रियाशील। A community organization serving women and children in Dhangadhimai–11, Siraha District, Nepal for over 30 years.',
  applicationName: ORG.name.en,
  authors: [{ name: ORG.name.en, url: SITE_URL }],
  creator: ORG.name.en,
  publisher: ORG.name.en,
  category: 'nonprofit',
  referrer: 'origin-when-cross-origin',
  // Phone numbers are already marked up as tel: links; stop iOS from
  // re-detecting and restyling them mid-sentence.
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    ...(VERIFICATION.google ? { google: VERIFICATION.google } : {}),
    ...(VERIFICATION.bing ? { other: { 'msvalidate.01': VERIFICATION.bing } } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: '#7B2431',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
