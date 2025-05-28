"use client"

import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Keyboard } from "lucide-react"
import Discord from "@/icons/discord";
import YouTube from "@/icons/you-tube";
import Kickstarter from "@/icons/kickstarter";
import X from "@/icons/x";
import Gmail from "@/icons/gmail";
import NotificationPopup from "@/components/notification-popup"
import data from "@/utils/data"
import ExternalLink from "@/components/external-link";
import BlockCommunity from "@/blocks/block-community";
import BlockTeam from "@/blocks/block-team";
import BlockTestimonials from "@/blocks/block-testimonials";
import BlockFeatures from "@/blocks/block-features";
import BlockResume from "@/blocks/block-resume";
import BlockAbilities from "@/blocks/block-abilities";
import BlockGallery from "@/blocks/block-gallery";
import BlockHero from "@/blocks/block-hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Header />

      <BlockHero />
      <BlockResume />
      <BlockFeatures />
      <BlockAbilities />
      <BlockGallery />
      <BlockTestimonials />
      <BlockTeam />
      <BlockCommunity />

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
                <ExternalLink href={data.url.demo}>
                  <Keyboard className="mr-2 h-5 w-5" />
                  Play Demo
                </ExternalLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-yellow-500/50 text-yellow-600 hover:text-yellow-700 hover:border-yellow-500 hover:bg-yellow-500/10"
              >
                <ExternalLink href={data.url.kickstarter}>
                  <Kickstarter className="mr-2 h-5 w-5" />
                  Support on Kickstarter
                </ExternalLink>
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
                <ExternalLink
                  href={data.url.discord}
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <Discord className="h-5 w-5" />
                </ExternalLink>
                <ExternalLink
                  href={data.url.youtube}
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <YouTube className="h-5 w-5" />
                </ExternalLink>
                <ExternalLink
                  href={data.url.kickstarter}
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <Kickstarter className="h-5 w-5" />
                </ExternalLink>
                <ExternalLink
                  href={data.url.x}
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <X className="h-5 w-5" />
                </ExternalLink>
                <ExternalLink
                  href={`mailto:${data.email}`}
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <Gmail className="h-5 w-5" />
                </ExternalLink>
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
    </div >
  )
}
