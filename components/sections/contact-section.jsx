import FadeIn from "../motion/fade-in"
import SectionTag from "../ui/section-tag"
import { CONTACT_EMAIL, LOCATION, AVAILABILITY, SOCIALS } from "../../lib/data"

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-ink text-paper rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] px-6 sm:px-10 md:px-16 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        <FadeIn delay={0} y={20}>
          <SectionTag index="07" label="start here" dark />
        </FadeIn>

        <FadeIn delay={0.05} y={30}>
          <h2 className="font-display font-extrabold uppercase leading-[0.85] tracking-tight text-[clamp(2.5rem,11vw,9rem)]">
            <span className="text-electric">[</span> Let&apos;s
            <br />
            build it <span className="text-electric">]</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={`Email ${CONTACT_EMAIL}`}
            className="group inline-flex items-center gap-4 font-display font-bold tracking-tight leading-none text-[clamp(1.1rem,4vw,3rem)] min-h-[44px] touch-manipulation hover:text-electric transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
          >
            {CONTACT_EMAIL}
            <span className="text-electric group-hover:translate-x-1 transition-transform duration-300 text-[clamp(0.8rem,2vw,2rem)]">
              ↗
            </span>
          </a>
        </FadeIn>

        <div className="w-full h-px bg-paper/15" />

        <FadeIn delay={0.15} y={20}>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <span className="font-mono uppercase tracking-widest text-paper/60 text-[10px] sm:text-xs">
                {LOCATION}
              </span>
              <span className="flex items-center gap-2 font-mono uppercase tracking-widest text-paper/60 text-[10px] sm:text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse flex-shrink-0" />
                {AVAILABILITY}
              </span>
            </div>
            <nav aria-label="Social links" className="flex flex-wrap items-center gap-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="font-mono uppercase tracking-widest text-paper/60 hover:text-electric text-[10px] sm:text-xs inline-flex items-center min-h-[44px] touch-manipulation transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-paper/40 rounded-sm"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default ContactSection
