import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Geist, Roboto } from 'next/font/google'

const fontPrimary = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
})

const fontSecondary = Roboto({
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en">
      <body className={`${fontPrimary.variable} ${fontSecondary.variable} font-sans`}>{children}</body>
    </html>
  )
}
