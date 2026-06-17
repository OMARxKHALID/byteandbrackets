"use client"

import { useRef } from "react"
import Link from "next/link"
import { m, useScroll, useTransform, useReducedMotion } from "motion/react"
import FadeIn from "../motion/fade-in"
import ScrambleText from "../motion/scramble-text"
import SectionTag from "../ui/section-tag"
import { PROJECTS } from "../../lib/data"

const FEATURED = PROJECTS.slice(0, 5)

const SpecPanel = ({ project }) => {
  return (
    <div className="h-full rounded-[16px] sm:rounded-[22px] bg-black/30 border border-paper/15 p-5 sm:p-7 flex flex-col justify-center font-mono text-[clamp(0.7rem,1.4vw,0.95rem)] leading-relaxed overflow-hidden">
      <span className="text-paper/30">{"{"}</span>
      <div className="pl-4 sm:pl-6 flex flex-col gap-1.5 py-1">
        <FadeIn as="div" delay={0} y={6} duration={0.5}>
          <span className="text-electric">scope</span>
          <span className="text-paper/30">: </span>
          <span className="text-paper/80">&quot;{project.scope}&quot;</span>
        </FadeIn>
        <FadeIn as="div" delay={0.08} y={6} duration={0.5}>
          <span className="text-electric">year</span>
          <span className="text-paper/30">: </span>
          <span className="text-paper/80">{project.year}</span>
        </FadeIn>
        <FadeIn as="div" delay={0.16} y={6} duration={0.5} className="flex flex-wrap items-baseline">
          <span className="text-electric">stack</span>
          <span className="text-paper/30">:&nbsp;[</span>
          {project.stack.map((s, i) => (
            <span key={s}>
              <span className="text-paper/80">&quot;{s}&quot;</span>
              {i < project.stack.length - 1 && <span className="text-paper/30">, </span>}
            </span>
          ))}
          <span className="text-paper/30">]</span>
        </FadeIn>
        <FadeIn as="div" delay={0.24} y={6} duration={0.5}>
          <span className="text-electric">status</span>
          <span className="text-paper/30">: </span>
          <span className="text-paper/80">&quot;shipped&quot;</span>
          <span className="text-electric"> ✓</span>
          <span className="caret ml-1.5" aria-hidden="true" />
        </FadeIn>
      </div>
      <span className="text-paper/30">{"}"}</span>
    </div>
  )
}

const ProjectCard = ({ project, index, totalCards, range, progress }) => {
  const shouldReduce = useReducedMotion()
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, range, [1, targetScale])

  const wrapperClass = shouldReduce ? "mb-6 last:mb-0" : "h-[64dvh] sm:h-[68dvh]"
  const cardBase = "w-full rounded-[28px] sm:rounded-[40px] md:rounded-[56px] bg-ink text-paper p-6 sm:p-8 md:p-10 origin-top overflow-hidden grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10"
  const cardClass = shouldReduce ? cardBase : `sticky h-full ${cardBase}`
  const cardStyle = shouldReduce ? {} : { scale, top: `${5 + index * 1.5}rem` }

  return (
    <div className={wrapperClass}>
      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.client} case study`}
        className="group block h-full rounded-[28px] sm:rounded-[40px] md:rounded-[56px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      >
        <m.div
          className={cardClass}
          style={cardStyle}
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono uppercase tracking-widest text-paper/65 text-[10px] sm:text-xs">
                [{project.number}] — {project.scope} · {project.year}
              </span>
              <span className="flex items-center gap-2 font-mono uppercase tracking-wider text-paper/65 group-hover:text-electric text-[10px] sm:text-xs whitespace-nowrap transition-colors duration-200">
                Case study
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
              </span>
            </div>

            <h3 className="font-display font-extrabold uppercase leading-[0.85] tracking-tight mt-6 md:mt-auto text-[clamp(2.75rem,8vw,6rem)]">
              {project.client}
            </h3>
            <p className="text-paper/65 font-medium leading-relaxed max-w-lg mt-5 sm:mt-6 text-[clamp(0.95rem,1.6vw,1.2rem)]">
              {project.outcome}
            </p>
          </div>

          <div className="min-h-0">
            <SpecPanel project={project} />
          </div>
        </m.div>
      </Link>
    </div>
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
      id="work"
      ref={containerRef}
      className="px-6 sm:px-10 md:px-16 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={20}>
          <SectionTag index="01" label="selected work" />
        </FadeIn>
        <FadeIn delay={0.05} y={30}>
          <h2 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mt-6 sm:mt-8 mb-12 sm:mb-16 text-[clamp(2.5rem,9vw,7rem)]">
            <ScrambleText text="Things we shipped" />
          </h2>
        </FadeIn>

        <div className="relative w-full">
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
