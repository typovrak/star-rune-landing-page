"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gift, Check, Star, Crown, Sparkles, Award } from "lucide-react"
import Link from "next/link"
import { useInView } from "framer-motion"

export default function RewardsSection() {
  const [selectedTier, setSelectedTier] = useState(1)
  const rewardsRef = useRef(null)
  const isRewardsInView = useInView(rewardsRef, { once: true, amount: 0.2 })

  const tiers = [
    {
      id: 0,
      name: "Early Bird",
      price: "$15",
      description: "Get the game at a special early bird price",
      features: ["Digital copy of Star Rune", "Name in credits", "Exclusive wallpaper pack", "Beta access"],
      highlight: false,
      color: "blue",
      icon: <Star className="h-5 w-5" />,
      limited: "Limited to 500 backers",
      claimed: 342,
    },
    {
      id: 1,
      name: "Stellar",
      price: "$25",
      description: "The complete Star Rune experience",
      features: [
        "Digital copy of Star Rune",
        "Name in credits",
        "Exclusive wallpaper pack",
        "Beta access",
        "Digital soundtrack",
        "Digital art book",
        "1-year membership",
      ],
      highlight: true,
      color: "yellow",
      icon: <Crown className="h-5 w-5" />,
      popular: true,
    },
    {
      id: 2,
      name: "Cosmic",
      price: "$50",
      description: "For the dedicated Star Rune enthusiast",
      features: [
        "Digital copy of Star Rune",
        "Name in credits",
        "Exclusive wallpaper pack",
        "Beta access",
        "Digital soundtrack",
        "Digital art book",
        "Lifetime membership",
        "Exclusive in-game sword skin",
        "Early alpha access",
      ],
      highlight: false,
      color: "purple",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      id: 3,
      name: "Legendary",
      price: "$100",
      description: "The ultimate Star Rune supporter package",
      features: [
        "Digital copy of Star Rune",
        "Name in credits",
        "Exclusive wallpaper pack",
        "Beta access",
        "Digital soundtrack",
        "Digital art book",
        "Lifetime membership",
        "Exclusive in-game sword skin",
        "Early alpha access",
        "Design a custom in-game letter enemy",
        "Physical art book",
        "Exclusive t-shirt",
      ],
      highlight: false,
      color: "red",
      icon: <Award className="h-5 w-5" />,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-yellow-50/30 dark:to-yellow-950/10 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
            <Gift className="mr-1 h-3 w-3" />
            Kickstarter Rewards
          </Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              Back Our Project
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose your reward tier and help bring Star Rune to life
            </p>
          </div>
        </div>

        <div
          ref={rewardsRef}
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            isRewardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`overflow-hidden transition-all duration-300 h-full flex flex-col ${
                tier.highlight
                  ? "border-yellow-500 shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/30"
                  : "border-2 border-muted hover:border-yellow-500/30 hover:shadow-lg"
              } ${selectedTier === tier.id ? "ring-2 ring-yellow-500 ring-offset-2 ring-offset-background" : ""}`}
              onClick={() => setSelectedTier(tier.id)}
            >
              <div
                className={`p-1 text-center text-white ${
                  tier.popular ? "bg-gradient-to-r from-yellow-500 to-amber-600" : "bg-muted"
                }`}
              >
                {tier.popular && <span className="text-xs font-medium">MOST POPULAR</span>}
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`rounded-full p-2 ${
                      tier.color === "yellow"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : tier.color === "purple"
                          ? "bg-purple-500/10 text-purple-500"
                          : tier.color === "blue"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{tier.price}</h3>
                </div>
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                {tier.limited && (
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-1">{tier.limited}</p>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-yellow-500 h-1.5 rounded-full"
                        style={{ width: `${(tier.claimed / 500) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-muted-foreground">{tier.claimed}/500 claimed</p>
                  </div>
                )}

                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    tier.color === "yellow"
                      ? "bg-yellow-500 hover:bg-yellow-600 text-black w-full mt-auto"
                      : tier.color === "purple"
                        ? "bg-purple-500 hover:bg-purple-600 text-white w-full mt-auto"
                        : tier.color === "blue"
                          ? "bg-blue-500 hover:bg-blue-600 text-white w-full mt-auto"
                          : "bg-red-500 hover:bg-red-600 text-white w-full mt-auto"
                  }
                  asChild
                >
                  <Link href="https://kickstarter.com" target="_blank" rel="noopener noreferrer">
                    Back this tier
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            All backers will receive regular updates on the development progress and have their name immortalized in our
            backers hall of fame.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
            asChild
          >
            <Link href="https://kickstarter.com" target="_blank" rel="noopener noreferrer">
              View All Reward Tiers on Kickstarter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
