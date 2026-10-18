import type { ReactNode } from 'react';
import { useState } from 'react';
import svgPaths from '../imports/svg-05d7k6z6uy';
import { email, products, projectEmail } from './catalog.mjs';

export function BrandMark({ large = false }: { large?: boolean }) {
  const paths = large
    ? [svgPaths.p3ba2bf00, svgPaths.p3182d900, svgPaths.p34dd8320, svgPaths.pe5e0100, svgPaths.p368ad00]
    : [svgPaths.p365fc180, svgPaths.p2134c700, svgPaths.p3d9ed500, svgPaths.p336d400, svgPaths.p27eb8580];
  return <svg aria-hidden="true" viewBox={large ? '0 0 1344 200.431' : '0 0 132.95 19.5963'} fill="currentColor">{paths.map((d, i) => <path key={i} d={d} />)}</svg>;
}

export function EmailLink({ children = 'Discuss your project', service = 'App development', product = '', position = 'content', className = 'nexus-button' }: {
  children?: ReactNode; service?: string; product?: string; position?: string; className?: string;
}) {
  return <a href={projectEmail(service, product)} className={className} data-project-email="true" data-service={service} data-position={position}>{children}</a>;
}

const navLinks = [
  ['/services/', 'Services'], ['/apps/', 'Our apps'], ['/about/', 'The studio'], ['/contact/', 'Contact'],
];

export function NavBar({ path = '/' }: { path?: string }) {
  function active(href: string) { return path.startsWith(href); }
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="nexus-header">
      <nav className="nexus-nav" aria-label="Main navigation">
        <a className="nexus-logo" href="/" aria-label="Nexus Apps home"><BrandMark /></a>
        <div className="desktop-nav">{navLinks.map(([href, label]) => <a key={href} href={href} aria-current={active(href) ? 'page' : undefined}>{label}</a>)}</div>
        <details className="mobile-nav" onKeyDown={event => {
          if (event.key === 'Escape') {
            event.currentTarget.open = false;
            event.currentTarget.querySelector('summary')?.focus();
          }
        }}>
          <summary aria-label="Navigation menu"><span aria-hidden="true" /><span aria-hidden="true" /></summary>
          <div className="mobile-nav-panel">{navLinks.map(([href, label]) => <a key={href} href={href} aria-current={active(href) ? 'page' : undefined}>{label}</a>)}<EmailLink position="mobile-menu" className="mobile-email">{email}</EmailLink></div>
        </details>
      </nav>
    </header>
  </>;
}

export function Footer() {
  return <footer className="nexus-footer">
    <div className="nexus-container footer-top">
      <div><p className="eyebrow">An independent app studio</p><p className="footer-statement">Our own products.<br />Your next idea.</p><p className="muted">Berlin, Germany · Working globally</p></div>
      <div><h2>Explore Nexus</h2><a href="/services/">Development services</a><a href="/apps/">Our apps</a><a href="/process/">How we work</a><a href="/about/">About us</a><a href="/contact/">Contact</a></div>
      <div><h2>Our apps</h2>{products.map(product => <a key={product.slug} href={`/apps/${product.slug}/`}>{product.name}</a>)}</div>
      <div><h2>Start a conversation</h2><EmailLink position="footer" className="footer-email">{email}</EmailLink><a href="/app-policies/">App privacy policies & terms</a><p className="footer-note">Share your idea and where you are starting.</p></div>
    </div>
    <div className="nexus-container footer-wordmark"><BrandMark large /><span>Think further.</span></div>
  </footer>;
}

export function CopyEmail() {
  const [status, setStatus] = useState('Copy email address');
  return <div className="copy-email"><span>{email}</span><button type="button" onClick={async () => {
    try { await navigator.clipboard.writeText(email); setStatus('Email address copied'); }
    catch { setStatus('Select and copy the address above'); }
  }}>Copy address</button><span role="status" className="copy-status">{status}</span></div>;
}

export function ProjectCTA({ service = 'App development', product = '' }: { service?: string; product?: string }) {
  return <section className="project-cta" id="contact"><div className="nexus-container" data-motion-group><p className="eyebrow">Build with Nexus</p><h2>What would you<br />like to build?</h2><p>Tell us about your idea, who it is for and what you have so far. We’ll discuss the scope and next steps with you.</p><EmailLink service={service} product={product} position="bottom-cta" /><a className="text-link" href="/contact/">What to include in your email <span aria-hidden="true">↗</span></a></div></section>;
}
