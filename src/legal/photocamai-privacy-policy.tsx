import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      At Photo CamAI, protecting user privacy is a core priority. This Privacy Policy explains what data we collect,
      how it is used, and the steps we take to protect your information.
    </p>
    <p className="mt-5">
      We are committed to transparency and data protection across every part of the app. If you have questions or
      concerns about this Privacy Policy, contact us at <a href="mailto:info@nexusapps.co">info@nexusapps.co</a>.
    </p>
  </>
);

const sections = [
  {
    title: "Image Data",
    content: (
      <>
        <p>
          We do not collect, store, or share image data in any way. Photo CamAI allows users to edit and process
          photos directly from their devices.
        </p>
        <p className="mt-5">
          During this process, no image data or facial data is extracted, uploaded, or stored. Photo CamAI never
          transmits image data to servers or external systems. All image-related actions occur solely on the user&apos;s
          device.
        </p>
      </>
    ),
  },
  {
    title: "Edit With AI Feature",
    content: (
      <>
        <p>
          The Edit With AI feature allows users to enhance and transform photos using artificial intelligence. All AI
          processing is performed locally on the user&apos;s device.
        </p>
        <p className="mt-5">
          No photos, image data, or facial information are uploaded, stored, or shared externally. Images remain
          entirely on the user&apos;s device and are never accessed by our team or any server.
        </p>
      </>
    ),
  },
  {
    title: "Identifiers",
    content: (
      <>
        <p>
          Photo CamAI may collect certain device identifiers, such as a device ID, to distinguish between devices.
          These identifiers are not linked to individual user identities and are used solely for service functionality.
        </p>
        <p className="mt-5">User identity data is never collected or shared.</p>
      </>
    ),
  },
  {
    title: "Usage Data and Third-Party Services",
    content: (
      <>
        <p>
          We collect anonymized usage data to understand user interactions, detect errors, and improve performance.
          This data does not include personal information and is analyzed only in aggregate form.
        </p>
        <p className="mt-5">
          To help improve the app, we use App Store Connect, Google Analytics, and RevenueCat, which provide
          anonymized or generic app usage and transaction information for analytics, reliability, and subscription
          management.
        </p>
      </>
    ),
  },
  {
    title: "Advertising and Tracking",
    content: (
      <>
        <p>
          Photo CamAI does not include advertisements and has no advertising partners. As a result, no cookies, web
          beacons, or third-party ad servers are used within the app.
        </p>
      </>
    ),
  },
  {
    title: "Data Retention and Deletion",
    content: (
      <>
        <p>
          We do not retain image data or facial data because that data is not collected. For anonymized analytics or
          transaction-related information that may be available through third-party services, retention may be governed
          by the relevant provider&apos;s systems and policies.
        </p>
        <p className="mt-5">
          Because the information available to us is generally anonymized or not linked to a direct user account, we
          may not be able to identify or delete a specific record associated with you. If you have a privacy request,
          contact us at <a href="mailto:info@nexusapps.co">info@nexusapps.co</a> and we will review it based on the
          data available to us.
        </p>
      </>
    ),
  },
  {
    title: "Permissions and Your Choices",
    content: (
      <>
        <p>
          If you grant Photo CamAI access to your photos or other device permissions, you can revoke that access at any
          time through your device settings.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Photo CamAI is intended for a general audience and is not directed toward children under 13 years of age. We
          do not knowingly collect personal information from children under 13.
        </p>
        <p className="mt-5">
          If we become aware of any such collection, we will delete the data as required by law.
        </p>
      </>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. Any updates will be reflected on this page, and notice
          of material changes may be displayed within the app before they take effect.
        </p>
        <p className="mt-5">
          The &ldquo;Last updated&rdquo; date at the top of this policy indicates the latest revision.
        </p>
      </>
    ),
  },
];

export function PhotoCamAIPrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      appName="Photo CamAI"
      documentTitle="Privacy Policy"
      lastUpdated="January 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
