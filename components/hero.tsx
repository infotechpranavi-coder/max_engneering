'use client'

import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const slides = [
    {
      image: '/banners/factory.jpg',
      tag: 'INDUSTRIAL AUTOMATION EXPERTS',
      title: 'SMART ELECTRICAL &',
      highlight: 'INSTRUMENTATION SOLUTIONS',
      description: 'Precision engineering for safe, efficient, and modern industrial automation systems.'
    },
    {
      image: '/banners/factory2.jpg',
      tag: 'PROCESS CONTROL SPECIALISTS',
      title: 'ADVANCED MEASUREMENT &',
      highlight: 'CONTROL TECHNOLOGIES',
      description: 'Bridging the gap between world-class technology and complex industrial applications.'
    },
    {
      image: '/banners/wielding 2.jpg',
      tag: 'PRECISION ENGINEERING',
      title: 'HIGH-INTEGRITY FIELD',
      highlight: 'INSTRUMENTATION',
      description: 'Supply and integration of specialized instruments for mission-critical processes.'
    },
    {
      image: '/banners/wielding.jpg',
      tag: 'TECHNICAL EXCELLENCE',
      title: 'INTELLIGENT PROCESS',
      highlight: 'MONITORING',
      description: 'Real-time data and precision monitoring for optimized factory performance.'
    }
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-primary">
      {/* Background Slider with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 10, ease: "linear" }}
              className="relative w-full h-full"
            >
              <Image
                src={slides[currentSlide].image}
                alt="Industrial Machinery"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Overlays */}
        {/* Localized Left-side Overlay - Converted to only cover text area */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] bg-gradient-to-r from-primary/95 via-primary/40 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-primary to-transparent z-10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-24 lg:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-5"
          >
            <div className="flex items-center gap-4">
               <div className="w-10 h-0.5 bg-secondary" />
               <span className="text-secondary font-black text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-poppins">{slides[currentSlide].tag}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase font-poppins">
              {slides[currentSlide].title}
              <span className="block text-secondary">{slides[currentSlide].highlight}</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-[16px] text-white/50 max-w-xl font-poppins font-normal leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <div className="pt-6 flex flex-wrap gap-4 sm:gap-6">
              <Link 
                href="/contact"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-3"
              >
                GET FREE QUOTE
                <ArrowRight size={16} />
              </Link>
              <Link 
                href="tel:+919835139863"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all flex items-center gap-3"
              >
                CALL NOW
                <Phone size={14} fill="currentColor" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-6 z-30 flex items-center gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="group py-4"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-16 bg-secondary' : 'w-8 bg-white/20 group-hover:bg-white/40'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
