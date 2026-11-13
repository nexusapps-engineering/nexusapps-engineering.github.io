# Nexus Apps website health check

Audit completed November 13, 2026. Reviewed commit `46bc42a` and the targeted changes in this working tree. The initial worktree was clean. This report records the predeployment audit; publication was subsequently authorized in the follow-up request. Deployment status is reported separately in the release confirmation.

The existing design, content, navigation, and animation choreography are preserved. Existing legal source, legal content, and published legal HTML remain untouched. No production dependencies were added.

## 1. Issues found, ranked by impact

| Priority | Actual finding | Resolution |
| --- | --- | --- |
| Medium | Dependency audit reported 12 affected packages: 1 critical, 8 high, 2 moderate, 1 low according to npm advisories. Vite was pinned to an affected version, including in the pnpm override; React Router was installed but had no source imports. | Updated Vite within major version 6, removed unused React Router, refreshed vulnerable transitive packages within their allowed ranges. Final npm audit: 0 advisories. These package severities do not demonstrate an exploitable vulnerability in the deployed static site. |
| Medium | Reduced-motion toggling repeatedly destroyed and recreated the GSAP media controller. After warm-up, native event listeners grew by two per cycle: 240 after 20 cycles, 400 after 100. | Reuse the controller and its existing media-query lifecycle. Listener count remains 200 from cycle 20 through cycle 100. Added a regression check. |
| Medium | Homepage hero JPEGs and full-size JPEG app-card icons consumed avoidable mobile bandwidth. Lighthouse flagged approximately 47 KiB of image-delivery savings for the sampled icons. | Added WebP hero images and responsive 260px/512px WebP app-card icons. Sampled homepage transfer falls by 75,627 bytes (15.4%). |
| Low | Studio pages had a favicon but no explicit Apple touch icon. | Added an Apple touch icon link using the existing 256px brand asset. Legal head output is excluded from this addition. |

No critical runtime failure, broken internal destination, hydration error, or responsive overflow was reproduced in the tested build. Working sections were retained.

## 2. Fixes applied

- `src/site/SiteMotion.tsx`: initialize the optional motion controller once, retain its existing preference and breakpoint handling, and dispose it on unmount. Initial reduced-motion visits still skip the animation bundle. Reveals, wheel smoothing, parallax, native touch scrolling, and keyboard interruption remain intact.
- `scripts/test-motion.mjs`: use Chromium's DOM counters to detect retained listeners across ten preference cycles, in addition to the existing visual and functional motion checks.
- `src/app/App.tsx`: use WebP derivatives of the existing homepage hero artwork. Mobile image: 38,155 → 12,410 bytes; desktop image: 109,199 → 36,968 bytes, approximately 66% smaller. Dimensions, responsive selection, eager loading, and high fetch priority remain intact.
- `src/site/Sections.tsx`: serve app-card icons with a 130px display size and 260w/512w responsive sources. The larger source preserves detail on high-density displays. Original JPEGs remain available for product pages, metadata, and provenance.
- `src/site/seo.mjs`: explicitly declare the Apple touch icon for non-legal pages.
- `package.json` / `package-lock.json`: Vite 6.3.5 → 6.4.6, corresponding pnpm override, removal of unused React Router, and compatible transitive advisory fixes. The installed dependency tree and lockfile are consistent.
- `README.md`: document the image derivatives for future asset updates.

## 3. Performance results

Lighthouse 13.6.0, headless Chromium, local production preview, mobile 412×823 at DPR 1.75, simulated Slow 4G and 4× CPU slowdown. Two runs before and two after; the first baseline overlapped other browser work, so ranges and raw values are retained instead of claiming a precise field improvement.

| Metric | Before, runs 1 / 2 | After, runs 1 / 2 |
| --- | --- | --- |
| Performance score | 86 / 89 | 91 / 91 |
| LCP | 3.910 s / 3.778 s | 3.553 s / 3.478 s |
| FCP | 2.163 s / 1.051 s | 1.051 s / 1.051 s |
| Total blocking time | 12 ms / 0 ms | 0 ms / 0 ms |
| CLS | 0 / 0 | 0 / 0 |
| Sampled page transfer | 490,645 / 490,645 bytes | 415,037 / 415,018 bytes |

Final Lighthouse accessibility, best practices, and SEO scores: **100 each**. Scores are automated signals, not guarantees of complete accessibility or security.

Additional bounded measurements:

- The 100-cycle preference test confirms listener stability after warm-up. Post-GC heap was approximately 3.07–3.19 MB during cycles 20–100; there was no comparable linear listener growth after the fix.
- Across 20 full-document navigations, sampled post-GC heap returned from 2.18 MB to 2.25 MB on the homepage. This is a bounded sample, not proof against every possible leak.
- A four-second desktop scroll sample at 4× CPU slowdown recorded 241 animation frames, a 95th-percentile interval of 16.7 ms, and no interval over 50 ms. This does not represent physical low-end devices.
- Sampled menu and clipboard-denial interactions produced 32 ms Event Timing entries. These are synthetic interaction samples, **not field INP**. No field INP or percentile Core Web Vitals claim is made.

The preview intentionally uses uncompressed responses and `Cache-Control: no-store`; the observed live host uses gzip and a 600-second cache lifetime. Preview loading and back/forward-cache diagnostics should not be treated as production header measurements.

## 4. Validation results

### Builds and source checks

- `npm run build`: passes; 34 prerendered routes.
- `npm run verify:build`: passes; unique titles/descriptions, canonicals, OG metadata, JSON-LD, sitemap, robots, assets, internal links, and fragments.
- `npm ls --depth=0`: passes; no dependency-tree errors.
- `npm audit`: 0 vulnerabilities after remediation.
- `git diff --check`: passes.
- No credential-like strings were found in the reviewed active source/configuration/scripts; public search verification identifiers and the analytics measurement ID are public configuration, not secrets. No production source maps are emitted by this build. This was a focused website security review, not a penetration test.

### Browser and interaction checks

The existing browser suites passed in **Chromium and WebKit**:

- All 34 routes with JavaScript disabled and enabled; visible prerendered content and one H1.
- Direct routes, internal destinations, unknown-route 404 content and noindex, and image availability.
- Mobile navigation, focus dismissal, Escape, native navigation, skip link, clipboard success, and project-email brief generation.
- CTA analytics payload does not include the email address or project brief.
- No recorded runtime/hydration errors or failed required resources.

Both motion suites passed after the lifecycle change:

- Slow or failed motion downloads retain readable content.
- Visible content does not replay when enhancements arrive or breakpoints change.
- Desktop wheel smoothing, keyboard focus reveals, one-time reveals, Home/End interruption, and skip-link focus/hash work.
- Initial and live reduced motion work; touch/tablet/orientation changes retain native scrolling; legal pages retain native behavior.
- Chromium's new repeated-preference listener regression check passes.

Additional checks passed for browser back/forward, nested-route refresh, denied clipboard permission fallback, and reflow at 320 CSS pixels.

### Responsive and visual checks

- 20 non-legal routes × widths **320, 390, 430, 768, 1024, 1440, 2560**: 140 combinations, no horizontal overflow or detected off-screen main-content bounds.
- axe WCAG A/AA scans, including WCAG 2.1/2.2 tags, across those 20 routes at 390px and 1440px: no reported violations.
- Examined desktop/mobile homepage and representative service, product, and contact screenshots. The hero composition, spacing, content, colors, and app-card appearance remain consistent after asset conversion.
- The 320px checks exercise the reflow width associated with 400% zoom on a 1280px viewport. Dedicated browser text-only enlargement and every operating-system text setting were not exhaustively tested.

### Live site and external destinations

- Read-only requests to all 34 registered live URLs succeeded. GitHub Pages serves `/404.html` itself with 200; an unknown URL correctly returns 404.
- HTTP and `www` requests resolve to `https://nexusapps.co/`.
- Live response headers confirm HTTPS hosting, HTML gzip compression, and caching. CSP, HSTS, a frame policy, and `X-Content-Type-Options` were not present in the sampled response; no corresponding exploit was established. No hosting configuration was changed.
- The GitHub studio link returns 200. Apple rate-limited several direct storefront requests with 429. Apple's lookup API returned 200 for both US and German storefronts and confirmed the correct IDs/names for all six applications. The existing App Store destinations were preserved.
- Local SEO checks confirm discoverable service/product links, canonicals, sitemap/robots consistency, social-image file availability, heading structure, and valid JSON-LD. Social-network crawler previews were not tested through their private debuggers.

## 5. Remaining issues and limits

1. **Publication was a separate follow-up step.** At audit completion, source and `dist/` were ready and remote deployment was pending. Publication was subsequently authorized. The publication script now retains existing legal HTML byte-for-byte; verification permits only differing build asset references in those retained documents and still checks their markup and linked assets. See the release confirmation for live deployment status.
2. **Field performance is unverified.** Mobile lab LCP improved but remains about 3.5 seconds under this preview's simulated conditions. Confirm deployed compressed-asset behavior and real-user LCP/INP/CLS before declaring Core Web Vitals passed. No monitoring infrastructure was added.
3. **Google indexing data is blocked.** The connected Search Console account returns `invalid_grant` (expired/revoked authorization). Current indexing, Google-selected canonicals, outdated indexed URLs, and submitted-sitemap processing need verification after reconnection. Local indexing directives and live route behavior passed.
4. **Physical-device coverage remains open.** WebKit is Safari's engine, but these tests are not physical iPhone/iPad Safari or Android-device testing. Actual device scrolling, OS font settings, and Safari home-screen icon installation remain unverified.

No legal content, German localization, new pages/features, framework migration, or backend work was included.

## Evidence and reproduction

The adjacent `website-health-check-2026-11-13.json` retains measurement values, browser/motion suite results, responsive coverage, dependency counts, live statuses, and App Store lookup results.

Use the existing commands:

```sh
npm run build
npm run verify:build
npm run preview
# In another terminal, with an installed Playwright runtime:
npm run test:browser
npm run test:motion
TEST_BROWSER=webkit npm run test:browser
TEST_BROWSER=webkit npm run test:motion
npm audit
```

As documented in the README, `PLAYWRIGHT_MODULE`, `CHROME_PATH`, and `PLAYWRIGHT_BROWSERS_PATH` can select an existing browser installation. Audit tools were installed only under `/tmp`, not added to the website. Detailed temporary Lighthouse reports and browser screenshots are under `/tmp/nexus-review-*` for this session.
