import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8">
              Growth <span className="text-primary">Insights</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Stay ahead of the curve with actionable insights on content strategy, social media trends, and growth
              tactics that actually work.
            </p>
          </div>
        </section>
        <BlogCategories />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
