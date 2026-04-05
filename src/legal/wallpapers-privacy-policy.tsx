import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      At iScreen Wallpapers, protecting the privacy of our users is one of our top priorities. This Privacy Policy
      explains what data we collect, how it is used, and the steps we take to keep your information safe.
    </p>
    <p className="mt-5">
      We are committed to full transparency and responsible data handling in every part of our app. If you have any
      questions or concerns about this Privacy Policy, please contact us at{" "}
      <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
    </p>
  </>
);

const sections = [
  {
    title: "Overview",
    content: (
      <>
        <p>
          This Privacy Policy describes how iScreen Wallpapers handles information when you use the app. We focus on
          providing a curated wallpaper experience while keeping data collection limited and privacy-conscious.
        </p>
      </>
    ),
  },
  {
    title: "App Content",
    content: (
      <>
        <p>
          iScreen Wallpapers provides a curated collection of wallpapers across multiple categories, all exclusively
          created and owned by us.
        </p>
        <p className="mt-5">
          Users can browse, download, and set wallpapers on their iPhone or Apple Watch directly within the app. No
          user-generated content or external images are involved.
        </p>
      </>
    ),
  },
  {
    title: "Photo Library Permission",
    content: (
      <>
        <p>
          To save wallpapers to your device, iScreen Wallpapers requests permission to access your photo library. This
          permission is used solely to save selected wallpapers to your camera roll.
        </p>
        <p className="mt-5">
          We do not read, collect, upload, or process any existing photos or media on your device. Access is only used
          at the moment you choose to save a wallpaper.
        </p>
      </>
    ),
  },
  {
    title: "Image Data",
    content: (
      <>
        <p>
          iScreen Wallpapers does not collect, store, or share any image data. All wallpaper content is delivered
          through the app and saved locally to your device upon your request.
        </p>
        <p className="mt-5">
          No image processing, facial recognition, or photo analysis of any kind is performed. We do not transmit any
          image data to external servers or third parties.
        </p>
      </>
    ),
  },
  {
    title: "Device Identifiers",
    content: (
      <>
        <p>
          iScreen Wallpapers may collect certain device identifiers, such as a device ID, to distinguish between
          devices for service functionality purposes.
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
          We collect anonymized usage data to understand how users interact with the app, detect errors, and improve
          overall performance.
        </p>
        <p className="mt-5">
          This data does not include any personal information and is analyzed only in aggregate form. To assist with
          this, we use Google Analytics, which processes data anonymously. No data is ever tied to an identifiable
          individual.
        </p>
      </>
    ),
  },
  {
    title: "Advertising and Cookies",
    content: (
      <>
        <p>
          iScreen Wallpapers does not include advertisements and has no advertising partners. We do not use cookies,
          web beacons, or third-party ad trackers of any kind.
        </p>
      </>
    ),
  },
  {
    title: "In-App Purchases",
    content: (
      <>
        <p>
          iScreen Wallpapers offers subscription and purchase options. Payment processing is handled entirely by the
          Apple App Store.
        </p>
        <p className="mt-5">
          We do not collect, store, or process any payment information directly. All billing and refund inquiries are
          handled in accordance with Apple&apos;s policies.
        </p>
      </>
    ),
  },
  {
    title: "Apple Watch Integration",
    content: (
      <>
        <p>
          Users may set wallpapers on their Apple Watch through the app. This process is handled entirely on-device and
          through Apple&apos;s native frameworks.
        </p>
        <p className="mt-5">
          No data related to your Apple Watch usage is collected, stored, or transmitted by us.
        </p>
      </>
    ),
  },
  {
    title: "Children’s Privacy",
    content: (
      <>
        <p>
          iScreen Wallpapers is intended for a general audience and is not directed toward children under 4 years of
          age. We do not knowingly collect personal information from children under 4.
        </p>
        <p className="mt-5">
          If we become aware of any such collection, we will delete the relevant data as required by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other
          operational, legal, or regulatory reasons.
        </p>
        <p className="mt-5">
          Any updates will be posted on this page, and a notice will be shown within the app before changes take
          effect. The &ldquo;Last updated&rdquo; date at the top of this page always reflects the most recent revision.
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
          <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
        </p>
        <p className="mt-5">
          iScreen Wallpapers is committed to respecting your privacy and protecting your personal information.
        </p>
      </>
    ),
  },
];

export function WallpapersPrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      appName="iScreen AI Wallpapers"
      documentTitle="Privacy Policy"
      lastUpdated="April 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
