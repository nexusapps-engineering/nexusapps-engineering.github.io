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
    '> App development company in Berlin. Nexus Apps builds and maintains iOS, Android and web applications for businesses and founders.',
    '',
    'Nexus Apps builds and operates six in-house iOS apps.',
    '',
    '## Development services',
    '',
    ...services.map(service => link(`/services/${service.slug}/`, service.introduction)),
    link('/de/app-entwicklung-berlin/', 'German-language overview of app development in Berlin. Project communication is in English.'),
    link('/nl/app-laten-maken/', 'Dutch-language overview for companies in the Netherlands. The studio is based in Berlin; project communication is in English.'),
    '',
    '## Work with the studio',
    '',
    link('/process/', 'Product discovery, scope, design, development, testing, launch and ongoing maintenance.'),
    link('/about/', 'The company, its development approach and in-house product background.'),
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
