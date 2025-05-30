"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X as Close } from "lucide-react"
import Link from "next/link"
import data from "@/utils/data";
import SocialIconList from "@/components/social-icon-list";
import ButtonIcon from "@/components/button-icon";
import Kickstarter from "@/icons/kickstarter";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";

export default function MobileMenu() {

  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
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
                <SocialIconList />
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {data.homeLinks.map(({ id, title }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="px-2 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {title}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t">
              <div className="space-y-4">
                <ButtonIconKickstarter />
                <ButtonIconDemo />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
