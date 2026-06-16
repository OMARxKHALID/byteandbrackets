"use client"

import { useRef, useEffect, useCallback } from "react"
import { useReducedMotion } from "motion/react"
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRust,
  SiPython,
  SiGo,
  SiGraphql,
  SiDocker,
  SiRedis,
  SiStripe,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si"
import { TICKER } from "../../lib/data"

const ICONS = {
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Rust: SiRust,
  Python: SiPython,
  Go: SiGo,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  Redis: SiRedis,
  Stripe: SiStripe,
  Tailwind: SiTailwindcss,
  Vercel: SiVercel,
}

const tripled = [...TICKER, ...TICKER, ...TICKER]

const MarqueeSection = () => {
  const sectionRef = useRef(null)
  const rowRef = useRef(null)
  const topRef = useRef(0)
  const frameRef = useRef(0)
  const shouldReduce = useReducedMotion()

  const render = useCallback(() => {
    frameRef.current = 0
    if (!rowRef.current) return
    const value = (window.scrollY - topRef.current + window.innerHeight) * 0.25
    rowRef.current.style.transform = `translateX(${-(value - 200)}px)`
  }, [])

  useEffect(() => {
    if (shouldReduce) return
    const measure = () => {
      if (sectionRef.current) topRef.current = sectionRef.current.offsetTop
    }
    const handleScroll = () => {
      if (frameRef.current) return
      frameRef.current = requestAnimationFrame(render)
    }
    measure()
    render()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", measure)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", measure)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [render, shouldReduce])

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="bg-ink text-paper py-8 sm:py-10 overflow-hidden"
    >
      <div ref={rowRef} className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform">
        {tripled.map((item, i) => {
          const Icon = ICONS[item]
          return (
            <span key={`${item}-${i}`} className="flex items-center gap-8 sm:gap-12 flex-shrink-0">
              <span className="flex items-center gap-3 sm:gap-4">
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="text-paper/80 text-[clamp(1.2rem,3vw,2.2rem)] flex-shrink-0"
                  />
                )}
                <span className="font-display font-semibold uppercase tracking-tight text-[clamp(1.5rem,4vw,3rem)]">
                  {item}
                </span>
              </span>
              <span className="text-electric font-display text-[clamp(1.5rem,4vw,3rem)] leading-none">
                /
              </span>
            </span>
          )
        })}
      </div>
    </section>
  )
}

export default MarqueeSection
