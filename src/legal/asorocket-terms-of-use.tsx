import { LegalDocumentPage } from "./LegalDocumentPage";

const introduction = (
  <>
    <p>Welcome to ASO Rocket.</p>
    <p className="mt-5">
      By downloading or using the app, you agree to these Terms of Use. If you do not agree with any part of these
      terms, please do not use ASO Rocket.
    </p>
  </>
);

const listClassName =
  "mt-5 list-disc space-y-3 pl-6 font-['Inter:Regular',sans-serif] text-[16px] leading-[1.8] tracking-[-0.2px] text-white/82";

const sections = [
  {
    title: "Definitions",
    content: (
      <>
        <p>&ldquo;You&rdquo; refers to the individual user of the app.</p>
        <p className="mt-5">
          &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo; refers to the developers of
          ASO Rocket operating under Nexus Apps.
        </p>
        <p className="mt-5">&ldquo;App&rdquo; refers to the ASO Rocket application.</p>
      </>
    ),
  },
  {
    title: "App Features and License",
    content: (
      <>
        <p>
          ASO Rocket provides keyword suggestions, app store optimization insights, and related tools intended to help
          app developers improve their App Store listings.
        </p>
        <p className="mt-5">
          We grant you a limited, non-exclusive, non-transferable, revocable license to use the app for your personal
          or internal business purposes, subject to these terms.
        </p>
        <p className="mt-5">You may not:</p>
        <ul className={listClassName}>
          <li>Reverse engineer, decompile, or attempt to extract the source code of the app.</li>
          <li>Copy, modify, distribute, sell, sublicense, or create derivative works based on the app.</li>
          <li>Use the app for unlawful, fraudulent, or abusive purposes.</li>
          <li>Interfere with the operation, security, or availability of the app.</li>
        </ul>
      </>
    ),
  },
  {
    title: "ASO and Keyword Disclaimer",
    content: (
      <>
        <p>
          Keyword suggestions, scores, recommendations, and other ASO insights provided by ASO Rocket are for
          informational purposes only.
        </p>
        <p className="mt-5">
          App Store rankings, visibility, downloads, conversion rates, and other results depend on many factors outside
          our control. We do not guarantee any particular ranking, number of downloads, revenue, or business outcome.
        </p>
        <p className="mt-5">
          You are responsible for reviewing recommendations and deciding whether they are appropriate for your app
          before using them.
        </p>
      </>
    ),
  },
  {
    title: "Developer Responsibilities",
    content: (
      <>
        <p>
          You are solely responsible for your app listings, metadata, keywords, marketing claims, and any changes you
          make based on information provided by ASO Rocket.
        </p>
        <p className="mt-5">
          You must ensure that your use of the app and all submitted App Store content complies with applicable laws,
          intellectual property rights, Apple&apos;s policies, and App Store Review Guidelines.
        </p>
      </>
    ),
  },
  {
    title: "Subscriptions",
    content: (
      <>
        <p>ASO Rocket may offer premium features through auto-renewable subscriptions.</p>
        <p className="mt-5">Available plans, prices, trial terms, and included features are displayed within the app.</p>
        <p className="mt-5">
          Payment is charged to your Apple ID account upon confirmation of purchase. Subscriptions renew automatically
          unless auto-renewal is turned off at least 24 hours before the end of the current subscription period.
        </p>
        <p className="mt-5">
          You can manage or cancel subscriptions through your App Store account settings. Billing, subscription
          management, and refund requests are handled by Apple in accordance with Apple&apos;s policies.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <>
        <p>
          ASO Rocket, including its software, design, branding, content, and underlying technology, is owned by us or
          our licensors and is protected by applicable intellectual property laws.
        </p>
        <p className="mt-5">
          These terms do not transfer any ownership rights in the app or its content to you.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Services",
    content: (
      <>
        <p>
          ASO Rocket may rely on third-party services, including Apple for app distribution and billing and Google
          Analytics for anonymous or aggregated analytics.
        </p>
        <p className="mt-5">
          Third-party services may be governed by their own terms and privacy policies, and we are not responsible for
          their availability or independent practices.
        </p>
      </>
    ),
  },
  {
    title: "Privacy",
    content: (
      <>
        <p>Your use of ASO Rocket is also governed by our Privacy Policy.</p>
        <p className="mt-5">
          By using the app, you acknowledge the data practices described in the Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "Termination",
    content: (
      <>
        <p>
          We may suspend or terminate access to the app if you violate these terms, misuse the app, or engage in
          conduct that may harm the app, its users, or our services.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer and Limitation of Liability",
    content: (
      <>
        <p>ASO Rocket is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis.</p>
        <p className="mt-5">
          To the maximum extent permitted by law, we make no warranties regarding the accuracy, completeness,
          reliability, availability, or effectiveness of the app or its recommendations.
        </p>
        <p className="mt-5">
          To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, special,
          consequential, or punitive damages, loss of revenue, loss of data, or business decisions arising from your
          use of the app.
        </p>
      </>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <>
        <p>We may update these Terms of Use from time to time.</p>
        <p className="mt-5">
          Updated terms will be posted on this page, and the &ldquo;Last updated&rdquo; date will be revised
          accordingly. Continued use of ASO Rocket after an update takes effect constitutes acceptance of the revised
          terms.
        </p>
      </>
    ),
  },
  {
    title: "Governing Terms and Apple Standard EULA",
    content: (
      <>
        <p>
          These Terms of Use are governed by applicable law and, where applicable, the{" "}
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
          If you have any questions regarding these Terms of Use, please contact{" "}
          <a href="mailto:hello@nexusapps.co">hello@nexusapps.co</a>.
        </p>
      </>
    ),
  },
];

export function ASORocketTermsOfUsePage() {
  return (
    <LegalDocumentPage
      appName="ASO Rocket"
      documentTitle="Terms of Use"
      lastUpdated="July 26, 2026"
      introduction={introduction}
      sections={sections}
    />
  );
}
