import Link from "next/link"
import FadeIn from "../../components/motion/fade-in"
import FooterSection from "../../components/sections/footer-section"
import ProjectMedia from "../../components/ui/project-media"
import { PROJECTS, BRAND_SHORT } from "../../lib/data"

export const metadata = {
  title: "Work — Byte & Brackets",
  description: "Selected software products designed, built, and shipped by Byte & Brackets.",
}

const ProjectsPage = () => {
  return (
    <>
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
                href="/"
                aria-label="Back to home"
                className="group inline-flex items-center gap-2 py-3 font-mono uppercase tracking-wide text-xs sm:text-sm text-ink/70 hover:text-electric transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back
              </Link>
              <Link
                href="/"
                aria-label="Byte & Brackets home"
                className="font-display font-extrabold text-lg sm:text-xl tracking-tight"
              >
                {BRAND_SHORT}
                <span className="text-electric">.</span>
              </Link>
            </nav>
          </FadeIn>
        </section>

        <section className="px-6 sm:px-10 md:px-16 pt-16 sm:pt-20 md:pt-28 pb-20 sm:pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0} y={30}>
              <span className="eyebrow">[ {PROJECTS.length} selected works ]</span>
            </FadeIn>
            <FadeIn delay={0.05} y={30}>
              <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mt-6 sm:mt-8 mb-12 sm:mb-16 text-[clamp(3rem,12vw,9rem)]">
                The work
              </h1>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper-shade border border-paper-shade">
              {PROJECTS.map((project, i) => (
                <FadeIn key={project.number} delay={(i % 2) * 0.08} y={30} className="bg-paper">
                  <a
                    href={project.url}
                    aria-label={`${project.client} case study`}
                    className="group flex flex-col gap-5 p-6 sm:p-8 h-full hover:bg-ink hover:text-paper transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 focus-visible:ring-inset"
                  >
                    <ProjectMedia
                      image={project.image}
                      video={project.video}
                      alt={`${project.client} — ${project.scope}`}
                      priority={i < 2}
                      className="aspect-[16/10] w-full rounded-[12px] sm:rounded-[16px] border border-paper-shade"
                    />
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono uppercase tracking-widest text-ash group-hover:text-paper/50 text-[10px] sm:text-xs transition-colors duration-300">
                        [{project.number}] — {project.scope} · {project.year}
                      </span>
                      <span className="flex-shrink-0 text-ash group-hover:text-electric group-hover:translate-x-1 transition-all duration-300 text-lg">
                        ↗
                      </span>
                    </div>
                    <h2 className="font-display font-extrabold uppercase tracking-tight leading-none mt-2 text-ink group-hover:text-paper transition-colors duration-300 text-[clamp(2rem,5vw,3.25rem)]">
                      {project.client}
                    </h2>
                    <p className="text-ash group-hover:text-paper/70 font-medium leading-relaxed transition-colors duration-300 text-sm sm:text-base">
                      {project.outcome}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono uppercase tracking-wide text-[10px] text-ash group-hover:text-paper/50 border border-paper-shade group-hover:border-paper/20 rounded-full px-3 py-1 transition-colors duration-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}

export default ProjectsPage
