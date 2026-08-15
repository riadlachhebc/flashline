const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const dir = path.join(process.cwd(), 'public', 'blog');

async function main() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpg')) {
      const webp = file.replace('.jpg', '.webp');
      await sharp(path.join(dir, file))
        .webp({ quality: 80 })
        .toFile(path.join(dir, webp));
      console.log('Converted ' + file + ' to ' + webp);
      fs.unlinkSync(path.join(dir, file));
    }
  }
}

main().catch(console.error);
