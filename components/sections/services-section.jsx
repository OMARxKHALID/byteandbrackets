import FadeIn from "../motion/fade-in"
import SectionTag from "../ui/section-tag"
import ServicesAccordion from "../ui/services-accordion"
import { SERVICES } from "../../lib/data"

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-neutral-950 text-lime-100 border border-lime-100/10 rounded-[28px] sm:rounded-[40px] md:rounded-[56px] px-6 sm:px-10 md:px-16 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={20}>
          <SectionTag label="capabilities" />
        </FadeIn>
        <FadeIn delay={0.05} y={30}>
          <h2 className="font-display font-extrabold leading-[0.9] tracking-tight mt-6 sm:mt-8 mb-12 sm:mb-16 text-[clamp(2.5rem,9vw,7rem)]">
            What we build
          </h2>
        </FadeIn>

        <ServicesAccordion services={SERVICES} />
      </div>
    </section>
  )
}

export default ServicesSection
