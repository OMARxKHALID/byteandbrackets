"use client"

import { useRef, useEffect, useCallback } from "react"
import { useReducedMotion } from "motion/react"
import { TICKER } from "../../lib/data"

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
        {tripled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 sm:gap-12 flex-shrink-0">
            <span className="font-display font-semibold uppercase tracking-tight text-[clamp(1.5rem,4vw,3rem)]">
              {item}
            </span>
            <span className="text-electric font-display text-[clamp(1.5rem,4vw,3rem)] leading-none">
              /
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}

export default MarqueeSection
