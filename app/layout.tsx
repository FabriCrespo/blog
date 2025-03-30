import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RapBlog - The Ultimate Hip-Hop Blog",
  description: "Discover the latest in rap music, hip-hop culture, and lifestyle",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'