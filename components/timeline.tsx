"use client"

import { Card, CardContent } from "@/components/ui/card"

export function Timeline() {
  const timelineEvents = [
    {
      title: "The Badminton Connection",
      description:
        "Quan and Michael met on the badminton court, bonding over their shared competitive spirit and entrepreneurial dreams.",
      year: "2019",
    },
    {
      title: "Gong Cha Conversations",
      description:
        "Countless hours spent at Gong Cha discussing business ideas, market opportunities, and their vision for helping businesses grow.",
      year: "2020",
    },
    {
      title: "The First Attempt",
      description:
        "Their initial venture didn't go as planned, but the lessons learned were invaluable. Sometimes you need to fail forward to find your true path.",
      year: "2021",
    },
    {
      title: "Growth & Adaptation",
      description:
        "Learning from their experiences, they pivoted to focus on what they did best: strategic content creation and social media management.",
      year: "2022",
    },
    {
      title: "Semper Agency Born",
      description:
        "With refined skills and a clear mission, Semper Agency was officially launched, ready to help businesses grow through authentic storytelling.",
      year: "2023",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">Our Story</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            From friendship to partnership—the journey that led to Semper Agency.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content */}
                <Card className="md:ml-16 w-full border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="font-serif font-bold text-xl text-foreground">{event.title}</h3>
                      <span className="font-sans text-primary font-medium">{event.year}</span>
                    </div>
                    <p className="font-sans text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
