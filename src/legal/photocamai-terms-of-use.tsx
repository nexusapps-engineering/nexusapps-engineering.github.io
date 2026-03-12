import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      Welcome to Photo CamAI. By using the app, you agree to be bound by these Terms of Use. If you do not agree, do
      not continue to use Photo CamAI.
    </p>
    <p className="mt-5">
      In these terms, &ldquo;you&rdquo; refers to the user of the app, and &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
      &ldquo;us&rdquo; refers to Photo CamAI.
    </p>
  </>
);

const sections = [
  {
    title: "Use of the App",
    content: (
      <>
        <p>
          You may use Photo CamAI only in compliance with these terms and applicable law. You may not misuse the app,
          interfere with its operation, attempt unauthorized access, or use it in a way that infringes the rights of
          others.
        </p>
      </>
    ),
  },
  {
    title: "Subscriptions",
    content: (
      <>
        <p>
          Photo CamAI offers subscription-based services. Pricing and plans are available within the app. Subscriptions
          renew automatically unless auto-renewal is disabled through your App Store account settings.
        </p>
        <p className="mt-5">Refunds are handled exclusively by the Apple App Store in accordance with its policies.</p>
      </>
    ),
  },
  {
    title: "License and Intellectual Property",
    content: (
      <>
        <p>
          All content and intellectual property in Photo CamAI are owned by the company or its licensors. You may not
          copy, redistribute, sell, sublicense, or reverse engineer material from the app except where expressly
          permitted by law.
        </p>
      </>
    ),
  },
  {
    title: "AI Features",
    content: (
      <>
        <p>
          Photo CamAI includes AI-powered features that operate entirely on-device. No photos, facial data, or image
          content are uploaded, stored, or transmitted by these features.
        </p>
        <p className="mt-5">
          AI features are provided as-is and may change over time. You are solely responsible for the content you
          process using them.
        </p>
      </>
    ),
  },
  {
    title: "User Content",
    content: (
      <>
        <p>
          Where user content features are available, you are responsible for the content you submit and for ensuring you
          have the necessary rights to provide it.
        </p>
        <p className="mt-5">
          You must not submit unlawful, infringing, harmful, or privacy-violating content. By submitting content, you
          grant Photo CamAI a limited, non-exclusive license to use and display that content as needed to operate and
          support the service.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Platforms",
    content: (
      <>
        <p>
          Photo CamAI may rely on third-party platforms and providers, including Apple, for app distribution, billing,
          and related functions. Those services may be governed by separate third-party terms and policies.
        </p>
      </>
    ),
  },
  {
    title: "Termination",
    content: (
      <>
        <p>
          We reserve the right to terminate or suspend access to Photo CamAI at any time if these terms are violated or
          if continued access would harm the service, other users, or the company.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer and Liability",
    content: (
      <>
        <p>
          Photo CamAI is provided without warranties of any kind, to the maximum extent permitted by law. We are not
          liable for damages arising from the use of the app except where liability cannot be excluded under applicable
          law.
        </p>
      </>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms of Use from time to time. Updated terms will be posted on this page, and continued
          use of Photo CamAI after the update takes effect constitutes acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    title: "Apple Standard EULA",
    content: (
      <>
        <p>
          This agreement is governed by the{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Standard End User License Agreement
          </a>{" "}
          where applicable.
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          For questions regarding these terms, contact <a href="mailto:info@nexusapps.co">info@nexusapps.co</a>.
        </p>
      </>
    ),
  },
];

export function PhotoCamAITermsOfUsePage() {
  return (
    <LegalDocumentPage
      appName="Photo CamAI"
      documentTitle="Terms of Use"
      lastUpdated="January 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
