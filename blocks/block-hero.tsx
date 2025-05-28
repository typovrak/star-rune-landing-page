"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Keyboard } from "lucide-react"
import Kickstarter from "@/icons/kickstarter";
import Discord from "@/icons/discord";
import { motion } from "framer-motion"
import data from "@/utils/data";
import ExternalLink from "@/components/external-link";
import type { IBlockHero } from "@/utils/types";

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

      <div className="container relative z-20 px-4 md:px-6 text-white">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.div
              className="flex flex-col gap-3 min-[400px]:flex-row pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="gap-1 bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
              >
                <ExternalLink href={data.url.demo}>
                  <Keyboard className="h-5 w-5 mr-1" />
                  Play Demo
                </ExternalLink>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-1 bg-kickstarter-500 hover:bg-kickstarter-600 text-black shadow-lg shadow-kickstarter-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-kickstarter-500/30"
              >
                <ExternalLink href={data.url.kickstarter}>
                  <Kickstarter className="h-5 w-5 mr-1" />
                  Support on Kickstarter
                </ExternalLink>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-1 bg-discord-500 hover:bg-discord-600 text-black shadow-lg shadow-discord-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-discord-500/30"
              >
                <ExternalLink href={data.url.discord}>
                  <Discord className="h-5 w-5 mr-1" />
                  Join Discord
                </ExternalLink>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating cards with key features */}
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
