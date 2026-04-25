import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      Welcome to Retro Cam Neo. By downloading or using this app, you agree to be bound by these Terms of Use. If you
      do not agree with any part of these terms, please do not use Retro Cam Neo.
    </p>
    <p className="mt-5">
      In these terms, &ldquo;you&rdquo; refers to the individual user of the app, and &ldquo;we,&rdquo;
      &ldquo;our,&rdquo; or &ldquo;us&rdquo; refers to the developers of Retro Cam Neo operating under Nexus Apps.
    </p>
  </>
);

const sections = [
  {
    title: "Definitions",
    content: (
      <>
        <p>&ldquo;You&rdquo; refers to the individual user of the app.</p>
        <p className="mt-5">
          &ldquo;Company,&rdquo; &ldquo;We,&rdquo; &ldquo;Our,&rdquo; or &ldquo;Us&rdquo; refers to the developers of
          Retro Cam Neo operating under Nexus Apps.
        </p>
        <p className="mt-5">&ldquo;App&rdquo; refers to the Retro Cam Neo application.</p>
        <p className="mt-5">
          &ldquo;Content&rdquo; refers to all camera simulations, filters, designs, and materials available within the
          app.
        </p>
      </>
    ),
  },
  {
    title: "App Features and License",
    content: (
      <>
        <p>
          Retro Cam Neo allows you to take photos using your device&apos;s camera and apply retro camera simulations
          and filters to those photos. Filtered photos are stored in the app&apos;s internal gallery and can
          optionally be saved to your device&apos;s Photos library.
        </p>
        <p className="mt-5">
          All camera simulations, filters, and other creative assets within the app are owned by us or our licensors.
          By using the app, you are granted a limited, non-exclusive, non-transferable license to use these features
          for personal, non-commercial purposes only.
        </p>
        <p className="mt-5">
          You may not copy, reproduce, or redistribute any filters, simulations, or other assets from the app; sell,
          sublicense, or commercially exploit any content or features of the app; or use the app&apos;s assets in a
          way that infringes on our intellectual property rights.
        </p>
      </>
    ),
  },
  {
    title: "Camera Permission",
    content: (
      <>
        <p>
          Retro Cam Neo requires access to your device&apos;s camera to enable photo capture within the app. By
          granting camera permission, you authorize the app to use your camera only while you are actively using the
          in-app camera feature.
        </p>
        <p className="mt-5">The app does not access your camera in the background or at any other time.</p>
      </>
    ),
  },
  {
    title: "Photo Library Permission",
    content: (
      <>
        <p>
          To save filtered photos to your Photos app, Retro Cam Neo requires permission to access your photo library.
          By granting this permission, you authorize the app to save photos you choose to export.
        </p>
        <p className="mt-5">
          The app does not access, read, collect, or upload any of your existing photos or other media files.
        </p>
      </>
    ),
  },
  {
    title: "User Photos",
    content: (
      <>
        <p>
          Photos taken within Retro Cam Neo are processed and stored entirely on your device. We have no access to any
          photos you take or save.
        </p>
        <p className="mt-5">
          You are solely responsible for the content you capture and how you use or share it outside of the app.
        </p>
      </>
    ),
  },
  {
    title: "Subscriptions and In-App Purchases",
    content: (
      <>
        <p>Retro Cam Neo offers purchase options to unlock premium features.</p>
        <p className="mt-5">
          Available plans include a weekly subscription that renews automatically every week, a yearly subscription
          that renews automatically every year, and a lifetime purchase that provides permanent access through a
          one-time payment.
        </p>
        <p className="mt-5">
          Pricing and plan details are available within the app. Subscriptions automatically renew unless auto-renewal
          is turned off at least 24 hours before the end of the current period through your App Store account settings.
        </p>
        <p className="mt-5">
          All payments are processed by the Apple App Store. We do not process payments or issue refunds directly.
          Refunds are handled exclusively by Apple in accordance with their policies.
        </p>
      </>
    ),
  },
  {
    title: "User Conduct",
    content: (
      <>
        <p>By using Retro Cam Neo, you agree not to use the app for any unlawful or unauthorized purpose.</p>
        <p className="mt-5">
          You also agree not to attempt to reverse-engineer, decompile, or extract the source code of the app.
        </p>
        <p className="mt-5">
          You must not interfere with the proper operation of the app or its servers, or use automated tools or
          scripts to access app content or features.
        </p>
      </>
    ),
  },
  {
    title: "Privacy",
    content: (
      <>
        <p>
          Your use of the app is also governed by our Privacy Policy, which is incorporated into these Terms of Use by
          reference.
        </p>
        <p className="mt-5">
          By using the app, you agree to the data practices described in our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "Termination",
    content: (
      <>
        <p>
          We reserve the right to suspend or terminate access to Retro Cam Neo at any time, without prior notice, if
          you violate these Terms of Use or engage in behavior we determine to be harmful to other users, the app, or
          our reputation.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer and Limitation of Liability",
    content: (
      <>
        <p>
          Retro Cam Neo is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties
          of any kind, either express or implied.
        </p>
        <p className="mt-5">
          We do not guarantee that the app will be error-free, uninterrupted, or free of viruses or other harmful
          components.
        </p>
        <p className="mt-5">
          To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of the app or inability to access the app.
        </p>
      </>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms of Use from time to time. Any changes will be posted within the app, and the
          &ldquo;Last updated&rdquo; date will be revised accordingly.
        </p>
        <p className="mt-5">
          Continued use of the app after such changes constitutes your acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms of Use are governed by and construed in accordance with the Apple Standard End User License
          Agreement (EULA), in addition to any applicable local laws.
        </p>
        <p className="mt-5">
          For more information, please review the{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Standard End User License Agreement
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          For any questions or concerns regarding these Terms of Use, please reach out to us at{" "}
          <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
        </p>
      </>
    ),
  },
];

export function RetroCamNeoTermsOfUsePage() {
  return (
    <LegalDocumentPage
      appName="Retro Cam Neo"
      documentTitle="Terms of Use"
      lastUpdated="April 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
