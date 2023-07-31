import type { Metadata } from "next"
import type { PropsWithChildren } from "react"

import "@/styles/globals.css"
import { inter } from "@/util/fonts"

export const metadata: Metadata = {}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
