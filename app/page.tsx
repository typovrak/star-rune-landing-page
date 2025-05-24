"use client"

import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Gamepad2, Star, Keyboard, Users, Gift, Zap, Heart, Sword, Award } from "lucide-react"
import Discord from "@/icons/discord";
import YouTube from "@/icons/you-tube";
import Kickstarter from "@/icons/kickstarter";
import NewsletterForm from "@/components/newsletter-form"
import SocialLinks from "@/components/social-links"
import GameFeatures from "@/components/game-features"
import GameplaySection from "@/components/gameplay-section"
import TeamSection from "@/components/team-section"
import HeroSection from "@/components/hero-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import CountdownTimer from "@/components/countdown-timer"
import NewsSection from "@/components/news-section"
import FeaturesComparison from "@/components/features-comparison"
import NotificationPopup from "@/components/notification-popup"
import MobileMenu from "@/components/mobile-menu"
import data from "@/utils/data"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Star className="h-6 w-6 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="font-bold text-lg tracking-tight">{data.brand}</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              About
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Features
            </Link>
            <Link href="#gameplay" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Gameplay
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Gallery
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Team
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 mr-2">
                <Link
                  href={data.url.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-500 transition-colors duration-200 group"
                  aria-label="Discord"
                >
                  <div className="relative">
                    <Discord className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </Link>
                <Link
                  href={data.url.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-red-500 transition-colors duration-200 group"
                  aria-label="YouTube"
                >
                  <div className="relative">
                    <YouTube className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </Link>
                <Link
                  href={data.url.kickstarter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-500 transition-colors duration-200 group"
                  aria-label="Kickstarter"
                >
                  <div className="relative">
                    <Kickstarter className="h-5 w-5 group-hover:scale-110 transition-transform duration-200"/>
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </Link>
              </div>
              <div className="hidden sm:block">
                <CountdownTimer />
              </div>
              <Button
                asChild
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
              >
                <Link href={data.url.demo} target="_blank" rel="noopener noreferrer">
                  <Keyboard className="mr-2 h-4 w-4" />
                  Play Demo
                </Link>
              </Button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <HeroSection />

      <section id="about" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-yellow-500/5 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
              <Star className="mr-1 h-3 w-3" />
              The Ultimate Typing Adventure
            </Badge>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
                The Ultimate Typing Adventure
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed max-w-[85%] mx-auto">
                {data.brand} is The Ultimate Typing Game and the funnest experience typing you've ever had! Slash and dash
                through hordes of Cookies and Evil Letters. 力. 速. 志. Unleash the true power of a Super Star!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
            <div className="order-2 md:order-1">
              <div className="space-y-4">
                <Badge variant="outline" className="border-yellow-500/50 text-yellow-500">
                  <Star className="mr-1 h-3 w-3" />
                  Epic Story
                </Badge>
                <h3 className="text-2xl font-bold">The World of {data.brand}</h3>
                <p className="text-muted-foreground">
                  Long ago, The Shapes lived in harmony. And The Stars ruled peacefully from above. But one day, 12 Evil
                  Wizards came and corrupted everything. Using Magic Runes, they created 12 Swords of Fable, and opened
                  up a portal to the Dark Web, and hordes of Evil Letters and Cookies poured out.
                </p>
                <p className="text-muted-foreground">
                  The Stars disappeared and were never seen again. But 5 Great Kings fought back. They won a great
                  battle, breaking the Dragon Wizard's sword, Kry XeRnOg. Now, only the Hearts remain free.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="group relative overflow-hidden border-yellow-500/50 text-yellow-600 hover:text-yellow-700 hover:border-yellow-500"
                  >
                    <Link href="#gameplay">
                      <span className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors duration-300"></span>
                      <span className="relative">Learn More About The World</span>
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                    <Link href={data.url.demo} target="_blank" rel="noopener noreferrer">
                      <Keyboard className="mr-2 h-4 w-4" />
                      Play Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Card className="overflow-hidden border-2 border-yellow-500/20 shadow-xl shadow-yellow-500/5 transition-all duration-300 hover:shadow-yellow-500/10 rounded-xl">
                <CardContent className="p-0">
                  <img
                    alt={`${data.brand} story illustration`}
                    className="aspect-video object-cover w-full"
                    height="310"
                    src="/star-rune-world.jpg"
                    width="550"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-5 gap-4"
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
            <Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
              <CardContent className="p-4 flex items-center">
                <Award className="h-8 w-8 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-bold">118 Levels</h3>
                  <p className="text-xs text-white/70">Every level is unique</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section
        id="features"
        className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-950/20 dark:to-background relative overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
              <Star className="mr-1 h-3 w-3" />
              Unique Features
            </Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
                What Makes {data.brand} Special
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlike any typing game you've played before
              </p>
            </div>
          </div>

          <GameFeatures />
        </div>
      </section>

      <section id="gameplay" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
              <Gamepad2 className="mr-1 h-3 w-3" />
              Gameplay
            </Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
                Special Abilities
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {data.brand} is intuitive + quick/easy to play, but the game mechanics are also very nuanced
              </p>
            </div>
          </div>

          <GameplaySection />
        </div>
      </section>

      <GallerySection />

      <FeaturesComparison />

      <TestimonialsSection />

      <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
              <Star className="mr-1 h-3 w-3" />
              The Team
            </Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
                Meet The Creators
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented people behind {data.brand}
              </p>
            </div>
          </div>

          <TeamSection />
        </div>
      </section>

      <section id="news">
        <NewsSection />
      </section>

      <FaqSection />

      <section
        id="community"
        className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-500 px-4 py-1">
              <Star className="mr-1 h-3 w-3" />
              Join Us
            </Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
                Join Our Community
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow us on social media to stay informed about the latest news and updates
              </p>
            </div>
          </div>

          <SocialLinks />

          <div className="mx-auto max-w-md space-y-6 py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Subscribe to our newsletter</h3>
                <p className="text-muted-foreground">Receive the latest news and updates directly in your inbox</p>
              </div>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-yellow-500/10 border-t border-yellow-500/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <h3 className="text-2xl font-bold">Ready to join the adventure?</h3>
              <p className="text-muted-foreground">Play the demo today and experience the magic of {data.brand}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
              >
                <Link href={data.url.demo} target="_blank" rel="noopener noreferrer">
                  <Keyboard className="mr-2 h-5 w-5" />
                  Play Demo
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-yellow-500/50 text-yellow-600 hover:text-yellow-700 hover:border-yellow-500 hover:bg-yellow-500/10"
              >
                <Link href={data.url.kickstarter} target="_blank" rel="noopener noreferrer">
                  <Kickstarter className="mr-2 h-5 w-5" />
                  Support on Kickstarter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t py-8 md:py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="font-bold text-lg">{data.brand}</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                The Ultimate Typing Game and the funnest experience typing you've ever had!
              </p>
              <div className="flex space-x-4">
                <Link
                  href={data.url.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <Discord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
                <Link
                  href={data.url.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <YouTube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href={data.url.kickstarter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <Kickstarter className="h-5 w-5" />
                  <span className="sr-only">Kickstarter</span>
                </Link>
                <Link
                  href={`mailto:${data.email}`}
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#gameplay" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    Gameplay
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">Subscribe to receive updates about {data.brand}</p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-muted/50 border-yellow-500/20 focus:border-yellow-500/50"
                />
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 {data.brand}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <NotificationPopup />
    </div>
  )
}
