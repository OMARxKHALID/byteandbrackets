const SectionTag = ({ label }) => {
  return (
    <span className="font-mono uppercase tracking-[0.18em] text-xs inline-flex items-center gap-2 select-none text-lime-100/70">
      <span className="text-lime-400">[</span>
      {label}
      <span className="text-lime-400">]</span>
    </span>
  )
}

export default SectionTag
