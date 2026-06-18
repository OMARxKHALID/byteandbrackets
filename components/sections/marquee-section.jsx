import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRust,
  SiPython,
  SiGo,
  SiGraphql,
  SiDocker,
  SiRedis,
  SiStripe,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si"
import { TICKER } from "../../lib/data"

const ICONS = {
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Rust: SiRust,
  Python: SiPython,
  Go: SiGo,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  Redis: SiRedis,
  Stripe: SiStripe,
  Tailwind: SiTailwindcss,
  Vercel: SiVercel,
}

const tripled = [...TICKER, ...TICKER, ...TICKER]

const MarqueeSection = () => {
  return (
    <section className="bg-neutral-950 text-lime-100 py-4 sm:py-5 overflow-hidden select-none">
      <h2 className="sr-only">Our stack</h2>
      <ul className="sr-only">
        {TICKER.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="marquee-track flex w-max items-center gap-6 sm:gap-10 whitespace-nowrap will-change-transform">
        {tripled.map((item, i) => {
          const Icon = ICONS[item]
          return (
            <span key={`${item}-${i}`} className="flex items-center gap-6 sm:gap-10 flex-shrink-0">
              <span className="flex items-center gap-2.5 sm:gap-3">
                {Icon && (
                  <Icon className="text-lime-100/70 text-[clamp(1rem,2vw,1.5rem)] flex-shrink-0" />
                )}
                <span className="font-display font-semibold uppercase tracking-tight text-[clamp(1.1rem,2.6vw,1.9rem)]">
                  {item}
                </span>
              </span>
              <span className="text-lime-400 font-display text-[clamp(1.1rem,2.6vw,1.9rem)] leading-none">
                /
              </span>
            </span>
          )
        })}
      </div>
    </section>
  )
}

export default MarqueeSection
