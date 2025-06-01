"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import data from "@/utils/data";

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const images = [
    {
      src: "/placeholder.svg?height=720&width=1280",
      alt: `${data.brand} gameplay screenshot 1`,
      caption: "Battle against evil letters in the Cyber Forest",
    },
    {
      src: "/placeholder.svg?height=720&width=1280",
      alt: `${data.brand} gameplay screenshot 2`,
      caption: "Unleash powerful abilities with your legendary sword",
    },
    {
      src: "/placeholder.svg?height=720&width=1280",
      alt: `${data.brand} gameplay screenshot 3`,
      caption: "Face challenging boss battles that test your typing skills",
    },
    {
      src: "/placeholder.svg?height=720&width=1280",
      alt: `${data.brand} gameplay screenshot 4`,
      caption: "Explore beautiful, hand-crafted worlds with unique challenges",
    },
    {
      src: "/placeholder.svg?height=720&width=1280",
      alt: `${data.brand} gameplay screenshot 5`,
      caption: "Collect elements and forge powerful runes for your swords",
    },
    {
      src: "/placeholder.svg?height=720&width=1280",
      alt: `${data.brand} gameplay screenshot 6`,
      caption: `Interact with characters and discover the rich lore of ${data.brand}`,
    },
  ]

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-xl shadow-xl shadow-yellow-500/10">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/40 text-white hover:bg-black/60 rounded-full"
          onClick={() => setShowLightbox(true)}
        >
          <Maximize2 className="h-5 w-5" />
        </Button>
        <img
          src={images[activeIndex].src || "/placeholder.svg"}
          alt={images[activeIndex].alt}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <p className="font-medium">{images[activeIndex].caption}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === activeIndex
              ? "border-yellow-500 shadow-md shadow-yellow-500/20"
              : "border-transparent opacity-70 hover:opacity-100"
              }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full aspect-video object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {
        showLightbox && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full"
              onClick={() => setShowLightbox(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative max-w-7xl w-full">
              <img
                src={images[activeIndex].src || "/placeholder.svg"}
                alt={images[activeIndex].alt}
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="font-medium">{images[activeIndex].caption}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </div>
        )
      }
    </>
  )
}
