import type { ReactNode } from 'react';
import { products, services } from './catalog.mjs';
import { pages } from './registry.mjs';
import { CopyEmail, EmailLink, Footer, NavBar, ProjectCTA } from './Layout';
import { ProcessList, ProductGrid, ServiceList } from './Sections';

type Page = (typeof pages)[number];

function Breadcrumbs({ page }: { page: Page }) {
  const parent = pages.find(item => item.path === page.parent);
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span>{parent && <><a href={parent.path}>{parent.name}</a><span aria-hidden="true">/</span></>}<span aria-current="page">{page.name}</span></nav>;
}

function PageIntro({ page, eyebrow, title, children }: { page: Page; eyebrow?: string; title: string; children?: ReactNode }) {
  return <header className="page-intro nexus-container"><Breadcrumbs page={page} /><p className="eyebrow">{eyebrow || 'Nexus Apps'}</p><h1>{title}</h1>{children}</header>;
}

function PageContent({ page }: { page: Page }) {
  if (page.type === 'services') return <>
    <PageIntro page={page} eyebrow="Development services" title="From a clear idea to a working product."><p>Mobile apps, web products and focused first releases. We bring design and development together around what your business needs.</p></PageIntro>
    <section className="nexus-container section-pad"><h2 className="section-title">What we can build together</h2><ServiceList /></section>
    <section className="light-section"><div className="nexus-container split-section"><h2>Start where<br />you are.</h2><div><h3>A new product</h3><p>Define the first release and turn an idea into a product people can use.</p><h3>A business workflow</h3><p>Plan a customer app, web portal or internal tool around a real operational need.</p><h3>An existing app</h3><p>Discuss a technical review, a new release or a continuing product development engagement.</p></div></div></section>
    <ProjectCTA />
  </>;

  if (page.type === 'service') {
    const service = services.find(item => item.slug === page.slug)!;
    const related = products.filter(product => product.services.includes(service.slug)).slice(0, 3);
    return <>
      <PageIntro page={page} eyebrow="Nexus development services" title={service.name}><p>{service.introduction}</p><EmailLink service={service.name} position="service-hero" /></PageIntro>
      <section className="nexus-container section-pad scope-section"><div><p className="eyebrow">Who it is for</p><h2 className="section-title">Built around<br />your next step.</h2><p className="section-copy">{service.audience}</p></div><div className="deliverable-list">{service.deliverables.map(([name, description]) => <div key={name}><h3>{name}</h3><p>{description}</p></div>)}</div></section>
      <section className="light-section"><div className="nexus-container split-section"><h2>A clear scope.<br />A shared plan.</h2><div><p>We start with your problem, users and constraints. Together we agree on deliverables, a release plan and how the work will be reviewed.</p><p>Features, integrations and platform requirements shape the cost and timing. We discuss those before committing to a build.</p><a href="/process/" className="text-link">See our development process <span aria-hidden="true">↗</span></a></div></div></section>
      {related.length > 0 && <section className="nexus-container section-pad"><p className="eyebrow">Built and operated by Nexus</p><h2 className="section-title">Our own product work</h2><p className="section-copy">{service.evidence}</p><ProductGrid slugs={related.map(product => product.slug)} /></section>}
      {related.length === 0 && <section className="nexus-container section-pad"><h2 className="section-title">Our product background</h2><p className="section-copy">{service.evidence}</p><a className="text-link" href="/apps/">Explore our in-house apps <span aria-hidden="true">↗</span></a></section>}
      <section className="nexus-container section-pad"><p className="eyebrow">Before we start</p><h2 className="section-title">A few useful answers</h2><dl className="question-list">{service.questions.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}</dl></section>
      <section className="nexus-container related-services"><h2>Explore other services</h2>{services.filter(item => item.slug !== service.slug).map(item => <a className="text-link" key={item.slug} href={`/services/${item.slug}/`}>{item.name} <span aria-hidden="true">↗</span></a>)}</section>
      <ProjectCTA service={service.name} />
    </>;
  }

  if (page.type === 'apps') return <>
    <PageIntro page={page} eyebrow="Our in-house products" title="We build products. And keep building them."><p>Six published apps, each with a focused purpose. These are products we build and operate ourselves, giving us experience beyond the first release.</p></PageIntro>
    <section className="nexus-container section-pad"><h2 className="visually-hidden">Explore our six apps</h2><ProductGrid /></section>
    <section className="light-section"><div className="nexus-container split-section"><h2>Experience<br />you can explore.</h2><div><p>Our current public portfolio consists of iOS apps, from creative tools to developer utilities. Each product page links to its live App Store listing.</p><p>That work informs how we approach product scope, interface design, release preparation and ongoing improvements.</p><a className="text-link" href="/services/">Explore our development services <span aria-hidden="true">↗</span></a></div></div></section><ProjectCTA />
  </>;

  if (page.type === 'product') {
    const product = products.find(item => item.slug === page.slug)!;
    return <>
      <header className="page-intro product-intro nexus-container"><Breadcrumbs page={page} /><div className="product-heading"><img src={`/images/apps/${product.slug}/icon.jpg`} width="96" height="96" alt="" /><div><p className="eyebrow">{product.category} · A Nexus product</p><h1>{product.name}</h1></div></div><p>{product.description}</p><a className="nexus-button" href={product.appStoreUrl} target="_blank" rel="noopener noreferrer">View on the App Store <span aria-hidden="true">↗</span></a></header>
      <section className="nexus-container product-detail"><div><h2 className="section-title">A focused<br />experience.</h2><ul className="feature-list">{product.features.map(feature => <li key={feature}>{feature}</li>)}</ul><p className="section-copy">{product.focus}</p><p className="muted">An in-house Nexus Apps product. Available on the Apple App Store.</p></div><div className="product-screens" aria-label={`${product.name} App Store screenshots`}>{[1, 2].map(number => <img key={number} src={`/images/apps/${product.slug}/screen-${number}.jpg`} alt={`${product.name} — App Store preview ${number}`} width="600" height="1300" loading="lazy" decoding="async" />)}</div></section>
      <section className="nexus-container section-pad product-links"><div><p className="eyebrow">Build something of your own</p><h2 className="section-title">An idea for your business?</h2><p className="section-copy">Explore how we can help scope, design and develop your product.</p>{product.services.map(slug => <a className="text-link" href={`/services/${slug}/`} key={slug}>{services.find(service => service.slug === slug)!.name} <span aria-hidden="true">↗</span></a>)}</div><div><h2>App documents</h2>{product.legalName && <p className="muted">The existing legal documents use the name {product.legalName}.</p>}<a href={`/${product.slug}/privacy-policy`}>Privacy policy</a><a href={`/${product.slug}/terms-of-use`}>Terms of use</a><a href="/apps/">All Nexus apps</a></div></section>
      <ProjectCTA product={product.name} />
    </>;
  }

  if (page.type === 'process') return <>
    <PageIntro page={page} eyebrow="How we work" title="A shared plan. From the first conversation."><p>Good product work starts with a clear problem and an agreed scope. Here is how we approach mobile apps, web products and MVPs.</p></PageIntro>
    <section className="nexus-container section-pad"><h2 className="visually-hidden">Our development process</h2><ProcessList /></section>
    <section className="light-section"><div className="nexus-container split-section"><h2>Clarity before<br />commitment.</h2><div><p>We discuss the scope, deliverables, responsibilities and dependencies before development begins. Timelines and estimates depend on that conversation.</p><p>After launch, maintenance and further product development can be arranged as a separate, clearly defined engagement.</p><a className="text-link" href="/services/">Find the right service <span aria-hidden="true">↗</span></a></div></div></section><ProjectCTA />
  </>;

  if (page.type === 'about') return <>
    <PageIntro page={page} eyebrow="About the studio" title="We make products. And help you make yours."><p>Nexus Apps is an independent app studio in Berlin, Germany. We build and operate our own apps and offer mobile, web and MVP development for startups and businesses worldwide.</p></PageIntro>
    <section className="light-section"><div className="nexus-container split-section"><h2>Product thinking.<br />Practical execution.</h2><div><p>Our own portfolio includes photo editing, a vintage camera, wallpaper personalization, audio utilities and an App Store keyword tool. Each product starts with a specific user need.</p><p>We bring that perspective to commissioned work: define the problem, keep the first release focused and plan for what comes after launch.</p><p>Our current public examples are in-house iOS products. We keep that distinction clear when discussing mobile, Android and web services.</p></div></div></section>
    <section className="nexus-container section-pad"><h2 className="section-title">Get to know our work</h2><ServiceList /><div className="inline-links"><a className="text-link" href="/apps/">Explore our apps <span aria-hidden="true">↗</span></a><a className="text-link" href="/process/">See how we work <span aria-hidden="true">↗</span></a><a className="text-link" href="https://github.com/nexusapps-engineering" target="_blank" rel="noopener noreferrer">Nexus on GitHub <span aria-hidden="true">↗</span></a></div></section><ProjectCTA />
  </>;

  if (page.type === 'contact') return <>
    <PageIntro page={page} eyebrow="Start a conversation" title="Tell us what you have in mind."><p>A new app, a web product, an MVP or the next version of something you already run. Email us with a little context and we can discuss the next step.</p><EmailLink position="contact-hero" /></PageIntro>
    <section className="nexus-container contact-detail"><div><p className="eyebrow">Direct to the studio</p><CopyEmail /><p className="section-copy">The project link opens your email app with a short brief. You can also copy the address and write to us from any email service.</p><p className="muted">No finished specification needed. Share what you know and the questions you want to work through.</p></div><div><h2>Helpful things to include</h2><ol className="brief-list"><li>Your company or website</li><li>The problem and who the product is for</li><li>Mobile, web or a platform you are still deciding on</li><li>What already exists: an idea, designs or a live product</li><li>Your timing, priorities and any constraints</li></ol><p className="muted">Please keep the first email to a project overview. We can discuss how to share private project materials separately.</p></div></section>
    <section className="nexus-container section-pad"><h2 className="section-title">Still shaping the idea?</h2><a className="text-link" href="/services/">Explore development services <span aria-hidden="true">↗</span></a><a className="text-link" href="/process/">Read about our process <span aria-hidden="true">↗</span></a></section>
  </>;

  if (page.type === 'policies') return <>
    <PageIntro page={page} eyebrow="Product information" title="App privacy policies and terms."><p>Find the existing legal documents for each Nexus Apps product. These documents apply to the individual apps.</p></PageIntro>
    <section className="nexus-container section-pad policy-list"><h2 className="visually-hidden">Documents by app</h2>{products.map(product => <article key={product.slug}><h2>{product.name}</h2>{product.legalName && <p className="muted">Listed in the documents as {product.legalName}.</p>}<a href={`/${product.slug}/privacy-policy`}>Privacy policy</a><a href={`/${product.slug}/terms-of-use`}>Terms of use</a></article>)}</section>
  </>;

  return <PageIntro page={page} eyebrow="404 · Page not found" title="Let’s find your next step."><p>This address does not point to a page on Nexus Apps.</p><div className="inline-links"><a className="nexus-button" href="/">Back to home</a><a className="text-link" href="/services/">Explore our services <span aria-hidden="true">↗</span></a></div></PageIntro>;
}

export default function StudioPage({ page }: { page: Page }) {
  return <div className="studio-site"><NavBar path={page.path} /><main id="main-content"><PageContent page={page} /></main><Footer /></div>;
}
