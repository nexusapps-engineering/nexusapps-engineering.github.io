import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      At Clear Wave Pro, protecting the privacy of our users is one of our top priorities. This Privacy Policy
      explains what data we collect, how it is used, and the steps we take to keep your information safe.
    </p>
    <p className="mt-5">
      We are committed to transparency and responsible data handling. If you have any questions regarding this
      Privacy Policy, please contact <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
    </p>
  </>
);

const sections = [
  {
    title: "Overview",
    content: (
      <>
        <p>
          Clear Wave Pro is designed to help users clean, test, and maintain their device speakers using specialized
          audio frequencies and speaker diagnostic tools.
        </p>
        <p className="mt-5">This Privacy Policy explains how information is handled when you use the app.</p>
      </>
    ),
  },
  {
    title: "Microphone Permission",
    content: (
      <>
        <p>Clear Wave Pro may request access to your device&apos;s microphone solely for the dB Meter feature.</p>
        <p className="mt-5">
          Microphone access is used only to measure surrounding sound levels and display real-time decibel readings
          within the app.
        </p>
        <p className="mt-5">
          We do not record, store, transmit, upload, or share any audio captured through your microphone.
        </p>
        <p className="mt-5">All sound level measurements are processed locally on your device.</p>
      </>
    ),
  },
  {
    title: "Audio Processing",
    content: (
      <>
        <p>Speaker cleaning modes, speaker tests, and sound generation features operate entirely on your device.</p>
        <p className="mt-5">
          No audio recordings, voice data, or sound samples are collected or transmitted to our servers.
        </p>
      </>
    ),
  },
  {
    title: "Device Identifiers",
    content: (
      <>
        <p>
          Clear Wave Pro may collect certain device identifiers, such as a device ID, to distinguish between devices
          for service functionality purposes.
        </p>
        <p className="mt-5">
          These identifiers are not linked to your personal identity and are never used to track you as an individual.
        </p>
      </>
    ),
  },
  {
    title: "Usage Data",
    content: (
      <>
        <p>
          We collect anonymized usage data to understand how users interact with the app, improve performance, and
          identify areas for enhancement.
        </p>
        <p className="mt-5">
          This data may include feature usage, screen interactions, button taps, and other anonymous analytics events.
        </p>
        <p className="mt-5">No personally identifiable information is collected through this process.</p>
        <p className="mt-5">
          To assist with analytics, we may use Google Analytics or similar analytics providers. Information is
          processed anonymously and is never linked to an identifiable individual.
        </p>
      </>
    ),
  },
  {
    title: "Crash Data",
    content: (
      <>
        <p>
          We collect anonymous crash and diagnostic information to help identify bugs, improve stability, and enhance
          the user experience.
        </p>
        <p className="mt-5">
          Crash reports do not contain personal information and are used solely for analytics and app improvement
          purposes.
        </p>
      </>
    ),
  },
  {
    title: "Advertising and Tracking",
    content: (
      <>
        <p>Clear Wave Pro does not include third-party advertisements.</p>
        <p className="mt-5">We do not sell your personal information to third parties.</p>
        <p className="mt-5">We do not use collected data for cross-app tracking or advertising purposes.</p>
      </>
    ),
  },
  {
    title: "In-App Purchases and Subscriptions",
    content: (
      <>
        <p>Clear Wave Pro offers premium features through auto-renewable subscriptions and one-time purchases.</p>
        <p className="mt-5">
          Available purchase options may include weekly subscriptions, yearly subscriptions, and lifetime purchases.
        </p>
        <p className="mt-5">All payments are processed directly by Apple through the App Store.</p>
        <p className="mt-5">We do not collect, store, or process payment card information.</p>
        <p className="mt-5">Purchase history may be processed solely for app functionality and subscription management.</p>
      </>
    ),
  },
  {
    title: "Children&apos;s Privacy",
    content: (
      <>
        <p>Clear Wave Pro is intended for a general audience and is not directed toward children under 13 years of age.</p>
        <p className="mt-5">We do not knowingly collect personal information from children under 13.</p>
        <p className="mt-5">
          If we become aware that such information has been collected, we will take appropriate steps to delete it.
        </p>
      </>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes.
        </p>
        <p className="mt-5">
          Any updates will be posted on this page, and the &ldquo;Last Updated&rdquo; date will be revised
          accordingly.
        </p>
        <p className="mt-5">
          Continued use of the app after changes become effective constitutes acceptance of the updated Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          If you have any questions regarding this Privacy Policy, please contact{" "}
          <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
        </p>
        <p className="mt-5">
          Clear Wave Pro is committed to respecting your privacy and protecting your personal information.
        </p>
      </>
    ),
  },
];

export function ClearWavePrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      appName="Clear Wave Pro"
      documentTitle="Privacy Policy"
      lastUpdated="May 29, 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
