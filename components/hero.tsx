'use client'

import React from 'react'
import Image from 'next/image'

export function Hero() {
  const [currentBanner, setCurrentBanner] = React.useState(0)
  const banners = [
    '/banners/slider_1.jpg',
    '/banners/slider_2.jpg',
    '/banners/slider_3.jpg',
    '/banners/slider_4.jpg'
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  return (
    <section className="relative w-full h-[60vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden bg-primary mt-20 sm:mt-0">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {banners.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              idx === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Industrial Showcase ${idx + 1}`}
              fill
              priority={idx === 0}
              className="object-cover"
            />
          </div>
        ))}
        
        {/* Subtle Bottom Vignette to keep navigation/dots visible if needed */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10" />

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBanner(i)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-500 ${
                i === currentBanner ? 'bg-secondary border-secondary scale-125' : 'bg-transparent hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
