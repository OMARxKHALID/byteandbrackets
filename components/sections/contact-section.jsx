"use client"

import FadeIn from "../motion/fade-in"
import { CONTACT_EMAIL, LOCATION, AVAILABILITY, SOCIALS } from "../../lib/data"

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-8 sm:px-12 md:px-16 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 flex flex-col gap-12 sm:gap-16"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          aria-label={`Send email to ${CONTACT_EMAIL}`}
          className="group inline-flex items-center gap-4 text-[#D7E2EA] font-black uppercase tracking-tight leading-none text-[clamp(1rem,3vw,3.5rem)] hover:opacity-50 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C] rounded-sm"
        >
          {CONTACT_EMAIL}
          <span className="text-[#D7E2EA]/40 group-hover:translate-x-1 transition-transform duration-300 text-[clamp(0.75rem,2vw,2rem)]">
            ↗
          </span>
        </a>
      </FadeIn>

      <div className="w-full h-px bg-[#D7E2EA]/10" />

      <FadeIn delay={0.2} y={20}>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <span className="text-[#D7E2EA]/40 text-[10px] sm:text-xs uppercase tracking-widest">
              {LOCATION}
            </span>
            <span className="flex items-center gap-2 text-[#D7E2EA]/60 text-[10px] sm:text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              {AVAILABILITY}
            </span>
          </div>
          <nav aria-label="Social links" className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] text-[10px] sm:text-xs uppercase tracking-widest transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D7E2EA]/40 rounded-sm"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </FadeIn>
    </section>
  )
}

export default ContactSection
