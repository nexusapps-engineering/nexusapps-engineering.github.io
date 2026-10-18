import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const playwright = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const engine = process.env.TEST_BROWSER || 'chromium';
const browser = await playwright[engine].launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) });
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4173';
const artifacts = process.env.TEST_ARTIFACTS || '/tmp/nexus-motion-qa';
const errors = [];
const checks = [];
await fs.mkdir(artifacts, { recursive: true });

async function open(options = {}, route = '/') {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, ...options });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base + route);
  await page.waitForLoadState('networkidle');
  return { page, context };
}

const hasLenis = page => page.evaluate(() => document.documentElement.classList.contains('lenis'));
const allRevealed = page => page.evaluate(() => [...document.querySelectorAll('[data-motion-item], [data-motion-group] > *')]
  .filter(element => !element.matches('.visually-hidden'))
  .every(element => getComputedStyle(element).opacity === '1' && getComputedStyle(element).transform === 'none'));

try {
  const { page, context } = await open();
  await page.waitForFunction(() => document.documentElement.classList.contains('lenis'));
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(60);
  const early = await page.evaluate(() => scrollY);
  await page.waitForTimeout(900);
  const settled = await page.evaluate(() => scrollY);
  assert(early > 0 && early < settled && Math.abs(settled - 600) < 3, `wheel should ease to its intended distance: ${early} → ${settled}`);
  checks.push('desktop wheel smoothing');

  const firstCard = page.locator('.app-card').first();
  await firstCard.locator('a').focus();
  assert.equal(await firstCard.evaluate(element => getComputedStyle(element).opacity), '1');
  checks.push('keyboard focus reveals content immediately');

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
  await firstCard.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1100);
  assert.equal(await firstCard.evaluate(element => getComputedStyle(element).transform), 'none');
  await page.evaluate(() => window.scrollTo(0, 0));
  await firstCard.scrollIntoViewIfNeeded();
  assert.equal(await firstCard.evaluate(element => getComputedStyle(element).opacity), '1');
  checks.push('reveals play once');

  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(40);
  await page.keyboard.press('End');
  await page.waitForTimeout(1100);
  assert(await page.evaluate(() => Math.abs(scrollY - (document.documentElement.scrollHeight - innerHeight)) < 3));
  await page.keyboard.press('Home');
  await page.waitForTimeout(500);
  assert.equal(await page.evaluate(() => scrollY), 0);
  checks.push('native End and Home interrupt wheel inertia');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForFunction(() => !document.documentElement.classList.contains('lenis'));
  assert(await allRevealed(page));
  assert.equal(await page.locator('[data-motion-parallax] img').evaluate(element => getComputedStyle(element).transform), 'none');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.waitForFunction(() => document.documentElement.classList.contains('lenis'));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForFunction(() => !document.documentElement.classList.contains('lenis'));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.waitForFunction(() => document.documentElement.classList.contains('lenis'));
  checks.push('live reduced-motion and breakpoint cleanup');

  await page.goto(base + '/');
  await page.waitForLoadState('networkidle');
  // WebKit follows macOS's setting that can omit links from the default Tab order.
  await page.locator('.skip-link').focus();
  await page.keyboard.press('Enter');
  await page.waitForURL('**/#main-content');
  assert.equal(new URL(page.url()).hash, '#main-content');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
  checks.push('native skip-link focus and hash');

  // Full-page captures must visit content, just as a reader would.
  for (const [name, route, width] of [
    ['home-desktop', '/', 1440], ['home-mobile', '/', 390],
    ['service-desktop', '/services/mobile-app-development/', 1440],
    ['apps-mobile', '/apps/', 390], ['product-mobile', '/apps/asorocket/', 390],
  ]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
    await page.goto(base + route);
    await page.waitForLoadState('networkidle');
    await page.evaluate(async () => {
      await Promise.all([...document.images].map(image => { image.loading = 'eager'; return image.decode().catch(() => {}); }));
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.75) {
        scrollTo(0, y);
        await new Promise(resolve => requestAnimationFrame(resolve));
      }
    });
    await page.waitForTimeout(1100);
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(1000);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await page.screenshot({ path: `${artifacts}/${engine}-${name}.png`, fullPage: true });
    await page.screenshot({ path: `${artifacts}/${engine}-${name}-viewport.png` });
  }
  await context.close();

  for (const width of [320, 390, 768, 1180]) {
    const { page, context } = await open({ viewport: { width, height: 844 }, isMobile: true, hasTouch: true });
    assert.equal(await hasLenis(page), false, `touch ${width}: must keep native scrolling`);
    await page.setViewportSize({ width: 844, height: width });
    await page.waitForTimeout(300);
    assert.equal(await hasLenis(page), false, 'orientation change must keep native scrolling');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await context.close();
  }
  checks.push('native touch scrolling, tablet and orientation changes');

  const reduced = await open({ reducedMotion: 'reduce' });
  assert.equal(await hasLenis(reduced.page), false);
  assert(await allRevealed(reduced.page));
  assert.equal(await reduced.page.evaluate(() => performance.getEntriesByType('resource').filter(entry => /\/motion-.*\.js/.test(entry.name)).length), 0);
  await reduced.context.close();
  checks.push('reduced motion skips the animation bundle');

  const fallback = await browser.newPage();
  await fallback.route('**/assets/motion-*.js', route => route.abort());
  await fallback.goto(base + '/');
  await fallback.waitForLoadState('networkidle');
  assert(await allRevealed(fallback));
  await fallback.close();
  checks.push('failed animation download keeps content readable');

  const legal = await open({}, '/asorocket/privacy-policy');
  assert.equal(await hasLenis(legal.page), false);
  await legal.context.close();
  checks.push('legal documents keep native behavior');

  assert.deepEqual(errors, [], 'browser errors');
  const report = { engine, checks, errors };
  await fs.writeFile(`${artifacts}/${engine}-results.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
