"use client"

import { m, useMotionValue, useSpring, useReducedMotion } from "motion/react"

const Magnetic = ({ children, strength = 0.4, className = "" }) => {
  const shouldReduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 })

  if (shouldReduce) {
    return <span className={`inline-block ${className}`}>{children}</span>
  }

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <m.span
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </m.span>
  )
}

export default Magnetic
