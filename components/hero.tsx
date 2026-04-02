'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with cinematic image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial_hero_bg_1775038948618.png"
          alt="Precision Industrial Machinery"
          fill
          priority
          className="object-cover opacity-90 scale-105 grayscale brightness-[0.7] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/100 via-primary/95 to-primary/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-background/100 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 xl:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 shadow-xl">
            <Zap size={16} className="text-secondary fill-secondary" />
            <span className="text-sm font-semibold text-white tracking-wide uppercase">Next-Gen Industrial Monitoring</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
            Precision <br />
            <span className="text-secondary drop-shadow-sm">Engineered</span> <br />
            Performance
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-xl leading-relaxed font-medium">
            Setting the global benchmark for high-accuracy pressure and temperature monitoring in mission-critical industrial environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary/90 shadow-xl shadow-secondary/20 hover:shadow-secondary/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Collections
              <ArrowRight size={22} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Request Quote
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div className="space-y-1">
              <p className="text-3xl font-black text-white leading-none">0.05%</p>
              <p className="text-sm text-white/60 font-semibold uppercase tracking-widest">Accuracy</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-white leading-none">IP68+</p>
              <p className="text-sm text-white/60 font-semibold uppercase tracking-widest">Rating</p>
            </div>
            <div className="hidden sm:block space-y-1">
              <p className="text-3xl font-black text-white leading-none">10k+</p>
              <p className="text-sm text-white/60 font-semibold uppercase tracking-widest">Units Sold</p>
            </div>
          </div>
        </div>

        {/* Technical Asset Showcase - Animated Portal */}
        <div className="hidden lg:flex items-center justify-center relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
           <div className="relative w-[500px] h-[500px] bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-white/10 p-12 overflow-hidden group shadow-2xl transition-all duration-700 hover:shadow-secondary/5 -translate-y-24">
              {/* Product Animation Controller */}
              <ProductFader />

              {/* Atmospheric Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] group-hover:bg-secondary/10 transition-colors duration-1000" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors" />
              
              {/* Technical Marker */}
              <div className="absolute bottom-10 left-10 flex items-center gap-4">
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-secondary tracking-[0.3em] uppercase block">Asset Sync</span>
                    <div className="flex gap-1">
                       {[0, 1, 2, 3].map((i) => (
                         <div key={i} className="w-4 h-[2px] bg-white/20 rounded-full group-hover:bg-secondary/40 transition-colors" />
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}

function ProductFader() {
  const [currentIdx, setCurrentIdx] = React.useState(0)
  const productImages = [
    '/transmit_1.jpg'
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % productImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [productImages.length])

  return (
    <div className="relative w-full h-full">
      {productImages.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-1000 transform ${
            idx === currentIdx 
              ? 'opacity-100 scale-100 translate-y-0 rotate-0' 
              : 'opacity-0 scale-95 translate-y-8 rotate-3 pointer-events-none'
          }`}
        >
          <Image
            src={src}
            alt="Industrial Technical Asset"
            fill
            className="object-contain p-8 -translate-y-8 group-hover:scale-105 transition-transform duration-1000"
          />
        </div>
      ))}
    </div>
  )
}
