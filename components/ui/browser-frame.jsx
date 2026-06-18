const BrowserFrame = ({ children, url, className = "" }) => {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-lime-100/15 bg-black/40 ${className}`}
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-lime-100/10 bg-neutral-950/70 px-3 sm:px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-lime-100/25" />
          <span className="w-2.5 h-2.5 rounded-full bg-lime-100/25" />
          <span className="w-2.5 h-2.5 rounded-full bg-lime-400/70" />
        </span>
        {url && (
          <span className="flex-1 truncate rounded-md bg-lime-100/5 px-3 py-1 font-mono text-xs text-lime-100/70">
            {url}
          </span>
        )}
      </div>
      <div className="relative overflow-hidden">{children}</div>
    </div>
  )
}

export default BrowserFrame
