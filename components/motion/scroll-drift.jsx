"use client"

import { m, useScroll, useTransform, useReducedMotion } from "motion/react"

const ScrollDrift = ({ children, x = 0, y = 0, distance = 500, className = "" }) => {
  const shouldReduce = useReducedMotion()
  const { scrollY } = useScroll()
  const tx = useTransform(scrollY, [0, distance], [0, x])
  const ty = useTransform(scrollY, [0, distance], [0, y])

  if (shouldReduce) {
    return <span className={`inline-block ${className}`}>{children}</span>
  }

  return (
    <m.span style={{ x: tx, y: ty }} className={`inline-block will-change-transform ${className}`}>
      {children}
    </m.span>
  )
}

export default ScrollDrift
