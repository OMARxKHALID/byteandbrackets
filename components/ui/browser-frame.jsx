const BrowserFrame = ({ children, url, className = "" }) => {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-paper/15 bg-black/40 ${className}`}
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-paper/10 bg-ink/70 px-3 sm:px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-paper/25" />
          <span className="w-2.5 h-2.5 rounded-full bg-paper/25" />
          <span className="w-2.5 h-2.5 rounded-full bg-electric/70" />
        </span>
        {url && (
          <span className="flex-1 truncate rounded-md bg-paper/5 px-3 py-1 font-mono text-[10px] sm:text-xs text-paper/45">
            {url}
          </span>
        )}
      </div>
      <div className="relative overflow-hidden">{children}</div>
    </div>
  )
}

export default BrowserFrame
