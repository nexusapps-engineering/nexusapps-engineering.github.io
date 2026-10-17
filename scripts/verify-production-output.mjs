import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { pages, outputFile, findPage } from '../src/site/registry.mjs';
import { origin } from '../src/site/catalog.mjs';
import { sitemap, sitemapIndex, robots } from '../src/site/seo.mjs';

const project = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const root = path.resolve(project, process.argv[2] || '.');
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'");
const exists = async file => { assert((await fs.stat(file)).isFile(), `Missing file: ${file}`); };
const documents = new Map();
const titles = new Set();
const descriptions = new Set();

assert.equal(await fs.readFile(path.join(root, 'sitemap.xml'), 'utf8'), sitemap(), 'Sitemap must match the page registry');
assert.equal(await fs.readFile(path.join(root, 'sitemap_index.xml'), 'utf8'), sitemapIndex(), 'Legacy sitemap index must reference the current sitemap');
assert.equal(await fs.readFile(path.join(root, 'robots.txt'), 'utf8'), robots, 'Robots must match the configured public sitemap');
assert.equal((await fs.readFile(path.join(root, 'CNAME'), 'utf8')).trim(), 'nexusapps.co');
await exists(path.join(root, '.nojekyll'));
const manifest = JSON.parse(await fs.readFile(path.join(root, 'pages-manifest.json'), 'utf8'));
assert.deepEqual(manifest.pages.map(page => page.path), pages.map(page => page.path), 'Published routes must match the registry');

for (const page of pages) {
  const file = outputFile(page);
  const html = await fs.readFile(path.join(root, file), 'utf8');
  documents.set(page.path, html);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page.path}: exactly one H1 is required`);
  assert(html.includes('id="main-content"'), `${page.path}: missing skip-link target`);
  assert(html.includes('lang="en"'), `${page.path}: missing language`);
  assert(!/<!--(?:app-html|page-head)-->|\/src\/|figma:asset/.test(html), `${page.path}: unresolved build source`);
  assert(/src="\/assets\/[^"\s]+\.js"/.test(html), `${page.path}: missing built JavaScript`);
  assert(/href="\/assets\/[^"\s]+\.css"/.test(html), `${page.path}: missing built CSS`);
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || '');
  const description = decode(html.match(/name="description" content="([^"]+)"/)?.[1] || '');
  assert.equal(title, page.title, `${page.path}: title mismatch`);
  assert.equal(description, page.description, `${page.path}: description mismatch`);
  assert(!titles.has(title), `${page.path}: duplicate title`);
  assert(!descriptions.has(description), `${page.path}: duplicate description`);
  titles.add(title); descriptions.add(description);
  assert(html.includes(`rel="canonical" href="${page.canonical}"`), `${page.path}: wrong canonical`);
  assert(html.includes(`property="og:url" content="${page.canonical}"`), `${page.path}: wrong OG URL`);
  assert(html.includes(`property="og:image" content="${page.image}"`), `${page.path}: wrong social image`);
  const schemaText = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (page.index) {
    assert(schemaText, `${page.path}: missing JSON-LD`);
    const schema = JSON.parse(schemaText);
    assert.equal(schema['@context'], 'https://schema.org');
    const types = schema['@graph'].map(item => item['@type']);
    assert(types.includes('Organization') && types.includes('WebSite'));
    if (page.path !== '/') assert(types.includes('BreadcrumbList'));
    if (page.type === 'service') assert(types.includes('Service'));
    if (page.type === 'product') assert(types.includes('SoftwareApplication'));
    const breadcrumb = schema['@graph'].find(item => item['@type'] === 'BreadcrumbList');
    if (breadcrumb) {
      assert.equal(breadcrumb.itemListElement.at(-1).item, page.canonical);
      breadcrumb.itemListElement.forEach((item, i) => assert.equal(item.position, i + 1));
    }
  } else assert(html.includes('noindex, follow'), `${page.path}: error page must not be indexed`);
  const imageUrl = new URL(page.image);
  await exists(path.join(root, imageUrl.pathname));
  if (root === project) assert.equal(html, await fs.readFile(path.join(project, 'dist', file), 'utf8'), `${file}: published output differs from build`);
}

// Resolve every local page, asset, srcset and fragment; catch links to missing or undeployed routes.
for (const [route, html] of documents) {
  const references = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map(match => decode(match[1]));
  for (const match of html.matchAll(/\bsrcSet="([^"]+)"/gi)) references.push(...match[1].split(',').map(item => item.trim().split(/\s+/)[0]));
  for (const reference of references) {
    const url = new URL(reference, origin + route);
    if (url.origin !== origin) continue;
    if (path.extname(url.pathname) && !url.pathname.endsWith('.html')) {
      await exists(path.join(root, decodeURIComponent(url.pathname)));
      continue;
    }
    const destination = findPage(url.pathname);
    assert(destination.type !== 'not-found' || url.pathname === '/404.html', `${route}: broken internal link ${reference}`);
    if (url.hash) {
      const target = documents.get(destination.path);
      assert(target?.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route}: missing fragment ${reference}`);
    }
  }
}

console.log(`Verified ${pages.length} static pages: content, unique metadata, JSON-LD, sitemap, assets and internal links (${root}).`);
