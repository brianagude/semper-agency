"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/modern-office-brainstorm.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full opacity-30" />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full opacity-20" />
        <div className="absolute top-1/3 left-10 w-1 h-1 bg-primary rounded-full opacity-40" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent rounded-full opacity-25" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          NO BULLSH*T <span className="text-primary font-black">Paid & Organic Social</span> That Drives Revenue
        </h1>

        <p
          className={`font-sans text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          The truth is, you're probably great at what you do—just not enough people know about it. We handle the
          strategy, scripting, shooting, and optimization. All you do is show up.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/booking">Book a Call</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            <Link href="/case-studies">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
