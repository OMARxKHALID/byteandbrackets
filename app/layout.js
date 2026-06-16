import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import MotionProvider from "../components/motion/motion-provider"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
})

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Byte & Brackets — Software Studio",
  description:
    "Byte & Brackets is a product-engineering studio. We design, build, and ship web apps, SaaS platforms, and AI products for teams who need to move fast.",
}

export const viewport = {
  themeColor: "#d8d2c4",
  colorScheme: "light",
}

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className={body.className}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}

export default RootLayout
