import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool, Share2 } from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      icon: PenTool,
      title: "Content Generation",
      description:
        "Strategic content creation that tells your brand story, engages your audience, and drives conversions. From blog posts to social media content, we craft messages that resonate.",
      features: [
        "Blog writing & SEO optimization",
        "Social media content creation",
        "Email marketing campaigns",
        "Brand storytelling",
      ],
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Comprehensive social media strategy and execution across all major platforms. We build communities, not just follower counts, focusing on engagement that converts.",
      features: [
        "Platform-specific strategy",
        "Community management",
        "Performance analytics",
        "Paid social advertising",
      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">What We Do</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core services are designed to work together, creating a comprehensive growth strategy for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors h-full">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-sans text-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
