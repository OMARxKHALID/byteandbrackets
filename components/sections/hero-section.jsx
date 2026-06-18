import FadeIn from "../motion/fade-in"
import TypedText from "../motion/typed-text"
import HeroBracket from "../motion/hero-bracket"
import HeroZoom from "../motion/hero-zoom"
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
            <span className="text-lime-400">.</span>
          </a>
          <DesktopNav />
          <MobileNav />
        </nav>
      </FadeIn>

      <HeroZoom className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <FadeIn delay={0.1} y={20} className="mb-6 sm:mb-8">
          <span className="eyebrow inline-flex items-center gap-2 select-none">
            <TypedText text="Product engineering studio · est. 2019" />
            <span className="caret" aria-hidden="true" />
          </span>
        </FadeIn>

        <div className="flex items-center justify-center gap-2 sm:gap-5 md:gap-8 w-full">
          <FadeIn delay={0.35} x={110} y={0}>
            <HeroBracket char="[" side={-1} />
          </FadeIn>

          <FadeIn delay={0.15} y={30} className="text-center">
            <h1 className="font-display font-extrabold leading-[0.82] tracking-tight text-[clamp(3rem,10vw,8.5rem)] select-none">
              Byte <span className="text-lime-400">&amp;</span>
              <br />
              Brackets
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} x={-110} y={0}>
            <HeroBracket char="]" side={1} />
          </FadeIn>
        </div>
      </HeroZoom>

      <div className="w-full flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between pt-6 pb-10 sm:pb-12 px-6 sm:px-10 md:px-16">
        <FadeIn delay={0.4} y={20}>
          <p className="text-lime-100/70 font-medium leading-snug max-w-[420px] text-[clamp(1rem,1.3vw,1.2rem)]">
            {HERO_THESIS}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="flex flex-col items-start sm:items-end gap-4">
          <span className="flex items-center gap-2 font-mono uppercase tracking-widest text-xs text-lime-100/70">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse flex-shrink-0" />
            {AVAILABILITY}
          </span>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
