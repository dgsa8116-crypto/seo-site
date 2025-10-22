import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(dir)) {
  console.log("[compress-images] no uploads directory, skip.");
  process.exit(0);
}

const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
for (const f of files) {
  const fp = path.join(dir, f);
  const out = fp; // overwrite
  const buf = fs.readFileSync(fp);
  const img = sharp(buf);
  const meta = await img.metadata();
  let pipeline = img.rotate();
  if (meta.format === "png") {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
  } else {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  }
  await pipeline.toFile(out);
  console.log("[compress-images] optimized", f);
}
