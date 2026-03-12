import type { ReactNode } from "react";
import { LegalNav } from "./components/LegalNav";

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

export function LegalDocumentPage({
  appName,
  documentTitle,
  lastUpdated,
  introduction,
  sections,
}: LegalDocumentPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(132,189,255,0.16), rgba(0,0,0,0) 34%), radial-gradient(circle at 20% 20%, rgba(194,182,255,0.1), rgba(0,0,0,0) 22%)",
        }}
      />

      <LegalNav />

      <main className="relative px-6 pt-[132px] pb-20 md:px-10 md:pt-[164px] md:pb-28">
        <div className="mx-auto max-w-[880px]">
          <header className="mb-10 md:mb-14">
            <p className="mb-4 font-['Inter:Medium',sans-serif] text-[12px] uppercase tracking-[0.28em] text-white/45 md:text-[13px]">
              {appName}
            </p>
            <h1 className="max-w-[720px] font-['SF_Pro_Display:Regular',sans-serif] text-[38px] leading-[1.04] tracking-[-2px] text-white md:text-[56px] md:tracking-[-3px]">
              {documentTitle}
            </h1>
            <p className="mt-5 font-['Inter:Regular',sans-serif] text-[14px] tracking-[-0.2px] text-white/55">
              Last updated: {lastUpdated}
            </p>
          </header>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:rounded-[36px] md:px-10 md:py-10 lg:px-14 lg:py-14">
            <div className="[&_a]:text-[#c2b6ff] [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:hover:text-white [&_p]:font-['Inter:Regular',sans-serif] [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:tracking-[-0.2px] [&_p]:text-white/82]">
              {introduction}
            </div>

            <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-4 font-['Inter:Semi_Bold',sans-serif] text-[22px] tracking-[-0.8px] text-white md:text-[28px]">
                    {section.title}
                  </h2>
                  <div className="[&_a]:text-[#c2b6ff] [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:hover:text-white [&_p]:font-['Inter:Regular',sans-serif] [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:tracking-[-0.2px] [&_p]:text-white/82]">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
