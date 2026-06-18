const Monogram = ({ name, className = "" }) => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <span
      aria-hidden="true"
      className={`flex-shrink-0 inline-flex items-center justify-center rounded-xl border border-lime-100/15 bg-lime-100/10 font-mono font-bold tracking-tight text-lime-100 ${className}`}
    >
      {initials}
    </span>
  )
}

export default Monogram
