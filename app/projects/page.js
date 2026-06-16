import Link from "next/link"
import FadeIn from "../../components/motion/fade-in"
import FooterSection from "../../components/sections/footer-section"
import { PROJECTS } from "../../lib/data"

export const metadata = {
  title: "Projects — Jack",
  description: "Selected work and live projects crafted by Jack, a 3D creator.",
}

const ProjectsPage = () => {
  return (
    <>
      <main id="main-content" className="relative z-10 bg-[#0C0C0C] [overflow-x:clip]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:bg-[#D7E2EA] focus:text-[#0C0C0C] focus:font-black focus:text-sm"
        >
          Skip to main content
        </a>

        <section className="px-8 sm:px-12 md:px-16 pt-6 md:pt-8">
          <FadeIn delay={0} y={-20}>
            <nav className="flex justify-between items-center">
              <Link
                href="/"
                aria-label="Back to home"
                className="group inline-flex items-center gap-2 py-3 cursor-pointer touch-manipulation text-[#D7E2EA] font-medium uppercase tracking-wide text-xs sm:text-sm md:text-base hover:opacity-70 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C] rounded-sm"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">
                  ←
                </span>
                Back
              </Link>
              <Link
                href="/#contact"
                className="py-3 cursor-pointer touch-manipulation text-[#D7E2EA] font-medium uppercase tracking-wide text-xs sm:text-sm md:text-base hover:opacity-70 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C] rounded-sm"
              >
                Contact
              </Link>
            </nav>
          </FadeIn>
        </section>

        <section className="px-8 sm:px-12 md:px-16 pt-16 sm:pt-20 md:pt-28 pb-20 sm:pb-24 md:pb-32">
          <div className="w-full flex flex-col items-center">
            <FadeIn delay={0} y={40}>
              <h1 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4 sm:mb-6 text-[clamp(3rem,12vw,160px)]">
                All Projects
              </h1>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <p className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[10px] sm:text-xs mb-16 sm:mb-20 md:mb-28">
                {PROJECTS.length} Selected Works
              </p>
            </FadeIn>

            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {PROJECTS.map((project, i) => (
                <FadeIn key={project.number} delay={(i % 2) * 0.1} y={30}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} live project`}
                    className="group block rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/30 bg-[#0C0C0C] p-4 sm:p-5 md:p-6 touch-manipulation transition-colors duration-200 hover:border-[#D7E2EA]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
                  >
                    <div className="flex items-center justify-between gap-4 pb-4 sm:pb-5">
                      <div className="flex items-end gap-3 sm:gap-5 min-w-0">
                        <span className="font-black text-[#D7E2EA] leading-none tracking-tight text-[clamp(1.75rem,5vw,3.5rem)]">
                          {project.number}
                        </span>
                        <div className="flex flex-col gap-1 pb-1 min-w-0">
                          <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[10px] sm:text-xs truncate">
                            {project.category}
                          </span>
                          <h2 className="text-[#D7E2EA] font-black uppercase text-[clamp(1rem,2.5vw,1.6rem)] truncate">
                            {project.name}
                          </h2>
                        </div>
                      </div>
                      <span className="flex-shrink-0 text-[#D7E2EA]/40 group-hover:text-[#D7E2EA] group-hover:translate-x-1 transition-all duration-200 text-lg sm:text-xl">
                        ↗
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-[20px] sm:rounded-[28px]">
                      <img
                        src={project.image}
                        alt={`${project.name} website preview`}
                        width={1600}
                        height={1000}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
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
