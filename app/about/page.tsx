import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutIntro } from "@/components/about-intro"
import { VisionMission } from "@/components/vision-mission"
import { CoreValues } from "@/components/core-values"
import { Founders } from "@/components/founders"
import { Timeline } from "@/components/timeline"
import { CoreServices } from "@/components/core-services"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutIntro />
        <VisionMission />
        <CoreValues />
        <Founders />
        <Timeline />
        <CoreServices />
      </main>
      <Footer />
    </div>
  )
}
