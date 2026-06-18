import { Saira_Stencil_One, Hanken_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import MotionProvider from "../components/motion/motion-provider"
import ScrollProgress from "../components/motion/scroll-progress"
import { BRAND, CONTACT_EMAIL, SITE_URL } from "../lib/data"

const siteLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    description:
      "Product-engineering studio. We design, build, and ship web apps, SaaS platforms, and AI products.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE_URL,
  },
]

const display = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Byte & Brackets — Software Studio",
    template: "%s · Byte & Brackets",
  },
  description:
    "Byte & Brackets is a product-engineering studio. We design, build, and ship web apps, SaaS platforms, and AI products for teams who need to move fast.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Byte & Brackets — Software Studio",
    description:
      "Byte & Brackets is a product-engineering studio. We design, build, and ship web apps, SaaS platforms, and AI products for teams who need to move fast.",
    url: SITE_URL,
    siteName: "Byte & Brackets",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Byte & Brackets — Software Studio",
    description:
      "Byte & Brackets is a product-engineering studio. We design, build, and ship web apps, SaaS platforms, and AI products for teams who need to move fast.",
  },
}

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
}

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className={body.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}

export default RootLayout
