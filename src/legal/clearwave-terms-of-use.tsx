import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>Welcome to Clear Wave Pro.</p>
    <p className="mt-5">
      By downloading or using this app, you agree to be bound by these Terms of Use. If you do not agree with any
      part of these terms, please do not use Clear Wave Pro.
    </p>
  </>
);

const listClassName =
  "mt-5 list-disc space-y-3 pl-6 font-['Inter:Regular',sans-serif] text-[16px] leading-[1.8] tracking-[-0.2px] text-white/82";

const sections = [
  {
    title: "Definitions",
    content: (
      <>
        <p>&ldquo;You&rdquo; refers to the individual user of the app.</p>
        <p className="mt-5">
          &ldquo;Company,&rdquo; &ldquo;We,&rdquo; &ldquo;Our,&rdquo; or &ldquo;Us&rdquo; refers to the developers of
          Clear Wave Pro operating under Nexus Apps.
        </p>
        <p className="mt-5">&ldquo;App&rdquo; refers to the Clear Wave Pro application.</p>
      </>
    ),
  },
  {
    title: "App Features and License",
    content: (
      <>
        <p>
          Clear Wave Pro provides speaker cleaning, speaker testing, and sound level measurement tools designed to help
          maintain and evaluate your device&apos;s audio performance.
        </p>
        <p className="mt-5">
          By using the app, you are granted a limited, non-exclusive, non-transferable license to use the app for
          personal, non-commercial purposes.
        </p>
        <p className="mt-5">You may not:</p>
        <ul className={listClassName}>
          <li>Reverse engineer, decompile, or attempt to extract the source code of the app.</li>
          <li>Modify, copy, distribute, or create derivative works based on the app.</li>
          <li>Use the app for unlawful purposes.</li>
          <li>Interfere with the operation or security of the app.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Microphone Permission",
    content: (
      <>
        <p>Certain features, including the dB Meter, require access to your device&apos;s microphone.</p>
        <p className="mt-5">
          By granting microphone access, you authorize the app to measure environmental sound levels solely for
          display within the app.
        </p>
        <p className="mt-5">The app does not record, store, upload, or share audio captured through the microphone.</p>
      </>
    ),
  },
  {
    title: "Speaker Cleaning Disclaimer",
    content: (
      <>
        <p>
          Clear Wave Pro uses audio frequencies and sound patterns intended to assist with speaker cleaning and
          maintenance.
        </p>
        <p className="mt-5">
          Results may vary depending on device model, speaker condition, water exposure, hardware limitations, and
          other factors.
        </p>
        <p className="mt-5">
          We do not guarantee that speaker cleaning features will completely remove water, dust, or debris from any
          device.
        </p>
        <p className="mt-5">Use of the app is at your own discretion and risk.</p>
      </>
    ),
  },
  {
    title: "Subscriptions and In-App Purchases",
    content: (
      <>
        <p>Clear Wave Pro offers premium features through subscription plans and one-time purchases.</p>
        <p className="mt-5">Available purchase options may include:</p>
        <ul className={listClassName}>
          <li>Weekly Subscription</li>
          <li>Yearly Subscription</li>
          <li>Lifetime Purchase</li>
        </ul>
        <p className="mt-5">Pricing and feature availability are displayed within the app.</p>
        <p className="mt-5">
          Subscriptions automatically renew unless auto-renewal is disabled at least 24 hours before the end of the
          current subscription period.
        </p>
        <p className="mt-5">Payment will be charged to your Apple ID account upon confirmation of purchase.</p>
        <p className="mt-5">Subscriptions can be managed through your App Store account settings.</p>
        <p className="mt-5">
          All payments, subscription management, and refund requests are handled by Apple in accordance with Apple&apos;s
          policies.
        </p>
      </>
    ),
  },
  {
    title: "Privacy",
    content: (
      <>
        <p>Your use of the app is also governed by our Privacy Policy.</p>
        <p className="mt-5">
          By using Clear Wave Pro, you agree to the data practices described in the Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "Termination",
    content: (
      <>
        <p>
          We reserve the right to suspend or terminate access to the app at any time if you violate these Terms of Use
          or engage in behavior that may harm the app, its users, or our services.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer and Limitation of Liability",
    content: (
      <>
        <p>Clear Wave Pro is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis.</p>
        <p className="mt-5">
          We make no warranties, express or implied, regarding the reliability, availability, accuracy, or
          effectiveness of the app.
        </p>
        <p className="mt-5">
          To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental,
          consequential, special, or punitive damages arising from your use of the app.
        </p>
      </>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <>
        <p>We may update these Terms of Use from time to time.</p>
        <p className="mt-5">
          Any modifications will be posted within the app or on our website, and the &ldquo;Last Updated&rdquo; date
          will be revised accordingly.
        </p>
        <p className="mt-5">Continued use of the app after such changes constitutes acceptance of the revised Terms.</p>
      </>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms of Use are governed by and construed in accordance with the Apple Standard End User License
          Agreement (EULA) and any applicable local laws.
        </p>
        <p className="mt-5">
          Apple Standard EULA:{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          If you have any questions regarding these Terms of Use, please contact{" "}
          <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
        </p>
      </>
    ),
  },
];

export function ClearWaveTermsOfUsePage() {
  return (
    <LegalDocumentPage
      appName="Clear Wave Pro"
      documentTitle="Terms of Use"
      lastUpdated="May 29, 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
