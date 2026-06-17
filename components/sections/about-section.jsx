import FadeIn from "../motion/fade-in"
import AnimatedText from "../motion/animated-text"
import CountUp from "../motion/count-up"
import DrawBar from "../motion/draw-bar"
import TiltPortrait from "../motion/tilt-portrait"
import FloatIcon from "../motion/float-icon"
import SectionTag from "../ui/section-tag"
import { STUDIO_HEADLINE, STUDIO_TEXT, STATS, FOUNDER } from "../../lib/data"

const AboutSection = () => {
  return (
    <section
      id="studio"
      className="relative z-10 px-6 sm:px-10 md:px-16 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={20}>
          <SectionTag index="04" label="studio" />
        </FadeIn>

        <FadeIn delay={0.05} y={30}>
          <h2 className="font-display font-extrabold leading-[0.95] tracking-tight mt-6 sm:mt-8 max-w-4xl text-[clamp(2rem,6vw,4.5rem)]">
            {STUDIO_HEADLINE}
          </h2>
        </FadeIn>

        <AnimatedText
          text={STUDIO_TEXT}
          className="text-ink/80 font-medium leading-relaxed mt-8 sm:mt-10 max-w-3xl text-[clamp(1.05rem,2vw,1.5rem)]"
        />

        <FadeIn delay={0.1} y={20}>
          <figure className="flex items-center gap-4 mt-10 sm:mt-12">
            <TiltPortrait
              src={FOUNDER.portrait}
              alt={FOUNDER.name}
              width={620}
              height={671}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-paper-shade"
            />
            <figcaption className="flex flex-col gap-1">
              <span className="font-display font-bold tracking-tight text-lg sm:text-xl">
                {FOUNDER.name}
              </span>
              <span className="font-mono uppercase tracking-widest text-electric text-[10px] sm:text-xs">
                {FOUNDER.role}
              </span>
            </figcaption>
          </figure>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper-shade mt-16 sm:mt-20 border border-paper-shade">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} y={20} className="bg-paper">
              <div className="p-6 sm:p-8 flex flex-col gap-3">
                <FloatIcon
                  src={stat.icon}
                  width={440}
                  height={467}
                  delay={i * 0.4}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
                <CountUp
                  value={stat.value}
                  className="font-display font-extrabold text-electric leading-none text-[clamp(2rem,5vw,3.5rem)]"
                />
                <DrawBar className="h-[3px] w-8 sm:w-10 bg-electric" delay={i * 0.08} />
                <span className="font-mono uppercase tracking-widest text-ash text-[10px] sm:text-xs">
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
