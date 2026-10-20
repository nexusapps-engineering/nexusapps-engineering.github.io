# Nexus Apps

[Nexus Apps](https://nexusapps.co/) is an independent app studio in Berlin, Germany. We build and operate our own iOS apps and offer mobile app, web product and MVP development for startups and businesses worldwide.

- [Development services](https://nexusapps.co/services/)
- [Our apps](https://nexusapps.co/apps/): Visual LabX, Photo CamAI, Wallpapers Neo, Retro Cam Neo, Clear Wave Pro and ASO Rocket
- [How we work](https://nexusapps.co/process/)
- [Discuss a project](https://nexusapps.co/contact/): hello@nexusapps.co

The published app portfolio contains our own iOS products. It is not presented as commissioned Android or web client work.

## Website development

This repository contains the React/Vite source and the generated static files served by GitHub Pages. Page content, metadata and the sitemap use a shared route registry.

```sh
npm ci
npm run dev
```

To build and check the static site:

```sh
npm run build
npm run verify:build
npm run preview
```

These commands build into `dist/` and serve a local preview without changing the repository-root publication files.

`deploy:pages` prepares the repository-root output for publication. A commit and push to the existing publication branch triggers GitHub Pages. Keep that separate from local review and run it only when publication is approved.

Existing app privacy-policy and terms-of-use URLs must remain available.

## Motion

Studio pages progressively load GSAP/ScrollTrigger after hydration. `data-motion-group` staggers direct children; `data-motion-item` reveals an individual block once. Keep these attributes on separate, non-nested scenes. `data-motion-parallax` adds a small image drift inside an existing clipped frame.

Lenis and parallax run at 1060px and above with a fine pointer. Touch devices keep native scrolling. Reduced-motion preferences disable the enhancement, including when changed during a visit; legal documents stay static. Content remains readable if JavaScript or the optional motion download fails.

Tune distances and timing in `src/site/motion.ts`. Run `npm run test:browser` and `npm run test:motion` against `npm run preview` with an installed Playwright runtime. Set `TEST_BROWSER=webkit` for the motion checks in Safari's engine; `PLAYWRIGHT_MODULE` and `CHROME_PATH` can point to an existing runtime and Chromium executable.
