'use client'

import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import { SectionHeader } from '@/components/section-header'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  ArrowRight, Box, Cpu, Globe, Infinity,
  Radio, Gauge, ToggleRight, Thermometer,
  Activity, Zap, Link2, Droplets,
  CircleDot, Layout, Wifi
} from 'lucide-react'

export default function Home() {
  const featuredProductIds = ['tr-101', 'tr-104', 'ga-101', 'ga-102', 'sw-101', 'mt-101']
  const featuredProducts = featuredProductIds
    .map(id => products.find(p => p.id === id))
    .filter((p): p is typeof products[0] => p !== undefined)
  const categories = [
    { name: 'Transmitters', icon: Radio, href: '/transmitters', description: 'High-precision pressure and differential transmitters for industrial monitoring.' },
    { name: 'Gauges', icon: Gauge, href: '/gauges', description: 'Durable analog and digital gauges for air, water, and steam measurement.' },
    { name: 'Switches', icon: ToggleRight, href: '/switches', description: 'Reliable limit and control switches engineered for various process lines.' },
    { name: 'Temperature Sensors', icon: Thermometer, href: '/temperature-sensors', description: 'Precision RTDs and Thermocouples for accurate thermal monitoring.' },
    { name: 'Digital Indicators & Controllers', icon: Activity, href: '/digital-indicators-controllers', description: 'Advanced signal processing and display units for real-time control.' },
    { name: 'Multimeters & Testers', icon: Zap, href: '/multimeters-testers', description: 'Professional-grade electrical testing and calibration instruments.' },
    { name: 'Variable Wires & Cables', icon: Link2, href: '/variable-wires-cables', description: 'High-integrity industrial cables for instrumentation and power.' },
    { name: 'Online Moisture Analyser', icon: Droplets, href: '/online-moisture-analyser', description: 'Continuous moisture detection solutions for bulk materials.' },
    { name: 'SS Pipe & Fittings', icon: CircleDot, href: '/ss-pipe-fittings', description: 'Corrosion-resistant stainless steel plumbing for industrial instrumentation.' },
    { name: 'Panel Buildings', icon: Layout, href: '/panel-buildings', description: 'Custom engineered control panels and industrial enclosures.' },
    { name: 'Wireless System', icon: Wifi, href: '/wireless-system', description: 'Advanced telemetry and wireless monitoring for remote industrial sites.' }
  ]

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground font-sans">
      <Navigation />
      <main className="flex-1">
        <Hero />

        {/* Welcome Section - Professional Introduction */}
        <section className="pt-20 pb-32 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-12">
                <SectionHeader 
                  title="WELCOME TO"
                  highlightedTitle="MAX ENGINEERING"
                  description="A premier provider for specialized Process Control Instruments, bridging the gap between world-class technology and industrial application."
                />
              </div>
              <div className="lg:col-span-7 space-y-8">
                <p className="text-muted-foreground font-poppins font-normal" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                  We are pleased to introduce ourselves as <span className="text-primary font-bold">M/S. Max Engineering</span>, a premier provider for the supply, erection, and commissioning of specialized Process Control Instruments. As a general order supplier and authorized partner of leading global manufacturers, we bridge the gap between world-class technology and industrial application.
                </p>
                <p className="text-muted-foreground/80 border-l-4 border-secondary pl-8 font-poppins font-normal" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                  Our team brings over <span className="text-primary font-black">10 years of field-tested experience</span> in industrial process control equipment, specializing in field instruments that demand absolute accuracy.
                </p>
                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-secondary hover:text-secondary-foreground transition-all shadow-lg"
                  >
                    EXPLORE REPOSITORY
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 border-2 border-primary/10 text-primary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    GET QUOTE
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-square bg-[#F8F9FA] rounded-[3rem] p-12 overflow-hidden shadow-2xl">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent pointer-events-none z-10" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  {/* Image Slider */}
                  <WelcomeSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise - Infinite Product Category Slider */}
        <section className="pt-16 pb-24 bg-[#F8F9FA] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-primary/5" />
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <SectionHeader 
              title="OUR"
              highlightedTitle="SERVICES"
              description="Comprehensive range of process control instruments for diverse industrial applications."
            />
          </div>

          <div className="relative group">
            {/* Fade Overlays */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10" />

            <div className="flex w-fit whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-8 pr-8">
                  {categories.map((cat, idx) => (
                    <Link
                      key={`${setIdx}-${cat.name}`}
                      href={cat.href}
                      className="group/card relative w-[310px] h-[320px] bg-white rounded-3xl p-7 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-2 border-transparent hover:border-secondary hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-start translate-z-0"
                    >
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      
                      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover/card:bg-secondary transition-all duration-500">
                        <cat.icon className="text-secondary group-hover/card:text-secondary-foreground size-7" strokeWidth={2.5} />
                      </div>
                      
                      <h3 className="font-bold text-primary mb-3 tracking-tight uppercase font-poppins whitespace-normal" style={{ fontSize: '20px', lineHeight: '1.2' }}>
                        {cat.name}
                      </h3>
                      
                      <p className="text-muted-foreground font-poppins font-normal whitespace-normal line-clamp-3" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        {cat.description}
                      </p>

                      <div className="mt-auto flex items-center gap-2 text-secondary font-bold font-poppins uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-2 group-hover/card:translate-y-0" style={{ fontSize: '10px' }}>
                         EXPLORE SOLUTIONS
                         <ArrowRight size={14} />
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flagship Models - Tactical Technical List */}
        <section className="pt-12 pb-20 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="FEATURED"
              highlightedTitle="PRODUCTS"
              description="Explore our flagship models, engineered for unmatched accuracy and reliability in process control."
              centered={false}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group relative h-[520px] bg-white rounded-3xl border-2 border-transparent hover:border-secondary shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col translate-z-0"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image Area - Technical Showcase */}
                  <div className="relative h-[60%] w-full p-8 flex items-center justify-center bg-[#FBFBFB] group-hover:bg-white transition-colors duration-500">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-10 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Area - Professional Specs */}
                  <div className="flex-1 p-8 flex flex-col gap-4">
                    <h4 className="font-bold text-primary tracking-tight uppercase font-poppins group-hover:text-secondary transition-colors duration-500" style={{ fontSize: '20px', lineHeight: '1.2' }}>
                      {product.name}
                    </h4>

                    <div className="space-y-2">
                       {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center text-[11px] font-poppins uppercase tracking-wider pb-2 border-b border-primary/5">
                           <span className="text-primary/40 font-medium">{key}</span>
                           <span className="text-primary font-bold">{value}</span>
                        </div>
                       ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                       <span className="text-[10px] font-bold text-primary/40 font-poppins uppercase tracking-widest group-hover:text-secondary transition-colors">VIEW DETAILS</span>
                       <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-all duration-500">
                          <ArrowRight className="text-secondary group-hover:text-secondary-foreground" size={16} />
                       </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partners - Minimal Logo Bar */}
        <section className="py-12 bg-white overflow-hidden border-y border-primary/10">
          <div className="relative group">
            {/* Overlay Gradients for smooth fade-in/out */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex w-fit whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
              {/* Two sets of same items for infinite seamless scroll */}
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-16 pr-16">
                  {Array.from({ length: 30 }, (_, i) => (
                    <div
                      key={`${setIdx}-${i + 1}`}
                      className="w-48 h-20 flex items-center justify-center pointer-events-none"
                    >
                      <img
                        src={`/partners/${i + 1}.jpg`}
                        alt={`Strategic Partner Logo ${i + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey - Timeline Section */}
        <section className="pt-20 pb-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="OUR"
              highlightedTitle="HISTORY"
              description="A legacy of precision and excellence in industrial instrumentation since 2005."
            />

            <div className="relative mt-20">
              {/* Central Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary/10 hidden md:block" />

              <div className="space-y-24 relative">
                {[
                  {
                    year: '2005',
                    title: 'Founded',
                    description: 'Max Engineering established in Jamshedpur to provide high-precision instrumentation solutions.'
                  },
                  {
                    year: '2010',
                    title: 'Major Expansion',
                    description: 'Secured partnerships with Tata Steel and other leading industrial players in Jharkhand and Odisha.'
                  },
                  {
                    year: '2015',
                    title: 'Technological Growth',
                    description: 'Expanded into high-voltage electrical installations and complete system design for power plants.'
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Card Side */}
                    <div className={`w-full md:w-1/2 flex px-4 md:px-12 ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className="bg-white p-7 rounded-[2rem] border-2 border-primary/5 hover:border-secondary transition-all duration-700 w-full max-w-md group shadow-sm hover:shadow-xl">
                        <h3 className="font-semibold text-primary mb-3 uppercase tracking-tight group-hover:text-secondary transition-colors text-left font-poppins" style={{ fontSize: '18px' }}>
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-poppins font-normal text-left" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10 flex items-center justify-center w-24">
                       <div className="w-4 h-4 rounded-full bg-secondary shadow-[0_0_20px_rgba(235,191,46,0.5)] border-4 border-white" />
                    </div>

                    {/* Year Side */}
                    <div className={`w-full md:w-1/2 flex items-center px-4 md:px-6 ${idx % 2 !== 0 ? 'justify-start md:justify-end' : 'justify-end md:justify-start'}`}>
                      <span className="text-4xl md:text-5xl font-bold text-secondary tracking-tighter font-poppins">
                        {item.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Solutions - Valve Stands */}
        <section className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/industrial_hero_bg_1775038948618.png')] opacity-5 bg-fixed grayscale brightness-0" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10">
                <div>
                  <SectionHeader 
                    title="VARIABLE"
                    highlightedTitle="VALVE STANDS"
                    description="We specialize in custom engineering and design of Variable Valve Stands for critical industrial lines including Nitrogen, Oxygen, Argon, HSD, and Spray Cooling."
                    light
                    centered={false}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-secondary text-secondary-foreground px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                    Technical Specifications
                  </button>
                  <button className="border-2 border-white/20 text-white px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Request Integration
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['/service_1.jpg', '/service_2.jpg', '/service_3.jpg', '/service_4.jpg'].map((img, i) => (
                  <div key={i} className="aspect-square bg-white/5 rounded-3xl relative overflow-hidden border border-white/10 group">
                    <Image
                      src={img}
                      alt="Valve Stand Installation"
                      fill
                      className="object-cover transition-all duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Tactical Minimal */}
        <section className="pt-16 pb-16 bg-white relative overflow-hidden border-t border-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4 transform -rotate-12">
              <Cpu className="text-primary size-5" />
            </div>
            <SectionHeader 
              title="READY FOR"
              highlightedTitle="INTEGRATION?"
              description="Precision-engineered monitoring solutions for the world's most demanding industrial environments. Connect with our technical team today."
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-4 bg-primary text-white px-8 py-4 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] hover:bg-secondary hover:text-secondary-foreground shadow-xl transition-all hover:scale-105"
              >
                SUBMIT ENQUIRY
                <ArrowRight size={16} strokeWidth={3} />
              </Link>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-1/2 -translate-y-1/2 left-10 text-[80px] font-black text-primary/[0.02] select-none pointer-events-none font-poppins">04</div>
          <div className="absolute top-1/2 -translate-y-1/2 right-10 text-[80px] font-black text-primary/[0.02] select-none pointer-events-none italic font-poppins">REQ</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function WelcomeSlider() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const images = [
    { src: '/temp_7.jpg', alt: 'Thermal Imager' },
    { src: '/transmit_1.jpg', alt: 'Pressure Transmitter' },
    { src: '/multi_1.jpg', alt: 'Fluke Multimeter' },
    { src: '/mois_1.jpg', alt: 'Online Moisture Analyser' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center p-8"
        >
          <Image
            src={images[currentIdx].src}
            alt={images[currentIdx].alt}
            fill
            className="object-contain p-8"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Mini Indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIdx ? 'w-8 bg-secondary' : 'w-2 bg-primary/10'}`} 
          />
        ))}
      </div>
    </div>
  )
}
