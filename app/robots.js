import { SITE_URL as BASE } from "../lib/data"

const robots = () => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${BASE}/sitemap.xml`,
})

export default robots
