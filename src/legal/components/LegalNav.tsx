import { useState } from "react";
import svgPaths from "../../imports/svg-05d7k6z6uy";

const navLinks = [
  { href: "/#about", label: "About us" },
  { href: "/#products", label: "Products" },
  { href: "/#tech", label: "Technologies" },
  { href: "/#contact", label: "Contact Us" },
];

export function LegalNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4 md:px-8 md:py-6">
      <div className="flex w-full max-w-[1344px] items-center justify-between rounded-full bg-[rgba(30,30,30,0.6)] px-6 py-3 backdrop-blur-[12px] md:px-10 md:py-4">
        <a
          href="/"
          aria-label="Go to Nexus Apps homepage"
          className="h-[15px] w-[100px] shrink-0 md:h-[20px] md:w-[133px]"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 132.95 19.5963">
            <path d={svgPaths.p365fc180} fill="white" />
            <path d={svgPaths.p2134c700} fill="white" />
            <path d={svgPaths.p3d9ed500} fill="white" />
            <path d={svgPaths.p336d400} fill="white" />
            <path d={svgPaths.p27eb8580} fill="white" />
          </svg>
        </a>

        <div className="hidden items-center gap-6 font-['Inter:Regular',sans-serif] text-[14px] tracking-[-0.36px] text-white lg:gap-8 lg:text-[16px] md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-80">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex flex-col gap-[5px] p-1 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-[2px] w-5 bg-white transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-white transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 flex flex-col gap-4 rounded-2xl bg-[rgba(30,30,30,0.88)] p-6 font-['Inter:Regular',sans-serif] text-[16px] tracking-[-0.36px] text-white backdrop-blur-[24px] md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
