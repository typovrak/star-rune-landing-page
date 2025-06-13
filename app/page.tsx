"use client"

import Page from "@/layouts/page";
import BlockCommunity from "@/blocks/block-community";
import BlockTeam from "@/blocks/block-team";
import BlockTestimonials from "@/blocks/block-testimonials";
import BlockFeatures from "@/blocks/block-features";
import BlockResume from "@/blocks/block-resume";
import BlockAbilities from "@/blocks/block-abilities";
import BlockHero from "@/blocks/block-hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlockConversion from "@/blocks/block-conversion";
import data from "@/utils/data";

export default function Home() {
  return (
    <Page className="bg-black">
      <Header />

      <BlockHero />

      <BlockResume id={data.homeLinks[0].id} dataAppearThreshold={0.20} />
      <BlockFeatures id={data.homeLinks[1].id} />
      <BlockAbilities id={data.homeLinks[2].id} />
      <BlockTestimonials id={data.homeLinks[3].id} />
      <BlockTeam id={data.homeLinks[4].id} />
      <BlockCommunity id={data.homeLinks[5].id} />

      <BlockConversion />

      <Footer />
    </Page>
  )
}
