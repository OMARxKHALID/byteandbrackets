"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useReducedMotion } from "motion/react"

const ProjectMedia = ({
  image,
  video,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
}) => {
  const videoRef = useRef(null)
  const shouldReduce = useReducedMotion()
  const [active, setActive] = useState(false)

  const handleEnter = () => {
    if (shouldReduce || !videoRef.current) return
    setActive(true)
    videoRef.current.play().catch(() => {})
  }

  const handleLeave = () => {
    if (!videoRef.current) return
    setActive(false)
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      className={`relative overflow-hidden bg-ink/40 ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {!shouldReduce && video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  )
}

export default ProjectMedia
