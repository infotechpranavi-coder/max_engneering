'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <nav className={`max-w-5xl mx-auto px-6 h-20 flex items-center justify-between transition-all duration-500 rounded-full border border-white/10 ${scrolled ? 'bg-primary/90 backdrop-blur-2xl shadow-xl border-white/20' : 'bg-white shadow-lg'}`}>
        <Link href="/" className="flex items-center gap-2 group">
          {/* Left Logo - official Mark 2 (Typographic) */}
          <div className="w-24 h-14 relative group-hover:translate-x-1 transition-transform duration-500 shrink-0 ml-5 -mr-4">
            <Image 
              src="/Transparent Logo.png" 
              alt="Max Engineering Mark 2"
              fill
              className="object-contain"
            />
          </div>

          {/* Vertical Divider Line */}
          <div className="w-[2px] h-16 bg-white/20 hidden sm:block ml-4 mr-0" />

          {/* Right Logo - Official Mark 1 (Iconographic) */}
          <div className="w-32 h-24 relative group-hover:scale-105 transition-transform duration-500 shrink-0 translate-y-0">
            <Image 
              src="/max_eng_old.png" 
              alt="Max Engineering Mark 1"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="group relative py-2">
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-white/70 group-hover:text-white' : 'text-black/80 group-hover:text-black'}`}>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
          </Link>

          {/* Products Dropdown - Minimalist Grid */}
          <div className="group relative py-2">
            <div className="flex items-center gap-2 cursor-pointer">
               <button 
                 type="button"
                 className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-white/70 group-hover:text-white' : 'text-black/80 group-hover:text-black'}`}
               >
                 Products
               </button>
               <svg className={`w-3 h-3 transition-transform group-hover:rotate-180 ${scrolled ? 'text-secondary' : 'text-black/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
            </div>
            
            <div className="absolute top-full -left-20 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-700 z-50">
               <div className="w-[540px] bg-primary/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 grid grid-cols-2 gap-x-12 gap-y-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                  {[
                    'Transmitters', 'Gauges', 'Switches', 'Temperature Sensors', 'Digital Indicators & Controllers', 
                    'Multimeters & Testers', 'Variable Wires & Cables', 'Online Moisture Analyser', 
                    'SS Pipe & Fittings', 'Panel Buildings', 'Wireless System'
                  ].map(item => (
                    <Link 
                      key={item} 
                      href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                      className="group/item flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-secondary transition-all"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary/20 rounded-full group-hover/item:bg-secondary transition-colors" />
                      {item}
                    </Link>
                  ))}
               </div>
            </div>
          </div>

          <Link href="/about" className="group relative py-2">
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-white/70 group-hover:text-white' : 'text-black/80 group-hover:text-black'}`}>About Us</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
          </Link>
          <Link href="/contact" className="group relative py-2">
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-white/70 group-hover:text-white' : 'text-black/80 group-hover:text-black'}`}>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
          </Link>
          <a href="/profile.pdf" target="_blank" rel="noopener noreferrer" className="group relative py-2">
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-white/70 group-hover:text-white' : 'text-black/80 group-hover:text-black'}`}>Download</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-4">
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="md:hidden p-2 text-white transition-transform hover:scale-110"
             aria-label="Toggle menu"
           >
             {isOpen ? <X size={26} strokeWidth={3} /> : <Menu size={26} strokeWidth={3} />}
           </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-primary/95 backdrop-blur-3xl z-40 md:hidden transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className="h-full flex flex-col items-center justify-center space-y-8 overflow-y-auto pt-20 pb-10">
          <Link href="/" className="text-4xl font-black text-white hover:text-secondary transition-colors tracking-tighter" onClick={() => setIsOpen(false)}>Home</Link>
          
          <div className="text-center space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary opacity-50 underline underline-offset-8 decoration-2">Industrial Solutions</h4>
            <div className="grid grid-cols-1 gap-4">
              {[
                'Transmitters', 'Gauges', 'Switches', 'Temperature Sensors', 'Digital Indicators & Controllers', 
                'Multimeters & Testers', 'Variable Wires & Cables', 'Online Moisture Analyser', 
                'SS Pipe & Fittings', 'Panel Buildings', 'Wireless System'
              ].map(item => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                  className="text-xl font-black text-white/80 hover:text-secondary transition-colors tracking-tight uppercase italic"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="text-4xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase italic" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" className="text-4xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase italic" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </header>
  )
}
