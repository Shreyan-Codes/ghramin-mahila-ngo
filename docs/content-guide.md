# NGO Content Editing Guide — Gramin Mahila Kalyan Sewa Kendra (ग्रामीण महिला कल्याण सेवा केन्द्र)

This guide explains how NGO staff can edit and manage website content, translations, programs, and documents.

---

## 1. File Locations

All content for the website is organized into clean, bilingual JSON translation files:

- **Nepali Content**: `src/i18n/messages/ne.json`
- **English Content**: `src/i18n/messages/en.json`

---

## 2. Editing Site Text & Headlines

Open `src/i18n/messages/ne.json` (for Nepali) or `src/i18n/messages/en.json` (for English) in any code or text editor:

### Homepage Headlines & Copy
```json
"hero": {
  "trustBadge": "३० वर्षभन्दा बढीको सामुदायिक सेवा",
  "headline": "मधेसी महिला र बालबालिकाको सशक्तिकरण...",
  "description": "हामी मधेस प्रदेशको सिराहा जिल्लामा..."
}
```

### Program Descriptions
```json
"programs": {
  "items": {
    "women-empowerment": {
      "title": "महिला सशक्तीकरण",
      "summary": "...",
      "focusAreas": ["नेतृत्व विकास", "कानुनी साक्षरता"]
    }
  }
}
```

---

## 3. Adding Real Photographs

The homepage uses original photographs from the organization's own programmes, stored in `public/images/`.

To add or replace a photograph:
1. Resize it to about 1200px wide and save it as `.jpg` inside `public/images/`
2. For the gallery strip, add the filename to `GALLERY_IMAGES` in `src/app/[locale]/page.tsx` and add a matching caption at the same position in `gallery.captions` in **both** `ne.json` and `en.json`.
3. For the hero or About photo, change the `src` of the `<Image>` in `src/app/[locale]/page.tsx`.

Captions are also used as the image `alt` text, so write them descriptively.

---

## 4. Ethical Storytelling & Photo Consent

> **Important**: Never publish sensitive health, violence, child-protection, or survivor information without explicit written consent. Ensure all community members shown in photos are represented with dignity, leadership, and strength.
