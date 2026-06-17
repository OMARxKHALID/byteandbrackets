"use client"

import { useRef } from "react"
import Link from "next/link"
import { m, useScroll, useTransform, useReducedMotion } from "motion/react"
import FadeIn from "../motion/fade-in"
import ScrambleText from "../motion/scramble-text"
import SectionTag from "../ui/section-tag"
import ProjectMedia from "../ui/project-media"
import BrowserFrame from "../ui/browser-frame"
import { PROJECTS } from "../../lib/data"

const FEATURED = PROJECTS.slice(0, 5)

const ProjectCard = ({ project, index, totalCards, range, progress }) => {
  const shouldReduce = useReducedMotion()
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, range, [1, targetScale])

  const cardBase = "w-full rounded-[28px] sm:rounded-[40px] md:rounded-[56px] bg-ink text-paper origin-top overflow-hidden flex flex-col"

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`${project.client} project`}
      style={shouldReduce ? undefined : { top: `${5 + index * 1.5}rem` }}
      className={`group block rounded-[28px] sm:rounded-[40px] md:rounded-[56px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${shouldReduce ? "" : "sticky"}`}
    >
      <m.div className={cardBase} style={shouldReduce ? {} : { scale }}>
        <div className="shrink-0 flex items-end justify-between gap-4 p-5 sm:p-6 md:p-7">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono uppercase tracking-widest text-paper/60 text-[10px] sm:text-xs">
              [{project.number}] — {project.scope} · {project.year}
            </span>
            <h3 className="font-display font-extrabold uppercase tracking-tight leading-none text-[clamp(1.5rem,3.5vw,2.75rem)]">
              {project.client}
            </h3>
          </div>
          <span className="flex-shrink-0 flex items-center gap-2 font-mono uppercase tracking-wider text-paper/60 group-hover:text-electric text-[10px] sm:text-xs whitespace-nowrap transition-colors duration-200">
            <span className="hidden sm:inline">View project</span>
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </span>
        </div>

        <div className="px-5 sm:px-6 md:px-7 pb-5 sm:pb-6 md:pb-7">
          <BrowserFrame url={`${project.slug}.com`} className="w-full">
            <div className="relative aspect-[16/10]">
              <ProjectMedia
                image={project.image}
                video={project.video}
                alt={`${project.client} — ${project.scope}`}
                priority={index === 0}
                sizes="(max-width: 1152px) 100vw, 1100px"
                className="h-full w-full"
              />
            </div>
          </BrowserFrame>
        </div>
      </m.div>
    </Link>
  )
}

const ProjectsSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const totalCards = FEATURED.length

  return (
    <section
      id="projects"
      ref={containerRef}
      className="px-6 sm:px-10 md:px-16 pt-12 sm:pt-16 pb-20 sm:pb-24 md:pb-32 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={20}>
          <SectionTag index="01" label="selected projects" />
        </FadeIn>
        <FadeIn delay={0.05} y={30}>
          <h2 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mt-6 sm:mt-8 mb-12 sm:mb-16 text-[clamp(2.5rem,9vw,7rem)]">
            <ScrambleText text="Things we shipped" />
          </h2>
        </FadeIn>

        <div className="relative w-full flex flex-col gap-8 sm:gap-10">
          {FEATURED.map((project, i) => {
            const range = [i / totalCards, 1 / totalCards + i / totalCards]
            return (
              <ProjectCard
                key={project.number}
                project={project}
                index={i}
                totalCards={totalCards}
                range={range}
                progress={scrollYProgress}
              />
            )
          })}
        </div>

        <FadeIn delay={0} y={20} className="mt-16 sm:mt-20 flex justify-center">
          <Link
            href="/projects"
            aria-label="View all work"
            className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-ink/40 text-ink font-mono uppercase tracking-wider px-8 py-4 min-h-[44px] text-xs sm:text-sm hover:bg-ink hover:text-paper hover:border-ink hover:-translate-y-0.5 active:translate-y-0 active:scale-95 touch-manipulation transition-[color,background-color,border-color,transform] duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            View all work
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

export default ProjectsSection
