import FadeIn from "../motion/fade-in"
import SectionTag from "../ui/section-tag"
import { SERVICES } from "../../lib/data"

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-ink text-paper rounded-[36px] sm:rounded-[48px] md:rounded-[60px] px-6 sm:px-10 md:px-16 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={20}>
          <SectionTag index="02" label="capabilities" dark />
        </FadeIn>
        <FadeIn delay={0.05} y={30}>
          <h2 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight mt-6 sm:mt-8 mb-12 sm:mb-16 text-[clamp(2.5rem,9vw,7rem)]">
            What we build
          </h2>
        </FadeIn>

        <ul className="list-none border-t border-paper/15">
          {SERVICES.map((service, i) => (
            <li key={service.number} className="border-b border-paper/15">
              <FadeIn delay={i * 0.06} y={20}>
                <div className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 md:gap-10 py-8 sm:py-10 md:py-12 transition-colors duration-300">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display font-bold uppercase tracking-tight leading-none text-[clamp(1.75rem,5vw,3.5rem)] group-hover:text-electric transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-paper/60 font-medium leading-relaxed max-w-2xl text-[clamp(0.9rem,1.6vw,1.15rem)]">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end md:pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono uppercase tracking-wide text-[10px] sm:text-xs text-paper/50 border border-paper/20 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection
