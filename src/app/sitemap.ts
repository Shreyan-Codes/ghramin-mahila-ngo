import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_ROUTES, languageAlternates, localizedUrl } from '@/lib/site';

/**
 * One entry per locale per indexable route, each carrying the full hreflang
 * set so Google can cluster the Nepali and English versions together.
 *
 * Placeholder pages are excluded on purpose: they are served with
 * `noindex`, and submitting noindex URLs in a sitemap sends search engines
 * conflicting signals. They join the sitemap automatically once their entry in
 * `SITE_ROUTES` is marked indexable.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITE_ROUTES.filter((route) => route.indexable).flatMap((route) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: languageAlternates(route.path),
      },
    }))
  );
}
