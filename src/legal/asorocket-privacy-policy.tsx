import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>
      At ASO Rocket, we respect your privacy and are committed to being transparent about how information is handled
      when you use the app.
    </p>
    <p className="mt-5">
      If you have any questions about this Privacy Policy, please contact{" "}
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
          ASO Rocket provides keyword suggestions and app store optimization insights to help app developers improve
          their App Store listings.
        </p>
        <p className="mt-5">
          The app does not require you to create an account or personal profile, and we do not track the activity of
          identifiable individual users.
        </p>
      </>
    ),
  },
  {
    title: "Information We Do Not Collect",
    content: (
      <>
        <p>
          We do not collect your name, email address, contact details, login credentials, or other information that
          directly identifies you.
        </p>
        <p className="mt-5">
          We do not build user profiles, monitor individual keyword activity, or use your activity to identify you.
        </p>
      </>
    ),
  },
  {
    title: "Usage Data and Google Analytics",
    content: (
      <>
        <p>
          We use Google Analytics to collect anonymous or aggregated usage and diagnostic information. This helps us
          understand general app usage, identify technical issues, and improve ASO Rocket.
        </p>
        <p className="mt-5">
          This information may include general app interactions, feature usage, device type, operating system version,
          and crash or performance data. It is not used by us to identify individual users or to track who performed a
          specific action.
        </p>
        <p className="mt-5">
          Information processed by Google Analytics is also subject to Google&apos;s applicable privacy terms and
          policies.
        </p>
      </>
    ),
  },
  {
    title: "Advertising and Tracking",
    content: (
      <>
        <p>ASO Rocket does not include third-party advertising.</p>
        <p className="mt-5">
          We do not sell personal information, use app data for cross-app advertising, or track users for targeted
          advertising purposes.
        </p>
      </>
    ),
  },
  {
    title: "Subscriptions and Payments",
    content: (
      <>
        <p>ASO Rocket may offer premium features through auto-renewable subscriptions.</p>
        <p className="mt-5">
          Payments and subscription management are handled by Apple through the App Store. We do not collect, store,
          or process payment card information.
        </p>
        <p className="mt-5">
          Apple may process purchase and subscription information in accordance with its own privacy policy.
        </p>
      </>
    ),
  },
  {
    title: "Data Retention and Your Choices",
    content: (
      <>
        <p>
          Because ASO Rocket does not provide user accounts or collect information that directly identifies you, we
          generally cannot associate analytics information with a specific person.
        </p>
        <p className="mt-5">
          Retention of anonymous analytics and App Store transaction information is governed by the applicable
          third-party provider&apos;s policies.
        </p>
        <p className="mt-5">
          If you have a privacy request, contact <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a> and we will
          review it based on the information available to us.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <>
        <p>
          ASO Rocket is intended for app developers and is not directed toward children under 13 years of age. We do
          not knowingly collect personal information from children under 13.
        </p>
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
          We may update this Privacy Policy from time to time to reflect changes to the app, our practices, or
          applicable legal requirements.
        </p>
        <p className="mt-5">
          Updates will be posted on this page, and the &ldquo;Last updated&rdquo; date will be revised accordingly.
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
      </>
    ),
  },
];

export function ASORocketPrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      appName="ASO Rocket"
      documentTitle="Privacy Policy"
      lastUpdated="July 26, 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
