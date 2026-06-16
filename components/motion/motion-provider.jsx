"use client"

import { LazyMotion, domAnimation } from "motion/react"

const MotionProvider = ({ children }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}

export default MotionProvider
