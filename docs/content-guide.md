# NGO Content Editing Guide — Ghramin Mahila (ग्रामीण महिला)

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
  "eyebrow": "मधेसको सेवामा ३०+ वर्ष",
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

Currently, the site uses styled placeholders marked `[Photo Placeholder]`.

To add real, consent-verified photographs:
1. Place optimized `.jpg` or `.webp` image files inside `public/images/`
2. Update the `src` attribute of `<Image>` or `<img>` components in the relevant section files.

---

## 4. Ethical Storytelling & Photo Consent

> **Important**: Never publish sensitive health, violence, child-protection, or survivor information without explicit written consent. Ensure all community members shown in photos are represented with dignity, leadership, and strength.
