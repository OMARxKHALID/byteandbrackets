export const BRAND = "Byte & Brackets"
export const BRAND_SHORT = "B&B"

export const NAV_LINKS = ["Work", "Services", "Process", "Studio", "Contact"]

export const CONTACT_EMAIL = "hello@byteandbrackets.dev"
export const LOCATION = "Remote — Berlin / NYC"
export const AVAILABILITY = "Taking projects for Q3"

export const SOCIALS = [
  { label: "GitHub", url: "#" },
  { label: "X", url: "#" },
  { label: "LinkedIn", url: "#" },
  { label: "Read.cv", url: "#" },
]

export const HERO_THESIS =
  "Product-engineering studio. We design, build, and ship the software your roadmap keeps pushing to next quarter."

export const STUDIO_HEADLINE = "We close the gap between the demo and the product."

export const STUDIO_TEXT =
  "Byte & Brackets is a small senior team. No account managers, no handoffs to juniors — the people who scope your project are the people who write the code. We take ambiguous briefs, turn them into shipped software, and stay until it runs in production."

export const STATS = [
  { value: "40+", label: "products shipped", icon: "/icons/cursor.webp" },
  { value: "6 wks", label: "median MVP", icon: "/icons/lego.webp" },
  { value: "12", label: "industries", icon: "/icons/moon.webp" },
  { value: "100%", label: "senior engineers", icon: "/icons/smile.webp" },
]

export const FOUNDER = {
  portrait: "/portrait/jack.webp",
  name: "Ava Renström",
  role: "Founder · Engineering Lead",
}

export const TICKER = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Postgres",
  "Rust",
  "Python",
  "LLM agents",
  "RAG",
  "AWS",
  "Edge",
  "Design systems",
  "Realtime",
  "Stripe",
]

export const SERVICES = [
  {
    number: "01",
    name: "Product Engineering",
    description:
      "Full-stack web apps and SaaS platforms built to ship. React, Next.js, typed end-to-end, tested, and deployed on infrastructure you own.",
    tags: ["Web apps", "SaaS", "APIs"],
  },
  {
    number: "02",
    name: "AI Integration",
    description:
      "LLM features that survive contact with real users — agents, RAG pipelines, evals, and guardrails wired into your product, not bolted on.",
    tags: ["Agents", "RAG", "Evals"],
  },
  {
    number: "03",
    name: "Design Systems",
    description:
      "Interfaces and component libraries that stay consistent as the team grows. Tokens, accessibility, and motion handled at the source.",
    tags: ["UI / UX", "Components", "A11y"],
  },
  {
    number: "04",
    name: "Cloud & Infra",
    description:
      "Deploy, observe, and scale without a platform team. CI/CD, infrastructure-as-code, and monitoring set up so releases are boring.",
    tags: ["CI/CD", "IaC", "Observability"],
  },
  {
    number: "05",
    name: "MVP Sprints",
    description:
      "Zero to a usable product in weeks, not quarters. A fixed-scope sprint that gets a real build in front of real users fast.",
    tags: ["0 → 1", "Prototype", "Validate"],
  },
]

export const PROCESS = [
  {
    number: "01",
    name: "Discovery",
    description: "We pin down the real problem, the constraints, and what success actually looks like before a line is written.",
  },
  {
    number: "02",
    name: "Architecture",
    description: "We choose the stack and shape the system for where you'll be in two years, not just the demo.",
  },
  {
    number: "03",
    name: "Build",
    description: "Weekly shippable increments. You see working software every Friday, not a status deck.",
  },
  {
    number: "04",
    name: "Ship",
    description: "We deploy to production, wire up monitoring, and hand over docs your team can actually run.",
  },
  {
    number: "05",
    name: "Scale",
    description: "We stay on retainer to harden, extend, and tune as your usage grows.",
  },
]

export const PROJECTS = [
  {
    number: "01",
    client: "Ledgerline",
    scope: "Fintech platform",
    year: "2025",
    outcome: "Rebuilt their finance ops tool from a spreadsheet into a real product. Month-end close went from four days to a single afternoon.",
    stack: ["Next.js", "Postgres", "Stripe"],
    image: "/projects/p01.webp",
    video: "/marquee/aethera.mp4",
    url: "#",
  },
  {
    number: "02",
    client: "Northwind",
    scope: "Healthcare portal",
    year: "2025",
    outcome: "Designed and shipped a patient portal for records, scheduling, and secure messaging — live across 40 clinics in under five months.",
    stack: ["React", "Node", "HIPAA"],
    image: "/projects/p02.webp",
    video: "/marquee/asme.mp4",
    url: "#",
  },
  {
    number: "03",
    client: "Cargo",
    scope: "Logistics dashboard",
    year: "2024",
    outcome: "Realtime fleet and shipment tracking that holds steady at well over a million events a day without a dedicated infra team.",
    stack: ["Rust", "Realtime", "AWS"],
    image: "/projects/p03.webp",
    video: "/marquee/celestia.mp4",
    url: "#",
  },
  {
    number: "04",
    client: "Verra",
    scope: "AI writing tool",
    year: "2025",
    outcome: "Took an LLM demo to a product people pay for — retrieval, evals, and team workspaces that survived real usage from day one.",
    stack: ["LLM agents", "RAG", "Evals"],
    image: "/projects/p04.webp",
    video: "/marquee/codenest.mp4",
    url: "#",
  },
  {
    number: "05",
    client: "Tidepool",
    scope: "Analytics SaaS",
    year: "2024",
    outcome: "A self-serve analytics product that keeps queries under half a second across billions of rows. No more waiting on the data team.",
    stack: ["TypeScript", "ClickHouse", "Edge"],
    image: "/projects/p05.webp",
    video: "/marquee/designpro.mp4",
    url: "#",
  },
  {
    number: "06",
    client: "Forge",
    scope: "Developer tooling",
    year: "2024",
    outcome: "A CI platform that runs and caches builds across a global edge. Pipelines that used to take twenty minutes now finish in seven.",
    stack: ["Go", "Docker", "Edge"],
    image: "/projects/p06.webp",
    video: "/marquee/evr-ventures.mp4",
    url: "#",
  },
  {
    number: "07",
    client: "Meridian",
    scope: "Climate reporting",
    year: "2023",
    outcome: "Carbon accounting for mid-market manufacturers — mapped hundreds of messy supply chains into reports auditors actually accept.",
    stack: ["Python", "Postgres", "Next.js"],
    image: "/projects/p07.webp",
    video: "/marquee/luminex.mp4",
    url: "#",
  },
  {
    number: "08",
    client: "Salt",
    scope: "Commerce engine",
    year: "2023",
    outcome: "A headless storefront and subscription engine for a fast-growing DTC brand, tuned until checkout stopped leaking customers.",
    stack: ["Next.js", "Stripe", "Edge"],
    image: "/projects/p08.webp",
    video: "/marquee/new-era.mp4",
    url: "#",
  },
  {
    number: "09",
    client: "Quanta",
    scope: "Data platform",
    year: "2025",
    outcome: "Unified seven scattered data sources into one warehouse with self-serve dashboards, so the ops team stopped filing tickets for every report.",
    stack: ["Python", "dbt", "Snowflake"],
    image: "/projects/p09.webp",
    video: "/marquee/nexora.mp4",
    url: "#",
  },
  {
    number: "10",
    client: "Hearth",
    scope: "Proptech marketplace",
    year: "2024",
    outcome: "Built a two-sided rental marketplace from scratch — listings, payments, and messaging — to a live launch in three markets in four months.",
    stack: ["Next.js", "Postgres", "Stripe"],
    image: "/projects/p10.webp",
    video: "/marquee/orbit-web3.mp4",
    url: "#",
  },
  {
    number: "11",
    client: "Beacon",
    scope: "Education platform",
    year: "2024",
    outcome: "A live-cohort learning product with video, assignments, and grading that scaled past ten thousand concurrent students without a wobble.",
    stack: ["React", "Node", "Realtime"],
    image: "/projects/p12.webp",
    video: "/marquee/planet-orbit.mp4",
    url: "#",
  },
  {
    number: "12",
    client: "Lumen",
    scope: "Energy IoT",
    year: "2023",
    outcome: "Realtime monitoring for distributed solar sites — ingesting device telemetry and surfacing faults before crews are dispatched.",
    stack: ["Rust", "Timescale", "Edge"],
    image: "/projects/p13.webp",
    video: "/marquee/skyelite.mp4",
    url: "#",
  },
  {
    number: "13",
    client: "Atlas",
    scope: "Internal tooling",
    year: "2025",
    outcome: "Replaced a tangle of spreadsheets and Zapier flows with one internal admin app the whole company actually trusts as the source of truth.",
    stack: ["Next.js", "Postgres", "tRPC"],
    image: "/projects/p14.webp",
    video: "/marquee/space-voyage.mp4",
    url: "#",
  },
  {
    number: "14",
    client: "Vesper",
    scope: "Consumer app",
    year: "2025",
    outcome: "A habit-tracking mobile app taken from Figma to the App Store in eight weeks, with sync and offline support that held up on day-one traffic.",
    stack: ["React Native", "Expo", "Supabase"],
    image: "/projects/p15.webp",
    video: "/marquee/stellar-ai.mp4",
    url: "#",
  },
]

export const TEAM = [
  {
    name: "Ava Renström",
    role: "Founder · Eng Lead",
    note: "Ex-infra at a payments scale-up. Writes the gnarly bits.",
  },
  {
    name: "Diego Cruz",
    role: "Principal Engineer",
    note: "Full-stack generalist. Believes boring tech ships faster.",
  },
  {
    name: "Mara Okafor",
    role: "Design Lead",
    note: "Design systems and motion. Keeps the brackets straight.",
  },
  {
    name: "Jun Kim",
    role: "AI Engineer",
    note: "Agents, evals, retrieval. Allergic to hand-wavy demos.",
  },
]
