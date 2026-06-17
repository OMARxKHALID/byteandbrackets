"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "motion/react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>[]{}"

const ScrambleText = ({ text, className = "" }) => {
  const shouldReduce = useReducedMotion()
  const ref = useRef(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (shouldReduce) {
      setDisplay(text)
      return
    }
    const el = ref.current
    if (!el) return

    let raf = 0
    const run = () => {
      const total = text.length
      const frames = Math.min(total * 2 + 8, 52)
      let frame = 0
      const tick = () => {
        const revealed = Math.floor((frame / frames) * total)
        let out = ""
        for (let i = 0; i < total; i++) {
          if (text[i] === " ") out += " "
          else if (i < revealed) out += text[i]
          else out += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
        setDisplay(out)
        frame += 1
        if (frame <= frames) raf = requestAnimationFrame(tick)
        else setDisplay(text)
      }
      tick()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            run()
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [text, shouldReduce])

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  )
}

export default ScrambleText
