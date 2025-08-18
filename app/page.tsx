import { Hero } from "@/components/hero"
import { PainPointsSolutions } from "@/components/pain-points-solutions"
import { StatsImpact } from "@/components/stats-impact"
import { WhatWeDo } from "@/components/what-we-do"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <PainPointsSolutions />
        <StatsImpact />
        <WhatWeDo />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
