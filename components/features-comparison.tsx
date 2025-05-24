"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, BarChart2 } from "lucide-react"
import { useInView } from "framer-motion"
import data from "@/utils/data";

export default function FeaturesComparison() {
  const comparisonRef = useRef(null)
  const isComparisonInView = useInView(comparisonRef, { once: true, amount: 0.2 })

  const features = [
    {
      name: "Every keystroke creates action",
      starRune: true,
      typingGame1: false,
      typingGame2: false,
    },
    {
      name: "Beginner friendly (impossible to fail early levels)",
      starRune: true,
      typingGame1: false,
      typingGame2: true,
    },
    {
      name: "Educational content (Chemistry, Languages)",
      starRune: true,
      typingGame1: false,
      typingGame2: false,
    },
    {
      name: "Epic storyline",
      starRune: true,
      typingGame1: false,
      typingGame2: true,
    },
    {
      name: "Uses all keyboard keys naturally",
      starRune: true,
      typingGame1: false,
      typingGame2: false,
    },
    {
      name: "Free to play base game",
      starRune: true,
      typingGame1: false,
      typingGame2: true,
    },
    {
      name: "Custom level editor",
      starRune: true,
      typingGame1: true,
      typingGame2: false,
    },
    {
      name: "Multiplayer modes",
      starRune: true,
      typingGame1: true,
      typingGame2: false,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-yellow-50/50 dark:bg-yellow-950/10 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
            <BarChart2 className="mr-1 h-3 w-3" />
            Comparison
          </Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              Why Choose {data.brand}?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how {data.brand} compares to other typing games
            </p>
          </div>
        </div>

        <div
          ref={comparisonRef}
          className={`mt-16 transition-all duration-1000 ${
            isComparisonInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="overflow-hidden border-2 border-yellow-500/20">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-4 font-medium">Feature</th>
                      <th className="p-4 text-center font-medium">
                        <div className="flex flex-col items-center">
                          <span className="text-yellow-600">{data.brand}</span>
                          <span className="text-xs text-muted-foreground">Our Game</span>
                        </div>
                      </th>
                      <th className="p-4 text-center font-medium">
                        <div className="flex flex-col items-center">
                          <span>Typing Game A</span>
                          <span className="text-xs text-muted-foreground">Competitor</span>
                        </div>
                      </th>
                      <th className="p-4 text-center font-medium">
                        <div className="flex flex-col items-center">
                          <span>Typing Game B</span>
                          <span className="text-xs text-muted-foreground">Competitor</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {features.map((feature, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4">{feature.name}</td>
                        <td className="p-4 text-center">
                          {feature.starRune ? (
                            <div className="flex justify-center">
                              <Check className="h-5 w-5 text-green-500" />
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <X className="h-5 w-5 text-red-500" />
                            </div>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {feature.typingGame1 ? (
                            <div className="flex justify-center">
                              <Check className="h-5 w-5 text-green-500" />
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <X className="h-5 w-5 text-red-500" />
                            </div>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {feature.typingGame2 ? (
                            <div className="flex justify-center">
                              <Check className="h-5 w-5 text-green-500" />
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <X className="h-5 w-5 text-red-500" />
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.brand} combines the best elements of typing games with innovative gameplay mechanics and educational
            content, creating a unique experience that's both fun and beneficial for players of all ages and skill
            levels.
          </p>
        </div>
      </div>
    </section>
  )
}
