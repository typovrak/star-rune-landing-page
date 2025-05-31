"use client"

import { useState, useEffect } from "react"
import Discord from "@/icons/discord";
import data from "@/utils/data";
import type { IBlockHero } from "@/utils/types";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";
import ButtonIcon from "@/components/button-icon";
import ScrollIndicator from "@/components/scroll-indicator";

export default function BlockHero({ }: IBlockHero) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-[95vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" style={{ opacity: Math.min(0.6 + scrollY * 0.001, 0.8) }} />
        <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <img
            src="/star-rune-hero.jpg"
            alt={`${data.brand} game background`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative px-4 flex flex-col gap-4 w-full max-w-[350px] mx-auto">
        <ButtonIconDemo size="bigger" />
        <ButtonIconKickstarter size="bigger" />

        <ButtonIcon
          url={data.url.discord}
          icon={<Discord />}
          title="Join Discord"
          className="bg-discord-500"
          size="bigger"
        />
      </div>


      <div className="absolute left-0 bottom-6 flex items-center justify-center w-full">
        <ScrollIndicator
          url={`#${data.homeLinks[0].id}`}
          title="Go to the next section"
        />
      </div>
    </section>
  )
}
