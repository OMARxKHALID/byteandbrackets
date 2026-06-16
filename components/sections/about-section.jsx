"use client"

import FadeIn from "../motion/fade-in"
import AnimatedText from "../motion/animated-text"
import ContactButton from "../ui/contact-button"
import { CORNER_IMAGES, ABOUT_TEXT } from "../../lib/data"

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative z-10 flex flex-col items-center justify-center px-8 sm:px-12 md:px-16 py-32 sm:py-40 md:min-h-screen md:py-20"
    >
      {CORNER_IMAGES.map((img) => (
        <FadeIn key={img.alt} {...img.fadeProps} className={img.className}>
          <img
            src={img.src}
            alt={img.alt}
            width={220}
            height={220}
            className="w-full pointer-events-none"
            loading="lazy"
          />
        </FadeIn>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutSection
