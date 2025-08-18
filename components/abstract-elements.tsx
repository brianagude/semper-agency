"use client"

import { useEffect, useState } from "react"

export function AbstractLines() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="abstract-lines">
      <div
        className="abstract-line h-32"
        style={{
          left: "15%",
          animationDelay: "0s",
          animationDuration: "8s",
        }}
      />
      <div
        className="abstract-line h-24"
        style={{
          left: "35%",
          animationDelay: "2s",
          animationDuration: "6s",
        }}
      />
      <div
        className="abstract-line h-40"
        style={{
          left: "65%",
          animationDelay: "4s",
          animationDuration: "10s",
        }}
      />
      <div
        className="abstract-line h-28"
        style={{
          left: "85%",
          animationDelay: "1s",
          animationDuration: "7s",
        }}
      />
    </div>
  )
}

export function FloatingDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse-dot"
        style={{ top: "20%", left: "10%", animationDelay: "0s" }}
      />
      <div
        className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse-dot"
        style={{ top: "60%", left: "80%", animationDelay: "2s" }}
      />
      <div
        className="absolute w-3 h-3 bg-primary/15 rounded-full animate-pulse-dot"
        style={{ top: "80%", left: "20%", animationDelay: "4s" }}
      />
    </div>
  )
}
