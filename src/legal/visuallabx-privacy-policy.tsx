import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      At Visual LabX, one of our main priorities is the privacy of our visitors. This Privacy Policy explains what
      information is collected and recorded by Visual LabX and how that information is used.
    </p>
    <p className="mt-5">
      If you have additional questions or need more information about this Privacy Policy, contact us at{" "}
      <a href="mailto:info@nexusapps.co">info@nexusapps.co</a>.
    </p>
  </>
);

const sections = [
  {
    title: "Image Data and Face Data",
    content: (
      <>
        <p>
          We do not collect or store any image data in any way. The app only allows users to edit and process images
          selected from their own devices.
        </p>
        <p className="mt-5">
          During that process, no image data or facial data is extracted or stored. We do not retain face data, we do
          not share image data with third parties, and no image data is stored within the app or on external servers.
        </p>
        <p className="mt-5">
          Because we do not collect image data, there is no retention period for that data. Protecting user privacy is
          a core priority, and our practices are designed around that principle.
        </p>
      </>
    ),
  },
  {
    title: "AI Quick Edit Feature",
    content: (
      <>
        <p>
          The AI Quick Edit feature in Visual LabX allows users to enhance and transform photos directly on their
          devices using artificial intelligence.
        </p>
        <p className="mt-5">
          All processing is performed locally on the user&apos;s device. No photos, image data, or facial information
          are uploaded, stored, or shared externally during the AI editing process. The images remain solely on the
          user&apos;s device and are never accessed by our team or stored on any server.
        </p>
      </>
    ),
  },
  {
    title: "Identifiers",
    content: (
      <>
        <p>
          Our application collects certain technical information such as device identifiers, including a device ID, in
          order to distinguish between devices and provide the service.
        </p>
        <p className="mt-5">
          These identifiers are not associated with individual user identities. We do not collect or share personal
          identities through this data.
        </p>
      </>
    ),
  },
  {
    title: "Usage Data and Third-Party Services",
    content: (
      <>
        <p>
          We collect data about how users interact with the application to improve the user experience and analyze app
          performance.
        </p>
        <p className="mt-5">
          This information helps us understand user interactions, detect errors, and respond to user needs. Usage data
          is collected in anonymized form and analyzed in aggregate, without including individual user identities.
        </p>
        <p className="mt-5">
          We use App Store Connect, Google Analytics, and RevenueCat to help operate and improve the app. These
          services provide anonymized or generic usage and transaction information that supports analytics, app
          performance monitoring, and subscription management.
        </p>
      </>
    ),
  },
  {
    title: "Advertising and Tracking",
    content: (
      <>
        <p>
          Visual LabX does not display third-party advertising in the app and does not use third-party ad servers,
          advertising cookies, or web beacons for in-app advertising.
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
          transaction-related information provided through third-party services, retention may be governed by the
          applicable service provider&apos;s systems and policies.
        </p>
        <p className="mt-5">
          Because the information available to us is generally anonymized or not tied to a direct user account, we may
          not be able to identify or delete a specific record associated with you. If you have a privacy request, you
          can contact us at <a href="mailto:info@nexusapps.co">info@nexusapps.co</a>, and we will review it based on
          the data available to us.
        </p>
      </>
    ),
  },
  {
    title: "Permissions and Your Choices",
    content: (
      <>
        <p>
          If you grant the app access to your photos or other device permissions, you can revoke that access at any
          time through your device settings. If you do not want the app to access a device permission, do not grant it
          or disable it later in iOS settings.
        </p>
      </>
    ),
  },
  {
    title: "Children's Information",
    content: (
      <>
        <p>
          Our services are intended for a general audience. They are not directed to or targeted toward children under
          13 years of age and are not intended for use by children under 13.
        </p>
        <p className="mt-5">
          If we learn that data was collected through our services from a child under 13 without the consent of a
          parent or guardian where required by law, we will delete that information.
        </p>
      </>
    ),
  },
  {
    title: "Online Privacy Policy Only",
    content: (
      <>
        <p>
          This Privacy Policy applies only to our online activities and is valid for users of the app with respect to
          the information they share and/or that is collected in Visual LabX.
        </p>
        <p className="mt-5">
          It does not apply to any information collected offline or through channels other than this app.
        </p>
      </>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will post the updated Privacy Policy on
          this page and revise the &ldquo;Last updated&rdquo; date shown above.
        </p>
        <p className="mt-5">
          If a change is material, we may also provide a more prominent notice within the service before the change
          becomes effective. Continued use of the app after changes are posted means the updated policy applies.
        </p>
      </>
    ),
  },
  {
    title: "Consent",
    content: (
      <>
        <p>By using our app, you consent to this Privacy Policy and agree to its Terms and Conditions.</p>
      </>
    ),
  },
];

export function VisualLabXPrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      appName="Visual LabX"
      documentTitle="Privacy Policy"
      lastUpdated="June 26, 2025"
      introduction={introduction}
      sections={sections}
    />
  );
}
