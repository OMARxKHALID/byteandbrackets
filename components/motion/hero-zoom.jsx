"use client"

import { useRef } from "react"
import { m, useScroll, useTransform, useReducedMotion } from "motion/react"

const HeroZoom = ({ children, className = "" }) => {
  const ref = useRef(null)
  const shouldReduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])

  if (shouldReduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <m.div ref={ref} style={{ scale, opacity, y }} className={`${className} will-change-transform`}>
      {children}
    </m.div>
  )
}

export default HeroZoom
