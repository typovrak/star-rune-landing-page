import Discord from "@/icons/discord";
import data from "@/utils/data";
import type { IBlockHero } from "@/utils/types";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";
import ButtonIcon from "@/components/button-icon";
import ScrollIndicator from "@/components/scroll-indicator";

export default function BlockHero({ }: IBlockHero) {
  return (
    <section className="relative w-full min-h-[calc(100vh-var(--header-height))] mt-[var(--header-height)] flex items-center overflow-hidden">
      <div className="absolute inset-0" >
        <img
          src="/star-rune-hero.jpg"
          alt={`${data.brand} game background`}
          className="w-full h-full object-cover object-top"
        />
      </div>
      {/* TODO: add filter after some seconds */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative px-4 flex flex-col gap-4 w-full max-w-[350px] mx-auto">
        <ButtonIconDemo size="bigger" />
        <ButtonIconKickstarter size="bigger" />

        <ButtonIcon
          url={data.url.discord}
          icon={<Discord />}
          title="Join Discord"
          className="bg-discord-500"
          size="bigger"
        />
      </div>


      <div className="absolute left-0 bottom-0 flex items-center justify-center w-full">
        <ScrollIndicator
          url={`#${data.homeLinks[0].id}`}
          title="Go to the next section"
          className="pb-3 lg:pb-6 pt-6 pr-6 pl-6"
        />
      </div>
    </section>
  )
}
