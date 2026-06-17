import { renderOg, size, contentType } from "../../lib/og-image"

export { size, contentType }
export const alt = "Projects — Byte & Brackets"

const Image = () => renderOg({ eyebrow: "Selected Projects", title: "Projects" })

export default Image
