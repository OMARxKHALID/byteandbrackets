import Link from "next/link"
import { notFound } from "next/navigation"
import FadeIn from "../../../components/motion/fade-in"
import FooterSection from "../../../components/sections/footer-section"
import ProjectMedia from "../../../components/ui/project-media"
import { PROJECTS, BRAND_SHORT, SITE_URL } from "../../../lib/data"

const getProject = (slug) => PROJECTS.find((p) => p.slug === slug)

export const generateStaticParams = () => PROJECTS.map((p) => ({ slug: p.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  const title = `${project.client} — ${project.scope}`
  return {
    title,
    description: project.outcome,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${title} · Byte & Brackets`,
      description: project.outcome,
      type: "article",
    },
  }
}

const MetaItem = ({ label, children }) => (
  <div className="bg-paper p-5 sm:p-6 flex flex-col gap-2">
    <span className="font-mono uppercase tracking-widest text-ash text-[10px] sm:text-xs">
      {label}
    </span>
    <span className="font-display font-bold tracking-tight text-sm sm:text-base">
      {children}
    </span>
  </div>
)

const Block = ({ label, children }) => (
  <FadeIn delay={0} y={20} className="flex flex-col gap-3">
    <h2 className="font-mono uppercase tracking-widest text-electric text-[10px] sm:text-xs">
      // {label}
    </h2>
    <p className="text-ink/80 font-medium leading-relaxed max-w-3xl text-[clamp(1.05rem,1.8vw,1.4rem)]">
      {children}
    </p>
  </FadeIn>
)

const ProjectPage = async ({ params }) => {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  const projectLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.client,
      about: project.scope,
      description: project.outcome,
      datePublished: project.year,
      creator: { "@type": "Organization", name: "Byte & Brackets" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
        { "@type": "ListItem", position: 3, name: project.client, item: `${SITE_URL}/projects/${slug}` },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }}
      />
      <main id="main-content" className="relative z-10 [overflow-x:clip]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:bg-electric focus:text-paper focus:font-mono focus:text-sm"
        >
          Skip to main content
        </a>

        <section className="px-6 sm:px-10 md:px-16 pt-6 md:pt-8">
          <FadeIn delay={0} y={-20}>
            <nav className="flex items-center justify-between">
              <Link
                href="/projects"
                aria-label="Back to all projects"
                className="group inline-flex items-center gap-2 py-3 min-h-[44px] touch-manipulation font-mono uppercase tracking-wide text-xs sm:text-sm text-ash hover:text-electric transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                All projects
              </Link>
              <Link
                href="/"
                aria-label="Byte & Brackets home"
                className="font-display font-extrabold text-lg sm:text-xl tracking-tight inline-flex items-center min-h-[44px] touch-manipulation"
              >
                {BRAND_SHORT}
                <span className="text-electric">.</span>
              </Link>
            </nav>
          </FadeIn>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pt-12 sm:pt-16 md:pt-20">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0} y={20}>
              <span className="font-mono uppercase tracking-widest text-ash text-[10px] sm:text-xs">
                <span className="text-electric">[</span>
                {project.number}
                <span className="opacity-50"> — </span>
                {project.scope} · {project.year}
                <span className="text-electric">]</span>
              </span>
            </FadeIn>
            <FadeIn delay={0.05} y={30}>
              <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mt-6 sm:mt-8 text-[clamp(3rem,12vw,8.5rem)]">
                {project.client}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <p className="text-ash font-medium leading-relaxed mt-6 sm:mt-8 max-w-3xl text-[clamp(1.1rem,2vw,1.5rem)]">
                {project.outcome}
              </p>
            </FadeIn>
            {project.liveUrl && project.liveUrl !== "#" && (
              <FadeIn delay={0.15} y={20}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit the ${project.client} site`}
                  className="group mt-8 sm:mt-10 inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-ink text-paper font-mono uppercase tracking-wider px-7 py-3.5 sm:px-9 sm:py-4 min-h-[44px] text-xs sm:text-sm hover:bg-electric active:scale-95 touch-manipulation transition-[background-color,transform] duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  Visit site
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
                </a>
              </FadeIn>
            )}
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pt-12 sm:pt-16">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0} y={30}>
              <ProjectMedia
                image={project.image}
                video={project.video}
                alt={`${project.client} — ${project.scope}`}
                priority
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="aspect-[16/9] w-full rounded-[20px] sm:rounded-[28px] md:rounded-[36px] border border-paper-shade"
              />
            </FadeIn>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pt-12 sm:pt-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-paper-shade border border-paper-shade">
            <MetaItem label="Year">{project.year}</MetaItem>
            <MetaItem label="Timeline">{project.duration}</MetaItem>
            <MetaItem label="Services">{project.services.join(", ")}</MetaItem>
            <MetaItem label="Stack">{project.stack.join(", ")}</MetaItem>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 py-16 sm:py-24 md:py-32">
          <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
            <Block label="challenge">{project.challenge}</Block>
            <Block label="approach">{project.approach}</Block>
            <Block label="result">{project.result}</Block>
          </div>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pb-20 sm:pb-24 md:pb-28">
          <div className="max-w-6xl mx-auto border-t border-paper-shade pt-8 sm:pt-10">
            <Link
              href={`/projects/${next.slug}`}
              aria-label={`Next project: ${next.client}`}
              className="group flex items-center justify-between gap-6 py-2 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
            >
              <span className="font-mono uppercase tracking-widest text-ash text-[10px] sm:text-xs">
                Next project
              </span>
              <span className="flex items-center gap-4 font-display font-extrabold uppercase tracking-tight leading-none text-ink group-hover:text-electric transition-colors duration-300 text-[clamp(1.75rem,6vw,4rem)]">
                {next.client}
                <span className="text-electric group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}

export default ProjectPage
