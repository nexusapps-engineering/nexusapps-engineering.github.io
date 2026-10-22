import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      At ClearX, one of our main priorities is the privacy of our visitors. This Privacy Policy explains what
      information is collected and recorded by ClearX and how that information is used.
    </p>
    <p className="mt-5">
      If you have additional questions or need more information about this Privacy Policy, contact us at{" "}
      <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
    </p>
  </>
);

const sections = [
  {
    title: "Photo Library Access and Image Data",
    content: (
      <>
        <p>
          ClearX helps you review and delete photos from your device&apos;s photo library. Photo access is used
          to display and manage the photos you allow the app to access, including submitting your chosen deletions
          through iOS photo library controls.
        </p>
        <p className="mt-5">
          Photos are processed on your device. We do not upload your photos to our servers, collect or retain copies
          of your photos, or share photo content with analytics or purchase service providers. We do not collect or
          retain facial data from your photos.
        </p>
        <p className="mt-5">
          Deleting photos changes your photo library. If you use iCloud Photos, Apple may synchronize those deletions
          with iCloud and other devices connected to your Apple Account. That synchronization is managed by Apple
          under your device settings and Apple&apos;s policies.
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
          These identifiers help distinguish app installations and manage access to purchased features. They may be
          associated with usage events or purchase records, but do not include the contents of your photo library.
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
          may include feature interactions, device information, and diagnostic events. We review aggregated analytics
          to understand how the app is used; some service records may be associated with an app or device identifier.
        </p>
        <p className="mt-5">
          We use App Store Connect, Google Analytics, and RevenueCat to help operate and improve the app. These
          services process usage, device, and transaction-related information for analytics, app performance monitoring,
          subscription management, and lifetime purchase entitlements. Apple handles payment details; we do not receive
          your full payment card information. These providers process data under their own privacy policies.
        </p>
      </>
    ),
  },
  {
    title: "Advertising and Tracking",
    content: (
      <>
        <p>
          ClearX does not display third-party advertising in the app and does not use third-party ad servers,
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
          We do not retain image data or facial data because that data is not collected. For analytics or
          transaction-related information provided through third-party services, retention may be governed by the
          applicable service provider&apos;s systems and policies.
        </p>
        <p className="mt-5">
          Because some information is aggregated or not tied to a direct user account, we may
          not be able to identify or delete a specific record associated with you. If you have a privacy request, you
          can contact us at <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>, and we will review it based on
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
          You control photo access through iOS settings and can change or revoke that permission at any time.
          Where supported by iOS, you can limit access to selected photos. ClearX can only manage photos within the
          access you grant; limiting or denying access may make photo management features unavailable.
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
          the information they share and/or that is collected in ClearX.
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
        <p>By using ClearX, you acknowledge this Privacy Policy. Where consent is required for a particular data
          practice or permission, we request it separately. See also our <a href="/clearx/terms-of-use">Terms of Use</a>.</p>
      </>
    ),
  },
];

export function ClearXPrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      appName="ClearX"
      documentTitle="Privacy Policy"
      lastUpdated="October 22, 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
