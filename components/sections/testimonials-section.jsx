import FadeIn from "../motion/fade-in"
import SectionTag from "../ui/section-tag"
import Monogram from "../ui/monogram"
import { TESTIMONIALS } from "../../lib/data"

const TestimonialsSection = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={20}>
          <SectionTag label="client word" />
        </FadeIn>
        <FadeIn delay={0.05} y={30}>
          <h2 className="font-display leading-[0.9] tracking-tight mt-6 sm:mt-8 mb-12 sm:mb-16 text-[clamp(2.5rem,8vw,6rem)]">
            In their words
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-lime-100/10 border border-lime-100/10">
          {TESTIMONIALS.map((item, i) => (
            <FadeIn key={item.company} delay={i * 0.08} y={20} className="bg-neutral-950">
              <figure className="h-full flex flex-col gap-6 p-6 sm:p-8">
                <span className="font-mono text-lime-400 text-xs tracking-widest">
                  // {item.tag}
                </span>
                <blockquote className="font-display leading-snug tracking-tight text-lime-100 text-[clamp(1.25rem,2.2vw,1.6rem)]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4">
                  <Monogram name={item.name} className="w-11 h-11 text-xs" />
                  <div className="flex flex-col gap-1">
                    <span className="font-display tracking-tight text-base sm:text-lg">
                      {item.name}
                    </span>
                    <span className="font-mono uppercase tracking-widest text-lime-100/70 text-xs">
                      {item.role} <span className="text-lime-400">·</span> {item.company}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
