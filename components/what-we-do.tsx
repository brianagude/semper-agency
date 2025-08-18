import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhatWeDo() {
  const agencyResponsibilities = [
    "Strategic content planning and creation",
    "Social media management and optimization",
    "Performance tracking and analytics",
    "Creative campaign development",
    "Platform-specific content adaptation",
  ]

  const clientResponsibilities = [
    "Provide brand guidelines and assets",
    "Share business goals and KPIs",
    "Review and approve content calendars",
    "Participate in strategy sessions",
    "Implement recommended website changes",
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">How We Work Together</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear expectations and defined roles ensure smooth collaboration and outstanding results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">What We Handle</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {agencyResponsibilities.map((item, index) => (
                  <li key={index} className="font-sans text-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-accent">What You Provide</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {clientResponsibilities.map((item, index) => (
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
