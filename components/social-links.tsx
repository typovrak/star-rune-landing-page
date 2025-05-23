"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DiscIcon as Discord, Youtube } from "lucide-react"
import { useInView } from "framer-motion"

export default function SocialLinks() {
  const socialRef = useRef(null)
  const isSocialInView = useInView(socialRef, { once: true, amount: 0.2 })

  return (
    <div
      ref={socialRef}
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 py-8 transition-all duration-1000 ${
        isSocialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Card className="flex flex-col items-center text-center p-6 border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg group">
        <CardContent className="flex flex-col items-center space-y-4 pt-6">
          <div className="relative">
            <Discord className="h-12 w-12 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Discord</h3>
            <p className="text-sm text-muted-foreground">
              Join our Discord server to chat with the community and development team.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full border-indigo-500/30 text-indigo-600 hover:bg-indigo-500/10 hover:text-indigo-700 hover:border-indigo-500/50"
          >
            <Link href="https://www.discord.gg/B6pFEwsejE" target="_blank" rel="noopener noreferrer">
              Join Discord
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="flex flex-col items-center text-center p-6 border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg group">
        <CardContent className="flex flex-col items-center space-y-4 pt-6">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 text-green-500 group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M4.5 5.5L9 12l-4.5 6.5M9 12h6M15 5.5L19.5 12 15 18.5" />
            </svg>
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Kickstarter</h3>
            <p className="text-sm text-muted-foreground">
              Support our project on Kickstarter and help us reach our goals.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full border-green-500/30 text-green-600 hover:bg-green-500/10 hover:text-green-700 hover:border-green-500/50"
          >
            <Link href="https://kickstarter.com" target="_blank" rel="noopener noreferrer">
              Support the project
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="flex flex-col items-center text-center p-6 border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg group">
        <CardContent className="flex flex-col items-center space-y-4 pt-6">
          <div className="relative">
            <Youtube className="h-12 w-12 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">YouTube</h3>
            <p className="text-sm text-muted-foreground">
              Discover our tutorials, gameplay and updates on our YouTube channel.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full border-red-500/30 text-red-600 hover:bg-red-500/10 hover:text-red-700 hover:border-red-500/50"
          >
            <Link href="https://www.youtube.com/@starrune" target="_blank" rel="noopener noreferrer">
              Watch channel
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
