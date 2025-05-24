"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react"
import data from "@/utils/data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: `What makes ${data.brand} different from other typing games?`,
      answer:
        `${data.brand} is unique because every single keystroke creates an action in the game - you don't have to complete words before seeing results. It's also designed to be beginner-friendly with no threat of death in early levels, while still offering depth for experienced typists. The game incorporates educational elements about chemistry and languages, and uses all keyboard keys including space, shift, and enter in natural ways.`,
    },
    {
      question: `Is ${data.brand} suitable for children?`,
      answer:
        `${data.brand} was created specifically to help children learn typing in a fun, stress-free environment. The game is impossible to fail in the first half, allowing new typists to learn at their own pace. The educational content is presented through engaging gameplay and story elements, making learning feel like play.`,
    },
    {
      question: "When will the full game be released?",
      answer:
        `We're planning to release the beta version in early 2026, with the full release scheduled for mid-2026. Kickstarter backers will get early access and special perks. In the meantime, you can download and play our demo to get a taste of the ${data.brand} experience!`,
    },
    {
      question: `What platforms will ${data.brand} be available on?`,
      answer:
        `${data.brand} will be available as a digital download and via cloud streaming. We're focusing on PC/Mac initially, with potential for expansion to other platforms based on demand and funding.`,
    },
    {
      question: "How does the membership model work?",
      answer:
        `${data.brand} uses a freemium model - the entire game will be free to play, but members get extra perks like a custom level editor, Type + Read Mode, advanced stats and analytics, and the ability to equip cosmetics/skins. Memberships will be $4.99/month or $30/year, with special deals and lifetime memberships available for Kickstarter backers.`,
    },
    {
      question: `Can I contribute to the development of ${data.brand}?`,
      answer:
        `Yes! We're looking for talented individuals to join our team, particularly game asset artists, lead programmers, and narrative designers. You can also support us by backing our Kickstarter campaign, joining our Discord community to provide feedback, and spreading the word about ${data.brand}.`,
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
            <HelpCircle className="mr-1 h-3 w-3" />
            FAQ
          </Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about {data.brand}
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto divide-y divide-yellow-500/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button className="flex justify-between items-center w-full text-left" onClick={() => toggleFaq(index)}>
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <div className="ml-2 flex-shrink-0 rounded-full p-1.5 bg-yellow-500/10 text-yellow-500">
                  {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </button>
              <div
                className={`mt-3 text-muted-foreground transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
