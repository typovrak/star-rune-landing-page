"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useInView } from "framer-motion"
import data from "@/utils/data";
import Badge from "@/components/badge";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote:
        `${data.brand} is the most engaging typing game I've ever played. My kids are learning to type without even realizing it! After just 3 weeks, my 9-year-old's typing speed improved from 15 to 35 WPM.`,
      author: "Sarah Johnson",
      role: "Parent & Elementary Teacher",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      source: "Beta Tester",
      verified: true,
    },
    {
      quote:
        "The combination of action, story, and typing practice is brilliant. I've improved my WPM by 20 in just two weeks. The game mechanics make practicing typing actually fun instead of tedious, and I love how the different swords have unique abilities.",
      author: "Michael Torres",
      role: "College Student",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      source: "Early Access Player",
      verified: true,
    },
    {
      quote:
        "As someone who teaches typing, this is the game I've been waiting for. Students actually ask to practice typing now! The progression system is perfectly paced, and the educational elements are seamlessly integrated into the gameplay.",
      author: "David Lee",
      role: "Computer Science Teacher",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      source: "Educational Partner",
      verified: true,
    },
    {
      quote:
        "The most innovative typing game in years. The way it integrates educational content with fun gameplay is masterful. I particularly appreciate how it uses all keyboard keys naturally, not just the home row that most typing games focus on.",
      author: "Emma Rodriguez",
      role: "Game Reviewer",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      source: "GameTyper Magazine",
      verified: true,
    },
    {
      quote:
        `I've tried many typing games to help improve my speed for work, but ${data.brand} is the first one I've actually stuck with. The progression feels rewarding, and I love how the difficulty scales with your ability. My typing accuracy has improved from 92% to 98%.`,
      author: "James Wilson",
      role: "Software Developer",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      source: "Discord Community",
      verified: true,
    },
    {
      quote:
        `My daughter has dyslexia and has always struggled with typing. ${data.brand}'s visual approach and the immediate feedback from each keystroke has made a tremendous difference. For the first time, she's enjoying learning to type and making real progress.`,
      author: "Lisa Chen",
      role: "Parent of Special Needs Child",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      source: "Accessibility Tester",
      verified: true,
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-yellow-500/5 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge icon={<Quote/>} title="Testimonials" />
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              What People Are Saying
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our early players, educators, and supporters
            </p>
          </div>
        </div>

        <div
          ref={testimonialsRef}
          className={`mt-16 transition-all duration-1000 ${
            isTestimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm border-yellow-500/20 text-yellow-600 hover:text-yellow-700 hover:bg-background hover:border-yellow-500/40"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm border-yellow-500/20 text-yellow-600 hover:text-yellow-700 hover:bg-background hover:border-yellow-500/40"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const index = (activeIndex + offset) % testimonials.length
                const testimonial = testimonials[index]

                return (
                  <Card
                    key={index}
                    className={`border-2 ${
                      offset === 0
                        ? "border-yellow-500/30 shadow-lg shadow-yellow-500/10 md:scale-105 z-10"
                        : "border-yellow-500/10 opacity-90 md:opacity-70 hover:opacity-100 transition-opacity"
                    } overflow-hidden`}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 border-2 border-yellow-500/20">
                            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-3">
                            <h4 className="font-bold">{testimonial.author}</h4>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        {testimonial.verified && (
                          <Badge icon={<Check/>} title="Verified" />
                        )}
                      </div>

                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-2 -left-1 h-6 w-6 text-yellow-500/20" />
                        <p className="text-sm md:text-base relative pl-4 italic">{testimonial.quote}</p>
                      </div>

                      <div className="mt-4 pt-4 border-t text-xs text-right text-muted-foreground">
                        Source: {testimonial.source}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-yellow-500 scale-125" : "bg-yellow-500/20"
                  }`}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-yellow-500/30 text-yellow-600 hover:text-yellow-700 hover:border-yellow-500/50 hover:bg-yellow-500/5"
            >
              View all testimonials
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600">95%</div>
            <p className="text-sm text-muted-foreground mt-2">Users report improved typing speed</p>
          </div>
          <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600">4.8/5</div>
            <p className="text-sm text-muted-foreground mt-2">Average user rating</p>
          </div>
          <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600">87%</div>
            <p className="text-sm text-muted-foreground mt-2">Increased typing practice time</p>
          </div>
          <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600">10K+</div>
            <p className="text-sm text-muted-foreground mt-2">Beta testers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}
