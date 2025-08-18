import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function CaseStudiesGrid() {
  const caseStudies = [
    {
      id: "techstart-solutions",
      title: "TechStart Solutions",
      subtitle: "400% Engagement Increase",
      description:
        "How we transformed a struggling tech startup's social media presence into a lead-generating powerhouse.",
      image: "/case-study-techstart.png",
      tags: ["Social Media", "Content Strategy", "Lead Generation"],
      results: "+400% Engagement",
    },
    {
      id: "growthco-marketing",
      title: "GrowthCo Marketing",
      subtitle: "340% ROI Improvement",
      description:
        "Strategic content marketing overhaul that turned a stagnant marketing agency into an industry leader.",
      image: "/case-study-growthco.png",
      tags: ["Content Marketing", "SEO", "Brand Strategy"],
      results: "+340% ROI",
    },
    {
      id: "innovate-labs",
      title: "Innovate Labs",
      subtitle: "250% Revenue Growth",
      description:
        "Complete digital transformation that positioned a research lab as a thought leader in their industry.",
      image: "/case-study-innovate.png",
      tags: ["Thought Leadership", "Content Creation", "Digital Strategy"],
      results: "+250% Revenue",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.id} href={`/case-studies/${study.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <p className="font-sans text-primary font-medium">{study.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-muted-foreground leading-relaxed mb-4">{study.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-accent">{study.results}</span>
                    <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
