import type { Metadata } from 'next'
import '@/styles/globals.css'
import fonts from 'next/font/google'

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
      <body className={}>{children}</body>
    </html>
  )
}
