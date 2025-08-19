import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CoreServices() {
  const paidSocialFeatures = [
    "Market research and competitor analysis",
    "Strategic campaign development",
    "Creative scripting and ad copy",
    "Campaign management and optimization",
    "Performance tracking and scaling",
  ]

  const organicSocialFeatures = [
    "Content strategy and planning",
    "Video scripting and creative direction",
    "Feed optimization and branding",
    "Engagement strategy implementation",
    "Guaranteed 3x view increase",
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">Our Core Services</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in exactly two things—and we're damn good at both of them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20 bg-white">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">Paid Social Advertising</CardTitle>
              <p className="font-sans text-muted-foreground mt-2">
                Scripting? Done. Market research? Handled. Campaign management? Don't even think about it.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {paidSocialFeatures.map((item, index) => (
                  <li key={index} className="font-sans text-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-white">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-accent">Organic Social Marketing</CardTitle>
              <p className="font-sans text-muted-foreground mt-2">
                Poor engagement? NO MORE. Unorganized feed? GONE. Build a cult-like following.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {organicSocialFeatures.map((item, index) => (
                  <li key={index} className="font-sans text-foreground flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
