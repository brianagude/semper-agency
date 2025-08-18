"use client"

import { Button } from "@/components/ui/button"

interface BlogCategoriesProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export function BlogCategories({ activeCategory, setActiveCategory }: BlogCategoriesProps) {
  const categories = ["All", "Marketing Insights", "Trending Keywords", "Video Repurposing"]

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="font-sans"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
