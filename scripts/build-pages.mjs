import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, createServer } from 'vite';

const root = fileURLToPath(new URL('../', import.meta.url));
process.chdir(root);
await build();
const template = await fs.readFile('dist/index.html', 'utf8');
const manifest = JSON.parse(await fs.readFile('dist/.vite/manifest.json', 'utf8'));
const assetMap = new Map(Object.entries(manifest).filter(([, entry]) => entry.file && !entry.isEntry && !entry.isDynamicEntry).map(([source, entry]) => [`/${source}`, `/${entry.file}`]));
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false, watch: null }, appType: 'custom' });
try {
  const { render, pages, outputFile, documentHtml, sitemap, sitemapIndex, robots } = await server.ssrLoadModule('/src/entry-server.tsx');
  const verification = { google: process.env.GOOGLE_SITE_VERIFICATION, bing: process.env.BING_SITE_VERIFICATION };
  const outputs = [];
  for (const page of pages) {
    const result = await render(page.path);
    const html = result.html.replace(/\/src\/assets\/[^\s"',<>]+/g, asset => {
      const built = assetMap.get(asset);
      if (!built) throw new Error(`No built asset for ${asset}`);
      return built;
    });
    const file = outputFile(page);
    await fs.mkdir(path.dirname(`dist/${file}`), { recursive: true });
    await fs.writeFile(`dist/${file}`, documentHtml(template, page, html, verification));
    outputs.push(file);
  }
  await fs.writeFile('dist/sitemap.xml', sitemap());
  await fs.writeFile('dist/sitemap_index.xml', sitemapIndex());
  await fs.writeFile('dist/robots.txt', robots);
  await fs.writeFile('dist/.nojekyll', '');
  await fs.copyFile('CNAME', 'dist/CNAME');
  await fs.writeFile('dist/pages-manifest.json', JSON.stringify({ pages: pages.map((page, i) => ({ ...page, file: outputs[i] })) }, null, 2) + '\n');
  console.log(`Pre-rendered ${pages.length} pages with metadata and structured data.`);
} finally { await server.close(); }
