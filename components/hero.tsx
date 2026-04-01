import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Precision Instruments for Industrial Excellence
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Advanced pressure and temperature gauges engineered for reliability, accuracy, and durability in demanding industrial environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Explore Products
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
