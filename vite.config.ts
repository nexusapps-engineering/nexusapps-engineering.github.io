import { defineConfig } from 'vite';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

const pageTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" type="image/png" href="/nexus-mark.png" />
    <!--page-head-->
    <script type="module" src="/src/main.tsx"></script>
  </head>
  <body>
    <div id="root"><!--app-html--></div>
  </body>
</html>
`;

export default defineConfig({
  // Generate real static routes; never turn an unknown address into the homepage.
  appType: 'custom',
  plugins: [
    {
      name: 'source-html-for-build',
      apply: 'build',
      transformIndexHtml: { order: 'pre', handler: () => pageTemplate },
    },
    {
      name: 'static-pages-in-dev',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.method !== 'GET' && req.method !== 'HEAD') return next();
          const pathname = new URL(req.url || '/', 'http://localhost').pathname;
          if (pathname.startsWith('/@') || pathname.startsWith('/__') || pathname.startsWith('/node_modules/') || pathname.startsWith('/src/')) return next();
          if (path.extname(pathname) && !pathname.endsWith('.html')) return next();
          try {
            const module = await server.ssrLoadModule('/src/entry-server.tsx');
            const { page, html } = await module.render(pathname);
            const document = module.documentHtml(pageTemplate, page, html, { google: process.env.GOOGLE_SITE_VERIFICATION, bing: process.env.BING_SITE_VERIFICATION });
            res.statusCode = page.type === 'not-found' ? 404 : 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(req.method === 'HEAD' ? '' : await server.transformIndexHtml(pathname, document));
          } catch (error) { next(error as Error); }
        });
      },
    },
    // Required by the existing Figma Make project.
    react(),
    tailwindcss(),
  ],
  resolve: { alias: { 'figma:asset': path.resolve(__dirname, 'src/assets'), '@': path.resolve(__dirname, 'src') } },
  build: { manifest: true, rollupOptions: { input: path.resolve(__dirname, 'index.html') } },
  assetsInclude: ['**/*.svg', '**/*.csv'],
});
