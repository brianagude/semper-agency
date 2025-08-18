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
        {/* <div className=" bg-gradient-to-b from-primary/10 to-primary/80"> */}
          <AboutIntro />
          <VisionMission />
        {/* </div> */}
        <CoreValues />
        <Founders />
        <Timeline />
        <CoreServices />
      </main>
      <Footer />
    </div>
  )
}
