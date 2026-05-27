import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>This Privacy Policy for ClearWave is currently being prepared.</p>
    <p className="mt-5">
      This page is a temporary placeholder and will be updated with the final privacy terms before the app is
      published.
    </p>
    <p className="mt-5">TBD.</p>
  </>
);

const sections = [
  {
    title: "Information We Collect",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "How We Use Information",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Third-Party Services",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Your Choices",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
];

export function ClearWavePrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      appName="ClearWave"
      documentTitle="Privacy Policy"
      lastUpdated="TBD"
      introduction={introduction}
      sections={sections}
    />
  );
}
