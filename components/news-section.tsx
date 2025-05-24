"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Newspaper, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { useInView } from "framer-motion"
import data from "@/utils/data";

export default function NewsSection() {
  const newsRef = useRef(null)
  const isNewsInView = useInView(newsRef, { once: true, amount: 0.2 })

  const newsItems = [
    {
      title: `${data.brand} Kickstarter Campaign Launches!`,
      excerpt:
        `We're excited to announce that our Kickstarter campaign is now live! Join us on this journey to bring ${data.brand} to life.`,
      date: "May 10, 2025",
      image: "/placeholder.svg?height=200&width=400",
      category: "Announcement",
    },
    {
      title: "New Character Designs Revealed",
      excerpt:
        `Check out the latest character designs for ${data.brand}, including the main protagonist Nova and some of the evil letters.`,
      date: "April 28, 2025",
      image: "/placeholder.svg?height=200&width=400",
      category: "Development",
    },
    {
      title: `Behind the Scenes: Creating the ${data.brand} Soundtrack`,
      excerpt:
        "Get an exclusive look at how we're creating the dynamic soundtrack that will accompany your typing adventures.",
      date: "April 15, 2025",
      image: "/placeholder.svg?height=200&width=400",
      category: "Behind the Scenes",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
            <Newspaper className="mr-1 h-3 w-3" />
            Latest News
          </Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              Development Updates
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay informed about the latest {data.brand} news and development progress
            </p>
          </div>
        </div>

        <div
          ref={newsRef}
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${
            isNewsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-muted hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg group h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full aspect-[2/1] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge
                  className="absolute top-3 left-3 bg-black/70 text-white border-none hover:bg-black/80"
                  variant="outline"
                >
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1">{item.excerpt}</p>
                <Button
                  variant="ghost"
                  className="mt-4 p-0 h-auto text-yellow-600 hover:text-yellow-700 hover:bg-transparent justify-start group/btn"
                >
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-yellow-500/50 text-yellow-600 hover:text-yellow-700 hover:border-yellow-500 hover:bg-yellow-500/10"
          >
            <Link href="#">View all news</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
