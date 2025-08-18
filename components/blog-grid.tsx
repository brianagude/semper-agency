import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function BlogGrid() {
  const blogPosts = [
    {
      id: "content-strategy-2024",
      title: "The Complete Guide to Content Strategy in 2024",
      excerpt:
        "Discover the latest trends and best practices for creating content that converts. From AI-powered insights to authentic storytelling.",
      category: "Marketing Insights",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "/blog-content-strategy.png",
      featured: true,
    },
    {
      id: "trending-keywords-march",
      title: "Top Trending Keywords This Month: What Your Audience is Searching For",
      excerpt:
        "Stay ahead of the curve with our monthly keyword analysis. These trending terms could be your ticket to increased visibility.",
      category: "Trending Keywords",
      date: "March 12, 2024",
      readTime: "5 min read",
      image: "/blog-trending-keywords.png",
    },
    {
      id: "video-repurposing-guide",
      title: "How to Turn One Video into 10 Pieces of Content",
      excerpt:
        "Maximize your content ROI with our proven video repurposing framework. Learn how to extract maximum value from every piece of content.",
      category: "Video Repurposing",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/blog-video-repurposing.png",
    },
    {
      id: "social-media-algorithms",
      title: "Cracking the Code: Understanding Social Media Algorithms in 2024",
      excerpt:
        "Platform algorithms are constantly evolving. Here's what you need to know to stay visible and engaged with your audience.",
      category: "Marketing Insights",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "/blog-algorithms.png",
    },
    {
      id: "keyword-research-tools",
      title: "5 Free Keyword Research Tools That Actually Work",
      excerpt:
        "You don't need expensive tools to find winning keywords. These free alternatives will help you discover untapped opportunities.",
      category: "Trending Keywords",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: "/blog-keyword-tools.png",
    },
    {
      id: "short-form-video-strategy",
      title: "Short-Form Video Strategy: From TikTok to YouTube Shorts",
      excerpt:
        "Master the art of short-form video content. Learn how to create engaging videos that capture attention and drive action.",
      category: "Video Repurposing",
      date: "March 3, 2024",
      readTime: "9 min read",
      image: "/blog-short-form-video.png",
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-8">Featured Article</h2>
            <Link href={`/blog/${featuredPost.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 group cursor-pointer">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge variant="secondary" className="mb-4">
                      {featuredPost.category}
                    </Badge>
                    <CardTitle className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors mb-4">
                      {featuredPost.title}
                    </CardTitle>
                    <p className="font-sans text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-muted-foreground leading-relaxed mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
