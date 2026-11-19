import { origin, products, services } from './catalog.mjs';

function page(path, type, name, title, description, extra = {}) {
  return { path, type, name, title, description, canonical: origin + path, image: origin + '/social-card.png', index: true, ...extra };
}

// Policy documents may be needed before an app is available on the App Store.
export const policyApps = [...products, { slug: 'clearx', name: 'ClearX' }];

export const pages = [
  page('/', 'home', 'Home', 'Nexus Apps | Mobile & Web App Development in Berlin', 'Nexus Apps designs, builds and maintains iOS, Android and web applications for businesses and founders. Based in Berlin, working with clients worldwide.'),
  page('/services/', 'services', 'Services', 'Mobile, Web & MVP Development Services | Nexus Apps', 'Explore mobile app, web application and MVP development for companies and founders, from product discovery through launch and ongoing support.'),
  ...services.map(service => page(`/services/${service.slug}/`, 'service', service.name, service.searchTitle, service.summary, { slug: service.slug, parent: '/services/' })),
  page('/de/app-entwicklung-berlin/', 'berlin', 'App-Entwicklung Berlin', 'App-Entwicklung in Berlin | Nexus Apps', 'Nexus Apps entwickelt mobile Apps und digitale Produkte in Berlin. Lernen Sie unser Studio, unsere Arbeitsweise und eigene iOS-Apps kennen.', { language: 'de', parent: '/services/' }),
  page('/nl/app-laten-maken/', 'netherlands', 'App laten maken', 'App laten maken voor uw bedrijf | Nexus Apps', 'Een app laten ontwikkelen voor uw bedrijf? Nexus Apps is een studio in Berlijn en werkt samen met organisaties in Nederland. Communicatie in het Engels.', { language: 'nl', parent: '/services/' }),
  page('/apps/', 'apps', 'Our apps', 'iPhone Apps for Photos, Wallpapers & Utilities | Nexus Apps', 'Compare six iPhone apps by what you want to do. See screenshots, explore features and find each Nexus app on the App Store.'),
  ...products.map(product => page(`/apps/${product.slug}/`, 'product', product.name, product.searchTitle, product.summary, { slug: product.slug, parent: '/apps/', image: `${origin}/images/apps/${product.slug}/screen-1.jpg` })),
  page('/process/', 'process', 'Our process', 'How We Build Apps | Nexus Apps', 'See how Nexus Apps approaches product discovery, scope, design, development, testing, launch and ongoing maintenance for mobile and web products.'),
  page('/about/', 'about', 'About us', 'About Nexus Apps | Berlin App Development Company', 'Meet the Berlin company that develops iOS, Android and web applications for clients and publishes its own iPhone apps.'),
  page('/contact/', 'contact', 'Contact', 'Contact Nexus Apps | App Support & Project Inquiries', 'Get help with a Nexus iOS app or discuss a mobile or web development project. Contact the studio directly at hello@nexusapps.co.'),
  page('/app-policies/', 'policies', 'App policies', 'App Privacy Policies & Terms | Nexus Apps', 'Privacy policies and terms of use for Nexus Apps products, including Visual LabX, Photo CamAI, ClearX and ASO Rocket.'),
  ...policyApps.flatMap(product => ['privacy-policy', 'terms-of-use'].map(document => {
    const name = document === 'privacy-policy' ? 'Privacy Policy' : 'Terms of Use';
    // GitHub Pages redirects the legacy slashless URL to this directory URL.
    return page(`/${product.slug}/${document}`, 'legal', `${product.legalName || product.name} ${name}`, `${product.legalName || product.name} ${name} | Nexus Apps`, `Read the ${name.toLowerCase()} for ${product.legalName || product.name}, a Nexus Apps product.`, { slug: product.slug, document, parent: '/app-policies/', canonical: `${origin}/${product.slug}/${document}/` });
  })),
  page('/404.html', 'not-found', 'Page not found', 'Page Not Found | Nexus Apps', 'This page could not be found. Explore Nexus Apps services and products or contact us about your project.', { index: false }),
];

export function findPage(pathname) {
  const clean = pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/';
  return pages.find(item => (item.path.replace(/\/+$/, '') || '/') === clean) || pages.find(item => item.type === 'not-found');
}

export function outputFile(page) {
  return page.path === '/404.html' ? '404.html' : `${page.path.replace(/^\//, '').replace(/\/?$/, '/')}index.html`.replace(/^\//, '');
}
