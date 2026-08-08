import type { Metadata } from 'next';
import { Inter, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-devanagari',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | ग्रामीण महिला कल्याण सेवा केन्द्र',
    default: 'ग्रामीण महिला कल्याण सेवा केन्द्र — Gramin Mahila Kalyan Sewa Kendra',
  },
  description:
    'धनगढीमाई नगरपालिका–११, सिराहामा महिला र बालबालिकाको सशक्तिकरण, शिक्षा र विकासका लागि ३० वर्षभन्दा बढी समयदेखि क्रियाशील। A community organization serving women and children in Dhangadhimai–11, Siraha District, Nepal for over 30 years.',
  metadataBase: new URL('https://ghramin-mahila-ngo.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
