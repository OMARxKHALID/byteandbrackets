const SectionTag = ({ index, label, dark = false }) => {
  return (
    <span
      className={`font-mono uppercase tracking-[0.18em] text-[10px] sm:text-xs inline-flex items-center gap-2 select-none ${dark ? "text-paper/60" : "text-ash"}`}
    >
      <span className="text-electric">[</span>
      {index}
      <span className="opacity-50">—</span>
      {label}
      <span className="text-electric">]</span>
    </span>
  )
}

export default SectionTag
