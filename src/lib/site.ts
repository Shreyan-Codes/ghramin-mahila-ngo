import { routing, type Locale } from '@/i18n/routing';

/**
 * Canonical origin for the site. Override per environment with
 * NEXT_PUBLIC_SITE_URL (e.g. https://ghraminmahila.org.np once the custom
 * domain is live) so canonicals, hreflang, sitemap and Open Graph URLs all
 * follow automatically.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ghramin-mahila-ngo.vercel.app'
).replace(/\/+$/, '');

export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

/** Search-console verification tokens, supplied through the environment. */
export const VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
};

/**
 * Organization facts reused by metadata and by the schema.org graph.
 * Everything here is taken from the site's own content — nothing is invented.
 */
export const ORG = {
  name: {
    ne: 'ग्रामीण महिला कल्याण सेवा केन्द्र',
    en: 'Gramin Mahila Kalyan Sewa Kendra',
  },
  alternateNames: [
    'Gramin Mahila Kalyan Sewa Kendra',
    'ग्रामीण महिला कल्याण सेवा केन्द्र',
    'Gramin Mahila Kalyan Seva Kendra',
    'Gramin Mahila NGO Siraha',
  ],
  phone: '+977-9849875540',
  address: {
    street: 'Dhangadhimai Municipality–11',
    locality: 'Dhangadhimai',
    region: 'Madhesh Province',
    country: 'NP',
  },
  areaServed: ['Dhangadhimai Municipality', 'Siraha District', 'Madhesh Province', 'Nepal'],
  /** Used as the shared Open Graph / Twitter card image. */
  ogImage: {
    url: '/images/hero_community.jpg',
    width: 1600,
    height: 900,
  },
} as const;

export const PROGRAM_SLUGS = [
  'women-empowerment',
  'health-nutrition',
  'education-literacy',
  'vocational-training',
  'advocacy-justice',
  'child-development',
] as const;

export type ProgramSlug = (typeof PROGRAM_SLUGS)[number];

export type SiteRoute = {
  /** Path without the locale prefix, e.g. `/about`. */
  path: string;
  /** Translation key under `seo.pages` in the message files. */
  seoKey: string;
  /**
   * Placeholder pages carry no unique content yet, so they are kept out of the
   * index (and out of the sitemap) to avoid diluting the site with thin,
   * near-duplicate pages. Flip to `true` as each page gets real content.
   */
  indexable: boolean;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

export const SITE_ROUTES: SiteRoute[] = [
  { path: '/', seoKey: 'home', indexable: true, priority: 1, changeFrequency: 'weekly' },
  { path: '/about', seoKey: 'about', indexable: false, priority: 0.9, changeFrequency: 'monthly' },
  { path: '/programs', seoKey: 'programs', indexable: false, priority: 0.9, changeFrequency: 'monthly' },
  { path: '/gallery', seoKey: 'gallery', indexable: false, priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', seoKey: 'contact', indexable: false, priority: 0.8, changeFrequency: 'monthly' },
  { path: '/transparency', seoKey: 'transparency', indexable: false, priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy-policy', seoKey: 'privacy', indexable: false, priority: 0.3, changeFrequency: 'yearly' },
  { path: '/safeguarding', seoKey: 'safeguarding', indexable: false, priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', seoKey: 'terms', indexable: false, priority: 0.3, changeFrequency: 'yearly' },
  ...PROGRAM_SLUGS.map((slug) => ({
    path: `/programs/${slug}`,
    seoKey: 'programDetail',
    indexable: false,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  })),
];

export function getRoute(path: string): SiteRoute | undefined {
  return SITE_ROUTES.find((route) => route.path === path);
}

export function isIndexable(path: string): boolean {
  return getRoute(path)?.indexable ?? false;
}

/** Absolute, locale-prefixed URL for a route, e.g. `/about` → `.../ne/about`. */
export function localizedUrl(locale: string, path: string): string {
  const suffix = path === '/' ? '' : path;
  return `${SITE_URL}/${locale}${suffix}`;
}

/** hreflang map for a route, including the `x-default` fallback. */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = localizedUrl(locale, path);
  }
  languages['x-default'] = localizedUrl(routing.defaultLocale, path);
  return languages;
}

/** `alternates` block for a page's metadata: self-referencing canonical + hreflang. */
export function alternatesFor(locale: Locale | string, path: string) {
  return {
    canonical: localizedUrl(locale, path),
    languages: languageAlternates(path),
  };
}
