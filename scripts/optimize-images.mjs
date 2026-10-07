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

/** Visible pixels on white/light logo (matches header light mode layout). */
async function rgbContentBounds(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const a = data[i + 3];
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (a > 16 && !(r > 240 && g > 240 && b > 240)) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < minX) return null;
  return {
    minX,
    minY,
    cw: maxX - minX + 1,
    ch: maxY - minY + 1,
  };
}

/** Dark JPG fills the frame; align artwork to logo-full so nav light/dark match. */
async function alignDarkLogoToLight() {
  const lightPath = path.join(PUBLIC, "logo-full.webp");
  const darkJpg = path.join(PUBLIC, "logo_darkmode.jpg");
  const darkOut = path.join(PUBLIC, "logo_darkmode.webp");

  try {
    await stat(darkJpg);
  } catch {
    return;
  }

  const light = await rgbContentBounds(lightPath);
  if (!light) {
    console.warn("alignDarkLogo: could not read light logo bounds");
    return;
  }

  const trimmed = await sharp(darkJpg).trim({ threshold: 24 }).png().toBuffer();
  const trimMeta = await sharp(trimmed).metadata();
  if (!trimMeta.width || !trimMeta.height) return;

  const scale = light.ch / trimMeta.height;
  const targetW = Math.round(trimMeta.width * scale);

  const scaled = await sharp(trimmed)
    .resize(targetW, light.ch, { fit: "inside" })
    .png()
    .toBuffer();
  const placed = await sharp(scaled).metadata();
  const left = light.minX + Math.round((light.cw - (placed.width ?? 0)) / 2);
  const top = light.minY;

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: scaled, left, top }])
    .webp({ quality: 92, effort: 4 })
    .toFile(darkOut);

  console.log(
    `logo_darkmode.jpg → logo_darkmode.webp (aligned to logo-full content box)`,
  );
}

async function optimize(file) {
  const rel = path.relative(PUBLIC, file);
  if (rel === "logo_darkmode.jpg") {
    return;
  }
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
await alignDarkLogoToLight();
console.log("Done.");
