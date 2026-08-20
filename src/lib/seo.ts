import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { ORG, SITE_URL, alternatesFor, isIndexable, localizedUrl } from '@/lib/site';

const OG_LOCALE: Record<string, string> = { ne: 'ne_NP', en: 'en_US' };
const OG_ALTERNATE_LOCALE: Record<string, string[]> = { ne: ['en_US'], en: ['ne_NP'] };

/**
 * Builds the metadata for one page: title, description, keywords, canonical +
 * hreflang, and matching Open Graph / Twitter cards.
 *
 * Next.js replaces (rather than deep-merges) each metadata field from a parent
 * layout, so `openGraph` has to be assembled in full for every page — this
 * keeps that in one place.
 */
export async function buildPageMetadata({
  locale,
  path,
  seoKey,
  values,
}: {
  locale: Locale | string;
  path: string;
  seoKey: string;
  values?: Record<string, string>;
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  const title = t(`seo.pages.${seoKey}.title`, values);
  const description = t(`seo.pages.${seoKey}.description`, values);
  const siteName = locale === 'ne' ? ORG.name.ne : ORG.name.en;
  const url = localizedUrl(locale, path);
  const indexable = isIndexable(path);

  const images = [
    {
      url: ORG.ogImage.url,
      width: ORG.ogImage.width,
      height: ORG.ogImage.height,
      alt: t('hero.imageCaption'),
    },
  ];

  return {
    title: { absolute: title },
    description,
    keywords: t.raw('seo.keywords') as string[],
    alternates: alternatesFor(locale, path),
    openGraph: {
      type: 'website',
      siteName,
      title,
      description,
      url,
      locale: OG_LOCALE[locale] ?? locale,
      alternateLocale: OG_ALTERNATE_LOCALE[locale] ?? [],
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}${ORG.ogImage.url}`],
    },
    // Placeholder pages are kept out of the index until they carry real
    // content; links on them are still followed so link equity flows onward.
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
  };
}
