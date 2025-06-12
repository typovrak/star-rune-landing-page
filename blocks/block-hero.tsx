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
    <section
      className="relative group w-full min-h-[calc(100vh-var(--header-height))] mt-[var(--header-height)] flex items-center overflow-hidden"
      data-appear={true}
      data-appear-once={true}
    >
      <div className="absolute inset-0" >
        <Image
          src={image}
          alt={`${data.brand} game background`}
          className="w-full h-full object-cover object-top group-[.appear]:blur-none blur-sm transition-all duration-1000"
        />
      </div>

      <div className="absolute top-0 bottom-[78%] w-full group-[.appear]:opacity-100 opacity-0 transition-all duration-1000">
        <Brand
          className="w-auto max-w-[100%] h-[100%] mx-auto"
        />
      </div>

      {/* TODO: add follow cursor animation on image */}

      <div className="relative px-4 flex flex-col gap-4 w-full max-w-[350px] mx-auto">
        <div className="group-[.appear]:translate-x-0 -translate-x-32 group-[.appear]:opacity-100 opacity-0 transition-all duration-1000">
          <ButtonIconDemo size="bigger" />
        </div>

        <div className="group-[.appear]:translate-x-0 translate-x-32 group-[.appear]:opacity-100 opacity-0 transition-all duration-1000">
          <ButtonIconKickstarter size="bigger" />
        </div>

        <div className="group-[.appear]:translate-x-0 -translate-x-32 group-[.appear]:opacity-100 opacity-0 transition-all duration-1000">
          <ButtonIconDiscord size="bigger" />
        </div>
      </div>


      <div className="absolute left-0 bottom-0 flex items-center justify-center w-full group-[.appear]:opacity-100 opacity-0 transition-all duration-1000">
        <ScrollIndicator
          url={`#${data.homeLinks[0].id}`}
          title="Go to the next section"
          className="pb-0 s:pb-3 lg:pb-6 pt-6 pr-6 pl-6"
        />
      </div>
    </section>
  )
}
