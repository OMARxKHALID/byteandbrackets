const LiveProjectButton = ({ href = "#", label = "Case study" }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-paper/30 text-paper font-mono uppercase tracking-wider px-5 py-3 sm:px-7 sm:py-3.5 min-h-[44px] text-[10px] sm:text-xs hover:bg-paper/10 hover:border-paper/60 active:scale-95 touch-manipulation transition-[color,background-color,border-color,transform] duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-paper/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export default LiveProjectButton
