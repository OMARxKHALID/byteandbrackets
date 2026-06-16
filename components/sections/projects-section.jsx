"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import FadeIn from "../motion/fade-in"
import LiveProjectButton from "../ui/live-project-button"
import { PROJECTS } from "../../lib/data"

const FEATURED = PROJECTS.slice(0, 5)

const imageRadius = "rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"

const ProjectCard = ({ project, index, totalCards, range, progress }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="h-[80vh] sm:h-[85vh]">
      <motion.div
        className="sticky w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[60px] border border-[#D7E2EA]/30 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top overflow-hidden flex flex-col"
        style={{ scale, top: `${5 + index * 1.5}rem` }}
      >
        <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-3 sm:gap-4 sm:pb-4 md:pb-6">
          <div className="flex items-end gap-3 sm:gap-6 md:gap-10">
            <span className="font-black text-[#D7E2EA] leading-none tracking-tight text-[clamp(2rem,8vw,140px)]">
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pb-1 sm:pb-2">
              <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[10px] sm:text-xs">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-black uppercase text-[clamp(0.9rem,2vw,2rem)]">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="ml-auto flex-shrink-0">
            <LiveProjectButton href={project.url} />
          </div>
        </div>

        <div className="flex-1 min-h-0">
          <img
            src={project.image}
            alt={`${project.name} website preview`}
            width={1600}
            height={1000}
            className={`w-full h-full object-cover object-top ${imageRadius}`}
            loading="lazy"
          />
        </div>
      </motion.div>
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
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-8 sm:px-12 md:px-16 py-20 sm:py-24 md:py-32"
    >
      <div className="w-full flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,160px)]">
            Projects
          </h2>
        </FadeIn>

        <div className="relative w-full max-w-6xl mx-auto">
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

        <FadeIn delay={0} y={20} className="mt-16 sm:mt-20 md:mt-24">
          <Link
            href="/projects"
            aria-label="View all projects"
            className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-[#D7E2EA]/60 text-[#D7E2EA] font-black uppercase tracking-wider px-8 py-4 sm:px-12 sm:py-5 min-h-[44px] text-xs sm:text-sm hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] active:scale-95 touch-manipulation transition-colors transition-transform duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

export default ProjectsSection
