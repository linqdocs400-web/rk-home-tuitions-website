import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  title: "RK Home Tuitions - Learn or Teach Anything",
  description:
    "RK Home Tuitions connects learners with tutors for academics, music, dance, yoga, and more. Find a tutor or become one today!",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
