'use client'

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FindConnect } from "@/components/findconnect"
import { HowItWorks } from "@/components/how-it-works"
import { WhatsAppChannel } from "@/components/whatsapp-channel"
import { SocialProof } from "@/components/social-proof"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { MobileFooter } from "@/components/mobile-footer"
import { useAnalytics } from "@/hooks/use-analytics"

export default function Home() {
  useAnalytics()

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />
      <HeroSection />

      {/* Combined Tutors / Students Section */}
      <FindConnect />

      <HowItWorks />
      <WhatsAppChannel />
      <SocialProof />

      <Footer />
      <FloatingActions />
      <MobileFooter />
    </main>
  )
}
