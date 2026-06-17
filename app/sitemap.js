import { PROJECTS, SITE_URL as BASE } from "../lib/data"

const sitemap = () => {
  const now = new Date()

  const staticRoutes = ["", "/projects"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }))

  const work = PROJECTS.map((project) => ({
    url: `${BASE}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...work]
}

export default sitemap
