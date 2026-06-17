import FadeIn from "../motion/fade-in"
import TypedText from "../motion/typed-text"
import ScrollDrift from "../motion/scroll-drift"
import ContactButton from "../ui/contact-button"
import MobileNav from "../ui/mobile-nav"
import DesktopNav from "../ui/desktop-nav"
import { BRAND_SHORT, HERO_THESIS, AVAILABILITY } from "../../lib/data"

const HeroSection = () => {
  return (
    <section className="relative flex flex-col min-h-[90dvh] lg:min-h-[760px] [overflow-x:clip]">
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 sm:px-10 md:px-16 pt-6 md:pt-8">
          <a
            href="#main-content"
            aria-label="Byte & Brackets home"
            className="font-display font-extrabold text-lg sm:text-xl tracking-tight inline-flex items-center min-h-[44px] touch-manipulation"
          >
            {BRAND_SHORT}
            <span className="text-electric">.</span>
          </a>
          <DesktopNav />
          <MobileNav />
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <FadeIn delay={0.1} y={20} className="mb-6 sm:mb-8">
          <span className="eyebrow inline-flex items-center gap-2">
            <TypedText text="Product engineering studio · est. 2019" />
            <span className="caret" aria-hidden="true" />
          </span>
        </FadeIn>

        <div className="flex items-center justify-center gap-2 sm:gap-5 md:gap-8 w-full">
          <FadeIn delay={0.35} x={110} y={0}>
            <ScrollDrift x={-70}>
              <span
                aria-hidden="true"
                className="font-display font-extrabold leading-none text-electric text-[clamp(5rem,18vw,17rem)]"
              >
                [
              </span>
            </ScrollDrift>
          </FadeIn>

          <FadeIn delay={0.15} y={30} className="text-center">
            <h1 className="font-display font-extrabold uppercase leading-[0.82] tracking-tight text-[clamp(3rem,10vw,8.5rem)]">
              Byte <span className="text-electric">&amp;</span>
              <br />
              Brackets
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} x={-110} y={0}>
            <ScrollDrift x={70}>
              <span
                aria-hidden="true"
                className="font-display font-extrabold leading-none text-electric text-[clamp(5rem,18vw,17rem)]"
              >
                ]
              </span>
            </ScrollDrift>
          </FadeIn>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between pt-6 pb-10 sm:pb-12 px-6 sm:px-10 md:px-16">
        <FadeIn delay={0.4} y={20}>
          <p className="text-ash font-medium leading-snug max-w-[420px] text-[clamp(0.95rem,1.3vw,1.2rem)]">
            {HERO_THESIS}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="flex flex-col items-start sm:items-end gap-4">
          <span className="flex items-center gap-2 font-mono uppercase tracking-widest text-[10px] sm:text-xs text-ash">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse flex-shrink-0" />
            {AVAILABILITY}
          </span>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
