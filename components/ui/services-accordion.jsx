"use client"

import { useState } from "react"
import { AnimatePresence, m } from "motion/react"
import FadeIn from "../motion/fade-in"

const ServicesAccordion = ({ services }) => {
  const [open, setOpen] = useState(services[0]?.number)

  return (
    <ul className="list-none border-t border-paper/15">
      {services.map((service, i) => {
        const isOpen = open === service.number
        return (
          <li key={service.number} className="border-b border-paper/15">
            <FadeIn delay={i * 0.06} y={20}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : service.number)}
                aria-expanded={isOpen}
                className="group w-full text-left flex items-center justify-between gap-6 py-7 sm:py-9 min-h-[44px] touch-manipulation cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
              >
                <h3
                  className={`font-display font-bold uppercase tracking-tight leading-none text-[clamp(1.75rem,5vw,3.5rem)] transition-colors duration-300 ${isOpen ? "text-electric" : "group-hover:text-electric"}`}
                >
                  {service.name}
                </h3>
                <span
                  aria-hidden="true"
                  className={`flex-shrink-0 text-electric font-display leading-none text-2xl sm:text-3xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-5 pb-8 sm:pb-10 md:grid md:grid-cols-[1fr_auto] md:gap-10">
                      <p className="text-paper/60 font-medium leading-relaxed max-w-2xl text-[clamp(0.95rem,1.6vw,1.2rem)]">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end md:pt-1">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center leading-none font-mono uppercase tracking-wide whitespace-nowrap text-[10px] sm:text-xs text-paper/60 border border-paper/20 rounded-md px-2.5 py-1.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </FadeIn>
          </li>
        )
      })}
    </ul>
  )
}

export default ServicesAccordion
