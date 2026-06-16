import { BRAND } from "../../lib/data"

const FooterSection = () => {
  return (
    <footer className="bg-ink text-paper px-6 sm:px-10 md:px-16 py-6 flex flex-wrap items-center justify-between gap-4">
      <span className="font-mono uppercase tracking-widest text-paper/40 text-[10px]">
        © {new Date().getFullYear()} {BRAND}
      </span>
      <span className="font-mono uppercase tracking-widest text-paper/40 text-[10px]">
        Software studio · Built in-house
      </span>
    </footer>
  )
}

export default FooterSection
