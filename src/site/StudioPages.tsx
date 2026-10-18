import type { ReactNode } from 'react';
import { products, services } from './catalog.mjs';
import { pages } from './registry.mjs';
import { CopyEmail, EmailLink, Footer, NavBar, ProjectCTA } from './Layout';
import { ProcessList, ProductGrid, ServiceList } from './Sections';
import { SiteMotion } from './SiteMotion';

type Page = (typeof pages)[number];

function Breadcrumbs({ page }: { page: Page }) {
  const parent = pages.find(item => item.path === page.parent);
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span>{parent && <><a href={parent.path}>{parent.name}</a><span aria-hidden="true">/</span></>}<span aria-current="page">{page.name}</span></nav>;
}

function PageIntro({ page, eyebrow, title, children }: { page: Page; eyebrow?: string; title: string; children?: ReactNode }) {
  return <header className="page-intro nexus-container" data-motion-group><Breadcrumbs page={page} /><p className="eyebrow">{eyebrow || 'Nexus Apps'}</p><h1>{title}</h1>{children}</header>;
}

function PageContent({ page }: { page: Page }) {
  if (page.type === 'services') return <>
    <PageIntro page={page} eyebrow="Development services" title="Design and development for your next product."><p>We build mobile apps, web products and MVPs for startups and businesses. Work with us on a new idea, an internal tool or your next app release.</p></PageIntro>
    <section className="nexus-container section-pad"><h2 className="section-title" data-motion-item>What we can build together</h2><ServiceList /></section>
    <section className="light-section"><div className="nexus-container split-section" data-motion-group><h2>Start where<br />you are.</h2><div><h3>A new product</h3><p>Define the first release and turn an idea into a product people can use.</p><h3>A business workflow</h3><p>Plan a customer app, web portal or internal tool around a real operational need.</p><h3>An existing app</h3><p>Review the code and design, plan a new release or arrange ongoing development.</p></div></div></section>
    <ProjectCTA />
  </>;

  if (page.type === 'service') {
    const service = services.find(item => item.slug === page.slug)!;
    const related = products.filter(product => product.services.includes(service.slug)).slice(0, 3);
    return <>
      <PageIntro page={page} eyebrow="Nexus development services" title={service.name}><p>{service.introduction}</p><EmailLink service={service.name} position="service-hero" /></PageIntro>
      <section className="nexus-container section-pad scope-section"><div><p className="eyebrow">Who it is for</p><h2 className="section-title" data-motion-item>Is this right<br />for your project?</h2><p className="section-copy">{service.audience}</p></div><div className="deliverable-list">{service.deliverables.map(([name, description]) => <div key={name} data-motion-item><h3>{name}</h3><p>{description}</p></div>)}</div></section>
      <section className="light-section"><div className="nexus-container split-section" data-motion-group><h2>Agree on the scope<br />before development.</h2><div><p>We start with your users and the problem to solve. Together we agree on the deliverables, release plan and review points.</p><p>Features, integrations and platform requirements shape the estimate. We discuss cost and timing before the build begins.</p><a href="/process/" className="text-link">See our development process <span aria-hidden="true">↗</span></a></div></div></section>
      {related.length > 0 && <section className="nexus-container section-pad"><p className="eyebrow">Built and operated by Nexus</p><h2 className="section-title" data-motion-item>Apps we build and operate</h2><p className="section-copy">{service.evidence}</p><ProductGrid slugs={related.map(product => product.slug)} /></section>}
      {related.length === 0 && <section className="nexus-container section-pad"><h2 className="section-title" data-motion-item>Our product background</h2><p className="section-copy">{service.evidence}</p><a className="text-link" href="/apps/">Explore our in-house apps <span aria-hidden="true">↗</span></a></section>}
      <section className="nexus-container section-pad"><p className="eyebrow">Before we start</p><h2 className="section-title" data-motion-item>Questions about the work</h2><dl className="question-list">{service.questions.map(([question, answer]) => <div key={question} data-motion-item><dt>{question}</dt><dd>{answer}</dd></div>)}</dl></section>
      <section className="nexus-container related-services"><h2>Explore other services</h2>{services.filter(item => item.slug !== service.slug).map(item => <a className="text-link" key={item.slug} href={`/services/${item.slug}/`}>{item.name} <span aria-hidden="true">↗</span></a>)}</section>
      <ProjectCTA service={service.name} />
    </>;
  }

  if (page.type === 'apps') return <>
    <PageIntro page={page} eyebrow="Our in-house products" title="Our apps, from first release to what’s next."><p>Explore six iOS apps we build and operate ourselves. Each one focuses on a specific task, from editing a photo to researching App Store keywords.</p></PageIntro>
    <section className="nexus-container section-pad"><h2 className="visually-hidden">Explore our six apps</h2><ProductGrid /></section>
    <section className="light-section"><div className="nexus-container split-section" data-motion-group><h2>Try the apps<br />for yourself.</h2><div><p>Each product page includes screenshots, features and a link to the App Store. These are our own iOS products.</p><p>The work behind them informs how we scope a release, design an interface and maintain a product after launch.</p><a className="text-link" href="/services/">Explore our development services <span aria-hidden="true">↗</span></a></div></div></section><ProjectCTA />
  </>;

  if (page.type === 'product') {
    const product = products.find(item => item.slug === page.slug)!;
    return <>
      <header className="page-intro product-intro nexus-container" data-motion-group><Breadcrumbs page={page} /><div className="product-heading"><img src={`/images/apps/${product.slug}/icon.jpg`} width="96" height="96" alt="" /><div><p className="eyebrow">{product.category}</p><h1>{product.name}</h1></div></div><p>{product.description}</p><a className="nexus-button" href={product.appStoreUrl} target="_blank" rel="noopener noreferrer">View on the App Store <span aria-hidden="true">↗</span></a></header>
      <section className="nexus-container product-detail"><div><h2 className="section-title" data-motion-item>What you can do</h2><ul className="feature-list">{product.features.map(feature => <li key={feature}>{feature}</li>)}</ul><p className="section-copy">{product.focus}</p><p className="muted">Built and operated by Nexus Apps. Available for iOS.</p></div><div className="product-screens" data-motion-group aria-label={`${product.name} App Store screenshots`}>{[1, 2].map(number => <img key={number} src={`/images/apps/${product.slug}/screen-${number}.jpg`} alt={`${product.name} — App Store preview ${number}`} width="600" height="1300" loading="lazy" decoding="async" />)}</div></section>
      <section className="nexus-container section-pad product-links"><div><p className="eyebrow">Build something of your own</p><h2 className="section-title" data-motion-item>Build a product with us.</h2><p className="section-copy">Have an app idea of your own? Explore our design and development services.</p>{product.services.map(slug => <a className="text-link" href={`/services/${slug}/`} key={slug}>{services.find(service => service.slug === slug)!.name} <span aria-hidden="true">↗</span></a>)}</div><div><h2>App documents</h2>{product.legalName && <p className="muted">These documents refer to {product.legalName}.</p>}<a href={`/${product.slug}/privacy-policy`}>Privacy policy</a><a href={`/${product.slug}/terms-of-use`}>Terms of use</a><a href="/apps/">All Nexus apps</a></div></section>
      <ProjectCTA product={product.name} />
    </>;
  }

  if (page.type === 'process') return <>
    <PageIntro page={page} eyebrow="How we work" title="How we take a product from idea to release."><p>We work with you on the scope, design and development, with agreed milestones and reviews along the way.</p></PageIntro>
    <section className="nexus-container section-pad"><h2 className="visually-hidden">Our development process</h2><ProcessList /></section>
    <section className="light-section"><div className="nexus-container split-section" data-motion-group><h2>Know what the<br />project includes.</h2><div><p>Before development begins, we agree on the deliverables, responsibilities and dependencies. Those decisions shape the estimate and release plan.</p><p>After launch, we can agree on a separate scope for maintenance and further development.</p><a className="text-link" href="/services/">Find the right service <span aria-hidden="true">↗</span></a></div></div></section><ProjectCTA />
  </>;

  if (page.type === 'about') return <>
    <PageIntro page={page} eyebrow="About the studio" title="An independent studio that builds its own apps."><p>Nexus Apps is an independent app studio in Berlin, Germany. We build and operate our own apps and offer mobile, web and MVP development for startups and businesses worldwide.</p></PageIntro>
    <section className="light-section"><div className="nexus-container split-section" data-motion-group><h2>Our own products<br />inform our work.</h2><div><p>Our six iOS apps span photo editing, a vintage camera, wallpapers, audio tools and App Store keyword research. We design, publish and maintain them ourselves.</p><p>That experience shapes the work we do with you. We define the problem, choose what belongs in the first release and plan for updates after launch.</p><p>Explore our own apps to see our product work, or talk to us about mobile, web and MVP development for your business.</p></div></div></section>
    <section className="nexus-container section-pad"><h2 className="section-title" data-motion-item>Work with the studio</h2><ServiceList /><div className="inline-links"><a className="text-link" href="/apps/">Explore our apps <span aria-hidden="true">↗</span></a><a className="text-link" href="/process/">See how we work <span aria-hidden="true">↗</span></a><a className="text-link" href="https://github.com/nexusapps-engineering" target="_blank" rel="noopener noreferrer">Nexus on GitHub <span aria-hidden="true">↗</span></a></div></section><ProjectCTA />
  </>;

  if (page.type === 'contact') return <>
    <PageIntro page={page} eyebrow="Start a conversation" title="Tell us what you have in mind."><p>Email us about your app, web product or MVP. Share what you want to build and where you are starting; we’ll discuss the next steps with you.</p><EmailLink position="contact-hero" /></PageIntro>
    <section className="nexus-container contact-detail"><div><p className="eyebrow">Direct to the studio</p><CopyEmail /><p className="section-copy">“Discuss your project” opens your email app with a few prompts to get you started. You can also copy the address and write from any email service.</p><p className="muted">An early idea is enough to start a conversation. Share what you know and the questions you want to work through.</p></div><div><h2>Helpful things to include</h2><ol className="brief-list"><li>Your company or website</li><li>The problem and who the product is for</li><li>Mobile, web or a platform you are still deciding on</li><li>What already exists: an idea, designs or a live product</li><li>Your timing, priorities and any constraints</li></ol><p className="muted">Please keep the first email to a project overview. We can discuss how to share private project materials separately.</p></div></section>
    <section className="nexus-container section-pad"><h2 className="section-title" data-motion-item>Still shaping the idea?</h2><div className="inline-links"><a className="text-link" href="/services/">Explore development services <span aria-hidden="true">↗</span></a><a className="text-link" href="/process/">Read about our process <span aria-hidden="true">↗</span></a></div></section>
  </>;

  if (page.type === 'policies') return <>
    <PageIntro page={page} eyebrow="Product information" title="App privacy policies and terms."><p>Find the privacy policy and terms of use for each Nexus Apps product.</p></PageIntro>
    <section className="nexus-container section-pad policy-list"><h2 className="visually-hidden">Documents by app</h2>{products.map(product => <article key={product.slug}><h2>{product.name}</h2>{product.legalName && <p className="muted">Listed in the documents as {product.legalName}.</p>}<a href={`/${product.slug}/privacy-policy`}>Privacy policy</a><a href={`/${product.slug}/terms-of-use`}>Terms of use</a></article>)}</section>
  </>;

  return <PageIntro page={page} eyebrow="404 · Page not found" title="Let’s find your next step."><p>This address does not point to a page on Nexus Apps.</p><div className="inline-links"><a className="nexus-button" href="/">Back to home</a><a className="text-link" href="/services/">Explore our services <span aria-hidden="true">↗</span></a></div></PageIntro>;
}

export default function StudioPage({ page }: { page: Page }) {
  return <div className="studio-site">{!['policies', 'not-found'].includes(page.type) && <SiteMotion />}<NavBar path={page.path} /><main id="main-content" tabIndex={-1}><PageContent page={page} /></main><Footer /></div>;
}
