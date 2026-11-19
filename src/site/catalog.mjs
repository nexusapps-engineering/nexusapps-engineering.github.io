export const origin = 'https://nexusapps.co';
export const email = 'hello@nexusapps.co';

export const products = [
  {
    slug: 'visuallabx', name: 'Visual LabX', category: 'Photo editing',
    searchTitle: 'Visual LabX | iPhone Photo Filters & Portrait Retouching',
    summary: "Layer film filters and effects or retouch a portrait with Visual LabX, a photo editor for iPhone.",
    description: "Start with a photo from your library. Choose a film-inspired preset for the color, layer effects with the FX tool, or use face and body controls to retouch a portrait.",
    features: ["Choose a color palette for a portrait, landscape or black-and-white edit.", "Combine several effects on one image in the FX tool.", "Adjust face and body details with the retouching tools."],
    screenshotAlt: ["Before-and-after portrait comparison in the Visual LabX editor.", "Portrait above a strip of filter thumbnails in Visual LabX."],
    appStoreUrl: 'https://apps.apple.com/app/visual-labx-ai-photo-editor/id6449296377',
    color: '#251425', services: ['ios-app-development', 'mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'photocamai', name: 'Photo CamAI', category: 'AI photo editing',
    searchTitle: 'Photo CamAI | On-Device AI Photo Editor for iPhone',
    summary: "Enhance a photo in one tap with Photo CamAI. Its AI analyzes the image on your iPhone.",
    description: "Choose a photo and tap to enhance it. Photo CamAI analyzes the lighting, colors and subject on your iPhone and applies adjustments for that image.",
    features: ["Apply automatic adjustments without moving individual sliders.", "Choose a preset for a consistent look across photos.", "Save the finished edit directly to your photo library."],
    screenshotAlt: ["Portrait illustrating Photo CamAI’s one-tap photo enhancement.", "Before-and-after comparison with vintage, portrait and aesthetic preset options."],
    appStoreUrl: 'https://apps.apple.com/app/photo-camai-ai-photo-editor/id6755936591',
    color: '#10232c', services: ['ios-app-development', 'mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'wallpapers', name: 'Wallpapers Neo', category: 'Personalization',
    searchTitle: 'Wallpapers Neo | iPhone Wallpapers with Custom Text',
    summary: "Browse iPhone wallpapers by style, save favorites and add your own text before saving a background.",
    description: "Find a background for your iPhone, then add a name, date or short message before saving it to your camera roll.",
    features: ["Browse styles such as AMOLED, minimal, anime and nature.", "Keep a shortlist of backgrounds in Favorites.", "Save or share the wallpaper with your custom text."],
    screenshotAlt: ["Neon city artwork shown behind the clock on an iPhone Lock Screen.", "Cat wallpaper preview with a large Lock Screen clock."],
    appStoreUrl: 'https://apps.apple.com/app/6758549154',
    color: '#222713', services: ['ios-app-development', 'mobile-app-development'],
    legalName: 'iScreen AI Wallpapers',
  },
  {
    slug: 'retrocamneo', name: 'Retro Cam Neo', category: 'Camera',
    searchTitle: 'Retro Cam Neo | Vintage Film Camera App for iPhone',
    summary: "Preview vintage film looks as you shoot on iPhone, with adjustable grain, warmth and exposure.",
    description: "Choose a film camera style and see its colors as you frame the shot. Set the grain and warmth before pressing the shutter.",
    features: ["Choose a lens and aspect ratio for the composition.", "Adjust exposure and grain or add a light leak.", "Find the finished shot in your photo library."],
    screenshotAlt: ["Film-style portrait above a selection of virtual cameras.", "Retro Cam Neo camera viewfinder framing a portrait with a vintage look."],
    appStoreUrl: 'https://apps.apple.com/app/retro-cam-neo-vintage-camera/id6760256815',
    color: '#2c2510', services: ['ios-app-development', 'mobile-app-development'],
  },
  {
    slug: 'clearwave', name: 'Clear Wave Pro', category: 'Audio utility',
    searchTitle: 'Clear Wave Pro | Speaker Cleaner & Sound Meter for iOS',
    summary: "Test left and right speaker channels, run sound-based cleaning modes and check ambient noise on iPhone.",
    description: "Use Clear Wave Pro to hear each speaker channel separately, run a sound-based cleaning mode or see the surrounding sound level on a decibel meter.",
    features: ["Play the left and right channels in turn to check stereo balance.", "Select Water Eject or Dust Sweep to play a cleaning tone.", "Read the live dB meter as the sound around you changes."],
    screenshotAlt: ["Clear Wave Pro preview illustrating its speaker cleaning mode.", "Dust Sweep promotional image showing the edge of a phone."],
    appStoreUrl: 'https://apps.apple.com/app/clear-wave-pro-water-eject/id6769302852',
    color: '#102b3e', services: ['ios-app-development', 'mobile-app-development', 'mvp-development'],
  },
  {
    slug: 'asorocket', name: 'ASO Rocket', category: 'Developer tool', devices: 'iPhone and iPad',
    searchTitle: 'ASO Rocket | App Store Keyword Research Tool',
    summary: "Research App Store keywords on iPhone or iPad, organize saved terms and copy a keyword string for App Store Connect.",
    description: "Build a shortlist for your next App Store listing. Browse keyword ideas by category, save relevant terms and copy your selection into App Store Connect.",
    features: ["Search within a category such as Photo & Video or Productivity.", "Filter your saved keywords when preparing a particular listing.", "Copy individual terms or the visible list as a comma-separated string."],
    screenshotAlt: ["ASO Rocket overview showing keyword categories, saved terms and copy options.", "Keyword discovery screen listing photo and video editor search terms."],
    appStoreUrl: 'https://apps.apple.com/app/aso-rocket-keyword-tool/id6777735509',
    color: '#21172f', services: ['ios-app-development', 'mobile-app-development', 'mvp-development'],
  },
];

export const services = [
  {
    slug: 'ios-app-development', name: 'iOS app development', shortName: 'iOS apps', number: '04',
    examples: ['visuallabx', 'photocamai', 'retrocamneo'],
    searchTitle: 'iOS App Development for Companies | Nexus Apps',
    summary: 'iPhone app design and development, from product scope and interface design to App Store release and ongoing updates.',
    introduction: 'Bring your iPhone app from its first screens to App Store submission. We design the interface, build the iOS features and test the release on the devices your customers use.',
    planning: [
      ['Shape the iPhone experience', 'We start with the people who will use the app, the problem it solves and the tasks that matter in the first release. Camera features, on-device processing and existing systems help shape the technical scope.'],
      ['Plan the complete product', 'An iOS app may also need accounts, a backend or connections to other services. We discuss those dependencies, access and release requirements before agreeing on the work.'],
    ],
    audience: 'For companies building a customer-facing iPhone app, founders validating a mobile product, and teams planning the next release of an existing iOS app.',
    deliverables: [
      ['Product definition', 'User journeys, priorities and a scope for the agreed release.'],
      ['iOS interface design', 'Screens and interactions designed around the product and its users.'],
      ['Development and integration', 'iOS app implementation and the agreed backend or service connections.'],
      ['Testing and release', 'Testing key journeys, preparing the release and coordinating App Store submission.'],
    ],
    evidence: 'Our published iOS products are built and operated by Nexus Apps. Photo CamAI uses on-device photo analysis, while Retro Cam Neo previews camera looks in real time. Visual LabX combines editing and retouching in one app.',
    questions: [
      ['Can you work on an existing iOS app?', 'We can discuss an existing app after reviewing its source code, dependencies, design and release setup. The review helps determine what can be reused and what work is needed.'],
      ['Can the app connect to our existing systems?', 'We assess the available APIs, access and data flows before agreeing on integrations and their scope.'],
      ['Can you help with App Store submission?', 'Yes. For an agreed release, we can help prepare and coordinate App Store submission. Approval remains subject to Apple’s review.'],
      ['What happens after the app launches?', 'We can agree on a separate engagement for maintenance, compatibility updates, fixes and further features, with responsibilities defined for the project.'],
    ],
  },
  {
    slug: 'mobile-app-development', name: 'Mobile app development', shortName: 'Mobile apps', number: '01',
    searchTitle: 'Mobile App Development Services | Nexus Apps',
    examples: ['visuallabx', 'photocamai', 'wallpapers'],
    headline: 'Your product. In their hands.',
    summary: 'iOS and Android app development, from the first product decisions to release and ongoing improvements.',
    introduction: 'Build an iOS or Android app for your customers or team. We work with you on the scope, interface and development through testing and store submission.',
    planning: [
      ['Choose the platform around your users', 'Start with the devices your audience uses and the phone features the app needs. Camera access, on-device processing and existing code help determine whether a native or shared approach fits the release.'],
      ['Plan the work around the app', 'An app may also need accounts, a backend and connections to other systems. Include those dependencies in the brief so the estimate covers the complete user journey through testing and store submission.'],
    ],
    audience: 'For businesses launching a customer app, founders building a mobile product, and teams improving an existing experience.',
    deliverables: [
      ['Product scope', 'User journeys, essential features and a clear first release.'],
      ['Interface design', 'Mobile screens and interactions shaped around the people using them.'],
      ['App development', 'Implementation for the agreed platforms, including the backend and integrations your scope needs.'],
      ['Testing and release', 'Device testing, release preparation and help with store submission.'],
    ],
    evidence: 'Photo CamAI runs photo enhancement on the iPhone, Visual LabX combines presets with retouching, and Wallpapers Neo organizes collections and favorites. These are our own published iOS products, showing the interfaces and focused workflows we design and maintain.',
    questions: [
      ['Can you build for both iOS and Android?', 'Yes. We discuss your audience, platform requirements and budget before agreeing on a native or shared implementation approach.'],
      ['What determines the cost and timeline?', 'The platforms, screens, integrations and backend requirements determine the scope. We discuss the estimate and release plan with you before development begins.'],
      ['Can you work on an existing app?', 'We can discuss an existing product after reviewing its code, design and current requirements. That review determines what can be reused and what needs to change.'],
      ['What happens after launch?', 'We can agree on an ongoing engagement for maintenance, release updates and new features, with the scope and responsibilities defined together.'],
    ],
  },
  {
    slug: 'web-app-development', name: 'Web app development', shortName: 'Web products', number: '02',
    searchTitle: 'Web App Development for Companies | Nexus Apps',
    examples: [],
    headline: 'Software that works where you do.',
    summary: 'Web applications, SaaS products, customer portals and internal tools built around your workflows.',
    introduction: 'Build a web application for your customers or team. We plan the workflows, design a responsive interface and develop the backend and integrations your product needs.',
    planning: [
      ['Define the workflow and permissions', 'For a portal or internal tool, describe who uses it, what each person can see and which tasks they need to complete. Those decisions shape the screens, data model and permissions in the first release.'],
      ['Check integrations before committing to scope', 'List the systems the product needs to connect to, the data it will read or update and the access available to your team. We assess the APIs and dependencies before agreeing on those integrations.'],
    ],
    audience: 'For companies replacing manual work, teams creating customer-facing software, and founders launching a browser-based product.',
    deliverables: [
      ['Workflow definition', 'Roles, permissions and the tasks the product needs to support.'],
      ['Responsive design', 'Interfaces that work across the devices your users rely on.'],
      ['Application development', 'Frontend, backend, data storage and agreed integrations.'],
      ['Launch preparation', 'Testing, deployment planning and a handover matched to your team.'],
    ],
    evidence: 'Explore the interfaces in our portfolio to see how we approach tasks such as editing a photograph or organizing research.',
    questions: [
      ['What kinds of web products can we discuss?', 'SaaS applications, dashboards, customer portals and internal tools. We start with the workflow and users, then agree on the product scope.'],
      ['Can the product connect to our existing systems?', 'We assess the available APIs, access requirements and data flows during discovery. We confirm feasibility and scope before including an integration in the build.'],
      ['How do you choose the technology?', 'We choose the technology around your product requirements, integrations, expected usage and the team that will maintain it.'],
      ['Can you improve the product after release?', 'Yes. A continuing engagement can cover maintenance, new workflows and product improvements, with priorities and responsibilities agreed together.'],
    ],
  },
  {
    slug: 'mvp-development', name: 'MVP development', shortName: 'MVP development', number: '03',
    searchTitle: 'MVP Development for Startups & Companies | Nexus Apps',
    examples: ['asorocket', 'photocamai', 'clearwave'],
    headline: 'Start with the part that matters.',
    summary: 'Turn an idea into a focused first release, then develop the product as you learn from real use.',
    introduction: 'A minimum viable product (MVP) is a first release focused on testing a product idea with real users. We agree on what you need to learn, choose the essential features and build a mobile or web release.',
    planning: [
      ['Choose the question the release must answer', 'Describe the user, the problem and the task they should complete with the first version. We use that brief to separate essential features from ideas that can wait for a later release.'],
      ['Choose mobile or web around the task', 'A browser-based workflow may fit a portal or business tool. A mobile app may fit a task that depends on a camera or other phone capabilities. We discuss that choice before agreeing on the platform and scope.'],
    ],
    audience: 'For founders testing an idea, small businesses launching a new offering, and established companies exploring a new digital product.',
    deliverables: [
      ['A focused brief', 'The problem, target users and the question the first release should answer.'],
      ['Prioritized scope', 'Essential features, acceptance criteria and a separate list for later.'],
      ['A usable first product', 'Design, development and testing for the agreed mobile or web release.'],
      ['A next-step plan', 'A handover and a discussion of what to measure, improve or build next.'],
    ],
    evidence: 'ASO Rocket keeps keyword discovery, saved lists and metadata preparation in one workflow. Photo CamAI focuses on one-tap enhancement, while Clear Wave Pro groups audio tests and cleaning modes. These in-house iOS products show how we organize features around a specific task.',
    questions: [
      ['Do I need a detailed specification before contacting you?', 'No. Start with the problem, intended users and what you already have. We can discuss the work needed to turn those inputs into an agreed scope.'],
      ['Does an MVP have to be a mobile app?', 'No. The right first release could be a web product or a mobile app. The choice depends on the user journey and what the project needs to validate.'],
      ['Can we include AI features?', 'We can assess AI features where they solve a specific user problem. Feasibility, data handling, operating costs and evaluation need to be considered before those features enter the scope.'],
      ['Can Nexus remain our product development partner?', 'Yes. We can discuss an ongoing engagement for product iteration, new releases and maintenance after the first version.'],
    ],
  },
];

export const processSteps = [
  ['Understand the problem', 'We identify who will use the product, what they need to do and where the current experience gets in their way.'],
  ['Define the first release', 'We choose the features needed to complete the core task and set the criteria for release.'],
  ['Design the experience', 'We map the key journeys and work through the screens and interactions before committing them to development.'],
  ['Build and review', 'We review working versions against the original task and refine the interactions as the product takes shape.'],
  ['Test and launch', 'We test the main workflows on the intended devices and prepare the product for store submission or web deployment.'],
  ['Maintain and improve', 'We use support questions, feedback and platform changes to guide fixes and future releases.'],
];

export function projectEmail(service = 'App development', product = '') {
  const subject = `Project inquiry — ${service}`;
  const body = `Hi Nexus,\n\nI would like to discuss ${service.toLowerCase()}${product ? ` after seeing ${product}` : ''}.\n\nCompany / website:\nProblem we want to solve:\nWho will use the product:\nTarget platform(s):\nWhat we have so far:\nTiming / constraints:\n\nThanks!`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
