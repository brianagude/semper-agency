"use client"

import { useEffect, useRef, useState } from "react"
import { CurrencyDollarIcon, BuildingOfficeIcon, ChartBarSquareIcon } from "@heroicons/react/24/outline"
import { Card, CardContent } from "@/components/ui/card"

export function StatsImpact() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0])
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    {
      number: "$2M+",
      target: 2000000,
      label: "Revenue Opportunities Created",
      icon: CurrencyDollarIcon,
    },
    {
      number: "150+",
      target: 150,
      label: "Businesses Helped",
      icon: BuildingOfficeIcon,
    },
    {
      number: "340%",
      target: 340,
      label: "Average ROAS Improvement",
      icon: ChartBarSquareIcon,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.target
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                start = end
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(start)
                return newCounters
              })
            }, 16)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const formatNumber = (num: number, index: number) => {
    if (index === 0) return `$${(num / 1000000).toFixed(1)}M+`
    if (index === 1) return `${num}+`
    if (index === 2) return `${num}%`
    return num.toString()
  }

  return (
    <section ref={sectionRef} className="relative py-20 bg-white">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Results That <span className="text-primary font-black">Speak for Themselves</span>
          </h2>
          <p
            className={`font-sans text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Our data-driven approach consistently delivers measurable growth for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center bg-white shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="font-serif font-bold text-4xl sm:text-5xl text-primary mb-2">
                  {isVisible ? formatNumber(counters[index], index) : stat.number}
                </div>
                <div className="font-sans text-lg text-foreground font-semibold">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
