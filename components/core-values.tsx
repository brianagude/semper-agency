import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Shield, Heart } from "lucide-react"

export function CoreValues() {
  const values = [
    {
      icon: MessageCircle,
      title: "Communication",
      description:
        "Clear, honest, and consistent communication forms the foundation of every successful partnership. We keep you informed every step of the way.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "You can count on us to deliver what we promise, when we promise it. Our track record speaks for itself—consistent results, every time.",
    },
    {
      icon: Heart,
      title: "Genuinity",
      description:
        "Authentic relationships drive authentic results. We believe in being real, transparent, and genuinely invested in your success.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">Our Core Values</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do and shape how we work with our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center h-full border-primary/10 hover:border-primary/30 transition-colors"
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <value.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
