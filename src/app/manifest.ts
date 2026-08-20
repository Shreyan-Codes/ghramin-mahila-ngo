import type { MetadataRoute } from 'next';
import { ORG } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${ORG.name.ne} — ${ORG.name.en}`,
    short_name: ORG.name.en,
    description:
      'A community organization working alongside women, children, and marginalized families in Dhangadhimai Municipality, Siraha District, Madhesh Province, Nepal.',
    start_url: '/ne',
    display: 'standalone',
    background_color: '#FCF8F1',
    theme_color: '#7B2431',
    lang: 'ne',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
