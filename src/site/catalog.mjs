export const origin = 'https://nexusapps.co';
export const email = 'hello@nexusapps.co';

export const products = [
  {
    slug: 'visuallabx', name: 'Visual LabX', category: 'Photo editing',
    summary: 'Photo editing with creative presets, film-inspired filters and retouching tools.',
    description: 'Visual LabX brings photo filters, effects and retouching into one editing workflow. Creators can explore different looks and adjust their photos before saving them.',
    features: ['Creative presets and photo filters', 'Film-inspired effects and color adjustments', 'Face and body retouching tools'],
    focus: 'A visual editing workflow that brings creative tools together in a focused mobile product.',
    appStoreUrl: 'https://apps.apple.com/us/app/visual-labx-ai-photo-editor/id6449296377',
    color: '#251425', services: ['mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'photocamai', name: 'Photo CamAI', category: 'AI photo editing',
    summary: 'An iPhone photo editor with one-tap enhancements powered by on-device AI.',
    description: 'Photo CamAI analyzes lighting, colors and the subject of an imported photo to apply suitable enhancements. Its App Store listing describes AI processing that runs on the iPhone.',
    features: ['One-tap photo enhancement', 'On-device scene and subject analysis', 'Presets and saving edits to the photo library'],
    focus: 'Turning an AI capability into a simple interaction, with photo processing on the device.',
    appStoreUrl: 'https://apps.apple.com/us/app/photo-camai-ai-photo-editor/id6755936591',
    color: '#10232c', services: ['mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'wallpapers', name: 'Wallpapers Neo', category: 'Personalization',
    summary: 'A curated wallpaper collection with categories, favorites and text customization.',
    description: 'Wallpapers Neo helps people find and personalize backgrounds across a range of visual styles. Users can browse categories, save favorites and add text before saving a wallpaper.',
    features: ['Wallpaper collections organized by style', 'Favorites and quick saving', 'Custom text before downloading'],
    focus: 'Content discovery and personalization in a consumer app that people can return to.',
    appStoreUrl: 'https://apps.apple.com/app/6758549154',
    color: '#222713', services: ['mobile-app-development'],
    legalName: 'iScreen AI Wallpapers',
  },
  {
    slug: 'retrocamneo', name: 'Retro Cam Neo', category: 'Camera',
    summary: 'A vintage camera with real-time film looks, adjustable grain and light leaks.',
    description: 'Retro Cam Neo lets people shoot with analog-inspired camera presets and preview the look in real time. Exposure, warmth and grain controls help shape each photo.',
    features: ['Real-time vintage camera presets', 'Film grain and light leak effects', 'Exposure, warmth and aspect ratio controls'],
    focus: 'A camera experience where visual character and responsive controls work together.',
    appStoreUrl: 'https://apps.apple.com/de/app/retro-cam-neo-vintage-camera/id6760256815?l=en-GB',
    color: '#2c2510', services: ['mobile-app-development'],
  },
  {
    slug: 'clearwave', name: 'Clear Wave Pro', category: 'Audio utility',
    summary: 'Speaker cleaning modes, stereo testing and a real-time sound meter in one utility.',
    description: 'Clear Wave Pro brings sound-based speaker cleaning modes, left and right speaker tests and surrounding sound measurement into one interface.',
    features: ['Sound-based speaker cleaning modes', 'Left, right and stereo speaker tests', 'A real-time decibel meter'],
    focus: 'Making device-focused tools easy to discover and use in a compact mobile interface.',
    appStoreUrl: 'https://apps.apple.com/de/app/clear-wave-pro-water-eject/id6769302852?l=en-GB',
    color: '#102b3e', services: ['mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'asorocket', name: 'ASO Rocket', category: 'Developer tool',
    summary: 'An App Store keyword tool for discovering ideas, organizing lists and preparing metadata.',
    description: 'ASO Rocket helps app developers and marketers discover keyword ideas, save them in organized lists and copy a keyword string for App Store Connect.',
    features: ['Keyword discovery across App Store categories', 'Saved keyword lists with search and filtering', 'Copying keywords for metadata workflows'],
    focus: 'Turning a repeated developer task into a dedicated research and organization tool.',
    appStoreUrl: 'https://apps.apple.com/de/app/aso-rocket-keyword-tool/id6777735509?l=en-GB',
    color: '#21172f', services: ['mobile-app-development', 'mvp-development'],
  },
];

export const services = [
  {
    slug: 'mobile-app-development', name: 'Mobile app development', shortName: 'Mobile apps', number: '01',
    headline: 'Your product. In their hands.',
    summary: 'iOS and Android app development, from the first product decisions to release and ongoing improvements.',
    introduction: 'Build an app around what your customers or team need to do. We help define the scope, design the experience and develop the mobile product, with a release plan agreed around your business.',
    audience: 'For businesses launching a customer app, founders building a mobile product, and teams improving an existing experience.',
    deliverables: [
      ['Product scope', 'User journeys, essential features and a clear first release.'],
      ['Interface design', 'Mobile screens and interactions shaped around the people using them.'],
      ['App development', 'Implementation for the agreed platforms, including the backend and integrations your scope needs.'],
      ['Testing and release', 'Device testing, release preparation and help with store submission.'],
    ],
    evidence: 'Published iOS products we build and operate ourselves. Explore the apps to see our approach to mobile product design and development.',
    questions: [
      ['Can you build for both iOS and Android?', 'Yes. We discuss your audience, platform requirements and budget before agreeing on a native or shared implementation approach. Our current public app examples are on the Apple App Store.'],
      ['What determines the cost and timeline?', 'Platform count, screen complexity, integrations, accounts, payments and backend requirements all affect the scope. We agree on deliverables and a release plan before development; there is no universal price or deadline.'],
      ['Can you work on an existing app?', 'We can discuss an existing product after reviewing its code, design and current requirements. That review determines what can be reused and what needs to change.'],
      ['What happens after launch?', 'Maintenance, release updates and new features can be agreed as an ongoing engagement. The scope and responsibilities are made explicit rather than assumed.'],
    ],
  },
  {
    slug: 'web-app-development', name: 'Web app development', shortName: 'Web products', number: '02',
    headline: 'Software that works where you do.',
    summary: 'Web applications, SaaS products, customer portals and internal tools built around your workflows.',
    introduction: 'Bring a business workflow or product idea into the browser. We plan the user experience, application structure and integrations together, so the first release has a clear job to do.',
    audience: 'For companies replacing manual work, teams creating customer-facing software, and founders launching a browser-based product.',
    deliverables: [
      ['Workflow definition', 'Roles, permissions and the tasks the product needs to support.'],
      ['Responsive design', 'Interfaces that work across the devices your users rely on.'],
      ['Application development', 'Frontend, backend, data storage and agreed integrations.'],
      ['Launch preparation', 'Testing, deployment planning and a handover matched to your team.'],
    ],
    evidence: 'Our in-house iOS apps show how we shape focused product experiences. Explore the portfolio and discuss how that approach can inform your web product.',
    questions: [
      ['What kinds of web products can we discuss?', 'SaaS applications, dashboards, customer portals and internal tools. We start with the workflow and users, then agree on the product scope.'],
      ['Can the product connect to our existing systems?', 'We assess the available APIs, access requirements and data flows during discovery. Integrations are included only after their feasibility and scope have been established.'],
      ['How do you choose the technology?', 'The decision follows the product requirements, expected usage, integrations and the team that will maintain it. We do not select a stack before understanding those constraints.'],
      ['Can you improve the product after release?', 'Yes. A continuing engagement can cover maintenance, new workflows and product improvements, with priorities and responsibilities agreed together.'],
    ],
  },
  {
    slug: 'mvp-development', name: 'MVP development', shortName: 'MVP & product partnership', number: '03',
    headline: 'Start with the part that matters.',
    summary: 'Turn an idea into a focused first release, then develop the product as you learn from real use.',
    introduction: 'An MVP should answer a clear product question. We help separate the essential user journey from the later roadmap, then design and build a first release that you can put in front of users.',
    audience: 'For founders testing an idea, small businesses launching a new offering, and established companies exploring a new digital product.',
    deliverables: [
      ['A focused brief', 'The problem, target users and the question the first release should answer.'],
      ['Prioritized scope', 'Essential features, acceptance criteria and a separate list for later.'],
      ['A usable first product', 'Design, development and testing for the agreed mobile or web release.'],
      ['A next-step plan', 'A handover and a discussion of what to measure, improve or build next.'],
    ],
    evidence: 'Our own published apps provide concrete examples of focused product experiences, from creative tools to a dedicated developer utility.',
    questions: [
      ['Do I need a detailed specification before contacting you?', 'No. Start with the problem, intended users and what you already have. We can discuss the work needed to turn those inputs into an agreed scope.'],
      ['Does an MVP have to be a mobile app?', 'No. The right first release could be a web product or a mobile app. The choice depends on the user journey and what the project needs to validate.'],
      ['Can we include AI features?', 'We can assess AI features where they solve a specific user problem. Feasibility, data handling, operating costs and evaluation need to be considered before those features enter the scope.'],
      ['Can Nexus remain our product development partner?', 'Yes. We can discuss an ongoing engagement for product iteration, new releases and maintenance after the first version.'],
    ],
  },
];

export const processSteps = [
  ['Understand the problem', 'We discuss your users, business goals, existing product and constraints. Start with what you know; a finished specification is not required.'],
  ['Agree on the scope', 'We define the first release, responsibilities and acceptance criteria. Cost and timing follow that scope, including any integrations and dependencies.'],
  ['Design the experience', 'We map the key journeys and work through the screens and interactions before committing them to development.'],
  ['Build and review', 'Development moves through agreed milestones. Reviews connect implementation decisions to the original product brief.'],
  ['Test and launch', 'We test the agreed journeys, prepare the release and coordinate store submission or web deployment as appropriate.'],
  ['Maintain and improve', 'After launch, ongoing support and further development can be agreed around product feedback and business priorities.'],
];

export function projectEmail(service = 'App development', product = '') {
  const subject = `Project inquiry — ${service}`;
  const body = `Hi Nexus,\n\nI would like to discuss ${service.toLowerCase()}${product ? ` after seeing ${product}` : ''}.\n\nCompany / website:\nProblem we want to solve:\nWho will use the product:\nTarget platform(s):\nWhat we have so far:\nTiming / constraints:\n\nThanks!`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
