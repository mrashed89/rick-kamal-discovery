import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith('.jpg.b64')) {
      const out = p.slice(0, -4);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, Buffer.from(fs.readFileSync(p, 'utf8').trim(), 'base64'));
      console.log('decoded', path.relative(root, out), fs.statSync(out).size);
    }
  }
}
walk(path.join(root, 'public'));
