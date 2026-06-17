"use client"

import { useEffect } from "react"
import { m, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "motion/react"

const HeroBracket = ({ char, side }) => {
  const shouldReduce = useReducedMotion()
  const { scrollY } = useScroll()
  const drift = useTransform(scrollY, [0, 500], [0, side * 70])

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 110, damping: 18, mass: 0.4 })
  const sy = useSpring(py, { stiffness: 110, damping: 18, mass: 0.4 })

  const x = useTransform(() => drift.get() + sx.get())

  useEffect(() => {
    if (shouldReduce) return
    const handleMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      px.set(nx * 48 * side)
      py.set(ny * 30)
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [shouldReduce, side, px, py])

  const className =
    "inline-block font-display font-extrabold leading-none text-electric text-[clamp(5rem,18vw,17rem)]"

  if (shouldReduce) {
    return (
      <span aria-hidden="true" className={className}>
        {char}
      </span>
    )
  }

  return (
    <m.span aria-hidden="true" style={{ x, y: sy }} className={`${className} will-change-transform`}>
      {char}
    </m.span>
  )
}

export default HeroBracket
