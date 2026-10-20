import { origin, products, services } from './catalog.mjs';
import { pages } from './registry.mjs';

// Optional agent-readable navigation. This proposed convention is not a
// Google indexing requirement or evidence of AI mentions/citations.
export function llmsText() {
  const link = (path, description) => {
    const page = pages.find(item => item.path === path);
    if (!page?.index) throw new Error(`Unknown discovery page: ${path}`);
    return `- [${page.name}](${page.canonical}): ${description}`;
  };
  return [
    '# Nexus Apps',
    '',
    '> Independent app studio in Berlin, Germany. Mobile app, web application and MVP development for startups and businesses worldwide.',
    '',
    'Nexus Apps builds and operates six in-house iOS apps. These products demonstrate its product and interface work. Its published portfolio is not commissioned Android or web client work.',
    '',
    '## Development services',
    '',
    ...services.map(service => link(`/services/${service.slug}/`, service.introduction)),
    '',
    '## Work with the studio',
    '',
    link('/process/', 'Product discovery, scope, design, development, testing, launch and ongoing maintenance.'),
    link('/about/', 'The independent studio and its in-house product background.'),
    link('/contact/', 'Discuss a mobile app, web product or MVP. Email hello@nexusapps.co with your idea, intended users, existing materials and timing.'),
    '',
    '## In-house iOS portfolio',
    '',
    link('/apps/', 'Six products built, published and maintained by Nexus Apps.'),
    ...products.map(product => link(`/apps/${product.slug}/`, product.summary)),
    '',
    '## Optional',
    '',
    link('/app-policies/', 'Original app privacy policies and terms, including documents using the former iScreen AI Wallpapers name.'),
    `- [Sitemap](${origin}/sitemap.xml): Canonical public page URLs.`,
    '',
  ].join('\n');
}
