"use client"

import { NAV_LINKS } from "../../lib/data"
import { useScrollSpy } from "../../hooks/use-scroll-spy"
import Magnetic from "../motion/magnetic"

const IDS = NAV_LINKS.map((link) => link.toLowerCase())

const DesktopNav = () => {
  const active = useScrollSpy(IDS)

  return (
    <div className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => {
        const id = link.toLowerCase()
        const isActive = active === id
        return (
          <Magnetic key={link} strength={0.25}>
            <a
              href={`#${id}`}
              aria-current={isActive ? "true" : undefined}
              className={`font-mono uppercase tracking-wide text-xs lg:text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm inline-flex items-center min-h-[44px] touch-manipulation ${isActive ? "text-lime-400 underline underline-offset-4 decoration-1" : "text-lime-100/70 hover:text-lime-400"}`}
            >
              {link}
            </a>
          </Magnetic>
        )
      })}
    </div>
  )
}

export default DesktopNav
