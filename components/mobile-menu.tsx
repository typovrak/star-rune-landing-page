"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X as Close } from "lucide-react"
import Link from "next/link"
import Discord from "@/icons/discord";
import YouTube from "@/icons/you-tube";
import Kickstarter from "@/icons/kickstarter";
import X from "@/icons/x";
import Email from "@/icons/email";
import data from "@/utils/data";
import ExternalLink from "@/components/external-link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Gameplay", href: "#gameplay" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Rewards", href: "#rewards" },
    { name: "News", href: "#news" },
    { name: "FAQ", href: "#faq" },
    { name: "Community", href: "#community" },
  ]

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
          <div className="flex flex-col h-full">
            <div className="flex flex-col border-b pb-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-yellow-500" />
                  </div>
                  <span className="font-bold">{data.brand}</span>
                </div>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Close className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetTrigger>
              </div>

              <div className="flex justify-center space-x-6 mb-2">
                <ExternalLink
                  href={data.url.discord}
                  className="text-muted-foreground hover:text-indigo-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <Discord className="h-6 w-6" />
                    <span className="text-xs mt-1">Discord</span>
                  </div>
                </ExternalLink>
                <ExternalLink
                  href={data.url.youtube}
                  className="text-muted-foreground hover:text-red-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <YouTube className="h-6 w-6" />
                    <span className="text-xs mt-1">YouTube</span>
                  </div>
                </ExternalLink>
                <ExternalLink
                  href={data.url.kickstarter}
                  className="text-muted-foreground hover:text-green-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <Kickstarter className="h-6 w-6" />
                    <span className="text-xs mt-1">Kickstarter</span>
                  </div>
                </ExternalLink>
                <ExternalLink
                  href={data.url.x}
                  className="text-muted-foreground hover:text-green-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <X className="h-6 w-6" />
                    <span className="text-xs mt-1">X</span>
                  </div>
                </ExternalLink>
                <ExternalLink
                  href={`mailto:${data.email}`}
                  className="text-muted-foreground hover:text-green-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <Email className="h-6 w-6" />
                    <span className="text-xs mt-1">Email</span>
                  </div>
                </ExternalLink>
              </div>
            </div>
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-2 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t">
              <div className="space-y-4">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                  <ExternalLink href={data.url.kickstarter}>
                    Support on Kickstarter
                  </ExternalLink>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-yellow-500/30 text-yellow-600 hover:bg-yellow-500/10"
                  asChild
                >
                  <ExternalLink href={data.url.demo}>
                    Play Demo
                  </ExternalLink>
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
