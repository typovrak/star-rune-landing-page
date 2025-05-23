import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals/reset.css";
import "@/styles/globals/variables.css";
import "@/styles/globals/config.css";

const fontPrimary = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star Rune landing page",
  description: "Star Rune landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
