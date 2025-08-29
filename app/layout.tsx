import type { Metadata } from "next";
import "@/styles/globals.css";
import { Geist, Tomorrow } from "next/font/google";
import { ReactLenis } from "lenis/react";
import data from "@/utils/data";
import { ToastContainer } from "react-toastify";
import { GoogleAnalytics } from "@next/third-parties/google";

const fontPrimary = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});

const fontSecondary = Tomorrow({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: `${data.brand} : typing game`,
  description: `You're the Last Star in Cyberspace... Type and slash through hordes of EVIL LETTERS to save the world! Learn to type as you embark on an epic adventure. Unlock new levels in game AND in life!`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth overscroll-none">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} font-secondary antialiased selection:bg-yellow-500 selection:text-background`}
      >
        <ReactLenis root />
        {children}
        <ToastContainer />
      </body>
      <GoogleAnalytics gaId={data.googleId} />
    </html>
  );
}

