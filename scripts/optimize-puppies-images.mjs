/**
 * Optimizes puppy images in public/pages/puppies/:
 *   - Resizes originals to max 1500px wide (for detail page hero)
 *   - Generates *-thumb.webp at max 800px wide (for thumbnails & secondary images)
 *
 * Run: node scripts/optimize-puppies-images.mjs
 * Or:  npm run optimize:images
 */

import sharp from "sharp";
import { readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUPPIES_DIR = path.join(__dirname, "../public/pages/puppies");

const FULL_MAX_WIDTH = 1500;
const THUMB_MAX_WIDTH = 800;
const FULL_QUALITY = 82;
const THUMB_QUALITY = 75;

const files = await readdir(PUPPIES_DIR);
const webpFiles = files.filter(
    (f) => f.endsWith(".webp") && !f.endsWith("-thumb.webp") && !f.startsWith(".")
);

console.log(`Found ${webpFiles.length} .webp files to process...\n`);

let resized = 0;
let thumbsCreated = 0;
let alreadySmall = 0;

for (const file of webpFiles) {
    const filePath = path.join(PUPPIES_DIR, file);
    const thumbFile = file.replace(".webp", "-thumb.webp");
    const thumbPath = path.join(PUPPIES_DIR, thumbFile);

    const meta = await sharp(filePath).metadata();
    const originalWidth = meta.width ?? 0;

    // Resize original in-place if too wide
    if (originalWidth > FULL_MAX_WIDTH) {
        const buffer = await sharp(filePath)
            .resize(FULL_MAX_WIDTH, null, { withoutEnlargement: true })
            .webp({ quality: FULL_QUALITY })
            .toBuffer();
        await writeFile(filePath, buffer);
        console.log(`✓ ${file} — ${originalWidth}px → ${FULL_MAX_WIDTH}px`);
        resized++;
    } else {
        console.log(`→ ${file} — already ${originalWidth}px, skipped resize`);
        alreadySmall++;
    }

    // Always (re)generate thumb
    await sharp(filePath)
        .resize(THUMB_MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: THUMB_QUALITY })
        .toFile(thumbPath);
    console.log(`  ↳ thumb → ${thumbFile}`);
    thumbsCreated++;
}

console.log(`
Done.
  Resized:       ${resized}
  Already small: ${alreadySmall}
  Thumbs:        ${thumbsCreated}

Next steps:
  npm run generate:public-asset-paths
  git add public/pages/puppies && git commit -m "optimize puppy images"
`);
