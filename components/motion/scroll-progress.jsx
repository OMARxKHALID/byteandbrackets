"use client"

import { m, useScroll, useSpring, useReducedMotion } from "motion/react"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const shouldReduce = useReducedMotion()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX: shouldReduce ? scrollYProgress : smooth }}
      className="fixed top-0 left-0 right-0 z-40 h-1 bg-electric origin-left pointer-events-none"
    />
  )
}

export default ScrollProgress
