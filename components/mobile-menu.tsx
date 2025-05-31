"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, X as Close, AlignRight } from "lucide-react";
import SocialIconList from "@/components/social-icon-list";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";
import BrandTitle from "@/components/brand-title";
import QuickLinks from "@/components/quick-links";
import data from "@/utils/data";
import ButtonMenu from "@/components/button-menu";

export default function MobileMenu() {

  const [open, setOpen] = useState(false)

  function handleCloseMobileMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTitle />

        <ButtonMenu
          icon={<Menu />}
          title="Open mobile menu"
          iconHover={<AlignRight />}
        />

        <SheetContent side="right" className="w-[80%] sm:w-[350px]">
          <SheetDescription className="sr-only">{data.brand} mobile menu</SheetDescription>

          <div className="flex flex-col h-full">
            <div className="flex flex-col mb-8">
              <div className="flex items-center justify-between mb-8">
                <BrandTitle handleCloseMobileMenu={handleCloseMobileMenu} />

                <ButtonMenu
                  icon={<Close />}
                  title="Close mobile menu"
                />
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
              handleCloseMobileMenu={handleCloseMobileMenu}
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
