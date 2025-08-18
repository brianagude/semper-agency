import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-20 min-h-[80vh] flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center mb-12">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6">
                Let's Grow Your <span className="text-primary">Business</span>
              </h1>
              <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to transform your content strategy and see real results? Book a free consultation call and let's
                discuss how Semper can help your business reach its full potential.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
