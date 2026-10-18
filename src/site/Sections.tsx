import { products, services, processSteps } from './catalog.mjs';

export function ServiceList() {
  return <div className="service-list">{services.map(service => <a className="service-row" data-motion-item href={`/services/${service.slug}/`} key={service.slug}><span className="row-number">{service.number}</span><div><h3>{service.shortName}</h3><p>{service.summary}</p></div><span aria-hidden="true" className="row-arrow">↗</span></a>)}</div>;
}

export function ProductGrid({ slugs }: { slugs?: string[] }) {
  const selected = slugs ? products.filter(product => slugs.includes(product.slug)) : products;
  return <div className="app-grid">{selected.map(product => <article className="app-card" data-motion-item style={{ '--app-color': product.color } as React.CSSProperties} key={product.slug}>
    <a href={`/apps/${product.slug}/`} className="app-card-link"><div className="app-card-visual"><img src={`/images/apps/${product.slug}/icon.jpg`} width="512" height="512" alt="" loading="lazy" decoding="async" /></div><div className="app-card-body"><p className="eyebrow">{product.category}</p><h3>{product.name}<span aria-hidden="true">↗</span></h3><p>{product.summary}</p><span className="app-card-label">Explore the app</span></div></a>
  </article>)}</div>;
}

export function ProcessList({ short = false }: { short?: boolean }) {
  return <ol className="process-list">{(short ? processSteps.slice(0, 3) : processSteps).map(([name, description], index) => <li key={name} data-motion-item><span className="row-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{name}</h3><p>{description}</p></div></li>)}</ol>;
}
