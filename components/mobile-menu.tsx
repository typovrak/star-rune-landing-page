"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X as Close } from "lucide-react"
import SocialIconList from "@/components/social-icon-list";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";
import BrandTitle from "@/components/brand-title";
import QuickLinks from "@/components/quick-links";

export default function MobileMenu() {

  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTitle />

        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[80%] sm:w-[350px]">
          <div className="flex flex-col h-full">
            <div className="flex flex-col mb-8">
              <div className="flex items-center justify-between mb-8">
                <BrandTitle />

                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Close className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetTrigger>
              </div>

              <SocialIconList
                className="justify-between"
                iconClassName="h-12 w-12"
              />
            </div>

            <QuickLinks
              className="flex flex-col text-muted-foreground text-lg"
              floatClassName="shadow-xl shadow-yellow-500/50"
              linkClassName="py-4 text-center hover:scale-125 hover:text-foreground"
              aspectColumn={true}
            />

            <div className="mt-auto pt-8">
              <div className="space-y-6">
                <ButtonIconKickstarter size="big" />
                <ButtonIconDemo size="big" />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
