import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root = fileURLToPath(new URL('../', import.meta.url));
process.chdir(root);
execFileSync(process.execPath, ['scripts/verify-production-output.mjs', 'dist'], { stdio: 'inherit' });
const { pages } = JSON.parse(await fs.readFile('dist/pages-manifest.json', 'utf8'));
for (const page of pages) {
  await fs.mkdir(path.dirname(page.file), { recursive: true });
  await fs.copyFile(`dist/${page.file}`, page.file);
}
for (const name of ['assets', 'images']) await fs.cp(`dist/${name}`, name, { recursive: true });
for (const name of ['robots.txt', 'sitemap.xml', 'sitemap_index.xml', 'CNAME', '.nojekyll', 'pages-manifest.json', 'social-card.png', 'nexus-mark.png', 'app-store-sources.json']) await fs.copyFile(`dist/${name}`, name);
execFileSync(process.execPath, ['scripts/verify-production-output.mjs', '.'], { stdio: 'inherit' });
console.log('GitHub Pages output prepared locally. No commit, push or remote deployment was performed.');
