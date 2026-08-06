# Ghramin Mahila (ग्रामीण महिला) — Premium Bilingual NGO Website

A production-ready, high-conversion bilingual (Nepali & English) website for **Ghramin Mahila** (ग्रामीण महिला), a well-established nonprofit working for Madhesi women, children, and marginalized communities in Siraha District, Madhesh Province, Nepal for over 30 years.

---

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` design tokens) & Vanilla CSS
- **i18n**: `next-intl` with language-based routing (`/ne/`, `/en/`) & default Nepali locale
- **Icons**: Lucide React + Clean Inline Brand SVGs
- **Animations**: Framer Motion & Restrained CSS Transitions (Respects `prefers-reduced-motion`)

---

## Features

- **100% Bilingual**: Complete Nepali (नेपाली) and English experience with persistent language switcher.
- **Madhesh & Mithila Visual Identity**: Palette inspired by Madhesh (#7B2431 Deep Maroon, #C96145 Terracotta, #D7A43B Mustard Gold, #263A5F Indigo, #FCF8F1 Warm Ivory).
- **13 Homepage Sections**: Hero, Impact Snapshot, Intro with Timeline, 6 Program Cards, Featured Story Placeholder, Why Our Work Matters, Key Achievements, 30-Year Journey Vertical Timeline, Get Involved, Transparency, Partners, Final CTA, and Footer.
- **15+ Public Pages**: Home, About Us, Programs, Program Details (6 subpages), Impact, Stories, News & Events, Get Involved, Donate, Contact, Gallery, Transparency, Privacy Policy, Safeguarding, Terms.
- **Static SSG Optimization**: All 44 bilingual pages static-prerendered at build time for extreme performance.
- **WCAG 2.2 AA Accessibility**: Semantic HTML, skip-to-content link, focus-visible states, keyboard navigation, minimum 48px touch targets.
- **Ethical Storytelling**: No pity-based messaging, no fake numbers, names, or logos; clear consent placeholders.

---

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

---

## Documentation & Guides

- [Content Editing Guide](docs/content-guide.md)
- [Deployment Instructions](docs/deployment.md)
- [Pre-Launch Checklist](docs/pre-launch-checklist.md)
