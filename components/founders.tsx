import { Card, CardContent } from "@/components/ui/card"

export function Founders() {
  const founders = [
    {
      name: "Quan",
      role: "Co-Founder & Strategy Director",
      image: "/quan-headshot-placeholder.png",
      bio: "With a background in data analytics and digital marketing, Quan brings a strategic mindset to every campaign. His passion for turning insights into actionable growth strategies has helped dozens of businesses scale effectively.",
    },
    {
      name: "Michael",
      role: "Co-Founder & Creative Director",
      image: "/michael-headshot-placeholder.png",
      bio: "Michael's creative vision and content expertise drive the storytelling that connects brands with their audiences. His ability to craft compelling narratives that convert has been instrumental in our clients' success.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">Meet the Founders</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Two friends who turned their shared vision of helping businesses grow into a thriving agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <Card key={index} className="text-center border-primary/10">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img
                    src={founder.image || "/placeholder.svg"}
                    alt={`${founder.name} headshot`}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>
                <h3 className="font-serif font-bold text-2xl text-foreground mb-2">{founder.name}</h3>
                <p className="font-sans text-primary font-medium mb-4">{founder.role}</p>
                <p className="font-sans text-muted-foreground leading-relaxed">{founder.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
