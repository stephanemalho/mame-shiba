# Agent Rules

This is a Next.js App Router site for Kawaii Shiba / Mameshiba.

## Required Reading

Before working on SEO, metadata, structured data, sitemap, PageSpeed, or images,
read `docs/image-performance-rules.md`.

## Repo Conventions

- Keep SEO metadata page-owned. Do not move editorial page SEO into `app/layout.tsx`.
- Prefer existing helpers in `lib/seo-config.ts`, `lib/schema-generators.ts`,
  and `lib/responsive-images.ts` instead of adding duplicated one-off logic.
- Public page images should be deliberately sized and cached. Do not add heavy
  original photos directly to above-the-fold UI.
- After image or SEO changes, run `npm run build`.
- `npm run lint` may not be reliable with the current Next.js version; if needed,
  run ESLint directly on changed files.

## PageSpeed Guardrail

The July 2026 PageSpeed regression was linked to image loading priority: images
below the fold were marked as priority and competed with the real hero/LCP image
on mobile.

Do not reintroduce that pattern. See `docs/image-performance-rules.md`.
