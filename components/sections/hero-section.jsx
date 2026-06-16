"use client"

import FadeIn from "../motion/fade-in"
import Magnet from "../motion/magnet"
import ContactButton from "../ui/contact-button"
import { NAV_LINKS } from "../../lib/data"

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:h-screen lg:min-h-[700px] lg:justify-between [overflow-x:clip]">
      <div className="relative z-30">
        <FadeIn delay={0} y={-20}>
          <nav className="flex justify-between px-8 sm:px-12 md:px-16 pt-6 md:pt-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="py-3 cursor-pointer touch-manipulation text-[#D7E2EA] font-medium uppercase tracking-wide text-xs sm:text-sm md:text-base lg:text-[1.1rem] hover:opacity-70 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C] rounded-sm"
              >
                {link}
              </a>
            ))}
          </nav>
        </FadeIn>

        <div className="w-full flex justify-center pointer-events-none mt-[3vh] sm:mt-[4vh] overflow-hidden">
          <FadeIn delay={0.15} y={40} className="w-full text-center">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[clamp(2.8rem,15vw,280px)]">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="flex justify-center mt-4 sm:mt-8 px-4 lg:mt-0 lg:px-0 lg:block lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 z-20"
      >
        <Magnet padding={150} strength={3}>
          <img
            src="/portrait/jack.webp"
            alt="Portrait of Jack, 3D creator"
            width={520}
            height={693}
            fetchPriority="high"
            className="w-[72vw] max-w-[280px] sm:w-[50vw] sm:max-w-[360px] lg:w-[36vw] lg:max-w-[520px] pointer-events-none drop-shadow-2xl"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      <div className="w-full flex justify-between items-end gap-4 pt-6 pb-8 sm:pb-10 md:pb-12 lg:pb-10 px-8 sm:px-12 md:px-16 relative z-30">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[240px] md:max-w-[300px] text-[clamp(0.85rem,1.2vw,1.1rem)]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection
