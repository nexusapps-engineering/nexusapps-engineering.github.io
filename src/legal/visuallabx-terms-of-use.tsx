import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>Welcome to Visual LabX.</p>
    <p className="mt-5">
      These Terms of Use govern your access to and use of the Visual LabX app. By downloading, accessing, or using the
      app, you agree to these terms. If you do not agree, do not use Visual LabX.
    </p>
    <p className="mt-5">
      In these terms, &ldquo;you&rdquo; refers to the user of the app, and &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
      &ldquo;us&rdquo; refers to Visual LabX and its operators.
    </p>
  </>
);

const sections = [
  {
    title: "Use of the App",
    content: (
      <>
        <p>
          You may use Visual LabX only in compliance with these terms and all applicable laws. You may not use the app
          in a way that interferes with the service, attempts to access systems or data without authorization, or
          infringes the rights of others.
        </p>
      </>
    ),
  },
  {
    title: "Subscriptions",
    content: (
      <>
        <p>
          Visual LabX services are available when you install the application. By subscribing, you agree to become a
          subscriber for the billing period you choose. A full list of subscription plans and pricing is available in
          the app.
        </p>
        <p className="mt-5">
          Any pricing changes will not affect the current subscription term and will apply from the next renewal date.
          Subscription plans renew automatically by default at the end of each billing period when supported by your
          payment method.
        </p>
        <p className="mt-5">
          The renewal period is generally the same as the original subscription period. The subscription fee is charged
          automatically to your selected payment method. If you want to stop auto-renewal, you can manage it in your
          subscription settings. Refunds are handled by the Apple App Store.
        </p>
      </>
    ),
  },
  {
    title: "License",
    content: (
      <>
        <p>
          Unless otherwise stated, Visual LabX and its licensors own the intellectual property rights for all material
          in the app. All rights are reserved.
        </p>
        <p className="mt-5">You may use Visual LabX for your personal, non-transferable use, subject to these terms.</p>
        <p className="mt-5">
          You must not republish, sell, rent, sub-license, reproduce, duplicate, copy, reverse engineer except as
          permitted by law, or redistribute material from Visual LabX.
        </p>
      </>
    ),
  },
  {
    title: "AI Features",
    content: (
      <>
        <p>
          Visual LabX includes AI-powered features, including AI Quick Edit, that are designed to operate locally on
          your device.
        </p>
        <p className="mt-5">
          AI results may vary, may not always meet your expectations, and may change as the app evolves. You remain
          solely responsible for reviewing and deciding how to use any output produced through these features.
        </p>
      </>
    ),
  },
  {
    title: "User Content",
    content: (
      <>
        <p>
          If Visual LabX allows you to submit, upload, or otherwise provide content, you remain responsible for that
          content and for ensuring that you have the necessary rights to use it.
        </p>
        <p className="mt-5">
          You must not submit unlawful, infringing, defamatory, offensive, or privacy-violating content. We may remove
          content or restrict access where necessary to protect the service, comply with law, or enforce these terms.
        </p>
        <p className="mt-5">
          Where needed to operate, improve, or support the service, you grant us a limited, non-exclusive license to
          host, process, and display content you submit through the app.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Platforms",
    content: (
      <>
        <p>
          Visual LabX may rely on third-party platforms and providers, including Apple, for distribution, billing, and
          related functionality. Your use of those services may also be subject to the terms and policies of the
          relevant provider.
        </p>
      </>
    ),
  },
  {
    title: "Termination",
    content: (
      <>
        <p>
          We may suspend or terminate access to Visual LabX if you violate these terms, if required by law, or if doing
          so is necessary to protect the service, users, or our rights.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer",
    content: (
      <>
        <p>
          Visual LabX is provided on an as-is and as-available basis to the maximum extent permitted by law. We do not
          guarantee uninterrupted operation, availability, or error-free performance.
        </p>
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, special,
          consequential, or punitive damages, or for loss of data, revenue, profits, or business arising from or
          related to your use of Visual LabX.
        </p>
      </>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms of Use from time to time. When we do, we will post the updated version on this page
          and revise the effective date where appropriate.
        </p>
        <p className="mt-5">
          Your continued use of Visual LabX after updated terms are posted constitutes acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          For questions about these terms, contact <a href="mailto:info@nexusapps.co">info@nexusapps.co</a>.
        </p>
      </>
    ),
  },
];

export function VisualLabXTermsOfUsePage() {
  return (
    <LegalDocumentPage
      appName="Visual LabX"
      documentTitle="Terms of Use"
      lastUpdated="June 26, 2025"
      introduction={introduction}
      sections={sections}
    />
  );
}
