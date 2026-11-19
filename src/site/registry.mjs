import { origin, products, services } from './catalog.mjs';

function page(path, type, name, title, description, extra = {}) {
  return { path, type, name, title, description, canonical: origin + path, image: origin + '/social-card.png', index: true, ...extra };
}

// Policy documents may be needed before an app is available on the App Store.
export const policyApps = [...products, { slug: 'clearx', name: 'ClearX' }];

export const pages = [
  page('/', 'home', 'Home', 'Nexus Apps | Digital Product Studio in Berlin', 'Nexus Apps is a Berlin digital product studio developing for iOS, Android and the web. Explore the creative tools and utilities we design, publish and operate.'),
  page('/services/', 'services', 'Services', 'Mobile, Web & MVP Development Services | Nexus Apps', 'Explore mobile app, web application and MVP development for companies and founders, from product discovery through launch and ongoing support.'),
  ...services.map(service => page(`/services/${service.slug}/`, 'service', service.name, service.searchTitle, service.summary, { slug: service.slug, parent: '/services/' })),
  page('/de/app-entwicklung-berlin/', 'berlin', 'App-Entwicklung Berlin', 'App-Entwicklung in Berlin | Nexus Apps', 'Nexus Apps ist ein Berliner Produktstudio für iOS, Android und das Web. Entdecken Sie unsere Produkte und erfahren Sie, wie wir mit Unternehmen zusammenarbeiten.', { language: 'de', parent: '/services/' }),
  page('/nl/app-laten-maken/', 'netherlands', 'App laten maken', 'App laten maken voor uw bedrijf | Nexus Apps', 'Maak kennis met Nexus Apps, een Berlijnse productstudio voor iOS, Android en het web. Ontdek onze eigen producten en de mogelijkheden voor samenwerking.', { language: 'nl', parent: '/services/' }),
  page('/apps/', 'apps', 'Products', 'Product Portfolio | Nexus Apps', 'Explore creative tools, audio utilities and developer software published by Nexus Apps. Find features, screenshots, support and App Store links for each product.'),
  ...products.map(product => page(`/apps/${product.slug}/`, 'product', product.name, product.searchTitle, product.summary, { slug: product.slug, parent: '/apps/', image: `${origin}/images/apps/${product.slug}/screen-1.jpg` })),
  page('/process/', 'process', 'Our process', 'Our Product Development Process | Nexus Apps', 'See how Nexus Apps approaches product discovery, scope, design, development, testing, launch and ongoing maintenance for mobile and web products.'),
  page('/about/', 'about', 'About us', 'About Nexus Apps | The Product Studio', 'Meet the Berlin studio behind Retro Cam Neo, Visual LabX and ASO Rocket. Learn how Nexus Apps designs, publishes and maintains its own digital products.'),
  page('/contact/', 'contact', 'Contact', 'Contact Nexus Apps | Product Support & Studio Inquiries', 'Get support for a Nexus Apps product, share feedback or contact the Berlin studio about a business inquiry. Email hello@nexusapps.co.'),
  page('/app-policies/', 'policies', 'App policies', 'App Privacy Policies & Terms | Nexus Apps', 'Privacy policies and terms of use for Nexus Apps products, including Visual LabX, Photo CamAI, ClearX and ASO Rocket.'),
  ...policyApps.flatMap(product => ['privacy-policy', 'terms-of-use'].map(document => {
    const name = document === 'privacy-policy' ? 'Privacy Policy' : 'Terms of Use';
    // GitHub Pages redirects the legacy slashless URL to this directory URL.
    return page(`/${product.slug}/${document}`, 'legal', `${product.legalName || product.name} ${name}`, `${product.legalName || product.name} ${name} | Nexus Apps`, `Read the ${name.toLowerCase()} for ${product.legalName || product.name}, a Nexus Apps product.`, { slug: product.slug, document, parent: '/app-policies/', canonical: `${origin}/${product.slug}/${document}/` });
  })),
  page('/404.html', 'not-found', 'Page not found', 'Page Not Found | Nexus Apps', 'This page could not be found. Explore the Nexus Apps product portfolio or return to the studio homepage.', { index: false }),
];

export function findPage(pathname) {
  const clean = pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/';
  return pages.find(item => (item.path.replace(/\/+$/, '') || '/') === clean) || pages.find(item => item.type === 'not-found');
}

export function outputFile(page) {
  return page.path === '/404.html' ? '404.html' : `${page.path.replace(/^\//, '').replace(/\/?$/, '/')}index.html`.replace(/^\//, '');
}
