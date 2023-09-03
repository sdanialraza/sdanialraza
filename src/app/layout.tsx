import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import type { PropsWithChildren } from "react"

import "@/styles/globals.css"
import { BASE_URL, inter } from "@/util"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  appleWebApp: {
    title: "Danial Raza",
  },
  applicationName: "Danial Raza",
  authors: [{ name: "Danial Raza", url: "https://github.com/sdanialraza" }],
  category: "Personal Site",
  colorScheme: "dark light",
  creator: "Danial Raza",
  description: "Personal website of Danial Raza",
  icons: {
    apple: [
      "/apple-touch-icon.png",
      {
        url: "/safari-pinned-tab.svg",
        rel: "mask-icon",
      },
    ],
    other: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  keywords: ["sdanialraza", "Danial Raza", "Danial", "Raza", "Website", "Portfolio", "Projects"],
  manifest: "/site.manifest",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    description: "Personal website of Danial Raza",
    images: [
      {
        height: 200,
        url: "/logo.png",
        width: 200,
      },
    ],
    siteName: "Danial Raza",
    title: "Danial Raza",
    type: "website",
    url: new URL(BASE_URL),
  },
  other: {
    "msapplication-TileColor": "#e4717a",
  },
  themeColor: [
    {
      color: "#e4717a",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#1c1b22",
    },
  ],
  title: {
    default: "Danial Raza",
    template: "%s | Danial Raza",
  },
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: "device-width",
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.variable} flex h-full min-h-screen flex-col items-center`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
