import { renderOg, size, contentType } from "../../lib/og-image"

export { size, contentType }
export const alt = "Selected work — Byte & Brackets"

const Image = () => renderOg({ eyebrow: "Selected Work", title: "The Work" })

export default Image
