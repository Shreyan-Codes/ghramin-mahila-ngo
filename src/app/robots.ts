import type { MetadataRoute } from 'next';
import { SITE_URL, SITEMAP_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Only API routes are withheld. Static assets stay crawlable on
        // purpose: Googlebot needs the JS and CSS to render the page.
        disallow: ['/api/'],
      },
    ],
    sitemap: SITEMAP_URL,
    host: SITE_URL,
  };
}
