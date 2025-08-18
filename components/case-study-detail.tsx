import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CaseStudyProps {
  caseStudy: {
    title: string
    subtitle: string
    image: string
    overview: {
      company: string
      industry: string
      size: string
      timeline: string
    }
    challenge: string
    ingredients: string[]
    process: string
    solution: string
    results: Array<{
      metric: string
      value: string
      description: string
    }>
  }
}

export function CaseStudyDetail({ caseStudy }: CaseStudyProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">{caseStudy.title}</h1>
          <p className="font-sans text-xl text-primary mb-8">{caseStudy.subtitle}</p>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <img
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground">Company Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-sans font-medium text-foreground mb-2">Company</h4>
                  <p className="text-muted-foreground">{caseStudy.overview.company}</p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-foreground mb-2">Industry</h4>
                  <p className="text-muted-foreground">{caseStudy.overview.industry}</p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-foreground mb-2">Company Size</h4>
                  <p className="text-muted-foreground">{caseStudy.overview.size}</p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-foreground mb-2">Project Timeline</h4>
                  <p className="text-muted-foreground">{caseStudy.overview.timeline}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-8">The Challenge</h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
        </div>
      </section>

      {/* Project Ingredients */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-8">Project Ingredients</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.ingredients.map((ingredient, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4 border-primary/30 text-primary">
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-8">Our Process</h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">{caseStudy.process}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-8">The Solution</h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-12 text-center">The Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.results.map((result, index) => (
              <Card key={index} className="text-center border-primary/20">
                <CardContent className="p-6">
                  <div className="font-serif font-bold text-4xl text-primary mb-2">{result.value}</div>
                  <div className="font-sans font-medium text-foreground mb-1">{result.metric}</div>
                  <div className="font-sans text-sm text-muted-foreground">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-4">Ready for Similar Results?</h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve measurable growth through strategic content and social
            media management.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/booking">Book a Call</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
