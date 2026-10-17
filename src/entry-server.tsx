import { renderToString } from 'react-dom/server';
import { loadRoute } from './site/route-loader';
export { pages, outputFile } from './site/registry.mjs';
export { documentHtml, sitemap, sitemapIndex, robots } from './site/seo.mjs';

export async function render(pathname: string) {
  const { page, Component, props } = await loadRoute(pathname);
  return { page, html: renderToString(<Component {...props} />) };
}
