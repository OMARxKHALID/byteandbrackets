import { Kanit } from "next/font/google"
import "./globals.css"

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "900"],
  variable: "--font-kanit",
  display: "swap",
})

export const metadata = {
  title: "Jack — 3D Creator",
  description:
    "Portfolio of Jack, a 3D creator driven by crafting striking and unforgettable projects.",
}

export const viewport = {
  themeColor: "#0c0c0c",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={kanit.variable}>
      <body className={kanit.className}>{children}</body>
    </html>
  )
}

export default RootLayout
