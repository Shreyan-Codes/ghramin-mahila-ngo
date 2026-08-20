# SEO

Everything below is already wired up. This page explains where each piece lives
and what still needs a human to finish it.

## Where things live

| Concern | File |
| --- | --- |
| Site URL, org facts, route table | `src/lib/site.ts` |
| Per-page title/description/OG/canonical builder | `src/lib/seo.ts` |
| schema.org JSON-LD builders | `src/lib/structured-data.ts` |
| JSON-LD `<script>` renderer | `src/components/seo/JsonLd.tsx` |
| Sitemap | `src/app/sitemap.ts` |
| robots.txt | `src/app/robots.ts` |
| Web app manifest | `src/app/manifest.ts` |
| Site-wide metadata defaults | `src/app/layout.tsx` |
| Organization + WebSite JSON-LD | `src/app/[locale]/layout.tsx` |
| Titles, descriptions, keywords (both languages) | `seo` block in `src/i18n/messages/{ne,en}.json` |

## Generated URLs

- Sitemap: `/sitemap.xml`
- robots: `/robots.txt`
- Manifest: `/manifest.webmanifest`

## What each page emits

Every route sets its own title, meta description, keywords, a self-referencing
`<link rel="canonical">`, the full `hreflang` set (`ne`, `en`, `x-default`),
Open Graph and Twitter card tags, and a JSON-LD graph. The homepage adds an
`ItemList` of the six programme areas; sub-pages add a `BreadcrumbList`.

## Placeholder pages are deliberately noindex

The pages that still render `MaintenanceSection` (`/about`, `/programs`,
`/programs/[slug]`, `/contact`, `/gallery`, `/transparency`,
`/privacy-policy`, `/safeguarding`, `/terms`) are served with
`robots: noindex, follow` and are left out of the sitemap.

Nine near-identical "under maintenance" pages in the index would dilute the
site's quality signals and compete with the homepage for the same queries.
They still pass link equity through (`follow`), and their metadata and
structured data are already written, so publishing one is a one-line change:

```ts
// src/lib/site.ts
{ path: '/about', seoKey: 'about', indexable: true, priority: 0.9, changeFrequency: 'monthly' },
```

Flipping `indexable` to `true` adds the page to the sitemap and switches its
robots directive in the same step. Only do this once the page has real content.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin. Set this the moment a custom domain goes live (e.g. `https://ghraminmahila.org.np`) — canonicals, hreflang, the sitemap and OG URLs all read from it. Defaults to the Vercel URL. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools verification token. |

The verification meta tags are only emitted when the variable is set.

## Launch steps (need a human)

1. Add the property in [Google Search Console](https://search.google.com/search-console),
   verify it with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, and submit
   `https://<domain>/sitemap.xml`.
2. Do the same in [Bing Webmaster Tools](https://www.bing.com/webmasters).
3. Create the Google Business Profile for the Dhangadhimai office. For a local
   organization this is usually the single largest ranking factor, and no
   amount of on-page markup substitutes for it.
4. Once the registration number is confirmed, add it to the `/transparency`
   page and to the organization schema as `identifier`.
5. Get listed in Nepali NGO directories (Social Welfare Council, NGO
   Federation of Nepal, local municipality listings). Inbound links from
   recognised local sources carry more weight here than anything on-site.

## Known gaps

- **No logo file.** `Organization.logo` is omitted rather than pointing at a
  photograph. Add a square logo to `public/` and set `logo` in
  `organizationSchema` to qualify for the organization rich result.
- **No `geo` coordinates** in the address schema — they were left out rather
  than guessed. Add real latitude/longitude when they are confirmed.
- **No email address.** `ContactPoint` carries the phone number only.
- **Open Graph image** reuses `hero_community.jpg` (1600×900). A purpose-made
  1200×630 card with the organization name would convert better on social.
