const LiveProjectButton = ({ href = "#" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View live project"
      className="inline-flex items-center whitespace-nowrap rounded-full border border-[#D7E2EA]/60 text-[#D7E2EA] font-black uppercase tracking-wider px-5 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 min-h-[44px] text-[10px] sm:text-xs hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] active:scale-95 touch-manipulation transition-colors transition-transform duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D7E2EA]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
    >
      Live Project
    </a>
  )
}

export default LiveProjectButton
