# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Byte & Brackets — a single-page marketing site for a software studio, plus a `/projects` index and `/projects/[slug]` case-study pages. Next.js 16 App Router, React 19, Tailwind CSS v4, `motion` (Framer Motion successor) for animation. Content is fictional placeholder data.

## Commands

- Dev: `bun dev`
- Build: `bun run build`
- Start (prod): `bun run start`
- Install: `bun install`
- Add package: `bun add <pkg>`

There is no lint script and no test suite. The `playwright` devDependency is unused at present; do not add a Playwright test runner.

## Architecture

- **Content lives in `lib/data.js`** — a single module of named exports (`BRAND`, `NAV_LINKS`, `SERVICES`, `PROCESS`, `PROJECTS`, `TEAM`, `TESTIMONIALS`, `STATS`, `TICKER`, `FOUNDER`, etc.). Sections and pages are presentational; they import from `data.js` and map over it. Edit copy and project entries here, not in JSX.
- **`PROJECTS` is the source of truth for routing.** Each entry's `slug` drives `/projects/[slug]` via `generateStaticParams`, and a local `getProject` helper in `app/projects/[slug]/page.js` looks up by slug (it is not exported from `data.js`). A project needs both list fields (`number`, `client`, `scope`, `outcome`, `image`, `video`) and detail fields (`challenge`, `approach`, `result`, `duration`, `services`, `liveUrl`). Adding a project = adding one object here; the route renders statically.
- **Home page (`app/page.js`)** composes `components/sections/*` in fixed order. Sections are one-use, full-width, page-level. Reusable stateless blocks go in `components/ui/`.
- **Animation** is centralized: `components/motion/motion-provider.jsx` wraps the app in `LazyMotion` with `domAnimation` + `strict`, so use the `m` component (not `motion`) from `motion/react` inside client components. `components/motion/fade-in.jsx` is the standard scroll-reveal wrapper and honors `prefers-reduced-motion`. Reuse it rather than hand-rolling animations. The one non-`motion` animation is the logo marquee: `components/sections/marquee-section.jsx` maps `TICKER` and relies on the CSS `.marquee-track` keyframe in `globals.css` (38s loop, pauses on hover, gated behind `prefers-reduced-motion`). Each `PROJECTS` entry also carries a `/marquee/*.mp4` `video` used by the project media.
- **"Project" is the only noun for an item of the studio's work** — "Work" is never a route, nav label, or single-item name; use "Projects". A Project's `services` must be drawn from the five named `SERVICES` (controlled vocabulary); free-form tools belong in other fields. Follow this language in copy and code.

## SEO / metadata

This site is heavily SEO-instrumented; keep it consistent when adding routes:

- `app/layout.js` holds the title template (`%s · Byte & Brackets`), `metadataBase`, default OG/Twitter, and JSON-LD (`Organization` + `WebSite`).
- Each route exports its own `metadata` (or `generateMetadata`) with a `canonical` under `alternates`.
- OG images are generated, not static: `lib/og-image.jsx` exports `renderOg`/`size`/`contentType`; each `opengraph-image.js` re-exports them and calls `renderOg`. Match this pattern for new routes.
- `app/sitemap.js` already maps every `PROJECTS` slug to a `/projects/*` URL automatically; only its hardcoded `staticRoutes` array (`""`, `/projects`) needs a manual edit when adding a new static page. `app/robots.js` and `public/llms.txt` also exist — keep `llms.txt` in sync with copy changes.

## Design tokens

The site is a dark theme built on **Tailwind's default color palette** (no custom color tokens — `@theme` in `app/globals.css` only declares the three font variables). The three roles map to default tokens: **`lime-100`** `#ecfcca` (text/cream — the light role), **`lime-400`** `#9de500` (accent), **`neutral-950`** `#0a0a0a` (surfaces/panels). The page background is pure black (`body`); panels/cards use `bg-neutral-950` for subtle elevation. Express every in-between tone as a Tailwind **opacity modifier** of these (`text-lime-100/60` for secondary text, `border-lime-100/10`–`/15` for dividers, `bg-lime-100/[0.05]` for hover lifts). Stick to default Tailwind theme variables — do not introduce custom color vars or raw hexes. Fonts loaded via `next/font/google` in layout and exposed as `--font-display` (Bricolage Grotesque), `--font-body` (Hanken Grotesk), `--font-mono` (JetBrains Mono); use the `font-display` / `font-mono` utilities.

## Conventions

- JavaScript only — never TypeScript. ES modules only.
- `const` arrow functions, never `function` declarations. Event handlers prefixed `handle`.
- Zero comments anywhere — code must be self-documenting.
- Component styling is Tailwind classes only — no `style` tags, no CSS modules. The two carve-outs: `og-image.jsx` uses inline styles (required by `next/og`), and `app/globals.css` is the home for global-layer CSS that can't be expressed per-element — the base reset, scrollbar theming, the body grid + film-grain noise overlays (`body::before`/`::after`), the `.eyebrow`/`.caret`/`.font-display`/`.font-mono` helper classes, and the `@keyframes` (`marquee`, `blink`). Don't strip the grid/noise overlays; they're the site's signature texture. Add new global CSS here, not in components.
- Early returns preferred.
- Accessibility is expected: interactive elements get `aria-label`, keyboard handlers, focus-visible rings, and 44px min touch targets (see existing nav links for the pattern). Pages include a "Skip to main content" link.
- File naming: kebab-case. `components/sections/`, `components/ui/`, `components/motion/`, `hooks/` (`use-*`), `lib/`, `store/` (`use-*`).
- Path alias `@/*` maps to repo root (`jsconfig.json`).
- Next.js 16: use `proxy.js` (not `middleware.js`) for middleware; `params` is async and must be awaited in route handlers.
