import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseStudiesGrid } from "@/components/case-studies-grid"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8">
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Real results from real businesses. See how we've helped companies like yours achieve measurable growth
              through strategic content and social media management.
            </p>
          </div>
        </section>
        <CaseStudiesGrid />
      </main>
      <Footer />
    </div>
  )
}
