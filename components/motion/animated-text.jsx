"use client"

import { useRef } from "react"
import { m, useScroll, useTransform, useReducedMotion } from "motion/react"

const AnimatedWord = ({ word, scrollYProgress, index, total }) => {
  const start = index / total
  const end = Math.min(start + 1 / total, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <m.span className="inline-block whitespace-nowrap" style={{ opacity }}>
      {word}
    </m.span>
  )
}

const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null)
  const shouldReduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  })

  if (shouldReduce) {
    return <p ref={ref} className={className}>{text}</p>
  }

  const words = text.split(" ")

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true">
          <AnimatedWord
            word={word}
            scrollYProgress={scrollYProgress}
            index={i}
            total={words.length}
          />
          {i < words.length - 1 && " "}
        </span>
      ))}
    </p>
  )
}

export default AnimatedText
