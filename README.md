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
