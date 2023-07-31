import type { Metadata } from "next"
import type { PropsWithChildren } from "react"

import "@/styles/globals.css"
import { inter } from "@/util/fonts"

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
  openGraph: {
    description: "Personal website of Danial Raza",
    siteName: "Danial Raza",
    title: "Danial Raza",
    type: "website",
    url: "https://sdanialraza.dev"
  },
  other: {
    "msapplication-TileColor": "#1c1b22",
  },
  themeColor: [
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
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
