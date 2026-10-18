import type { ReactNode } from "react";
import { LegalNav } from "./components/LegalNav";
import { Footer } from "../site/Layout";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalDocumentPageProps = {
  appName: string;
  documentTitle: string;
  lastUpdated: string;
  introduction: ReactNode;
  sections: LegalSection[];
};

function decodeTitle(title: string) {
  return title.replaceAll("&apos;", "'");
}

export function LegalDocumentPage({
  appName,
  documentTitle,
  lastUpdated,
  introduction,
  sections,
}: LegalDocumentPageProps) {
  return (
    <div className="studio-site min-h-screen bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(132,189,255,0.16), rgba(0,0,0,0) 34%), radial-gradient(circle at 20% 20%, rgba(194,182,255,0.1), rgba(0,0,0,0) 22%)",
        }}
      />

      <LegalNav />

      <main id="main-content" tabIndex={-1} className="relative px-6 pt-[132px] pb-20 md:px-10 md:pt-[164px] md:pb-28">
        <div className="mx-auto max-w-[880px]">
          <header className="mb-10 md:mb-14">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/app-policies/">App policies</a><span aria-hidden="true">/</span><span aria-current="page">{appName} {documentTitle}</span></nav>
            <p className="eyebrow">
              {appName}
            </p>
            <h1 className="max-w-[720px] text-[38px] leading-[1.1] tracking-[-0.04em] text-white md:text-[56px]">
              {documentTitle}
            </h1>
            <p className="mt-5 text-[14px] tracking-[-0.2px] text-white/55">
              Last updated: {lastUpdated}
            </p>
          </header>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:rounded-[36px] md:px-10 md:py-10 lg:px-14 lg:py-14">
            <div className="legal-copy">
              {introduction}
            </div>

            <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-4 text-[22px] font-medium leading-snug tracking-[-0.025em] text-white md:text-[28px]">
                    {decodeTitle(section.title)}
                  </h2>
                  <div className="legal-copy">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
