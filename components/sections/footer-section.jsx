import { BRAND } from "../../lib/data"

const FooterSection = () => {
  return (
    <footer className="bg-neutral-950 text-lime-100 px-6 sm:px-10 md:px-16 py-6 flex flex-wrap items-center justify-between gap-4">
      <span className="font-mono uppercase tracking-widest text-lime-100/70 text-xs">
        © {new Date().getFullYear()} {BRAND}
      </span>
      <span className="font-mono uppercase tracking-widest text-lime-100/70 text-xs">
        Software studio · Built in-house
      </span>
    </footer>
  )
}

export default FooterSection
