"use client"

import { useState, useEffect, useCallback } from "react"
import { NAV_LINKS, CONTACT_EMAIL, SOCIALS } from "../../lib/data"

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  const handleClose = useCallback(() => setOpen(false), [])
  const handleToggle = useCallback(() => setOpen((v) => !v), [])

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [open, handleClose])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={handleToggle}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="relative z-[60] flex flex-col justify-center gap-[5px] w-11 h-11 -mr-2 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 rounded-sm"
      >
        <span
          className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span
          className={`block h-[2px] w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-paper flex flex-col px-6 pt-24 pb-10 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={handleClose}
              tabIndex={open ? 0 : -1}
              className="group flex items-baseline gap-4 py-2 font-display font-extrabold uppercase tracking-tight leading-none text-[clamp(2.5rem,12vw,4rem)] touch-manipulation hover:text-electric transition-colors duration-200"
            >
              <span className="font-mono text-electric text-base font-normal">
                0{i + 1}
              </span>
              {link}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-6 pt-10">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            onClick={handleClose}
            tabIndex={open ? 0 : -1}
            className="font-display font-bold text-xl tracking-tight inline-flex items-center min-h-[44px] touch-manipulation hover:text-electric transition-colors duration-200"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="flex flex-wrap gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="font-mono uppercase tracking-widest text-ash hover:text-electric text-xs inline-flex items-center min-h-[44px] touch-manipulation transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
