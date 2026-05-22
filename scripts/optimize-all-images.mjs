/**
 * Optimizes ALL site images based on their actual display sizes.
 * Resizes in-place — run once when adding new images, or after batch uploads.
 *
 * Sizes are based on the actual `sizes=` props found in each component + 2× DPR.
 *
 * Run: node scripts/optimize-all-images.mjs
 * Or:  npm run optimize:images:all
 */

import sharp from "sharp";
import { readdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "../public");

// Per-directory config derived from component `sizes=` props × 2 DPR
const CONFIGS = [
    // authors: max 240px display (144px desktop, 240px on breeders page) × 2
    { dir: "assets/authors", maxWidth: 500, quality: 88 },
    // blog: generic article images, up to ~50vw
    { dir: "assets/blog", maxWidth: 1200, quality: 88 },
    // homePage: hero at 50vw, grid at 33vw → largest wins
    { dir: "pages/homePage", maxWidth: 1300, quality: 90 },
    // image-all-shiba: used at 50vw across multiple pages
    { dir: "pages/image-all-shiba", maxWidth: 1300, quality: 90 },
    // conditions-de-vie: carousel at 45vw
    { dir: "pages/conditions-de-vie", maxWidth: 1200, quality: 88 },
    // les-eleveuses: tiny thumbnails at 120px fixed × 2
    { dir: "pages/les-eleveuses", maxWidth: 300, quality: 85 },
    // reproducteurs: carousel at 50vw
    { dir: "pages/reproducteurs", maxWidth: 1300, quality: 90 },
    // le-mame-shiba: 3-col grid at 33vw
    { dir: "pages/le-mame-shiba", maxWidth: 900, quality: 88 },
    // mame-shiba-prix: 3-col grid at 33vw
    { dir: "pages/mame-shiba-prix", maxWidth: 900, quality: 88 },
    // adoption: two-col at 45vw
    { dir: "pages/adoption", maxWidth: 1200, quality: 88 },
    // presentation-elevage: two-col at 50vw
    { dir: "pages/presentation-elevage", maxWidth: 1300, quality: 90 },
];

const IMAGE_EXTS = new Set([".webp", ".jpeg", ".jpg", ".png"]);

function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function processDir(dirConfig) {
    const { dir, maxWidth, quality } = dirConfig;
    const absDir = path.join(PUBLIC, dir);

    let files;
    try {
        files = await readdir(absDir);
    } catch {
        console.log(`  ⚠ Skipping ${dir} (not found)`);
        return { resized: 0, skipped: 0, savedBytes: 0 };
    }

    const imageFiles = files.filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return IMAGE_EXTS.has(ext) && !f.startsWith(".");
    });

    let resized = 0;
    let skipped = 0;
    let savedBytes = 0;

    for (const file of imageFiles) {
        const filePath = path.join(absDir, file);
        const ext = path.extname(file).toLowerCase();

        const { size: originalSize } = await stat(filePath);
        const meta = await sharp(filePath).metadata();
        const originalWidth = meta.width ?? 0;

        if (originalWidth <= maxWidth) {
            skipped++;
            continue;
        }

        let pipeline = sharp(filePath).resize(maxWidth, null, { withoutEnlargement: true });

        if (ext === ".webp") pipeline = pipeline.webp({ quality });
        else if (ext === ".jpeg" || ext === ".jpg") pipeline = pipeline.jpeg({ quality, mozjpeg: true });
        else if (ext === ".png") pipeline = pipeline.png({ quality });

        const buffer = await pipeline.toBuffer();
        await writeFile(filePath, buffer);

        const saved = originalSize - buffer.length;
        savedBytes += saved;
        resized++;
        console.log(
            `  ✓ ${file.padEnd(55)} ${originalWidth}px → ${maxWidth}px  ${formatBytes(originalSize)} → ${formatBytes(buffer.length)}  (−${formatBytes(saved)})`
        );
    }

    return { resized, skipped, savedBytes };
}

console.log("Optimizing all site images...\n");

let totalResized = 0;
let totalSkipped = 0;
let totalSaved = 0;

for (const config of CONFIGS) {
    console.log(`📁 ${config.dir}  (max ${config.maxWidth}px, q${config.quality})`);
    const result = await processDir(config);
    totalResized += result.resized;
    totalSkipped += result.skipped;
    totalSaved += result.savedBytes;
    if (result.resized === 0) console.log("  → all images already within limits");
    console.log();
}

console.log("─".repeat(70));
console.log(`Done.`);
console.log(`  Resized: ${totalResized} images`);
console.log(`  Skipped: ${totalSkipped} images (already within limits)`);
console.log(`  Saved:   ${formatBytes(totalSaved)} total`);
console.log(`
Next steps:
  npm run generate:public-asset-paths
  git add -A && git commit -m "perf: optimize all site images"
`);
