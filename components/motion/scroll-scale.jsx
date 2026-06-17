"use client"

import { useRef } from "react"
import { m, useScroll, useTransform, useReducedMotion } from "motion/react"

const ScrollScale = ({ children, className = "" }) => {
  const ref = useRef(null)
  const shouldReduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1])

  if (shouldReduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <m.div ref={ref} style={{ scale, opacity }} className={`origin-left will-change-transform ${className}`}>
      {children}
    </m.div>
  )
}

export default ScrollScale
