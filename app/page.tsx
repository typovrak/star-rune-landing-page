"use client"

import NotificationPopup from "@/components/notification-popup"
import BlockCommunity from "@/blocks/block-community";
import BlockTeam from "@/blocks/block-team";
import BlockTestimonials from "@/blocks/block-testimonials";
import BlockFeatures from "@/blocks/block-features";
import BlockResume from "@/blocks/block-resume";
import BlockAbilities from "@/blocks/block-abilities";
import BlockGallery from "@/blocks/block-gallery";
import BlockHero from "@/blocks/block-hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlockConversion from "@/blocks/block-conversion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Header />

      <BlockHero />
      <BlockResume />
      <BlockFeatures />
      <BlockAbilities />
      <BlockGallery />
      <BlockTestimonials />
      <BlockTeam />
      <BlockCommunity />
      <BlockConversion />

      <Footer />

      <NotificationPopup />
    </div >
  )
}
