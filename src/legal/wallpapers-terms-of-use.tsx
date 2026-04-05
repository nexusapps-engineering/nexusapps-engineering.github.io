import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>Welcome to iScreen Wallpapers.</p>
    <p className="mt-5">
      By downloading or using this app, you agree to be bound by these Terms of Use. If you do not agree with any part
      of these terms, please do not use iScreen Wallpapers.
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
          iScreen Wallpapers operating under Nexus Apps.
        </p>
        <p className="mt-5">&ldquo;App&rdquo; refers to the iScreen Wallpapers application.</p>
        <p className="mt-5">
          &ldquo;Content&rdquo; refers to all wallpapers, images, designs, and materials available within the app.
        </p>
      </>
    ),
  },
  {
    title: "App Content and License",
    content: (
      <>
        <p>
          All wallpapers and visual content available in iScreen Wallpapers are exclusively created and owned by us or
          our licensors.
        </p>
        <p className="mt-5">
          By using the app, you are granted a limited, non-exclusive, non-transferable license to view and use the
          content for personal, non-commercial purposes only.
        </p>
        <p className="mt-5">
          You may not copy, reproduce, or redistribute any content from the app; sell, sublicense, or commercially
          exploit any wallpapers or designs; or use the content in a way that infringes on our intellectual property
          rights.
        </p>
      </>
    ),
  },
  {
    title: "Photo Library Permission",
    content: (
      <>
        <p>
          To save wallpapers to your device, the app requires permission to access your photo library. By granting this
          permission, you authorize the app to save wallpapers you select to your camera roll.
        </p>
        <p className="mt-5">
          The app does not access, read, collect, or upload any of your existing photos or other media files.
        </p>
      </>
    ),
  },
  {
    title: "Apple Watch Feature",
    content: (
      <>
        <p>
          iScreen Wallpapers allows users to set wallpapers on their Apple Watch. This feature uses Apple&apos;s native
          frameworks and operates entirely on your device.
        </p>
        <p className="mt-5">
          By using this feature, you acknowledge that its availability and functionality may depend on your device,
          watchOS version, and Apple&apos;s platform guidelines.
        </p>
      </>
    ),
  },
  {
    title: "Subscriptions and In-App Purchases",
    content: (
      <>
        <p>
          iScreen Wallpapers offers subscription plans and one-time purchase options to unlock premium content. Pricing
          and plan details are available within the app.
        </p>
        <p className="mt-5">
          Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the
          current period through your App Store account settings.
        </p>
        <p className="mt-5">
          All payments are processed by the Apple App Store. Refunds are handled exclusively by Apple in accordance
          with their policies. We do not process payments or issue refunds directly.
        </p>
      </>
    ),
  },
  {
    title: "User Conduct",
    content: (
      <>
        <p>
          By using iScreen Wallpapers, you agree not to use the app for any unlawful or unauthorized purpose, attempt
          to reverse-engineer, decompile, or extract the source code of the app, interfere with the proper operation of
          the app or its servers, or use automated tools or scripts to access app content.
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
          reference. By using the app, you agree to the data practices described in our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "Termination",
    content: (
      <>
        <p>
          We reserve the right to suspend or terminate access to iScreen Wallpapers at any time, without prior notice,
          if you violate these Terms of Use or engage in behavior we determine to be harmful to other users, the app,
          or our reputation.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer and Limitation of Liability",
    content: (
      <>
        <p>
          iScreen Wallpapers is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without
          warranties of any kind, either express or implied.
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

export function WallpapersTermsOfUsePage() {
  return (
    <LegalDocumentPage
      appName="iScreen AI Wallpapers"
      documentTitle="Terms of Use"
      lastUpdated="April 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
