# Context — Byte & Brackets

Glossary of the domain language for the Byte & Brackets studio site. Terms only — no implementation detail.

## Glossary

### Project
A piece of client software the studio designed, built, and shipped. The canonical — and only — noun for an item of the studio's body of work. The collection lives at `/projects`; each Project has its own detail page (informally "the project page").

- Cards link through with **"View project"**.
- The collective in copy may read "our work", but **"Work" is never a route, a nav label, or a name for a single item** — use "Projects".

### Service
One of the studio's named capabilities — the five offerings: Product Engineering, AI Integration, Design Systems, Cloud & Infra, MVP Sprints. A **controlled vocabulary**: the Services a Project lists must be drawn from this exact set (a Project's Services is a subset of the offerings, never free-form). The same word means the same thing whether describing what the studio offers or what a Project used.

### Stack
The technologies a Project was built with (e.g. Next.js, Postgres, Rust). Distinct from Service: Stack is *tools*, Service is *capability*. Free-form (not a controlled set).

### Client
The customer the studio built a Project for (e.g. Ledgerline). A Project is identified by its Client — Projects have no separate title.

## Non-terms (deliberately avoided)

### "Case study"
Not used anywhere in the UI, routes, or labels. A Project's detail page is just the project page. (The page may still tell a challenge → approach → result story, but we don't call it a "case study".)

### "Work"
Not a route or label. Allowed only as informal collective copy ("our work"). The noun and the route are "Projects".
