"use client"

import { useRef, useEffect, useCallback } from "react"
import { useReducedMotion } from "motion/react"
import { MARQUEE_VIDEOS_ROW1, MARQUEE_VIDEOS_ROW2 } from "../../lib/data"

const tripled1 = [...MARQUEE_VIDEOS_ROW1, ...MARQUEE_VIDEOS_ROW1, ...MARQUEE_VIDEOS_ROW1]
const tripled2 = [...MARQUEE_VIDEOS_ROW2, ...MARQUEE_VIDEOS_ROW2, ...MARQUEE_VIDEOS_ROW2]

const videoClass =
  "w-[280px] h-[180px] sm:w-[360px] sm:h-[232px] md:w-[420px] md:h-[270px] rounded-2xl object-cover flex-shrink-0"

const MarqueeSection = () => {
  const sectionRef = useRef(null)
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const shouldReduce = useReducedMotion()

  const handleScroll = useCallback(() => {
    if (!sectionRef.current || shouldReduce) return
    const rect = sectionRef.current.getBoundingClientRect()
    const sectionTop = rect.top + window.scrollY
    const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
    if (row1Ref.current) row1Ref.current.style.transform = `translateX(${value - 200}px)`
    if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(value - 200)}px)`
  }, [shouldReduce])

  useEffect(() => {
    if (shouldReduce) return
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll, shouldReduce])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const videos = section.querySelectorAll("video")
    const observer = new IntersectionObserver(
      ([entry]) => {
        videos.forEach((v) => {
          if (entry.isIntersecting) {
            v.play().catch(() => {})
          } else {
            v.pause()
          }
        })
      },
      { threshold: 0 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div ref={row1Ref} className="flex gap-3 will-change-transform">
          {tripled1.map((src, i) => (
            <video
              key={`r1-${i}`}
              src={src}
              loop
              muted
              playsInline
              preload="none"
              className={videoClass}
            />
          ))}
        </div>

        <div ref={row2Ref} className="flex gap-3 will-change-transform">
          {tripled2.map((src, i) => (
            <video
              key={`r2-${i}`}
              src={src}
              loop
              muted
              playsInline
              preload="none"
              className={videoClass}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
