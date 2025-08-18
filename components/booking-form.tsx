"use client"

import { Card, CardContent } from "@/components/ui/card"

export function BookingForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-primary/20 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Schedule Your Free Consultation</h2>
            <p className="font-sans text-muted-foreground">
              Choose a time that works best for you. We'll discuss your goals, challenges, and how we can help.
            </p>
          </div>

          {/* Calendly Embed Placeholder */}
          <div className="bg-muted/30 rounded-lg p-12 text-center border-2 border-dashed border-primary/30">
            <div className="font-sans text-muted-foreground mb-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-lg">Calendly Widget Integration</p>
              <p className="text-sm">
                Replace this placeholder with your actual Calendly embed code to enable booking functionality.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="font-sans text-sm text-muted-foreground">
              Can't find a suitable time? Email us at{" "}
              <a href="mailto:hello@semperagency.com" className="text-primary hover:underline">
                hello@semperagency.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What to Expect */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="font-serif font-bold text-primary">1</span>
          </div>
          <h3 className="font-serif font-semibold text-foreground mb-2">Discovery Call</h3>
          <p className="font-sans text-sm text-muted-foreground">
            We'll learn about your business, goals, and current challenges.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="font-serif font-bold text-primary">2</span>
          </div>
          <h3 className="font-serif font-semibold text-foreground mb-2">Strategy Session</h3>
          <p className="font-sans text-sm text-muted-foreground">
            We'll outline a custom strategy tailored to your specific needs.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="font-serif font-bold text-primary">3</span>
          </div>
          <h3 className="font-serif font-semibold text-foreground mb-2">Next Steps</h3>
          <p className="font-sans text-sm text-muted-foreground">
            If we're a good fit, we'll discuss how to move forward together.
          </p>
        </div>
      </div>
    </div>
  )
}
