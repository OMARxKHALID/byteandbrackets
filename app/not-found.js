import Link from "next/link"
import FadeIn from "../components/motion/fade-in"
import FloatIcon from "../components/motion/float-icon"

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
}

const NotFound = () => {
  return (
    <main
      id="main-content"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center gap-10 px-6 py-20 text-center text-lime-100"
    >
      <FadeIn delay={0.1} y={20}>
        <FloatIcon
          src="/mascot.webp"
          width={1024}
          height={1024}
          className="w-[clamp(140px,30vw,260px)] h-auto select-none"
        />
      </FadeIn>

      <FadeIn delay={0.2} y={20} className="flex flex-col items-center gap-5">
        <span className="eyebrow">Error 404</span>
        <h1 className="font-display leading-[0.95] tracking-tight text-[clamp(3.5rem,16vw,9rem)]">
          <span className="text-lime-400">[</span> 404 <span className="text-lime-400">]</span>
        </h1>
        <p className="max-w-[420px] font-medium leading-snug text-lime-100/70 text-[clamp(1rem,1.3vw,1.2rem)]">
          This page got lost in the brackets. Nothing to build here — let&apos;s
          get you back.
        </p>
      </FadeIn>

      <FadeIn delay={0.35} y={20} className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          aria-label="Back to home"
          className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-lime-400 px-7 py-3.5 sm:px-9 sm:py-4 min-h-[44px] text-sm sm:text-base text-neutral-950 font-mono uppercase tracking-wider touch-manipulation transition-transform duration-200 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          Back home
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
        <Link
          href="/projects"
          aria-label="View projects"
          className="inline-flex items-center min-h-[44px] font-mono uppercase tracking-widest text-xs text-lime-100/70 hover:text-lime-400 touch-manipulation transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime-100/40 rounded-sm"
        >
          View projects
        </Link>
      </FadeIn>
    </main>
  )
}

export default NotFound
