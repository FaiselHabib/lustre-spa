# Lustre Spa — Luxury Beauty Website

A bilingual (English / Arabic), SEO-optimized, ultra-premium marketing & lead-generation website for **Lustre Spa**, a luxury beauty sanctuary in Al Naeem, Jeddah.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). You will be auto-redirected to `/en` or `/ar` based on your browser language.

To build for production:

```bash
npm run build
npm start
```

---

## 🗂 Folder Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx         # html lang/dir per locale, fonts, full SEO metadata
│   │   ├── page.tsx           # Composes all sections + JSON-LD schema
│   │   └── not-found.tsx
│   ├── globals.css            # Tailwind + brand base styles
│   ├── sitemap.ts             # Auto-generated sitemap
│   └── robots.ts
├── middleware.ts              # Redirects "/" → "/en" or "/ar" (Accept-Language aware)
├── i18n/
│   ├── config.ts              # Locale list, dir map
│   └── dictionaries.ts        # 🌐 All bilingual copy lives here
├── data/
│   └── services.ts            # 💎 SINGLE SOURCE OF TRUTH for the menu
├── lib/
│   ├── cn.ts
│   ├── constants.ts           # Brand details, hours, WhatsApp number
│   └── schema.ts              # JSON-LD (LocalBusiness / BeautySalon)
└── components/
    ├── Navbar.tsx
    ├── WhatsAppFloat.tsx
    ├── LanguageSwitcher.tsx
    ├── sections/              # Hero, About, Services, WhyLustre, Gallery,
    │                          # Hours, Location, FinalCTA, Footer
    ├── services/              # ServiceCategoryBlock, ServiceCard, PriceLine
    └── ui/                    # Button, SectionHeader, Divider, GrainOverlay, LustreLogo
```

---

## ➕ Adding More Menu Items (Important)

The services section is **fully data-driven**. You never need to touch any UI to extend it.

### To add a new item to an existing category

Open `src/data/services.ts`, find the category, and append to its `items[]`:

```ts
{
  id: "polish-mirror",
  nameEn: "Mirror Chrome Polish",
  nameAr: "طلاء كروم مرايا",
  price: 140,
}
```

### To add an item with length variants (Short / Medium / Long / Extra Long)

```ts
{
  id: "tx-keratin",
  nameEn: "Keratin Treatment",
  nameAr: "علاج الكيراتين",
  variants: lengthVariants([900, 1200, 1500, 1800]),
  signature: true,
}
```

### To add a brand-new category

Append a new object to `serviceCategories`:

```ts
{
  id: "pedicure",
  titleEn: "Pedicure",
  titleAr: "العناية بالقدمين",
  captionEn: "Restorative foot rituals",
  captionAr: "طقوس تجديد القدمين",
  icon: "Flower2",
  items: [ /* … */ ],
}
```

It will instantly appear:
- in the quick-jump category nav,
- as its own section,
- with consistent cards & pricing,
- and in the **SEO JSON-LD `makesOffer`** automatically.

---

## 🎨 Brand Tokens

Defined in `tailwind.config.ts`:

| Token         | Value      | Use                         |
| ------------- | ---------- | --------------------------- |
| `ivory-50`    | `#FBF8F2`  | Page base                   |
| `ivory-100`   | `#F6F1E7`  | Soft section base           |
| `sand-*`      | warm beige | Subtle backgrounds          |
| `champagne`   | `#C9A875`  | Accents & dividers          |
| `forest`      | `#1F3B33`  | Brand green (from the logo) |
| `forest-deep` | `#152821`  | Headings & dark sections    |
| `rose-nude`   | `#E7CFC4`  | Gallery tints               |

Typography:
- **Cormorant Garamond** — editorial display serif
- **Inter** — modern body sans (Latin)
- **Cairo** — elegant Arabic sans

---

## 📞 WhatsApp / Contact Updates

Edit `src/lib/constants.ts`:

```ts
whatsappNumber: "966500000000",   // E.164 without "+"
whatsappDisplay: "+966 50 000 0000",
instagram: "https://instagram.com/lustrespa",
mapsUrl: "https://maps.app.goo.gl/...",
```

All CTAs across the site read from this file.

---

## 🔎 SEO Features

- Full bilingual metadata (`generateMetadata`) per locale
- OpenGraph + Twitter card
- `hreflang` alternates (en, ar, x-default)
- JSON-LD `BeautySalon` / `DaySpa` / `HairSalon` / `NailSalon` schema with:
  - address, geo, opening hours, payment, currencies
  - **all menu items as `makesOffer`** with pricing
- `sitemap.xml` & `robots.txt` auto-generated
- Semantic HTML headings & alt tags
- Optimized fonts via `next/font`
- High-priority keywords for Jeddah spa search (EN + AR)

---

## 🧪 What to do next

1. **Drop in the rest of the menu** as the photos come in — see *Adding More Menu Items* above.
2. Replace placeholder gallery tiles in `src/components/sections/Gallery.tsx` with real `<Image>` elements once professional photography is ready.
3. Update the **WhatsApp number** and **Maps URL** in `src/lib/constants.ts`.
4. Replace `public/og.svg` with a high-res branded `og.jpg` (1200×630) for richer link previews.
5. Add a Google verification meta-tag and submit the sitemap to **Google Search Console**.
