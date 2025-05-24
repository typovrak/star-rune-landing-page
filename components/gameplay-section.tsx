"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, ArrowRight, ArrowDown, Rocket, Sparkles } from "lucide-react"
import { useInView } from "framer-motion"
import data from "@/utils/data";

export default function GameplaySection() {
  const videoRef = useRef(null)
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.3 })

  const abilities = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      name: "Auto-Deflect",
      description:
        "Nova automatically will deflect Azki lasers. Later, you can upgrade your sword(s) to reflect these at Glitchborn to deal extra damage.",
    },
    {
      icon: <ArrowRight className="h-6 w-6 text-green-500" />,
      name: "Dash",
      description:
        "When you see a highlighted Azki, type that letter; you'll dash through them and build up your Charge.",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      name: "Chain Dash",
      description:
        "When you see consecutive Azki of the same type, hold their key down and you'll quickly slash through all of them.",
    },
    {
      icon: <ArrowDown className="h-6 w-6 text-red-500" />,
      name: "Fast Fall + Meteor Slash",
      description: "Press [TAB] to perform a Fast Fall. Pressing it while moving downward creates a Meteor Slash.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-purple-500" />,
      name: "Shift Power",
      description:
        "Hold [SHIFT] or activate [CAPS] to use Shift Power. This will make your dash line thicker and stronger.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-cyan-500" />,
      name: "Full Charge",
      description: "When you have Full Charge, your sword glows a new color. Dash lines are stronger and last longer.",
    },
  ]

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {abilities.map((ability, index) => (
          <Card
            key={index}
            className="overflow-hidden border-2 border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg group"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1 group-hover:scale-110 transition-transform duration-300">
                  {ability.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{ability.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{ability.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        ref={videoRef}
        className={`mt-16 flex justify-center transition-all duration-1000 ${
          isVideoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Card className="overflow-hidden border-2 border-yellow-500/20 max-w-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-yellow-500/30 rounded-xl">
          <CardContent className="p-0">
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="rounded-full bg-white/90 p-4 cursor-pointer hover:bg-white transition-colors hover:scale-105 transform duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-yellow-500"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <img
                alt={`${data.brand} gameplay video thumbnail`}
                className="w-full h-full object-cover"
                src="/placeholder.svg?height=480&width=854"
              />
            </div>
            <div className="p-6 bg-yellow-50 dark:bg-yellow-950/20">
              <h3 className="text-xl font-bold">Watch Gameplay Demo</h3>
              <p className="text-muted-foreground mt-2">
                See all the special abilities in action and discover how {data.brand} creates a unique typing experience
                unlike any other game.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
