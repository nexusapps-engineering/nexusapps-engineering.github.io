export const origin = 'https://nexusapps.co';
export const email = 'hello@nexusapps.co';

export const products = [
  {
    slug: 'visuallabx', name: 'Visual LabX', category: 'Photo editing',
    summary: 'Photo editing with creative presets, film-inspired filters and retouching tools.',
    description: 'Edit photos with creative presets, film-inspired effects and retouching tools. Try different looks and fine-tune the details before saving.',
    features: ['Creative presets and photo filters', 'Film-inspired effects and color adjustments', 'Face and body retouching tools'],
    focus: 'Apply a preset for a starting point, then adjust color and retouch the details in the same editor.',
    appStoreUrl: 'https://apps.apple.com/us/app/visual-labx-ai-photo-editor/id6449296377',
    color: '#251425', services: ['mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'photocamai', name: 'Photo CamAI', category: 'AI photo editing',
    summary: 'An iPhone photo editor with one-tap enhancements powered by on-device AI.',
    description: 'Improve a photo in one tap. Photo CamAI analyzes lighting, colors and subjects on your iPhone to apply adjustments on the device.',
    features: ['One-tap photo enhancement', 'On-device scene and subject analysis', 'Presets and saving edits to the photo library'],
    focus: 'Choose a photo, apply an enhancement and save the edit to your library. AI processing runs on your iPhone.',
    appStoreUrl: 'https://apps.apple.com/us/app/photo-camai-ai-photo-editor/id6755936591',
    color: '#10232c', services: ['mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'wallpapers', name: 'Wallpapers Neo', category: 'Personalization',
    summary: 'A curated wallpaper collection with categories, favorites and text customization.',
    description: 'Find a background that suits your screen. Browse wallpaper collections, save your favorites and add your own text before downloading.',
    features: ['Wallpaper collections organized by style', 'Favorites and quick saving', 'Custom text before downloading'],
    focus: 'Keep favorite wallpapers together and personalize your next background with text.',
    appStoreUrl: 'https://apps.apple.com/app/6758549154',
    color: '#222713', services: ['mobile-app-development'],
    legalName: 'iScreen AI Wallpapers',
  },
  {
    slug: 'retrocamneo', name: 'Retro Cam Neo', category: 'Camera',
    summary: 'A vintage camera with real-time film looks, adjustable grain and light leaks.',
    description: 'Shoot with film-inspired presets and see the look as you frame your photo. Adjust exposure, warmth and grain to make it your own.',
    features: ['Real-time vintage camera presets', 'Film grain and light leak effects', 'Exposure, warmth and aspect ratio controls'],
    focus: 'Preview the effect before you shoot, then use the camera controls to adjust the look.',
    appStoreUrl: 'https://apps.apple.com/de/app/retro-cam-neo-vintage-camera/id6760256815?l=en-GB',
    color: '#2c2510', services: ['mobile-app-development'],
  },
  {
    slug: 'clearwave', name: 'Clear Wave Pro', category: 'Audio utility',
    summary: 'Speaker cleaning modes, stereo testing and a real-time sound meter in one utility.',
    description: 'Run sound-based speaker cleaning modes, test the left and right audio channels, or measure surrounding sound with a real-time decibel meter.',
    features: ['Sound-based speaker cleaning modes', 'Left, right and stereo speaker tests', 'A real-time decibel meter'],
    focus: 'Switch between cleaning modes, speaker tests and sound measurement from one app.',
    appStoreUrl: 'https://apps.apple.com/de/app/clear-wave-pro-water-eject/id6769302852?l=en-GB',
    color: '#102b3e', services: ['mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'asorocket', name: 'ASO Rocket', category: 'Developer tool',
    summary: 'An App Store keyword tool for discovering ideas, organizing lists and preparing metadata.',
    description: 'Research App Store keywords and keep your ideas organized. Discover keywords, save them in lists and copy a keyword string for App Store Connect.',
    features: ['Keyword discovery across App Store categories', 'Saved keyword lists with search and filtering', 'Copying keywords for metadata workflows'],
    focus: 'Keep keyword research and saved lists together while preparing your App Store metadata.',
    appStoreUrl: 'https://apps.apple.com/de/app/aso-rocket-keyword-tool/id6777735509?l=en-GB',
    color: '#21172f', services: ['mobile-app-development', 'mvp-development'],
  },
];

export const services = [
  {
    slug: 'mobile-app-development', name: 'Mobile app development', shortName: 'Mobile apps', number: '01',
    headline: 'Your product. In their hands.',
    summary: 'iOS and Android app development, from the first product decisions to release and ongoing improvements.',
    introduction: 'Build an iOS or Android app for your customers or team. We work with you on the scope, interface and development through testing and store submission.',
    audience: 'For businesses launching a customer app, founders building a mobile product, and teams improving an existing experience.',
    deliverables: [
      ['Product scope', 'User journeys, essential features and a clear first release.'],
      ['Interface design', 'Mobile screens and interactions shaped around the people using them.'],
      ['App development', 'Implementation for the agreed platforms, including the backend and integrations your scope needs.'],
      ['Testing and release', 'Device testing, release preparation and help with store submission.'],
    ],
    evidence: 'Explore iOS apps we have designed, published and continue to operate, from photo editors to an App Store keyword tool.',
    questions: [
      ['Can you build for both iOS and Android?', 'Yes. We discuss your audience, platform requirements and budget before agreeing on a native or shared implementation approach. Our current public app examples are on the Apple App Store.'],
      ['What determines the cost and timeline?', 'The platforms, screens, integrations and backend requirements determine the scope. We discuss the estimate and release plan with you before development begins.'],
      ['Can you work on an existing app?', 'We can discuss an existing product after reviewing its code, design and current requirements. That review determines what can be reused and what needs to change.'],
      ['What happens after launch?', 'We can agree on an ongoing engagement for maintenance, release updates and new features, with the scope and responsibilities defined together.'],
    ],
  },
  {
    slug: 'web-app-development', name: 'Web app development', shortName: 'Web products', number: '02',
    headline: 'Software that works where you do.',
    summary: 'Web applications, SaaS products, customer portals and internal tools built around your workflows.',
    introduction: 'Build a web application for your customers or team. We plan the workflows, design a responsive interface and develop the backend and integrations your product needs.',
    audience: 'For companies replacing manual work, teams creating customer-facing software, and founders launching a browser-based product.',
    deliverables: [
      ['Workflow definition', 'Roles, permissions and the tasks the product needs to support.'],
      ['Responsive design', 'Interfaces that work across the devices your users rely on.'],
      ['Application development', 'Frontend, backend, data storage and agreed integrations.'],
      ['Launch preparation', 'Testing, deployment planning and a handover matched to your team.'],
    ],
    evidence: 'Our published portfolio features our own iOS apps. Explore them for a view of our product and interface work, then talk to us about your web requirements.',
    questions: [
      ['What kinds of web products can we discuss?', 'SaaS applications, dashboards, customer portals and internal tools. We start with the workflow and users, then agree on the product scope.'],
      ['Can the product connect to our existing systems?', 'We assess the available APIs, access requirements and data flows during discovery. We confirm feasibility and scope before including an integration in the build.'],
      ['How do you choose the technology?', 'We choose the technology around your product requirements, integrations, expected usage and the team that will maintain it.'],
      ['Can you improve the product after release?', 'Yes. A continuing engagement can cover maintenance, new workflows and product improvements, with priorities and responsibilities agreed together.'],
    ],
  },
  {
    slug: 'mvp-development', name: 'MVP development', shortName: 'MVP development', number: '03',
    headline: 'Start with the part that matters.',
    summary: 'Turn an idea into a focused first release, then develop the product as you learn from real use.',
    introduction: 'Test your idea with a first version people can use. We agree on what you need to learn, choose the essential features and build a mobile or web release.',
    audience: 'For founders testing an idea, small businesses launching a new offering, and established companies exploring a new digital product.',
    deliverables: [
      ['A focused brief', 'The problem, target users and the question the first release should answer.'],
      ['Prioritized scope', 'Essential features, acceptance criteria and a separate list for later.'],
      ['A usable first product', 'Design, development and testing for the agreed mobile or web release.'],
      ['A next-step plan', 'A handover and a discussion of what to measure, improve or build next.'],
    ],
    evidence: 'Each of our published apps serves a specific task. Explore how we organize features around photo editing, audio tools and App Store keyword research.',
    questions: [
      ['Do I need a detailed specification before contacting you?', 'No. Start with the problem, intended users and what you already have. We can discuss the work needed to turn those inputs into an agreed scope.'],
      ['Does an MVP have to be a mobile app?', 'No. The right first release could be a web product or a mobile app. The choice depends on the user journey and what the project needs to validate.'],
      ['Can we include AI features?', 'We can assess AI features where they solve a specific user problem. Feasibility, data handling, operating costs and evaluation need to be considered before those features enter the scope.'],
      ['Can Nexus remain our product development partner?', 'Yes. We can discuss an ongoing engagement for product iteration, new releases and maintenance after the first version.'],
    ],
  },
];

export const processSteps = [
  ['Understand the problem', 'Tell us who the product is for, what it needs to do and what you have so far. We discuss your goals and constraints together.'],
  ['Agree on the scope', 'We agree on the features, responsibilities and criteria for the first release. That scope guides the estimate and timing.'],
  ['Design the experience', 'We map the key journeys and work through the screens and interactions before committing them to development.'],
  ['Build and review', 'We build in agreed milestones and review progress with you against the product brief.'],
  ['Test and launch', 'We test the agreed journeys, prepare the release and coordinate store submission or web deployment as appropriate.'],
  ['Maintain and improve', 'After launch, ongoing support and further development can be agreed around product feedback and business priorities.'],
];

export function projectEmail(service = 'App development', product = '') {
  const subject = `Project inquiry — ${service}`;
  const body = `Hi Nexus,\n\nI would like to discuss ${service.toLowerCase()}${product ? ` after seeing ${product}` : ''}.\n\nCompany / website:\nProblem we want to solve:\nWho will use the product:\nTarget platform(s):\nWhat we have so far:\nTiming / constraints:\n\nThanks!`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
