import { ORG, SITE_URL, localizedUrl } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLdNode = Record<string, unknown>;

export function organizationSchema(locale: Locale | string, description: string): JsonLdNode {
  const isNepali = locale === 'ne';
  return {
    '@type': ['NGO', 'Organization'],
    '@id': ORG_ID,
    name: isNepali ? ORG.name.ne : ORG.name.en,
    alternateName: ORG.alternateNames,
    url: localizedUrl(locale, '/'),
    description,
    image: `${SITE_URL}${ORG.ogImage.url}`,
    telephone: ORG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.address.street,
      addressLocality: ORG.address.locality,
      addressRegion: ORG.address.region,
      addressCountry: ORG.address.country,
    },
    areaServed: ORG.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    knowsLanguage: ['ne', 'en'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: ORG.phone,
      contactType: 'customer support',
      areaServed: 'NP',
      availableLanguage: ['Nepali', 'English', 'Maithili'],
    },
  };
}

export function websiteSchema(locale: Locale | string, name: string): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: localizedUrl(locale, '/'),
    name,
    inLanguage: locale,
    publisher: { '@id': ORG_ID },
  };
}

export function webPageSchema({
  locale,
  path,
  name,
  description,
}: {
  locale: Locale | string;
  path: string;
  name: string;
  description: string;
}): JsonLdNode {
  return {
    '@type': 'WebPage',
    '@id': `${localizedUrl(locale, path)}#webpage`,
    url: localizedUrl(locale, path),
    name,
    description,
    inLanguage: locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(
  locale: Locale | string,
  trail: { name: string; path: string }[]
): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: localizedUrl(locale, crumb.path),
    })),
  };
}

export function programListSchema(
  locale: Locale | string,
  programs: { slug: string; name: string; description: string }[]
): JsonLdNode {
  return {
    '@type': 'ItemList',
    name: locale === 'ne' ? 'हाम्रा कार्यक्रमहरू' : 'Our Programs',
    itemListElement: programs.map((program, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: program.name,
        description: program.description,
        url: localizedUrl(locale, `/programs/${program.slug}`),
        provider: { '@id': ORG_ID },
        areaServed: ORG.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
      },
    })),
  };
}

/** Wraps nodes in a single `@graph` document so one script tag covers the page. */
export function graph(...nodes: JsonLdNode[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
