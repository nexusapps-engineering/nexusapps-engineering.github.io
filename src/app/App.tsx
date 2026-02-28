import { useState, useRef } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-05d7k6z6uy";
import imgFrame1772 from "figma:asset/e7b8fc2544e01dc38d6c7b04ee1e03a60d51e674.png";
import imgVisuallabx1 from "figma:asset/1a51d0ae0e0531688c3cfead5371c78d7cabf21a.png";
import imgPhotocamai1 from "figma:asset/d78103c718870916612e38486b733e3c524f777f.png";
import imgIscreenaiwallpaper1 from "figma:asset/c5b01728cf44ee502362c693ca0ce6048b87d89d.png";
import imgRectangle14 from "figma:asset/0eaf6b18afc8ea2089605ce1beccba41d827a2fa.png";
import imgRectangle10 from "figma:asset/046a4d0c1f5a6a4333bb999c1e1e140ae80455a1.png";
import imgRectangle11 from "figma:asset/21460b7bbd131b9ccf178a2be17130610c4cc6d7.png";
import imgRectangle12 from "figma:asset/ca514f7d38c7b0b15576b739a8ff3276239581f5.png";
import imgNexusbuild1 from "figma:asset/8c75122d35b55174fcc1582c90db9ed92b2ed7cb.png";

/* ─── Scroll Animation Wrapper ─── */
function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Navigation ─── */
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 md:px-8 py-4 md:py-6">
      <div className="backdrop-blur-[12px] bg-[rgba(30,30,30,0.6)] flex items-center justify-between w-full max-w-[1344px] rounded-full px-6 md:px-10 py-3 md:py-4">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="w-[100px] md:w-[133px] h-[15px] md:h-[20px] shrink-0 cursor-pointer"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 132.95 19.5963">
            <path d={svgPaths.p365fc180} fill="white" />
            <path d={svgPaths.p2134c700} fill="white" />
            <path d={svgPaths.p3d9ed500} fill="white" />
            <path d={svgPaths.p336d400} fill="white" />
            <path d={svgPaths.p27eb8580} fill="white" />
          </svg>
        </a>
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-['Inter:Regular',sans-serif] text-[14px] lg:text-[16px] text-white tracking-[-0.36px]">
          <a href="#about" className="hover:opacity-80 transition-opacity">About us</a>
          <a href="#products" className="hover:opacity-80 transition-opacity">Products</a>
          <a href="#tech" className="hover:opacity-80 transition-opacity">Technologies</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact Us</a>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 backdrop-blur-[24px] bg-[rgba(30,30,30,0.6)] rounded-2xl p-6 flex flex-col gap-4 font-['Inter:Regular',sans-serif] text-[16px] text-white tracking-[-0.36px]">
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#tech" onClick={() => setMenuOpen(false)}>Technologies</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="bg-black relative w-full overflow-hidden pt-[200px] md:pt-0">
      {/* Hero image - starts from very top, determines section height */}
      <motion.img
        alt=""
        className="w-full h-auto block pointer-events-none"
        src={imgFrame1772}
        width={2880}
        height={2296}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Hero text - overlaid on top of image */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center text-center px-6 md:px-10 pt-[100px] md:pt-[120px] lg:pt-[140px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div
          className="bg-clip-text bg-gradient-to-l from-[#84bdff] via-[#c2b6ff] via-[48%] to-white text-[transparent] font-['SF_Pro:Regular',sans-serif] text-[50px] md:text-[56px] lg:text-[82px] leading-[1.05] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="mb-0">We craft the future of</p>
          <p>digital products.</p>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Buttons + Stats Section ─── */
function ButtonsAndStats() {
  const stats = [
    "500K+ global users",
    "200K+ active every month",
    "10.000+ paying members",
  ];

  return (
    <section className="bg-black w-full flex flex-col items-center gap-16 md:gap-20 lg:gap-[120px] px-6 md:px-10 py-16 md:py-20 lg:py-[120px]">
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto items-center">
        <a
          href="#products"
          className="bg-gradient-to-r from-white via-[#c2b6ff] via-[52%] to-[#84bdff] text-black font-['Inter:Medium',sans-serif] font-medium text-[16px] tracking-[-0.36px] px-8 py-4 rounded-full text-center w-full sm:w-auto"
        >
          See Products
        </a>
        <a
          href="mailto:info@nexusapps.co"
          className="relative text-white font-['Inter:Medium',sans-serif] font-medium text-[16px] tracking-[-0.36px] px-8 py-4 rounded-full text-center w-full sm:w-auto border border-[#4d4d4d]"
        >
          Contact Us
        </a>
      </div>
      {/* Stats */}
      <div className="flex flex-col gap-6 md:gap-8 items-center w-full">
        {stats.map((stat) => (
          <div key={stat} className="w-full max-w-[1200px] flex items-center justify-center px-6 md:px-[60px] py-6 md:py-10 rounded-full border border-[rgba(255,255,255,0.2)]">
            <span
              className="bg-clip-text bg-gradient-to-b from-white to-[#6cb4e0] text-[transparent] font-['SF_Pro:Regular',sans-serif] text-[32px] md:text-[56px] lg:text-[72px] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-3px] text-center leading-[1.1] lg:whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {stat}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section id="about" className="bg-white w-full rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[120px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[62px] py-16 md:py-24 lg:py-[140px] flex flex-col gap-10 md:gap-[55px]">
        <div className="font-['Inter:Regular',sans-serif] text-black tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] md:text-[48px] lg:text-[72px] leading-[1.1] mb-4 md:mb-6">
            Since day one, Nexus builds<br />
            and operates digital products<br />
            for long-term value.
          </p>
          <div className="text-[18px] md:text-[32px] lg:text-[51px] tracking-[-1px] md:tracking-[-2px] lg:tracking-[-3px] mt-6 md:mt-10 leading-[1.3]">
            <p className="mb-2">We acquire and scale high-potential assets,</p>
            <p className="mb-2">optimize performance, and compound growth.</p>
            <p className="mb-2 mt-6 md:mt-10">Lean teams. Disciplined execution.</p>
            <p className="mb-2">Capital-efficient operations.</p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#6cb4e0] mt-6 md:mt-10 mb-2">We don't chase trends.</p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#6cb4e0]">We build durable businesses.</p>
          </div>
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

/* ─── Product Card ─── */
function ArrowIcon() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] w-[66px] h-[42px] rounded-full flex items-center justify-center border border-transparent">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p2b2468c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28671" />
      </svg>
    </div>
  );
}

function ProductCard({
  image,
  titleSvg,
  titleViewBox,
  description,
  gradientTo,
  href,
}: {
  image: string;
  titleSvg: React.ReactNode;
  titleViewBox: string;
  description: React.ReactNode;
  gradientTo: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-16 md:gap-[100px] w-full rounded-[24px] md:rounded-[40px] px-6 md:px-8 pt-16 md:pt-[140px] pb-5 relative cursor-pointer hover:scale-[1.02] transition-transform"
      style={{ background: `linear-gradient(to bottom, black, ${gradientTo})` }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(84,84,84,0.4)] inset-0 pointer-events-none rounded-[24px] md:rounded-[40px]"
      />
      {/* Icon */}
      <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] overflow-hidden shrink-0 flex items-center justify-center">
        <img
          alt=""
          className="w-[126px] h-[126px] md:w-[180px] md:h-[180px] object-cover"
          src={image}
          loading="lazy"
          decoding="async"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-8 items-end w-full">
        <div className="flex flex-col gap-8 items-start w-full">
          {/* Title SVG */}
          <div className="h-[22px] md:h-[26px] shrink-0">
            <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMinYMid meet" viewBox={titleViewBox}>
              {titleSvg}
            </svg>
          </div>
          {/* Description */}
          <div className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[16px] text-[rgba(255,255,255,0.4)] tracking-[-0.5px] md:tracking-[-1px] leading-normal w-full">
            {description}
          </div>
        </div>
        <ArrowIcon />
      </div>
    </a>
  );
}

/* ─── Products Section ─── */
function ProductsSection() {
  return (
    <section id="products" className="bg-black w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-16 md:gap-24 lg:gap-[148px] px-6 md:px-10 lg:px-[52px] py-16 md:py-24 lg:py-[140px]">
        {/* Title */}
        <h2 className="font-['Inter:Regular',sans-serif] text-[36px] md:text-[48px] lg:text-[62px] text-white text-center tracking-[-1.5px] md:tracking-[-2.68px]">
          Products
        </h2>
        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <ProductCard
            image={imgVisuallabx1}
            titleViewBox="0 0 354 26"
            titleSvg={
              <>
                <path d={svgPaths.p28c38bf0} fill="white" />
                <path d={svgPaths.p2dae7f0} fill="white" />
                <path d={svgPaths.p219dfca0} fill="white" />
                <path d={svgPaths.pcf98370} fill="white" />
                <path d={svgPaths.pfeb8600} fill="white" />
                <path d={svgPaths.p121a4e40} fill="white" />
                <path d={svgPaths.p184dbb90} fill="white" />
                <path d={svgPaths.p1929c471} fill="white" />
                <path d={svgPaths.p2c952b80} fill="white" />
                <path d={svgPaths.p252c8370} fill="white" />
              </>
            }
            description={
              <>
                <p className="mb-2">Visual LabX is a professional-grade mobile photo editing platform built around high-performance presets and scalable subscription revenue.</p>
                <p className="mb-2 mt-4">It empowers creators.</p>
                <p className="mb-2">Standardizes quality.</p>
                <p>Drives recurring growth.</p>
              </>
            }
            gradientTo="#1b001b"
            href="https://apps.apple.com/us/app/visual-labx-ai-photo-editor/id6449296377"
          />
          <ProductCard
            image={imgPhotocamai1}
            titleViewBox="0 0 176.737 22"
            titleSvg={
              <>
                <path d={svgPaths.p13fcff00} fill="white" />
                <path d={svgPaths.p321f1440} fill="white" />
                <path d={svgPaths.p23086f00} fill="white" />
                <path d={svgPaths.p3d8f2900} fill="white" />
                <path d={svgPaths.pd36a500} fill="white" />
                <path d={svgPaths.p15170240} fill="white" />
                <path d={svgPaths.p19742c80} fill="white" />
                <path d={svgPaths.p2e08c400} fill="white" />
                <path d={svgPaths.p31754300} fill="white" />
                <path d={svgPaths.p1e905d00} fill="white" />
              </>
            }
            description={
              <>
                <p className="mb-2">Photo CamAI is an AI-powered smart camera app delivering real-time enhancement and automated optimization.</p>
                <p className="mb-2 mt-4">AI-first by design.</p>
                <p className="mb-2">Built for engagement.</p>
                <p>Engineered for scale.</p>
              </>
            }
            gradientTo="#091926"
            href="https://apps.apple.com/us/app/photo-camai-ai-photo-editor/id6755936591"
          />
          <ProductCard
            image={imgIscreenaiwallpaper1}
            titleViewBox="0 0 281.063 26"
            titleSvg={
              <>
                <path d={svgPaths.p2f6e0f00} fill="white" />
                <path d={svgPaths.p12bd2e00} fill="white" />
                <path d={svgPaths.p223d9500} fill="white" />
                <path d={svgPaths.p3187b80} fill="white" />
                <path d={svgPaths.p111a2900} fill="white" />
                <path d={svgPaths.p3e388900} fill="white" />
                <path d={svgPaths.p16e24a40} fill="white" />
                <path d={svgPaths.p3664800} fill="white" />
                <path d={svgPaths.p33a72e80} fill="white" />
                <path d={svgPaths.p3e394140} fill="white" />
                <path d={svgPaths.p86cfb00} fill="white" />
                <path d={svgPaths.p367b1a00} fill="white" />
                <path d={svgPaths.p8f1140} fill="white" />
                <path d={svgPaths.p34936500} fill="white" />
                <path d={svgPaths.p39fc0880} fill="white" />
                <path d={svgPaths.pf99ec00} fill="white" />
                <path d={svgPaths.p7f74500} fill="white" />
                <path d={svgPaths.p34fec600} fill="white" />
                <path d={svgPaths.p35cc0100} fill="white" />
              </>
            }
            description={
              <>
                <p className="mb-2">iScreen AI Wallpapers is an AI-driven personalization platform offering continuously generated, high-resolution wallpapers.</p>
                <p className="mb-2 mt-4">Content at scale.</p>
                <p className="mb-2">Personalization on demand.</p>
                <p>Subscription-based monetization.</p>
              </>
            }
            gradientTo="#161f00"
            href="https://apps.apple.com/app/6758549154"
          />
        </div>
        {/* Bottom text */}
        <div className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] lg:text-[30px] text-white text-center tracking-[-1px] md:tracking-[-2px] leading-normal max-w-[1200px]">
          <p className="mb-2">These products represent Nexus commitment to building scalable, high-performance digital assets.</p>
          <p>Each is designed with long-term value creation, disciplined execution, and sustainable revenue in mind.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Strategy Section (white) ─── */
function StrategySection() {
  return (
    <section id="tech" className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-16 md:gap-20 lg:gap-[120px] px-6 md:px-10 lg:px-[62px] py-16 md:py-24 lg:py-[120px]">
        {/* Text block */}
        <div className="flex flex-col gap-6 md:gap-10 text-black text-center w-full tracking-[-1px] md:tracking-[-2px]">
          <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[22px] md:text-[32px] lg:text-[44px] leading-[1.2]">
            <p>
              <span>Our strategies are informed by proven external platforms and powered by </span>
              <span
                className="bg-clip-text text-[transparent]"
                style={{
                  backgroundImage:
                    "linear-gradient(175.35deg, rgb(28, 220, 232) 7.24%, rgb(60, 199, 233) 11.16%, rgb(99, 175, 234) 25.41%, rgb(152, 141, 236) 41.84%, rgb(187, 119, 237) 51.5%, rgb(197, 111, 212) 59.48%, rgb(222, 91, 151) 80.7%, rgb(237, 79, 113) 96.27%, rgb(243, 74, 98) 104.43%)",
                }}
              >
                proprietary data
              </span>
              <span> infrastructure developed in-house.</span>
            </p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[24px] lg:text-[33px] leading-[1.3]">
            Each product operates on a scalable, defensible technology foundation designed for sustainable revenue and long-term enterprise value.
          </p>
        </div>
        {/* Hero image */}
        <div className="w-full aspect-[2/1] md:aspect-[2.2/1] rounded-[24px] md:rounded-[40px] lg:rounded-[70px] overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgRectangle14}
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-[42px] w-full">
          {/* Logo 1 - App Launch */}
          <div className="h-[20px] md:h-[28px] w-auto shrink-0">
            <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 121.066 28">
              <path d={svgPaths.p32a3c080} fill="black" />
              <path d={svgPaths.p38d77300} fill="#0F0F0D" />
            </svg>
          </div>
          {/* Logo 2 - OpenAI */}
          <div className="h-[20px] md:h-[28px] w-auto shrink-0">
            <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 101.637 28">
              <path d={svgPaths.p2114cc72} fill="black" />
              <path d={svgPaths.p1f11a80} fill="black" />
              <path d={svgPaths.p388dfc70} fill="black" />
              <path d={svgPaths.p14301000} fill="black" />
              <path d={svgPaths.p360f9280} fill="black" />
              <path d={svgPaths.p1543380} fill="black" />
              <path d={svgPaths.p1042b100} fill="black" />
            </svg>
          </div>
          {/* Logo 3 */}
          <div className="h-[20px] md:h-[28px] w-auto shrink-0">
            <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 122.55 28">
              <path d={svgPaths.pb38280} fill="black" />
              <path d={svgPaths.p35dbe180} fill="black" />
              <path d={svgPaths.p2af9be00} fill="black" />
              <path d={svgPaths.p219d6700} fill="black" />
              <path d={svgPaths.p2fb48300} fill="black" />
              <path d={svgPaths.p16d5a180} fill="black" />
              <path d={svgPaths.p3c602000} fill="black" />
              <path d={svgPaths.p107ac100} fill="black" />
              <path d={svgPaths.p27097900} fill="black" />
              <path d={svgPaths.p2ffbfa00} fill="black" />
            </svg>
          </div>
          {/* Logo 4 */}
          <div className="h-[20px] md:h-[28px] w-auto shrink-0">
            <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 141.924 28">
              <path d={svgPaths.p1a03f00} fill="black" />
              <path clipRule="evenodd" d={svgPaths.p2b82900} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pee9f300} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1476f300} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1761a480} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p17962e00} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p19746700} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p82fb300} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2fef5d00} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p4d68180} fill="black" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p238c9200} fill="black" fillRule="evenodd" />
            </svg>
          </div>
          {/* Logo 5 */}
          <div className="h-[20px] md:h-[28px] w-auto shrink-0">
            <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 151.484 28">
              <path d={svgPaths.p323c240} fill="black" />
              <path clipRule="evenodd" d={svgPaths.p89030} fill="black" fillRule="evenodd" />
              <path d={svgPaths.p11bd2a00} fill="black" />
              <path clipRule="evenodd" d={svgPaths.p1bf28100} fill="black" fillRule="evenodd" />
              <path d={svgPaths.p1f678a80} fill="black" />
              <path d={svgPaths.p2f25180} fill="black" />
              <path d={svgPaths.p2b1e4780} fill="black" />
              <path d={svgPaths.p347e4500} fill="black" />
            </svg>
          </div>
          {/* Logo 6 */}
          <div className="h-[20px] md:h-[28px] w-auto shrink-0">
            <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 98.9154 28">
              <path d={svgPaths.p198a8c00} fill="black" />
              <path d={svgPaths.p4419a80} fill="black" />
              <path d={svgPaths.p12de2c00} fill="black" />
              <path d={svgPaths.pbbb8300} fill="black" />
              <path d={svgPaths.p1adb83b0} fill="black" />
            </svg>
          </div>
          {/* Logo 7 */}
          <div className="h-[20px] md:h-[28px] w-auto shrink-0">
            <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 217.091 28">
              <path d={svgPaths.pf584300} fill="black" />
              <path d={svgPaths.p38dfd900} fill="black" />
              <path d={svgPaths.pfae42f0} fill="black" />
              <path d={svgPaths.p250f3c80} fill="black" />
              <path d={svgPaths.p24925a00} fill="black" />
              <path d={svgPaths.pf325c00} fill="black" />
              <path d={svgPaths.p327cba00} fill="black" />
              <path d={svgPaths.p86a600} fill="black" />
              <path d={svgPaths.p5f56480} fill="black" />
              <path d={svgPaths.p2e6d9200} fill="black" />
              <path d={svgPaths.p1170dd00} fill="black" />
              <path d={svgPaths.p1548ef00} fill="black" />
              <path d={svgPaths.pd0ec000} fill="black" />
              <path d={svgPaths.p23af2980} fill="black" />
              <path d={svgPaths.p34c42d00} fill="black" />
              <path d={svgPaths.p2fce63f0} fill="black" />
              <path d={svgPaths.p3bf7a100} fill="black" />
              <path d={svgPaths.p34abdc00} fill="black" />
              <path d={svgPaths.p250c1800} fill="black" />
            </svg>
          </div>
        </div>
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
    <div className="relative w-full aspect-[418/720] md:aspect-[418/720] rounded-[24px] md:rounded-[40px] overflow-hidden">
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
          Core Systems
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

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section id="contact" className="bg-black w-full relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-between min-h-[60vh] md:min-h-[80vh] lg:min-h-screen px-6 md:px-10 lg:px-[52px] py-16 md:py-24 lg:py-[140px] relative">
        {/* Background image */}
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={imgNexusbuild1}
          loading="lazy"
          decoding="async"
        />
        {/* Top text */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center relative z-10">
          <h2
            className="bg-clip-text bg-gradient-to-r from-white via-[#c2b6ff] via-[52%] to-[#84bdff] text-[transparent] font-['SF_Pro_Display:Bold',sans-serif] text-[28px] md:text-[40px] lg:text-[54px] tracking-[-1px] md:tracking-[-2px] leading-[1.1]"
          >
            The center of product and technology.
          </h2>
          <p className="font-['SF_Pro_Display:Regular',sans-serif] text-[18px] md:text-[24px] lg:text-[32px] text-white tracking-[-0.5px] md:tracking-[-0.64px] leading-[1.3]">
            We build scalable digital products through design,<br className="hidden md:inline" />
            engineering, and intelligent systems.
          </p>
        </div>
        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-8 md:gap-12 relative z-10 mt-16 md:mt-0">
          <p
            className="bg-clip-text bg-gradient-to-b from-white to-[rgba(255,255,255,0.4)] text-[transparent] font-['SF_Pro_Display:Regular',sans-serif] text-[22px] md:text-[28px] lg:text-[32px] tracking-[-0.64px] text-center"
          >
            Start a Business Inquiry
          </p>
          <a
            href="mailto:info@nexusapps.co"
            className="bg-gradient-to-r from-white via-[#c2b6ff] via-[52%] to-[#84bdff] text-black font-['Inter:Medium',sans-serif] font-medium text-[16px] tracking-[-0.36px] px-12 md:px-[92px] py-4 rounded-full text-center w-full sm:w-auto"
          >
            Build With Nexus
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20 px-6 md:px-10 lg:px-12 py-10 md:py-16 items-center">
        {/* Footer links */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 font-['Inter:Regular',sans-serif] text-white">
          {/* Company */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] tracking-[-0.28px] uppercase opacity-40 leading-[18px]">Company</p>
            <a href="#about" className="text-[16px] tracking-[-0.34px] leading-[22px] hover:opacity-80 transition-opacity">About us</a>
            <a href="#products" className="text-[16px] tracking-[-0.34px] leading-[22px] hover:opacity-80 transition-opacity">Products</a>
            <a href="#tech" className="text-[16px] tracking-[-0.34px] leading-[22px] hover:opacity-80 transition-opacity">Technologies</a>
            <a href="#contact" className="text-[16px] tracking-[-0.34px] leading-[22px] hover:opacity-80 transition-opacity">Contact Us</a>
          </div>
          {/* Products */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] tracking-[-0.28px] uppercase opacity-40 leading-[18px]">Products</p>
            <a href="https://apps.apple.com/us/app/visual-labx-ai-photo-editor/id6449296377" target="_blank" rel="noopener noreferrer" className="text-[16px] tracking-[-0.34px] leading-[22px] hover:opacity-80 transition-opacity">Visual LabX</a>
            <a href="https://apps.apple.com/us/app/photo-camai-ai-photo-editor/id6755936591" target="_blank" rel="noopener noreferrer" className="text-[16px] tracking-[-0.34px] leading-[22px] hover:opacity-80 transition-opacity">Photo CamAI</a>
            <a href="https://apps.apple.com/app/6758549154" target="_blank" rel="noopener noreferrer" className="text-[16px] tracking-[-0.34px] leading-[22px] hover:opacity-80 transition-opacity">iScreen AI Wallpapers</a>
          </div>
          {/* Partnership */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] tracking-[-0.28px] uppercase opacity-40 leading-[18px]">Partnership inquiries</p>
            <a href="mailto:info@nexusapps.co" className="text-[16px] tracking-[-0.34px] leading-[22px] hover:opacity-80 transition-opacity">info@nexusapps.co</a>
          </div>
          {/* Info */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[16px] tracking-[-0.34px] leading-[22px]">Nexus Apps</p>
              <p className="text-[14px] tracking-[-0.28px] opacity-40 leading-[18px]">Berlin, Germany</p>
            </div>
            <p className="text-[16px] tracking-[-0.34px] leading-[22px]">Privacy and cookie policy</p>
          </div>
        </div>
        {/* Large NEXUS logo + tagline */}
        <div className="w-full flex flex-col items-center gap-6 md:gap-10 lg:gap-[62px]">
          {/* Big NEXUS SVG */}
          <div className="w-full max-w-[1344px]">
            <svg className="block w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1344 200.431">
              <path d={svgPaths.p3ba2bf00} fill="white" />
              <path d={svgPaths.p3182d900} fill="white" />
              <path d={svgPaths.p34dd8320} fill="white" />
              <path d={svgPaths.pe5e0100} fill="white" />
              <path d={svgPaths.p368ad00} fill="white" />
            </svg>
          </div>
          {/* Think Further tagline */}
          <div className="w-[180px] md:w-[240px] lg:w-[288px]">
            <svg className="block w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 287.502 37.8608">
              <path d={svgPaths.p75d3200} fill="url(#paint0_footer)" />
              <path d={svgPaths.p3c960380} fill="url(#paint1_footer)" />
              <path d={svgPaths.p23367400} fill="url(#paint2_footer)" />
              <path d={svgPaths.p32279900} fill="url(#paint3_footer)" />
              <path d={svgPaths.p1752c800} fill="url(#paint4_footer)" />
              <path d={svgPaths.p34528c80} fill="url(#paint5_footer)" />
              <path d={svgPaths.p9eca00} fill="url(#paint6_footer)" />
              <path d={svgPaths.pabd1800} fill="url(#paint7_footer)" />
              <path d={svgPaths.p3494bb20} fill="url(#paint8_footer)" />
              <path d={svgPaths.p20e99bc0} fill="url(#paint9_footer)" />
              <path d={svgPaths.p3fd7d400} fill="url(#paint10_footer)" />
              <path d={svgPaths.p79a0b00} fill="url(#paint11_footer)" />
              <path d={svgPaths.pf08a780} fill="url(#paint12_footer)" />
              <defs>
                {Array.from({ length: 13 }, (_, i) => (
                  <linearGradient key={i} gradientUnits="userSpaceOnUse" id={`paint${i}_footer`} x1="0" x2="287.502" y1="18.9304" y2="18.9304">
                    <stop stopColor="#84BDFF" />
                    <stop offset="0.480769" stopColor="#C2B6FF" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                ))}
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main App ─── */
export default function App() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <NavBar />
      <main className="flex flex-col w-full">
        <HeroSection />
        <FadeInSection>
          <ButtonsAndStats />
        </FadeInSection>
        <FadeInSection>
          <AboutSection />
        </FadeInSection>
        <FadeInSection>
          <ProductsSection />
        </FadeInSection>
        <FadeInSection>
          <StrategySection />
        </FadeInSection>
        <FadeInSection>
          <CoreSystemsSection />
        </FadeInSection>
        <FadeInSection>
          <CTASection />
        </FadeInSection>
      </main>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
