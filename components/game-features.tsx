"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Keyboard, Sparkles, Gamepad2, BookOpen } from "lucide-react"
import { useInView } from "framer-motion"
import data from "@/utils/data";

export default function GameFeatures() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const isInView1 = useInView(ref1, { once: true, amount: 0.3 })
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 })
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 })
  const isInView4 = useInView(ref4, { once: true, amount: 0.3 })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <div
        ref={ref1}
        className={`transition-all duration-1000 ${
          isInView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Card className="overflow-hidden border-2 border-yellow-500/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/30 h-full">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="rounded-full bg-yellow-100 dark:bg-yellow-900/20 p-3 w-12 h-12 flex items-center justify-center">
                <Keyboard className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold">Every Stroke = Action</h3>
              <p className="text-muted-foreground">
                Most typing games require you to type full words before anything interesting happens. In {data.brand},
                every single keystroke is rewarded. Explosions, sliced letters, falling enemies, treasure, dashing
                across the screen, etc... these are all performed by single strokes.
              </p>
              <p className="text-muted-foreground">
                This is especially important to kids/new typists who struggle to find one key at a time. But for those
                who type fast, you'll feel a rush you won't forget.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div
        ref={ref2}
        className={`transition-all duration-1000 delay-300 ${
          isInView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Card className="overflow-hidden border-2 border-yellow-500/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/30 h-full">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="rounded-full bg-yellow-100 dark:bg-yellow-900/20 p-3 w-12 h-12 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold">Beginner Friendly, Fun For All</h3>
              <p className="text-muted-foreground">
                There's no threat of death in {data.brand} until mid/late game. It's literally impossible to die in the
                first half of the game. Enemies will attack you, but minor attacks are automatically deflected. Major
                attacks merely slow you down.
              </p>
              <p className="text-muted-foreground">
                This creates a stress-free environment for a new typist to learn/play at their own pace. Typing faster
                gives higher scores and more rewards, but there is no such thing as failure.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div
        ref={ref3}
        className={`transition-all duration-1000 delay-600 ${
          isInView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Card className="overflow-hidden border-2 border-yellow-500/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/30 h-full">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="rounded-full bg-yellow-100 dark:bg-yellow-900/20 p-3 w-12 h-12 flex items-center justify-center">
                <Gamepad2 className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold">Smooth, Natural Typing</h3>
              <p className="text-muted-foreground">
                The movement in {data.brand} is completely akin to real-world typing. You are not holding WASD to move; you
                dash attack to move through the level; and dash attacks change depending on which enemies are in front
                of you.
              </p>
              <p className="text-muted-foreground">
                Unlike most typing games which seem to completely forget about the spacebar, [SPACE], [SHIFT], [CAPS],
                [TAB], and [ENTER] are all integrated into the game in an intuitive way which mimics the same frequency
                of real typing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div
        ref={ref4}
        className={`transition-all duration-1000 delay-900 ${
          isInView4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Card className="overflow-hidden border-2 border-yellow-500/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/30 h-full">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="rounded-full bg-yellow-100 dark:bg-yellow-900/20 p-3 w-12 h-12 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold">Learn More Through Lore</h3>
              <p className="text-muted-foreground">
                Through the story/lore of the game, you will subconsciously learn about Chemistry / Periodic Table of
                Elements, and you'll be given opportunities to practice morse code and foreign languages as well.
              </p>
              <p className="text-muted-foreground">
                118 Levels named after 118 periodic table elements. 118 Evil Elemental Lords, for element of the
                periodic table. Mnemonic Devices to help remember the order of the periodic table.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
