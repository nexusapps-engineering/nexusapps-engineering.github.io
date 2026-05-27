import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>Welcome to ClearWave.</p>
    <p className="mt-5">
      These Terms of Use are currently being prepared and this page is a temporary placeholder for the release
      version.
    </p>
    <p className="mt-5">TBD.</p>
  </>
);

const sections = [
  {
    title: "Use of the App",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Subscriptions and Billing",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "License",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "User Responsibilities",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Disclaimer",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <>
        <p>TBD.</p>
      </>
    ),
  },
  {
    title: "Changes to These Terms",
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

export function ClearWaveTermsOfUsePage() {
  return (
    <LegalDocumentPage
      appName="ClearWave"
      documentTitle="Terms of Use"
      lastUpdated="TBD"
      introduction={introduction}
      sections={sections}
    />
  );
}
