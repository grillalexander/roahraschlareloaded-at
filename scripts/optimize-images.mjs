import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";

const PUBLIC = path.resolve("public");

/** Max widths by folder – tuned to actual display sizes on the site. */
const MAX_WIDTH = {
  gallery: 800,
  musicians: 800,
  events: 800,
  root: 1920,
};

const SMALL_WIDTH = {
  default: 480,
  hero: 960,
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "fonts") continue;
      files.push(...(await walk(full)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function maxWidthFor(file) {
  const rel = path.relative(PUBLIC, file);
  if (rel.startsWith("gallery/")) return MAX_WIDTH.gallery;
  if (rel.startsWith("musicians/")) return MAX_WIDTH.musicians;
  if (/^event_/i.test(path.basename(rel)) || rel.includes("Weinroas")) {
    return MAX_WIDTH.events;
  }
  if (rel === "all.jpg" || rel === "hero-accordion.jpg") return MAX_WIDTH.root;
  if (/logo/i.test(rel)) return 512;
  return MAX_WIDTH.events;
}

async function writeWebp(input, output, width, quality = 82) {
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(output);
}

async function optimize(file) {
  const rel = path.relative(PUBLIC, file);
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const width = maxWidthFor(file);
  const before = (await stat(file)).size;

  await writeWebp(file, out, width);

  const isLogo = /logo/i.test(rel);
  if (!isLogo) {
    const isHero = rel === "all.jpg";
    const smallWidth = isHero ? SMALL_WIDTH.hero : SMALL_WIDTH.default;
    const smallOut = isHero
      ? path.join(PUBLIC, "all-960.webp")
      : out.replace(/\.webp$/, "-480.webp");
    if (!isHero || width > smallWidth) {
      await writeWebp(file, smallOut, smallWidth, 80);
    }
  }

  const after = (await stat(out)).size;
  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(
    `${rel} → ${path.relative(PUBLIC, out)} (${(before / 1024).toFixed(0)}K → ${(after / 1024).toFixed(0)}K, -${saved}%)`,
  );
}

const files = await walk(PUBLIC);
console.log(`Optimizing ${files.length} images…`);
await Promise.all(files.map(optimize));
console.log("Done.");
