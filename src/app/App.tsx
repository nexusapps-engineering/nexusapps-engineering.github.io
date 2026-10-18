import { NavBar, Footer, EmailLink, ProjectCTA } from "../site/Layout";
import { ProductGrid, ServiceList } from "../site/Sections";
import { SiteMotion } from "../site/SiteMotion";
import svgPaths from "../imports/svg-05d7k6z6uy";
import imgFrame1772Mobile from "../assets/e7b8fc2544e01dc38d6c7b04ee1e03a60d51e674-768.jpg";
import imgFrame1772Desktop from "../assets/e7b8fc2544e01dc38d6c7b04ee1e03a60d51e674-1440.jpg";
import imgRectangle14 from "figma:asset/0eaf6b18afc8ea2089605ce1beccba41d827a2fa.png";
import imgRectangle10 from "figma:asset/046a4d0c1f5a6a4333bb999c1e1e140ae80455a1.png";
import imgRectangle11 from "figma:asset/21460b7bbd131b9ccf178a2be17130610c4cc6d7.png";
import imgRectangle12 from "figma:asset/ca514f7d38c7b0b15576b739a8ff3276239581f5.png";

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero-content" data-motion-group>
        <h1 className="home-headline"><span data-motion-line>We build our own apps.</span><span data-motion-line>Let’s build yours.</span></h1>
        <p className="home-intro">An independent studio in Berlin, building mobile apps, web products and MVPs for founders and businesses.</p>
        <div className="home-actions"><EmailLink position="home-hero" /><a href="/apps/" className="hero-work-link">Explore our apps</a></div>
      </div>
      <div className="home-hero-art" aria-hidden="true">
        <img
          alt=""
          src={imgFrame1772Desktop}
          srcSet={`${imgFrame1772Mobile} 768w, ${imgFrame1772Desktop} 1440w`}
          sizes="100vw"
          width={1440}
          height={1148}
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

function ServicesSection() {
  return <section id="services" className="nexus-container section-pad home-services">
    <div data-motion-group><p className="eyebrow">Build with Nexus</p>
    <h2 className="section-title">Mobile apps, web products<br />and your first release.</h2>
    <p className="section-copy">Launch a new product, build a tool for your team or improve an existing app. We help you define the scope and develop it.</p></div>
    <ServiceList />
  </section>;
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section id="about" className="home-about light-section">
      <div className="nexus-container section-pad">
        <div className="home-about-copy" data-motion-group>
          <p className="eyebrow">An independent app studio</p>
          <h2>We build, release<br />and keep improving.</h2>
          <p>Running our own apps means working on the details long after launch. We bring that experience to your product, from its first screens to its next release.</p>
          <a href="/about/" className="text-link">Get to know Nexus <span aria-hidden="true">↗</span></a>
        </div>
        {/* NEXUS small logo */}
        <div className="home-about-mark" aria-hidden="true">
          <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 96.4111 14">
            <path d={svgPaths.p197e4900} fill="black" />
            <path d={svgPaths.p251bb000} fill="black" />
            <path d={svgPaths.p1f3ffa80} fill="black" />
            <path d={svgPaths.p21f96300} fill="black" />
            <path d={svgPaths.p28171b00} fill="black" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return <section id="products" className="bg-black"><div className="nexus-container section-pad">
    <div data-motion-group><p className="eyebrow">Built and operated by Nexus</p>
    <div className="section-heading-row"><h2 className="section-title">Apps we build and operate.</h2><a href="/apps/" className="text-link">Explore all apps <span aria-hidden="true">↗</span></a></div>
    <p className="section-copy">Photo editors, a vintage camera, wallpapers, audio tools and App Store keyword research. Explore the iOS apps we build and operate.</p></div>
    <ProductGrid />
  </div></section>;
}

/* ─── Strategy Section (white) ─── */
function StrategySection() {
  return (
    <section id="tech" className="light-section">
      <div className="nexus-container section-pad home-strategy">
        <div className="home-strategy-copy" data-motion-group>
          <p className="eyebrow">Design and development</p>
          <h2>From the first decision<br />to the next release.</h2>
          <p>We agree on what to build, work through the screens and develop the product with you. Integrations and AI features follow the needs of the people using it.</p>
        </div>
        {/* Hero image */}
        <div data-motion-parallax className="strategy-art">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgRectangle14}
            width={2632}
            height={1298}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="inline-links"><a className="text-link" href="/process/">How we work <span aria-hidden="true">↗</span></a><a className="text-link" href="/services/">Explore our services <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}

/* ─── Core Systems Card ─── */
function CoreSystemCard({
  image,
  label,
  description,
}: {
  image: string;
  label: string;
  description: string;
}) {
  return (
    <div data-motion-item className="principle-card">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        src={image}
        width={418}
        height={720}
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(167,224,255,0.05)] inset-0 pointer-events-none rounded-[24px] md:rounded-[40px]"
      />
      <div className="principle-caption">
        <h3>{label}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

/* ─── Core Systems Section ─── */
function CoreSystemsSection() {
  return (
    <section
      className="home-principles"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1440 1211\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(-1.8167e-14 79.852 -94.952 4.8895e-15 720 412.48)\"><stop stop-color=\"rgba(1,15,42,1)\" offset=\"0\"/><stop stop-color=\"rgba(0,8,21,1)\" offset=\"0.5\"/><stop stop-color=\"rgba(0,4,10,1)\" offset=\"0.75\"/><stop stop-color=\"rgba(0,0,0,1)\" offset=\"1\"/></radialGradient></defs></svg>')",
        backgroundSize: "cover",
      }}
    >
      <div className="nexus-container section-pad">
        <h2 className="section-title">
          The work behind each release.
        </h2>
        <div className="principle-grid">
          <CoreSystemCard image={imgRectangle10} label="Product planning" description="Agree on the problem, the users and what belongs in the first release." />
          <CoreSystemCard image={imgRectangle11} label="Design and development" description="Work through the screens and build the features around how people use them." />
          <CoreSystemCard image={imgRectangle12} label="Testing and iteration" description="Test the key tasks, prepare for launch and plan the next improvements." />
        </div>
      </div>
    </section>
  );
}

/* ─── Main App ─── */
export default function App() {
  return (
    <div className="studio-site w-full min-h-screen bg-black">
      <SiteMotion />
      <NavBar />
      <main id="main-content" tabIndex={-1} className="flex flex-col w-full">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProductsSection />
        <StrategySection />
        <CoreSystemsSection />
        <ProjectCTA />
      </main>
      <Footer />
    </div>
  );
}
