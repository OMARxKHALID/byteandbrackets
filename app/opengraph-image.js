import { renderOg, size, contentType } from "../lib/og-image"

export { size, contentType }
export const alt = "Byte & Brackets — Software Studio"

const Image = () => renderOg({ eyebrow: "Product Engineering Studio", title: "Byte & Brackets" })

export default Image
