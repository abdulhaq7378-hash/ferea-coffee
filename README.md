# Feréa Coffee House — café website concept

A complete, responsive café website for **Feréa Coffee House**, a fictional specialty coffee house in Manipal, Karnataka. Built as a portfolio piece by Abdul Haq to show cafés and restaurants what a modern, editorial website can look like.

> Feréa is not a real business. Reviews and articles are illustrative, and the ordering flow is a demo (no backend, no payments).

## Tech

- React 19 + Vite
- Tailwind CSS v4 (design tokens in `src/index.css`)
- Framer Motion (page-load, scroll reveals, parallax, accordion, drawers)
- Self-hosted Google Fonts via Fontsource: Anton, Barlow Condensed, DM Sans, Caveat Brush

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Editing content

Everything a café owner would change lives in **`src/data/content.js`**:

| What | Where |
| --- | --- |
| Name, address, phone, email, hours | `brand` |
| Section photos | `photos` |
| Menu categories, items, prices, photos | `menu` |
| Signature drink / breakfast combo | `signature`, `combo` |
| Care blocks, places, reviews, blog posts, FAQs | `careBlocks`, `places`, `testimonials`, `posts`, `faqs` |

Photos are referenced by Unsplash photo id (e.g. `'1541167760496-1628856ab772'`). To use your own photography, drop files in `public/images/` and replace the id with a path such as `'/images/latte.jpg'` — the `Img` component handles both.

## Structure

```
src/
  App.jsx              page assembly, intro, hash routes (#/license, #/changelog, 404)
  store.jsx            order bag, overlays, toasts
  data/content.js      all copy, prices and photos
  components/
    Navbar, Hero, Story, Menu, Care, Place, Signature, Combo,
    Testimonials, Blog, Faq, FinalCta, Footer
    Overlays.jsx       order drawer, full menu, journal, article reader, toast
    UtilityPage.jsx    license, changelog, 404
    ui/                Button, Img, Motion helpers, Graphics (logo, beans, doodles, icons)
```

## Credits

Photography from [Unsplash](https://unsplash.com/license). Fonts under the SIL Open Font License.
