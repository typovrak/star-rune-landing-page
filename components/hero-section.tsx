"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DiscIcon as Discord, Keyboard, Star, Zap, Heart, Sword, Award } from "lucide-react"
import { motion } from "framer-motion"
import data from "@/utils/data";

export default function HeroSection() {
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
      {/* Animated background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" style={{ opacity: Math.min(0.6 + scrollY * 0.001, 0.8) }} />
        <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Star Rune game background"
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <Badge
                variant="outline"
                className="border-yellow-500/50 bg-yellow-500/10 text-yellow-300 px-4 py-1.5 text-sm"
              >
                <Star className="h-4 w-4 mr-1.5" />
                The Ultimate Typing Game
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                STAR RUNE
              </span>
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-white/90 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Evil Letters corner an innocent Baby Heart. Just before the final blow, a Star swoops in to save the day.
              Now, The Last Star in Cyberspace embarks on an epic quest to Save The World.
            </motion.p>
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
                <Link href={data.url.demo} target="_blank" rel="noopener noreferrer">
                  <Keyboard className="h-5 w-5 mr-1" />
                  Play Demo
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-1 bg-kickstarter-500 hover:bg-kickstarter-600 text-black shadow-lg shadow-kickstarter-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-kickstarter-500/30"
              >
                <Link href={data.url.kickstarter} target="_blank" rel="noopener noreferrer">
                  Support on Kickstarter
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-1 bg-discord-500 hover:bg-discord-600 text-black shadow-lg shadow-discord-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-discord-500/30"
              >
                <Link href={data.url.discord} target="_blank" rel="noopener noreferrer">
                  <Discord className="h-5 w-5 mr-1" />
                  Join Discord
                </Link>
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

        <motion.div
          className="grid grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
            <CardContent className="p-4 flex items-center">
              <Zap className="h-8 w-8 text-yellow-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-bold">Every Stroke = Action</h3>
                <p className="text-xs text-white/70">Feel the rush with every keystroke</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
            <CardContent className="p-4 flex items-center">
              <Heart className="h-8 w-8 text-red-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-bold">Beginner Friendly</h3>
                <p className="text-xs text-white/70">Impossible to fail in early levels</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
            <CardContent className="p-4 flex items-center">
              <Sword className="h-8 w-8 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-bold">12 Legendary Swords</h3>
                <p className="text-xs text-white/70">Each with unique abilities</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
            <CardContent className="p-4 flex items-center">
              <Award className="h-8 w-8 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-bold">Learn While Playing</h3>
                <p className="text-xs text-white/70">Chemistry, languages & more</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
