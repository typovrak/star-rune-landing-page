import data from "@/utils/data";
import type { IBlockHero } from "@/utils/types";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";
import ButtonIconDiscord from "@/components/button-icon-discord";
import ScrollIndicator from "@/components/scroll-indicator";
import Brand from "@/icons/brand";
import image from "@/public/star-rune-hero.webp";
import Image from "@/components/image";

export default function BlockHero({ }: IBlockHero) {
  return (
    <section className="relative w-full min-h-[calc(100vh-var(--header-height))] mt-[var(--header-height)] flex items-center overflow-hidden">
      <div className="absolute inset-0" >
        <Image
          src={image}
          alt={`${data.brand} game background`}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="absolute top-0 bottom-[78%] w-full">
        <Brand
          className="w-auto max-w-[100%] h-[100%] mx-auto"
        />
      </div>

      {/* TODO: add follow cursor animation on image */}

      <div className="relative px-4 flex flex-col gap-4 w-full max-w-[350px] mx-auto">
        <ButtonIconDemo size="bigger" />
        <ButtonIconKickstarter size="bigger" />
        <ButtonIconDiscord size="bigger" />
      </div>


      <div className="absolute left-0 bottom-0 flex items-center justify-center w-full">
        <ScrollIndicator
          url={`#${data.homeLinks[0].id}`}
          title="Go to the next section"
          className="pb-0 s:pb-3 lg:pb-6 pt-6 pr-6 pl-6"
        />
      </div>
    </section>
  )
}
