import Magnetic from "../motion/magnetic"

const ContactButton = ({ href = "#contact", label = "Start a project" }) => {
  return (
    <Magnetic strength={0.4}>
      <a
        href={href}
        aria-label={label}
        className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-lime-400 px-7 py-3.5 sm:px-9 sm:py-4 min-h-[44px] text-sm sm:text-base text-neutral-950 font-mono uppercase tracking-wider cursor-pointer touch-manipulation transition-transform duration-200 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      >
        {label}
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>
    </Magnetic>
  )
}

export default ContactButton
