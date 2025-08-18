"use client"

import { CheckCircleIcon, XMarkIcon, ExclamationTriangleIcon, LightBulbIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"

export function PainPointsSolutions() {
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

  const painPoints = [
    "Struggling to create consistent, engaging content",
    "Social media feels like shouting into the void",
    "No clear strategy connecting content to revenue",
    "Overwhelmed by platform algorithms and trends",
  ]

  const solutions = [
    "Data-driven content strategies that resonate",
    "Targeted social media that builds real communities",
    "Clear ROI tracking and revenue attribution",
    "Expert navigation of platform best practices",
  ]

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-50">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <div className="flex justify-center mb-4">
            <ExclamationTriangleIcon className="w-12 h-12 text-accent" />
          </div> */}

          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Stop Spinning Your Wheels
          </h2>

          <p
            className={`font-sans text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            We understand the challenges you're facing because we've helped hundreds of businesses overcome them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Pain Points */}
          <div className="space-y-6">
            <h3
              className={`font-serif font-semibold text-2xl text-foreground mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
            >
              Common Struggles
            </h3>
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm transition-all duration-700 hover:shadow-md hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <XMarkIcon className="text-destructive mt-1 flex-shrink-0 w-5 h-5" />
                <p className="font-sans text-foreground">{point}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3
              className={`font-serif font-semibold text-2xl text-foreground mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
            >
              <LightBulbIcon className="w-8 h-8 text-primary inline mr-2" />
              How Semper Solves This
            </h3>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm transition-all duration-700 hover:shadow-md hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <CheckCircleIcon className="text-primary mt-1 flex-shrink-0 w-5 h-5" />
                <p className="font-sans text-foreground">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
