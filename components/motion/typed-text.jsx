"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"

const TypedText = ({ text, className = "", speed = 38 }) => {
  const shouldReduce = useReducedMotion()
  const [shown, setShown] = useState("")

  useEffect(() => {
    if (shouldReduce) {
      setShown(text)
      return
    }
    setShown("")
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, shouldReduce, speed])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
    </span>
  )
}

export default TypedText
