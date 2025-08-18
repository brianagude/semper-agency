import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-20 relative overflow-hidden md:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/modern-city-sunset-nature.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-primary/90 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4">Stay Ahead of the Curve</h2>
        <p className="font-sans text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Get weekly insights on content strategy, social media trends, and growth tactics delivered straight to your
          inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
          />
          <Button variant="secondary" type="submit" className="whitespace-nowrap">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
