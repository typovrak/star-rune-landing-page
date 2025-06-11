"use client"

import NotificationPopup from "@/components/notification-popup"
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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Header />

      <BlockHero />

      <BlockResume id={data.homeLinks[0].id} />
      <BlockFeatures id={data.homeLinks[1].id} />
      <BlockAbilities id={data.homeLinks[2].id} />
      <BlockTestimonials id={data.homeLinks[4].id} />
      <BlockTeam id={data.homeLinks[5].id} />
      <BlockCommunity id={data.homeLinks[6].id} />

      <BlockConversion />

      <Footer />

      <NotificationPopup />
    </div >
  )
}
