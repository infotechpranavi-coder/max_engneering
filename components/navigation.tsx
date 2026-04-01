'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg text-primary">FastGauge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
