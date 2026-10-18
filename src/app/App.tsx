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
        <p className="home-intro">Mobile apps, web products and MVPs.</p>
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
    <h2 className="section-title">Your next product,<br />built with a clear purpose.</h2>
    <p className="section-copy">For founders launching an idea, businesses creating a customer app, and teams that need a better way to work.</p></div>
    <ServiceList />
  </section>;
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section id="about" className="bg-white text-black w-full rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[120px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[62px] py-16 md:py-24 lg:py-[140px] flex flex-col gap-10 md:gap-[55px]">
        <div className="home-about-copy" data-motion-group>
          <p className="eyebrow">An independent app studio</p>
          <h2>We know what it means<br />to build something of your own.</h2>
          <p>Our own apps take us from the first product decision to launch and the work that follows. We bring that perspective to products we build with you.</p>
          <a href="/about/" className="text-link">Get to know Nexus <span aria-hidden="true">↗</span></a>
        </div>
        {/* NEXUS small logo */}
        <div className="w-[96px] h-[14px]">
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
    <div className="section-heading-row"><h2 className="section-title">Our own products.<br />Real product experience.</h2><a href="/apps/" className="text-link">Explore all apps <span aria-hidden="true">↗</span></a></div>
    <p className="section-copy">Six published iOS apps, from creative tools to developer utilities. Products we build, release and continue to improve ourselves.</p></div>
    <ProductGrid />
  </div></section>;
}

/* ─── Strategy Section (white) ─── */
function StrategySection() {
  return (
    <section id="tech" className="bg-white text-black w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-16 md:gap-20 lg:gap-[120px] px-6 md:px-10 lg:px-[62px] py-16 md:py-24 lg:py-[120px]">
        <div className="home-strategy-copy" data-motion-group>
          <p className="eyebrow">Design, engineering and product thinking</p>
          <h2>From the first decision<br />to the next release.</h2>
          <p>We define the scope, design the experience and develop the product together. AI features and integrations enter the plan when they solve a real user need.</p>
        </div>
        {/* Hero image */}
        <div data-motion-parallax className="w-full aspect-[2/1] md:aspect-[2.2/1] rounded-[24px] md:rounded-[40px] lg:rounded-[70px] overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgRectangle14}
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
}: {
  image: string;
  label: string;
}) {
  return (
    <div data-motion-item className="relative w-full aspect-[418/720] md:aspect-[418/720] rounded-[24px] md:rounded-[40px] overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        src={image}
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(167,224,255,0.05)] inset-0 pointer-events-none rounded-[24px] md:rounded-[40px]"
      />
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-8 right-6 md:right-8">
        <p className="font-['Inter:Regular',sans-serif] text-[22px] md:text-[32px] text-white tracking-[-1px] leading-normal">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ─── Core Systems Section ─── */
function CoreSystemsSection() {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1440 1211\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(-1.8167e-14 79.852 -94.952 4.8895e-15 720 412.48)\"><stop stop-color=\"rgba(1,15,42,1)\" offset=\"0\"/><stop stop-color=\"rgba(0,8,21,1)\" offset=\"0.5\"/><stop stop-color=\"rgba(0,4,10,1)\" offset=\"0.75\"/><stop stop-color=\"rgba(0,0,0,1)\" offset=\"1\"/></radialGradient></defs></svg>')",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-16 md:gap-24 lg:gap-[148px] px-6 md:px-10 lg:px-[52px] py-16 md:py-24 lg:py-[140px]">
        <h2 className="font-['Inter:Regular',sans-serif] text-[36px] md:text-[48px] lg:text-[62px] text-white text-center tracking-[-1.5px] md:tracking-[-2.68px]">
          Made with purpose
        </h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <CoreSystemCard image={imgRectangle10} label="Built to scale." />
          <CoreSystemCard image={imgRectangle11} label="Designed to think." />
          <CoreSystemCard image={imgRectangle12} label="Made for humans." />
        </div>
      </div>
    </section>
  );
}

/* ─── Main App ─── */
export default function App() {
  return (
    <div className="studio-site w-full min-h-screen bg-black overflow-x-hidden">
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
