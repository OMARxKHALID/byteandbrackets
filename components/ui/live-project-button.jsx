const LiveProjectButton = ({ href = "#", label = "View project" }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-lime-100/30 text-lime-100 font-mono uppercase tracking-wider px-5 py-3 sm:px-7 sm:py-3.5 min-h-[44px] text-xs hover:bg-lime-100/10 hover:border-lime-100/60 active:scale-95 touch-manipulation transition-[color,background-color,border-color,transform] duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-100/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export default LiveProjectButton
