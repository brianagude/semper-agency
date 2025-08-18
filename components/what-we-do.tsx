export function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">What We Do</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            We handle everything. The strategy, the scripting, the shooting, and the optimization. All you have to do is
            have us come in for a few hours and work our magic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Agency Responsibilities */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-primary font-bold">What We Handle</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground">Strategy & Research</h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    Market analysis, competitor research, and winning campaign strategies
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground">Creative Development</h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    Scripting, ad copy, and creative direction for all content
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground">Production & Shooting</h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    On-location content creation and professional video production
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground">Campaign Management</h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    Daily optimization, scaling, and performance tracking
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Responsibilities */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-accent font-bold">What You Do</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground">Show Up</h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    Be available for a few hours when we come to shoot content
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground">Be Yourself</h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    Authentic personality is what converts—we'll guide you through the rest
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground">Trust the Process</h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    Let us handle the strategy while you focus on running your business
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground">Watch It Grow</h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    Sit back and watch your business get the attention it deserves
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
