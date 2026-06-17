"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"

const CountUp = ({ value, className = "" }) => {
  const shouldReduce = useReducedMotion()
  const ref = useRef(null)
  const started = useRef(false)
  const [n, setN] = useState(null)

  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const target = match ? parseInt(match[2], 10) : 0

  useEffect(() => {
    if (shouldReduce || !match) return
    const el = ref.current
    if (!el) return

    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1100
            const start = performance.now()
            const tick = (t) => {
              const p = Math.min((t - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setN(Math.round(eased * target))
              if (p < 1) raf = requestAnimationFrame(tick)
            }
            raf = requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target, shouldReduce, value])

  if (!match) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {n === null ? (
        value
      ) : (
        <>
          {match[1]}
          <span className="tabular-nums">{n}</span>
          {match[3]}
        </>
      )}
    </span>
  )
}

export default CountUp
