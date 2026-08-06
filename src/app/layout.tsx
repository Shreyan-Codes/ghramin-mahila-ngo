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
    template: '%s | ग्रामीण महिला — Ghramin Mahila',
    default: 'ग्रामीण महिला — Ghramin Mahila',
  },
  description:
    'मधेसी महिला र बालबालिकाको सशक्तिकरण, शिक्षा र विकासका लागि प्रतिबद्ध तीन दशक। Three decades of empowering Madhesi women and children through education and development.',
  metadataBase: new URL('https://ghraminmahila.org.np'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
