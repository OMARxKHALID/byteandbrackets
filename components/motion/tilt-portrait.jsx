"use client"

import Image from "next/image"
import { m, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react"

const TiltPortrait = ({ src, alt, width, height, className = "" }) => {
  const shouldReduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 150, damping: 15 })
  const sy = useSpring(my, { stiffness: 150, damping: 15 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [-14, 14])
  const rotateX = useTransform(sy, [-0.5, 0.5], [12, -12])

  if (shouldReduce) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`flex-shrink-0 ${className}`}
      />
    )
  }

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <m.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.04 }}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      className="flex-shrink-0 will-change-transform"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </m.div>
  )
}

export default TiltPortrait
