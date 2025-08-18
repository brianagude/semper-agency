"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif font-bold text-primary">
              <Image src="/semper-logo.png" alt="Sepmer logo" width={120} height={40} />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/case-studies" className="text-foreground hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Button asChild>
                <Link href="/booking">Book a Call</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary">
                About
              </Link>
              <Link href="/case-studies" className="block px-3 py-2 text-foreground hover:text-primary">
                Case Studies
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-foreground hover:text-primary">
                Blog
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/booking">Book a Call</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
