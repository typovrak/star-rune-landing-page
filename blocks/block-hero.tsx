"use client"

import { useState, useEffect } from "react"
import Discord from "@/icons/discord";
import { motion } from "framer-motion"
import data from "@/utils/data";
import type { IBlockHero } from "@/utils/types";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";
import ButtonIcon from "@/components/button-icon";

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

      <div className="absolute bottom-10 left-0 right-0 z-20 container hidden lg:block">
        <div className="flex flex-col items-center mb-6">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <motion.div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
