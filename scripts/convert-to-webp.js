const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const targetArg = process.argv[2];
const targetDir = targetArg
    ? path.resolve(__dirname, "..", targetArg)
    : publicDir;
const imageExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

let totalOriginalSize = 0;
let totalWebpSize = 0;
let convertedCount = 0;

async function convertToWebP(filePath) {
    const ext = path.extname(filePath);
    if (!imageExtensions.includes(ext)) return;

    const fileName = path.basename(filePath, ext);
    const dirName = path.dirname(filePath);
    const webpPath = path.join(dirName, `${fileName}.webp`);

    // Skip si le WebP existe déjà
    if (fs.existsSync(webpPath)) {
        console.log(`⏭️  Skipped (already exists): ${path.basename(filePath)}`);
        return;
    }

    try {
        const originalStats = fs.statSync(filePath);
        totalOriginalSize += originalStats.size;

        await sharp(filePath).webp({ quality: 85, effort: 6 }).toFile(webpPath);

        const webpStats = fs.statSync(webpPath);
        totalWebpSize += webpStats.size;
        convertedCount++;

        const reduction = (
            (1 - webpStats.size / originalStats.size) *
            100
        ).toFixed(1);
        console.log(
            `✅ ${path.basename(filePath)} → ${path.basename(
                webpPath
            )} (${reduction}% smaller)`
        );
    } catch (error) {
        console.error(`❌ Error converting ${filePath}:`, error.message);
    }
}

async function scanDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            await scanDirectory(fullPath);
        } else if (file.isFile()) {
            await convertToWebP(fullPath);
        }
    }
}

async function main() {
    console.log("🖼️  Starting image conversion to WebP...\n");

    if (!fs.existsSync(targetDir)) {
        throw new Error(`Directory not found: ${targetDir}`);
    }

    await scanDirectory(targetDir);

    const originalSizeMb = totalOriginalSize / 1024 / 1024;
    const webpSizeMb = totalWebpSize / 1024 / 1024;
    const totalReduction =
        totalOriginalSize > 0
            ? ((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1)
            : "0.0";

    console.log("\n📊 Conversion Summary:");
    console.log(`   Files converted: ${convertedCount}`);
    console.log(`   Scanned directory: ${targetDir}`);
    console.log(`   Original size: ${originalSizeMb.toFixed(2)} MB`);
    console.log(`   WebP size: ${webpSizeMb.toFixed(2)} MB`);
    console.log(`   Total reduction: ${totalReduction}%`);
    console.log(
        "\n✨ Done! You can now update your code to use .webp extensions."
    );
}

main().catch(console.error);
