import type { Metadata } from "next";
import "@/styles/globals.css";
import { Geist, Tomorrow } from "next/font/google";
import { ReactLenis } from "lenis/react";
import data from "@/utils/data";
import { ToastContainer } from "react-toastify";
import Script from "next/script";   // <-- NEW

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
      <head>
        {/* --- GA SCRIPTS --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTP9DTMYG9"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HTP9DTMYG9', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} font-secondary antialiased selection:bg-yellow-500 selection:text-background`}
      >
        <ReactLenis root />
        <GAClient /> {/* --- NEW: tracks route changes --- */}
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}

/* --- CLIENT COMPONENT (can live at bottom of same file) --- */
"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function GAClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // @ts-ignore
    window.gtag?.("config", "G-HTP9DTMYG9", {
      page_path:
        pathname +
        (searchParams.size ? `?${searchParams.toString()}` : ""),
    });
  }, [pathname, searchParams]);

  return null;
}
