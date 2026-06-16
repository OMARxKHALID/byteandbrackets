import FadeIn from "../motion/fade-in"
import SectionTag from "../ui/section-tag"
import { TEAM } from "../../lib/data"

const TeamSection = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 pb-20 sm:pb-24 md:pb-28 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16 items-start">
          <div className="md:sticky md:top-24">
            <FadeIn delay={0} y={20}>
              <SectionTag index="05" label="the people" />
            </FadeIn>
            <FadeIn delay={0.05} y={30}>
              <h2 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mt-6 sm:mt-8 text-[clamp(2.5rem,7vw,5rem)]">
                A small
                <br />
                senior team
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <p className="text-ash font-medium leading-relaxed mt-6 max-w-sm text-[clamp(0.95rem,1.5vw,1.15rem)]">
                The people who scope your project are the people who write the code. No handoffs, no juniors learning on your budget.
              </p>
            </FadeIn>
          </div>

          <ul className="list-none border-t border-paper-shade">
            {TEAM.map((person, i) => (
              <li key={person.name} className="border-b border-paper-shade">
                <FadeIn delay={i * 0.06} y={20}>
                  <div className="group py-6 sm:py-8 flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display font-extrabold uppercase tracking-tight leading-none group-hover:text-electric transition-colors duration-300 text-[clamp(1.75rem,5vw,3rem)]">
                        {person.name}
                      </h3>
                      <span className="font-mono uppercase tracking-widest text-electric text-[10px] sm:text-xs text-right flex-shrink-0">
                        {person.role}
                      </span>
                    </div>
                    <p className="text-ash font-medium text-sm sm:text-base leading-relaxed max-w-md">
                      {person.note}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
