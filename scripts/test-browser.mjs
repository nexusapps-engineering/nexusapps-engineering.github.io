import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pages } from '../src/site/registry.mjs';

// Use an installed Playwright package or the desktop app's bundled runtime.
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4173';
const artifacts = process.env.TEST_ARTIFACTS || '/tmp/nexus-seo-qa';
await fs.mkdir(artifacts, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) });
const errors = [];
const results = [];

function monitor(page) {
  page.on('pageerror', error => errors.push(`${page.url()}: ${error.message}`));
  page.on('console', message => { if (message.type() === 'error' && !message.text().includes('404 (Not Found)')) errors.push(`${page.url()}: ${message.text()}`); });
}

try {
  for (const javaScriptEnabled of [false, true]) {
    const context = await browser.newContext({ javaScriptEnabled, viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    monitor(page);
    for (const route of pages) {
      const response = await page.goto(base + route.path);
      await page.waitForLoadState('networkidle');
      assert.equal(response.status(), route.type === 'not-found' ? 404 : 200, route.path);
      assert.equal(await page.title(), route.title);
      assert.equal(await page.locator('h1').count(), 1, route.path);
      assert(await page.locator('h1').isVisible(), `${route.path}: H1 must be visible without JavaScript`);
      assert((await page.locator('main').innerText()).length > 80, `${route.path}: server-rendered content missing`);
      assert(await page.locator('a[href="/services/"]').count() > 0);
      assert(await page.locator('a[href="/apps/"]').count() > 0);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route.path}: desktop overflow`);
    }
    await page.goto(base + '/a-page-that-does-not-exist/');
    await page.waitForLoadState('networkidle');
    assert.equal(await page.locator('h1').innerText(), 'Let’s find your next step.');
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex, follow');
    results.push({ javaScriptEnabled, routesChecked: pages.length, unknownRoute: '404' });
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await context.newPage(); monitor(page);
  const mobilePaths = ['/', '/services/', '/services/mobile-app-development/', '/services/web-app-development/', '/services/mvp-development/', '/apps/asorocket/', '/apps/wallpapers/', '/contact/', '/about/', '/process/', '/app-policies/', '/asorocket/privacy-policy'];
  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of mobilePaths) {
      await page.goto(base + route); await page.waitForLoadState('networkidle');
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route}: overflow at ${width}px`);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + '/'); await page.waitForLoadState('networkidle');
  const menu = page.locator('.mobile-nav');
  await menu.locator('summary').click(); assert.equal(await menu.getAttribute('open'), '');
  assert(await menu.locator('a[href="/services/"]').isVisible());
  await page.keyboard.press('Escape'); assert.equal(await menu.getAttribute('open'), null);
  await menu.locator('summary').click(); await menu.locator('a[href="/services/"]').click(); await page.waitForLoadState('networkidle');
  assert.equal(new URL(page.url()).pathname, '/services/');

  await page.goto(base + '/contact/'); await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Copy address' }).click();
  await page.getByRole('status').filter({ hasText: 'Email address copied' }).waitFor();
  assert.equal(await page.getByRole('status').innerText(), 'Email address copied');
  assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'hello@nexusapps.co');
  await page.evaluate(() => {
    window.__nexusEvents = [];
    window.gtag = (...args) => window.__nexusEvents.push(args);
    document.addEventListener('click', event => { if (event.target.closest('a[data-project-email]')) event.preventDefault(); });
  });
  const cta = page.locator('[data-position="contact-hero"]');
  const href = new URL(await cta.getAttribute('href'));
  assert.equal(href.protocol, 'mailto:'); assert.equal(href.pathname, 'hello@nexusapps.co');
  assert(href.searchParams.get('body').includes('Problem we want to solve:'));
  await cta.click();
  const events = await page.evaluate(() => window.__nexusEvents);
  assert.equal(events.length, 1);
  assert.equal(events[0][1], 'project_email_click');
  assert.deepEqual(Object.keys(events[0][2]).sort(), ['cta_position', 'page_path', 'service', 'transport_type']);
  assert(!JSON.stringify(events).includes('hello@'));
  assert(!JSON.stringify(events).includes('generate_lead'));

  for (const [name, route, width] of [['home-desktop', '/', 1440], ['home-mobile', '/', 390], ['service-desktop', '/services/mobile-app-development/', 1440], ['service-mobile', '/services/mobile-app-development/', 390], ['product-desktop', '/apps/asorocket/', 1440], ['product-mobile', '/apps/wallpapers/', 390], ['contact-mobile', '/contact/', 390]]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
    await page.goto(base + route); await page.waitForLoadState('networkidle');
    // Load below-the-fold assets for full-page visual inspection without changing site behavior.
    await page.evaluate(async () => {
      await Promise.all([...document.images].map(image => { image.loading = 'eager'; return image.decode().catch(() => {}); }));
    });
    assert.equal(await page.locator('img').evaluateAll(images => images.filter(image => !image.complete || image.naturalWidth === 0).length), 0, `${route}: broken image`);
    // Visit scroll-triggered content before capturing the complete document.
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.75) {
        window.scrollTo(0, y);
        await new Promise(resolve => requestAnimationFrame(resolve));
      }
    });
    await page.waitForTimeout(1100);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `${artifacts}/${name}.png`, fullPage: true });
    await page.screenshot({ path: `${artifacts}/${name}-viewport.png` });
  }
  await page.goto(base + '/'); await page.waitForLoadState('networkidle');
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').innerText(), 'Skip to content');
  await context.close();
  assert.deepEqual(errors, [], 'Browser errors or hydration mismatches');
  const summary = { results, mobileWidths: [390, 320], mobileRoutes: mobilePaths.length, checks: ['native navigation', 'Escape key', 'clipboard', 'email brief', 'PII-free CTA event', 'images', 'keyboard skip link', 'hydration'], errors };
  await fs.writeFile(`${artifacts}/browser-results.json`, JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(summary, null, 2));
} finally { await browser.close(); }
