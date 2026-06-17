"use client"

import Image from "next/image"
import { m, useReducedMotion } from "motion/react"

const FloatIcon = ({ src, width, height, delay = 0, className = "" }) => {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return (
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        className={className}
      />
    )
  }

  return (
    <m.div
      initial={{ y: 0 }}
      whileInView={{ y: [0, -6, 0] }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ rotateY: 20, scale: 1.14 }}
      style={{ transformPerspective: 500 }}
      className="w-fit will-change-transform"
    >
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        className={className}
      />
    </m.div>
  )
}

export default FloatIcon
