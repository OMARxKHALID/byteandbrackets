import { PROJECTS } from "../lib/data"

const BASE = "https://byteandbrackets.dev"

const sitemap = () => {
  const now = new Date()

  const staticRoutes = ["", "/projects"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }))

  const work = PROJECTS.map((project) => ({
    url: `${BASE}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...work]
}

export default sitemap
