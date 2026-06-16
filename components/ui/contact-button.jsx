const ContactButton = ({ href = "#contact", label = "Start a project" }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-electric px-7 py-3.5 sm:px-9 sm:py-4 min-h-[44px] text-sm sm:text-base text-paper font-mono uppercase tracking-wider cursor-pointer touch-manipulation transition-transform duration-200 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      {label}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}

export default ContactButton
