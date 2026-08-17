import sharp from "sharp";
import { readdirSync } from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images");
const files = readdirSync(dir).filter((f) => f.endsWith(".jpg") || f.endsWith(".png"));

for (const file of files) {
  const full = path.join(dir, file);
  const meta = await sharp(full).metadata();
  const targetWidth = Math.min(meta.width ?? 1600, 1600);
  const buffer = await sharp(full)
    .resize({ width: targetWidth })
    .jpeg({ quality: 78, mozjpeg: true })
    .toBuffer();
  await sharp(buffer).toFile(full.replace(/\.png$/, ".jpg"));
  console.log(file, "->", (buffer.length / 1024).toFixed(0) + "kb");
}
