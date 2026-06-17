const BASE = "https://byteandbrackets.dev"

const robots = () => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${BASE}/sitemap.xml`,
})

export default robots
