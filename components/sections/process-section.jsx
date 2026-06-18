import FadeIn from "../motion/fade-in"
import DrawBar from "../motion/draw-bar"
import SectionTag from "../ui/section-tag"
import { PROCESS } from "../../lib/data"

const ProcessSection = () => {
  return (
    <section id="process" className="px-6 sm:px-10 md:px-16 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14 sm:mb-20">
          <div>
            <FadeIn delay={0} y={20}>
              <SectionTag label="how we work" />
            </FadeIn>
            <FadeIn delay={0.05} y={30}>
              <h2 className="font-display font-extrabold leading-[0.9] tracking-tight mt-6 sm:mt-8 max-w-2xl text-[clamp(2.5rem,8vw,6rem)]">
                Brief to production in five moves
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.1} y={20}>
            <p className="font-mono uppercase tracking-widest text-lime-100/70 text-xs max-w-xs md:text-right">
              No black boxes. You see working software every week.
            </p>
          </FadeIn>
        </div>

        <DrawBar className="h-px w-full bg-lime-400/50 mb-8 sm:mb-10" duration={1.1} />

        <ol className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-lime-100/10 border border-lime-100/10">
          {PROCESS.map((step, i) => (
            <li key={step.number} className="bg-neutral-950">
              <FadeIn delay={i * 0.08} y={20} className="h-full">
                <div className="group h-full flex flex-col gap-5 p-5 sm:p-6 hover:bg-lime-100/5 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-400 flex-shrink-0" />
                    <span className="font-mono text-xs tracking-widest text-lime-100/70">
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold tracking-tight leading-none text-[clamp(1.25rem,2.4vw,1.7rem)]">
                    {step.name}
                  </h3>
                  <p className="text-lime-100/70 font-medium leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSection
