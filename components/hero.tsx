import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <Zap size={16} className="text-yellow-300" />
          <span className="text-sm font-medium text-white">Industry-Leading Solutions</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Precision Instruments for Industrial Excellence
        </h1>
        <p className="text-lg sm:text-xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">
          Advanced pressure and temperature gauges engineered for reliability, accuracy, and durability in demanding industrial environments worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore Products
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
