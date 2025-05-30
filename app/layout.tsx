import type { Metadata } from "next";
import "@/styles/globals.css";
import { Geist, Tomorrow } from "next/font/google";

const fontPrimary = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
})

const fontSecondary = Tomorrow({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
  variable: '--font-secondary',
})

export const metadata: Metadata = {
  title: 'Star Rune landing page',
  description: 'Star Rune landing page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth overscroll-none">
      <body className={`${fontPrimary.variable} ${fontSecondary.variable} font-secondary antialiased`}>{children}</body>
    </html>
  )
}
