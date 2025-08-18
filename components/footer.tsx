import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif font-bold text-3xl text-primary mb-4 block">
              Semper
            </Link>
            <p className="font-sans text-background/80 mb-6 max-w-md">
              We help ambitious businesses grow through strategic content creation and social media management that
              drives real results.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-sans text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-background/80 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="font-sans text-background/80 hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-sans text-background/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/booking" className="font-sans text-background/80 hover:text-primary transition-colors">
                  Book a Call
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@semperagency.com"
                  className="font-sans text-background/80 hover:text-primary transition-colors"
                >
                  hello@semperagency.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="font-sans text-background/60">© 2025 Semper Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
