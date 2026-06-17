"use client"

import { m, useReducedMotion } from "motion/react"

const DrawBar = ({ className = "", delay = 0, duration = 0.6 }) => {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <span aria-hidden="true" className={`block ${className}`} />
  }

  return (
    <m.span
      aria-hidden="true"
      className={`block origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration, delay, ease: "easeOut" }}
    />
  )
}

export default DrawBar
