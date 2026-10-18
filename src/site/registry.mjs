import { origin, products, services } from './catalog.mjs';

function page(path, type, name, title, description, extra = {}) {
  return { path, type, name, title, description, canonical: origin + path, image: origin + '/social-card.png', index: true, ...extra };
}

export const pages = [
  page('/', 'home', 'Home', 'Nexus Apps | Mobile, Web & MVP Development Studio', 'Independent app studio in Berlin. We build and operate our own iOS apps and develop mobile apps, web products and MVPs for founders and businesses.'),
  page('/services/', 'services', 'Services', 'App Development Services | Nexus Apps', 'Explore mobile app development, web application development and MVP services for startups and businesses. Discuss your project with Nexus Apps.'),
  ...services.map(service => page(`/services/${service.slug}/`, 'service', service.name, `${service.name} | Nexus Apps`, service.summary, { slug: service.slug, parent: '/services/' })),
  page('/apps/', 'apps', 'Our apps', 'Our Apps | Products Built by Nexus Apps', 'Explore six in-house Nexus Apps products, from photo editors and a vintage camera to wallpaper, audio and App Store keyword tools.'),
  ...products.map(product => page(`/apps/${product.slug}/`, 'product', product.name, `${product.name} | An App by Nexus Apps`, product.summary, { slug: product.slug, parent: '/apps/', image: `${origin}/images/apps/${product.slug}/screen-1.jpg` })),
  page('/process/', 'process', 'Our process', 'How We Build Apps | Nexus Apps', 'See how Nexus Apps approaches product discovery, scope, design, development, testing, launch and ongoing maintenance for mobile and web products.'),
  page('/about/', 'about', 'About us', 'About Nexus Apps | An Independent App Studio', 'Meet Nexus Apps, an independent studio in Berlin. We build and operate six iOS apps and offer mobile, web and MVP development for startups and businesses.'),
  page('/contact/', 'contact', 'Contact', 'Discuss Your App Project | Nexus Apps', 'Tell Nexus Apps about your mobile app, web product or MVP. Email hello@nexusapps.co with your idea, intended users, scope and timing.'),
  page('/app-policies/', 'policies', 'App policies', 'App Privacy Policies & Terms | Nexus Apps', 'Privacy policies and terms of use for all six Nexus Apps products, including Visual LabX, Photo CamAI, Wallpapers Neo and ASO Rocket.'),
  ...products.flatMap(product => ['privacy-policy', 'terms-of-use'].map(document => {
    const name = document === 'privacy-policy' ? 'Privacy Policy' : 'Terms of Use';
    // Preserve the exact canonical paths already used by the App Store and legal documents.
    return page(`/${product.slug}/${document}`, 'legal', `${product.legalName || product.name} ${name}`, `${product.legalName || product.name} ${name} | Nexus Apps`, `Read the ${name.toLowerCase()} for ${product.legalName || product.name}, a Nexus Apps product.`, { slug: product.slug, document, parent: '/app-policies/' });
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
