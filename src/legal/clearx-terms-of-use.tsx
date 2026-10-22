import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>Welcome to ClearX.</p>
    <p className="mt-5">
      These Terms of Use govern your access to and use of the ClearX app. By downloading, accessing, or using the
      app, you agree to these terms. If you do not agree, do not use ClearX.
    </p>
    <p className="mt-5">
      In these terms, &ldquo;you&rdquo; refers to the user of the app, and &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
      &ldquo;us&rdquo; refers to the developers of ClearX operating under Nexus Apps.
    </p>
  </>
);

const sections = [
  {
    title: "Use of the App",
    content: (
      <>
        <p>
          You may use ClearX only in compliance with these terms and all applicable laws. You may not use the app
          in a way that interferes with the service, attempts to access systems or data without authorization, or
          infringes the rights of others.
        </p>
      </>
    ),
  },
  {
    title: "Subscriptions and In-App Purchases",
    content: (
      <>
        <p>
          ClearX offers premium features through weekly and yearly auto-renewable subscriptions and a one-time
          lifetime purchase. Prices, billing periods, and included features are displayed in the app before purchase.
        </p>
        <p className="mt-5">
          Payment is charged to your Apple Account upon confirmation of purchase. Weekly and yearly subscriptions
          renew automatically for the same billing period unless canceled at least 24 hours before the current
          period ends. Your account is charged for renewal within the 24 hours before the end of the current period.
        </p>
        <p className="mt-5">
          You can manage or cancel subscriptions in your Apple Account subscription settings. Deleting the app does
          not cancel a subscription. Cancellation stops future renewals; access normally continues until the end
          of the paid period. Apple handles billing and refund requests under its policies and applicable law.
        </p>
        <p className="mt-5">
          The lifetime option is a single, non-recurring purchase and does not renew. It unlocks the premium features
          included at purchase for the lifetime of the ClearX app. It does not guarantee perpetual app availability
          or compatibility with every future device or iOS version. Purchases can be restored using the same Apple
          Account, subject to Apple&apos;s purchase records.
        </p>
        <p className="mt-5">
          Any price changes are handled through the App Store and apply to future purchases or renewals according
          to Apple&apos;s notice and consent requirements. Your current paid period is not changed retroactively.
        </p>
      </>
    ),
  },
  {
    title: "License",
    content: (
      <>
        <p>
          Unless otherwise stated, ClearX and its licensors own the intellectual property rights for all material
          in the app. All rights are reserved.
        </p>
        <p className="mt-5">You may use ClearX for your personal, non-transferable use, subject to these terms.</p>
        <p className="mt-5">
          You must not republish, sell, rent, sub-license, reproduce, duplicate, copy, reverse engineer except as
          permitted by law, or redistribute material from ClearX.
        </p>
      </>
    ),
  },
  {
    title: "Photo Access and Deletion",
    content: (
      <>
        <p>
          ClearX helps you review and delete photos from your iOS photo library. These features require photo
          library permission. You can manage or revoke that permission in iOS settings at any time.
        </p>
        <p className="mt-5">
          You are responsible for reviewing the photos you select for deletion and keeping backups of photos you
          want to preserve. If iCloud Photos is enabled, deleting a photo may also delete it from iCloud and other
          devices using the same Apple Account.
        </p>
        <p className="mt-5">
          Apple normally keeps deleted photos in Recently Deleted for 30 days, during which you can recover them
          using Apple&apos;s Photos app. Permanently deleted photos cannot be recovered through ClearX. Recovery and
          the timing of storage being freed depend on iOS and iCloud behavior; ClearX does not provide a backup or
          recovery service. See <a href="https://support.apple.com/104967">Apple&apos;s photo deletion guidance</a>.
        </p>
      </>
    ),
  },
  {
    title: "Your Photos and Privacy",
    content: (
      <>
        <p>
          You retain ownership of your photos. ClearX accesses them only to provide photo management features on
          your device. You must have the right to access and manage any photos you use with the app.
        </p>
        <p className="mt-5">
          Our <a href="/clearx/privacy-policy">Privacy Policy</a> explains photo access, analytics, and the use of
          third-party services for subscriptions and purchases.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Platforms",
    content: (
      <>
        <p>
          ClearX may rely on third-party platforms and providers, including Apple, for distribution, billing, and
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
          We may suspend or terminate access to ClearX if you violate these terms, if required by law, or if doing
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
          ClearX is provided on an as-is and as-available basis to the maximum extent permitted by law. We do not
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
          related to your use of ClearX. Nothing in these terms limits liability or consumer rights that cannot
          be excluded or limited under applicable law.
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
          Your continued use of ClearX after updated terms are posted constitutes acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          For questions about these terms, contact <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
        </p>
      </>
    ),
  },
];

export function ClearXTermsOfUsePage() {
  return (
    <LegalDocumentPage
      appName="ClearX"
      documentTitle="Terms of Use"
      lastUpdated="October 22, 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
