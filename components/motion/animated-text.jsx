"use client"

import { Fragment, useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

const AnimatedChar = ({ char, scrollYProgress, index, total }) => {
  const start = index / total
  const end = Math.min(start + 1 / total, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block" aria-hidden="true">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
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

  const total = text.length
  let charIndex = 0
  const words = text.split(" ")

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => {
        const wordSpans = word.split("").map((char) => {
          const idx = charIndex++
          return (
            <AnimatedChar
              key={idx}
              char={char}
              scrollYProgress={scrollYProgress}
              index={idx}
              total={total}
            />
          )
        })
        charIndex++
        return (
          <Fragment key={wi}>
            <span className="inline-block whitespace-nowrap">{wordSpans}</span>
            {wi < words.length - 1 && " "}
          </Fragment>
        )
      })}
    </p>
  )
}

export default AnimatedText
