import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      At Retro Cam Neo, protecting the privacy of our users is one of our top priorities. This Privacy Policy explains
      what data we collect, how it is used, and the steps we take to keep your information safe.
    </p>
    <p className="mt-5">
      We are committed to full transparency and responsible data handling in every part of our app. If you have any
      questions or concerns about this Privacy Policy, contact us at{" "}
      <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
    </p>
  </>
);

const sections = [
  {
    title: "Camera Permission",
    content: (
      <>
        <p>
          Retro Cam Neo requests permission to access your device&apos;s camera solely to allow you to take photos
          within the app.
        </p>
        <p className="mt-5">
          Camera access is only active when you are actively using the in-app camera feature. We do not record video,
          capture images in the background, or access your camera at any other time.
        </p>
      </>
    ),
  },
  {
    title: "Photo Library Permission",
    content: (
      <>
        <p>
          Retro Cam Neo requests permission to access your photo library solely to allow you to save filtered photos to
          your Photos app.
        </p>
        <p className="mt-5">
          We do not read, collect, upload, or process any existing photos or media on your device. Access is only used
          at the moment you choose to save a photo.
        </p>
      </>
    ),
  },
  {
    title: "Image Data",
    content: (
      <>
        <p>
          All photos taken within Retro Cam Neo are processed entirely on your device. Camera simulations and filters
          are applied locally and the resulting image is stored within the app&apos;s internal gallery.
        </p>
        <p className="mt-5">
          No photos, image data, or facial information are uploaded, stored on our servers, or shared with any third
          party. We have no access to any photos you take or save.
        </p>
      </>
    ),
  },
  {
    title: "App Gallery",
    content: (
      <>
        <p>
          Retro Cam Neo maintains an internal gallery to display photos you have taken within the app. This gallery is
          stored locally on your device and is not accessible by us or any external service.
        </p>
      </>
    ),
  },
  {
    title: "Device Identifiers",
    content: (
      <>
        <p>
          Retro Cam Neo may collect certain device identifiers, such as a device ID, to distinguish between devices
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
          We collect anonymized usage data to understand how users interact with the app, detect errors, and improve
          overall performance.
        </p>
        <p className="mt-5">
          This data consists of anonymous interaction events such as button taps and feature usage, and does not
          include any personal information or photo content. It is analyzed only in aggregate form.
        </p>
        <p className="mt-5">
          To assist with this, we use Google Analytics, which processes data anonymously. No data is ever tied to an
          identifiable individual.
        </p>
      </>
    ),
  },
  {
    title: "Advertising and Cookies",
    content: (
      <>
        <p>
          Retro Cam Neo does not include advertisements and has no advertising partners. We do not use cookies, web
          beacons, or third-party ad trackers of any kind.
        </p>
      </>
    ),
  },
  {
    title: "In-App Purchases",
    content: (
      <>
        <p>
          Retro Cam Neo offers subscription plans and a lifetime purchase option to unlock premium features. Available
          plans include weekly and yearly subscriptions, as well as a one-time lifetime purchase.
        </p>
        <p className="mt-5">
          Pricing and plan details are available within the app. Subscriptions automatically renew unless auto-renewal
          is turned off at least 24 hours before the end of the current period through your App Store account settings.
        </p>
        <p className="mt-5">
          All payments are processed by the Apple App Store. We do not collect, store, or process any payment
          information directly. All billing and refund inquiries are handled in accordance with Apple&apos;s policies.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Retro Cam Neo is intended for a general audience and is not directed toward children under 13 years of age.
          We do not knowingly collect personal information from children under 13.
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
          Retro Cam Neo is committed to respecting your privacy and protecting your personal information.
        </p>
      </>
    ),
  },
];

export function RetroCamNeoPrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      appName="Retro Cam Neo"
      documentTitle="Privacy Policy"
      lastUpdated="April 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
