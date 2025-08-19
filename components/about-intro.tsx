export function AboutIntro() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/70 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-card border border-primary/50 shadow-md rounded-lg p-8 mb-8">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8">
            About <span className="text-primary">Semper</span>
          </h1>
          <p className="font-serif text-2xl text-primary mb-4">Semper = Latin for "always growing"</p>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            A reflection of our company philosophy, but also our ever-evolving marketing strategies for our clients. We
            provide paid and organic social marketing services through Facebook ads and Instagram content, focusing on
            building winning strategies that help you hit your goals—not selling cheap, template-based advertising.
          </p>
        </div>
      </div>
    </section>
  )
}
