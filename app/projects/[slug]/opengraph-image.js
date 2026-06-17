import { renderOg, size, contentType } from "../../../lib/og-image"
import { PROJECTS } from "../../../lib/data"

export { size, contentType }
export const alt = "Project — Byte & Brackets"

export const generateStaticParams = () => PROJECTS.map((project) => ({ slug: project.slug }))

const Image = async ({ params }) => {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  return renderOg({
    eyebrow: `${project.scope} · ${project.year}`,
    title: project.client,
  })
}

export default Image
