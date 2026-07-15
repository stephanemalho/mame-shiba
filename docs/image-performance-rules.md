# Image Performance Rules

These rules exist because a PageSpeed mobile regression was introduced after
image/SEO changes on 2026-07-09.

## The Mistake To Avoid

Do not set `priority` on images that are below the fold.

In July 2026, the home page preloaded several puppy thumbnails in the "chiots
disponibles" section even though that section appears below the initial mobile
viewport. Those thumbnail preloads competed with the hero image request and
degraded PageSpeed diagnostics.

Bad pattern:

```tsx
{items.map((item, index) => (
  <Image
    src={item.image}
    alt={item.alt}
    fill
    priority={index < 4}
  />
))}
```

This is only acceptable if those images are truly visible in the first viewport.
For normal grids, carousels, cards, puppy thumbnails, founders, and secondary
sections, do not use `priority`.

## Hero / LCP Rules

- Each page should have at most one likely LCP image with `priority`.
- Add `fetchPriority="high"` only to the real above-the-fold LCP image.
- If two images are above the fold, inspect the layout and choose the one most
  likely to be LCP on mobile. Do not mark both as high priority by default.
- For images below the fold, rely on default lazy loading.

Current home page intent:

- `/pages/mameshiba-desktop.jpg` is the prioritized hero/background image.
- `/mame-shiba-in-a-sakura-tree.jpg` should not be `priority` unless a future
  layout makes it the actual LCP image.
- Puppy thumbnails in the home page adoption section must not be `priority`.

## Responsive Image Rules

- Prefer existing responsive assets from `lib/responsive-images.ts` when they
  exist.
- Use `components/responsive-picture.tsx` for pre-generated responsive image
  assets.
- Keep explicit `sizes` values accurate. A bad `sizes` value can make browsers
  download an unnecessarily large variant.
- Do not serve original multi-megabyte puppy photos directly in list/card views.
  Use thumbnails or generated WebP variants for previews.

## Sitemap And Structured Data

- It is fine to include page-relevant images in structured data and sitemap.
- Structured-data images should not force UI preloads.
- Sitemap images should be explicit, stable, and relevant to the page.

## Cache Rules

Public image assets should be treated as immutable when filenames are stable or
versioned. If an image changes visually, prefer changing its filename or path.

The site currently sets long cache headers for public image formats in
`next.config.ts`.

## Before Finishing Image/SEO Work

Run:

```bash
npm run build
```

Recommended checks:

```bash
npm run audit:schemas
npm run audit:meta
```

If lint is needed, prefer direct ESLint on changed files because `npm run lint`
may be incompatible with the current Next.js CLI behavior.
