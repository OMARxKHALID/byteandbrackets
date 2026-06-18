"use client"

import { m, useReducedMotion } from "motion/react"

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  as = "div",
}) => {
  const shouldReduce = useReducedMotion()
  const Component = m[as] || m.div

  if (shouldReduce) {
    return (
      <Component
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "50px", amount: 0 }}
        transition={{ delay, duration: 0.5, ease: "easeOut" }}
        className={className}
      >
        {children}
      </Component>
    )
  }

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}

export default FadeIn
