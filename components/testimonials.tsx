"use client"

import { Card, CardContent } from "@/components/ui/card"
import { StarIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote:
        "Semper transformed our social media presence completely. Our engagement increased by 400% and we're seeing real revenue from our content now.",
      name: "Sarah Chen",
      company: "TechStart Solutions",
      logo: "/techstart-logo.png",
    },
    {
      quote:
        "The strategic approach they brought to our content marketing was exactly what we needed. ROI improved dramatically within 3 months.",
      name: "Marcus Rodriguez",
      company: "GrowthCo",
      logo: "/growthco-logo.png",
    },
    {
      quote:
        "Finally, a team that understands both creativity and data. Our brand voice is stronger and our metrics prove it's working.",
      name: "Emily Watson",
      company: "Innovate Labs",
      logo: "/innovate-labs-logo.png",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-50">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ChatBubbleLeftEllipsisIcon className="w-12 h-12 text-primary" />
          </div>

          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            What Our <span className="text-primary font-black">Clients Say</span>
          </h2>

          <p
            className={`font-sans text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Don't just take our word for it. Here's what businesses like yours have achieved with Semper.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`h-full bg-white shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="text-primary w-4 h-4 transition-all duration-300 hover:scale-110" />
                  ))}
                </div>
                <blockquote className="font-sans text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-serif font-semibold text-foreground">{testimonial.name}</div>
                    <div className="font-sans text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                  <img
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={`${testimonial.company} logo`}
                    className="h-8 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-110 rounded"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
