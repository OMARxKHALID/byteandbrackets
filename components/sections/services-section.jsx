"use client"

import FadeIn from "../motion/fade-in"
import { SERVICES } from "../../lib/data"

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-[#F5F2EE] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px] px-8 sm:px-12 md:px-16 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="w-full flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,160px)]">
            Services
          </h2>
        </FadeIn>

        <ul className="w-full max-w-5xl mx-auto list-none">
          {SERVICES.map((service, i) => (
            <li
              key={service.number}
              className="py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 first:border-t"
            >
              <FadeIn delay={i * 0.1} y={30} className="flex items-start gap-4 sm:gap-8 md:gap-10">
                <span className="font-black text-[#0C0C0C] flex-shrink-0 leading-none text-[clamp(3rem,10vw,140px)]" aria-hidden="true">
                  {service.number}
                </span>
                <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {service.description}
                  </p>
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
