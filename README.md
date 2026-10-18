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
npm run deploy:pages
npm run verify:production
npm run preview
```

`deploy:pages` prepares the repository-root output locally. A commit and push to the existing publication branch triggers GitHub Pages.

See [SEO-OPERATIONS.md](SEO-OPERATIONS.md) for route registration, analytics, verification and release checks. Existing app privacy-policy and terms-of-use URLs must remain available.
