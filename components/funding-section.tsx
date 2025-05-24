"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Palette, Code, BookOpen, BarChart } from "lucide-react"
import { useInView } from "framer-motion"
import data from "@/utils/data";

export default function FundingSection() {
  const fundingRef = useRef(null)
  const isFundingInView = useInView(fundingRef, { once: true, amount: 0.2 })

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-yellow-50 dark:bg-yellow-950/20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
            <BarChart className="mr-1 h-3 w-3" />
            Funding & Timeline
          </Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              Support The Project
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Help us bring {data.brand} to life
            </p>
          </div>
        </div>

        <div
          ref={fundingRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 transition-all duration-1000 ${
            isFundingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Funding Allocation</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Palette className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-medium">Graphics / Art</span>
                  </div>
                  <span className="font-bold">30%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: isFundingInView ? "30%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-medium">Coding</span>
                  </div>
                  <span className="font-bold">30%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full transition-all duration-1000 delay-300"
                    style={{ width: isFundingInView ? "30%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-medium">Narrative Design</span>
                  </div>
                  <span className="font-bold">10%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full transition-all duration-1000 delay-600"
                    style={{ width: isFundingInView ? "10%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-medium">Marketing + Misc</span>
                  </div>
                  <span className="font-bold">30%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full transition-all duration-1000 delay-900"
                    style={{ width: isFundingInView ? "30%" : "0%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Timeline</h3>
              <div className="relative border-l-2 border-yellow-500/30 pl-8 space-y-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold shadow-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Kickstarter Campaign</h4>
                    <p className="text-sm text-muted-foreground">Current phase</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Development</h4>
                    <p className="text-sm text-muted-foreground">2025</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Beta Release</h4>
                    <p className="text-sm text-muted-foreground">Early 2026</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Full Release</h4>
                    <p className="text-sm text-muted-foreground">Mid 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Stretch Goals</h3>
            <Card className="overflow-hidden border-2 border-yellow-500/20 mb-6 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>Extra Azki Types / Sprites</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>More Glitchborn</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>Animated Cutscenes (Anime-style)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>Multiplayer Co-op Mode</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>Multiplayer Battle Mode</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>$10,000 Prize Tournament</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6">Membership Model</h3>
            <Card className="overflow-hidden border-2 border-yellow-500/20 mb-6 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {data.brand} will utilize a Freemium model. The entire game will be free to play but members will get
                  extra perks, including:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>Custom Level Editor</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>Type + Read Mode</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>Advanced Stats + Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                    <span>Equip cosmetics/skins (unlocked via achievements)</span>
                  </li>
                </ul>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Monthly</span>
                    <span className="font-bold">$4.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Yearly</span>
                    <span className="font-bold">
                      $30.00 <span className="text-xs text-muted-foreground">(Save 50%)</span>
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Kickstarter backers can get special deals and lifetime memberships via the Rewards.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
              >
                <Link href={data.url.kickstarter} target="_blank" rel="noopener noreferrer">
                  Support on Kickstarter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
