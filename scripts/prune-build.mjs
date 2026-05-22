import { readdir, unlink } from "fs/promises";
import path from "path";

const OUT = path.resolve("out");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      await unlink(full);
      console.log(`removed ${path.relative(OUT, full)}`);
    }
  }
}

await walk(OUT);
console.log("Pruned unoptimized originals from out/.");
