"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useInView } from "framer-motion"
import data from "@/utils/data";

export default function TeamSection() {
  const teamRef = useRef(null)
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 })

  const team = [
    {
      name: "Quinlan Stuwe",
      role: "Director / System Designer / Level Designer / Music+SFX",
      bio: 'I\'m the Star Rune founder. I\'m a father and music producer. I currently do work under the alias "oo oxygen" or "Oxygen Beats". My portfolio includes Dan Bull, The Stupendium, Pewdiepie, CORPSE, Boyinaband, TheOdd1sOut, SomethingElseYT, Daniel Thrasher, Martyn Littlewood, Zack Scott, and others.',
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Franco Kucinskas",
      role: "Promo / Concept Artist",
      bio: "I'm Franco Kucinskas 2D illustrator, Graphic designer, and Concept artist from Argentina, I'm happy and proud to be able to contribute to this great game! I'm very interested in collaborating and contributing to the creative vision.",
      image: "/placeholder.svg?height=300&width=300",
      links: [
        { name: "DeviantArt", url: "https://www.deviantart.com/ezparra" },
        { name: "Instagram", url: "https://www.instagram.com/ezparra.cap/" },
        { name: "TikTok", url: "https://www.tiktok.com/@ezparra" },
      ],
    },
    {
      name: "Haroldo Baute",
      role: "Promo / Concept Artist",
      bio: "Concept artist contributing to the visual style of Star Rune.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Neira Mantis",
      role: "Promo / Concept Artist",
      bio: "Concept artist helping to bring the world of Star Rune to life.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div
      ref={teamRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 transition-all duration-1000 ${
        isTeamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {team.map((member, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-2 border-yellow-500/10 hover:border-yellow-500/30"
        >
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 overflow-hidden">
                <img
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  src={member.image || "/placeholder.svg"}
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>

                {member.links && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-xs border-yellow-500/30 hover:border-yellow-500/60 hover:bg-yellow-500/5"
                      >
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="overflow-hidden col-span-1 md:col-span-2 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="font-bold text-xl">Join The Team</h3>
            <p className="text-muted-foreground max-w-2xl">
              We're looking for talented individuals to join our team! If you're a game asset artist, lead programmer,
              or narrative designer and want to be part of this exciting project, we'd love to hear from you.
            </p>
            <Button
              variant="default"
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
            >
              <Link href={`mailto:${data.email}`}>Get In Touch</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
