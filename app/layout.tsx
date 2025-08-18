import type React from "react"
import type { Metadata } from "next"
import { Manrope, Inter } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Semper Agency - Grow Your Business",
  description:
    "Modern creative agency specializing in content generation and social media management. Let us help grow your business.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
