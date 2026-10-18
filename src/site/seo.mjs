import { origin, products, services } from './catalog.mjs';
import { pages } from './registry.mjs';

const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function structuredData(page) {
  if (!page.index) return null;
  const organization = { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Nexus Apps', url: origin + '/', email: 'hello@nexusapps.co', logo: origin + '/nexus-mark.png', sameAs: ['https://github.com/nexusapps-engineering'], address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressCountry: 'DE' } };
  const graph = [organization, { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'Nexus Apps', url: origin + '/', publisher: { '@id': organization['@id'] } }];
  if (page.path !== '/') {
    const parent = pages.find(item => item.path === page.parent);
    const crumbs = [{ name: 'Home', item: origin + '/' }];
    if (parent) crumbs.push({ name: parent.name, item: parent.canonical });
    crumbs.push({ name: page.name, item: page.canonical });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })) });
  }
  if (page.type === 'service') {
    const service = services.find(item => item.slug === page.slug);
    graph.push({ '@type': 'Service', '@id': `${page.canonical}#service`, name: service.name, serviceType: service.name, description: service.summary, url: page.canonical, provider: { '@id': organization['@id'] }, areaServed: 'Worldwide' });
  }
  if (page.type === 'product') {
    const product = products.find(item => item.slug === page.slug);
    const categories = { visuallabx: 'MultimediaApplication', photocamai: 'MultimediaApplication', wallpapers: 'LifestyleApplication', retrocamneo: 'MultimediaApplication', clearwave: 'UtilitiesApplication', asorocket: 'DeveloperApplication' };
    graph.push({ '@type': 'SoftwareApplication', '@id': `${page.canonical}#app`, name: product.name, description: product.summary, operatingSystem: 'iOS', applicationCategory: categories[product.slug], url: page.canonical, downloadUrl: product.appStoreUrl, image: `${origin}/images/apps/${product.slug}/icon.jpg`, screenshot: [1, 2].map(number => `${origin}/images/apps/${product.slug}/screen-${number}.jpg`), publisher: { '@id': organization['@id'] } });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function renderHead(page, verification = {}) {
  const meta = (name, content, property = false) => `<meta ${property ? 'property' : 'name'}="${name}" content="${escape(content)}" />`;
  const schema = structuredData(page);
  return [
    `<title>${escape(page.title)}</title>`, meta('description', page.description), meta('robots', page.index ? 'index, follow' : 'noindex, follow'),
    `<link rel="canonical" href="${escape(page.canonical)}" />`,
    meta('og:type', 'website', true), meta('og:site_name', 'Nexus Apps', true), meta('og:locale', 'en_US', true),
    meta('og:title', page.title, true), meta('og:description', page.description, true), meta('og:url', page.canonical, true), meta('og:image', page.image, true), meta('og:image:alt', page.type === 'product' ? `${page.name} App Store preview` : 'Nexus Apps — Mobile and web apps, built from idea to launch.', true),
    meta('twitter:card', 'summary_large_image'), meta('twitter:title', page.title), meta('twitter:description', page.description), meta('twitter:image', page.image),
    verification.google ? meta('google-site-verification', verification.google) : '',
    meta('msvalidate.01', verification.bing || '09FDDD15EB5BBF24FECD5923F666DF8E'),
    schema ? `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>` : '',
  ].filter(Boolean).join('\n    ');
}

export function documentHtml(template, page, html, verification) {
  return template.replace('<!--page-head-->', renderHead(page, verification)).replace('<!--app-html-->', html);
}

export function sitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(page => page.index).map(page => `  <url><loc>${escape(page.canonical)}</loc></url>`).join('\n')}\n</urlset>\n`;
}

// Search Console already has this legacy index URL registered. Keep it working.
export function sitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${origin}/sitemap.xml</loc></sitemap>\n</sitemapindex>\n`;
}

export const robots = `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
