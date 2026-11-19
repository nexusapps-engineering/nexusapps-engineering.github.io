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
    '> Nexus Apps is a Berlin digital product studio. We develop for iOS, Android and the web and publish and operate our own products.',
    '',
    '## Product portfolio',
    '',
    link('/apps/', 'Photography, personalization, audio utilities and developer tools published by Nexus Apps.'),
    ...products.map(product => link(`/apps/${product.slug}/`, product.summary)),
    '',
    '## Development services',
    '',
    ...services.map(service => link(`/services/${service.slug}/`, service.introduction)),
    link('/de/app-entwicklung-berlin/', 'German-language overview of app development in Berlin. Project communication is in English.'),
    link('/nl/app-laten-maken/', 'Dutch-language overview for companies in the Netherlands. The studio is based in Berlin; project communication is in English.'),
    '',
    '## About the studio',
    '',
    link('/process/', 'Product discovery, scope, design, development, testing, launch and ongoing maintenance.'),
    link('/about/', 'The studio behind the portfolio and its approach to product ownership.'),
    link('/contact/', 'Product support, feedback and business inquiries. Contact hello@nexusapps.co.'),
    '',
    '## Optional',
    '',
    link('/app-policies/', 'Original app privacy policies and terms, including documents using the former iScreen AI Wallpapers name.'),
    `- [Sitemap](${origin}/sitemap.xml): Canonical public page URLs.`,
    '',
  ].join('\n');
}
