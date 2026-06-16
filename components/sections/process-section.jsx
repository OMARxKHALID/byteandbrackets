import FadeIn from "../motion/fade-in"
import SectionTag from "../ui/section-tag"
import { PROCESS } from "../../lib/data"

const ProcessSection = () => {
  return (
    <section id="process" className="px-6 sm:px-10 md:px-16 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14 sm:mb-20">
          <div>
            <FadeIn delay={0} y={20}>
              <SectionTag index="03" label="how we work" />
            </FadeIn>
            <FadeIn delay={0.05} y={30}>
              <h2 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mt-6 sm:mt-8 max-w-2xl text-[clamp(2.5rem,8vw,6rem)]">
                Brief to production in five moves
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.1} y={20}>
            <p className="font-mono uppercase tracking-widest text-ash text-[10px] sm:text-xs max-w-xs md:text-right">
              No black boxes. You see working software every week.
            </p>
          </FadeIn>
        </div>

        <ol className="list-none grid grid-cols-1 md:grid-cols-5 gap-px bg-paper-shade border border-paper-shade">
          {PROCESS.map((step, i) => (
            <li key={step.number} className="bg-paper">
              <FadeIn delay={i * 0.08} y={20} className="h-full">
                <div className="group h-full flex flex-col gap-5 p-5 sm:p-6 hover:bg-ink hover:text-paper transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-electric flex-shrink-0" />
                    <span className="font-mono text-xs tracking-widest text-ash group-hover:text-paper/60 transition-colors duration-300">
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold uppercase tracking-tight leading-none text-[clamp(1.25rem,2.4vw,1.7rem)]">
                    {step.name}
                  </h3>
                  <p className="text-ash group-hover:text-paper/70 font-medium leading-relaxed text-sm transition-colors duration-300">
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
