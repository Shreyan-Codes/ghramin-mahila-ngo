# ग्रामीण महिला कल्याण सेवा केन्द्र — Gramin Mahila Kalyan Sewa Kendra

Bilingual (Nepali & English) website for **Gramin Mahila Kalyan Sewa Kendra**, a community organization based in Dhangadhimai Municipality–11, Siraha District, Madhesh Province, Nepal, working with women, children, and marginalized families for over 30 years.

---

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` design tokens)
- **i18n**: `next-intl` with locale-prefixed routing (`/ne/`, `/en/`), default locale Nepali
- **Icons**: Lucide React
- **Animations**: Framer Motion (respects `prefers-reduced-motion`)
- **SEO**: Per-page metadata, canonical + `hreflang` alternates, schema.org JSON-LD, generated sitemap and robots.txt — see [`docs/seo.md`](docs/seo.md)

---

## Site Structure

**Homepage** (`/ne`, `/en`) — the only fully built page:

1. Hero with real programme photograph
2. Impact snapshot — 30+ years, 120,000+ people reached, 500+ programs conducted
3. About the organization
4. Six programme areas
5. Photo gallery from recent programmes
6. Why our work matters
7. Key achievements
8. Work with us (volunteer / partner / support)
9. Closing call to action

**Placeholder pages** — these routes exist and render a maintenance notice with the office phone number until verified content is supplied: `/about`, `/programs`, `/programs/[slug]`, `/contact`, `/gallery`, `/transparency`, `/privacy-policy`, `/safeguarding`, `/terms`.

---

## Content

All site copy lives in two files:

- Nepali: `src/i18n/messages/ne.json`
- English: `src/i18n/messages/en.json`

Both files must keep the same key structure. See [`docs/content-guide.md`](docs/content-guide.md).

Photographs are in `public/images/` — all are original photographs from the organization's own programmes.

Titles, meta descriptions and keywords live under the `seo` key in the same two files.

---

## SEO

| | |
| --- | --- |
| **Sitemap** | https://ghramin-mahila-ngo.vercel.app/sitemap.xml |
| **robots.txt** | https://ghramin-mahila-ngo.vercel.app/robots.txt |
| **Manifest** | https://ghramin-mahila-ngo.vercel.app/manifest.webmanifest |

Set `NEXT_PUBLIC_SITE_URL` once a custom domain is live and every canonical,
`hreflang`, sitemap and Open Graph URL follows automatically.

The placeholder pages are served `noindex, follow` and kept out of the sitemap
so they don't compete with the homepage while they hold no real content. Flip
`indexable` in `src/lib/site.ts` as each one gets published. Full details,
including the Search Console steps that still need a human, are in
[`docs/seo.md`](docs/seo.md).

---

## Contact Details Used on the Site

- **Phone**: +977 9849875540
- **Address**: Dhangadhimai Municipality–11, Siraha District, Madhesh Province, Nepal

Both are set in the `footer` and `org` sections of the translation files.

---

## Getting Started

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

---

## Still To Do

- [ ] Official registration number for the `/transparency` page
- [ ] Real content for About, Programs, and Contact pages
- [ ] Official email address (currently phone only)
- [ ] Written consent records for photographs showing identifiable people, especially children
- [ ] Bank details, if the organization decides to accept online donations
