'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const productCategories = [
    'Transmitters', 'Gauges', 'Switches', 'Temperature Sensors', 'Digital Indicators & Controllers', 
    'Multimeters & Testers', 'Variable Wires & Cables', 'Online Moisture Analyser', 
    'SS Pipe & Fittings', 'Panel Buildings', 'Wireless System'
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const isHomePage = pathname === '/'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 
      ${isHomePage 
        ? (scrolled ? 'bg-primary border-none shadow-2xl' : 'bg-primary/5 backdrop-blur-[2px] border-b border-white/10 shadow-none') 
        : 'bg-primary border-b border-white/10 shadow-2xl'}
    `}>
      <nav className="w-full h-24 flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-4 group">
          {/* Left Logo - official Mark 2 (Typographic) */}
          <div className="w-24 h-14 relative group-hover:translate-x-1 transition-transform duration-500 shrink-0">
            <Image 
              src="/Transparent Logo.png" 
              alt="Max Engineering Mark 2"
              fill
              className="object-contain"
            />
          </div>

          {/* Vertical Divider Line */}
          <div className={`w-[1px] h-10 hidden sm:block transition-colors duration-500 bg-white/20`} />

          {/* Right Logo - Official Mark 1 (Iconographic) */}
          <div className="w-32 h-24 relative group-hover:scale-105 transition-transform duration-500 shrink-0">
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
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 text-white/70 group-hover:text-white`}>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
          </Link>

          {/* Products Dropdown - Minimalist Grid */}
          <div className="group relative py-2">
            <div className="flex items-center gap-2 cursor-pointer">
               <button 
                 type="button"
                 className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 text-white/70 group-hover:text-white`}
               >
                 Products
               </button>
               <svg className={`w-3 h-3 text-secondary transition-transform group-hover:rotate-180`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
            </div>
            
            <div className="absolute top-full -left-20 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-700 z-50">
               <div className="w-[540px] bg-primary/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 grid grid-cols-2 gap-x-12 gap-y-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                  {productCategories.map(item => (
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
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 text-white/70 group-hover:text-white`}>About Us</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
          </Link>
          <Link href="/contact" className="group relative py-2">
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 text-white/70 group-hover:text-white`}>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
          </Link>
          <a href="/profile.pdf" target="_blank" rel="noopener noreferrer" className="group relative py-2">
            <span className={`text-xs font-black uppercase tracking-[0.2em] transition-colors duration-500 text-white/70 group-hover:text-white`}>Download</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-4">
           {/* Mobile Menu Button - Toggle Black/White based on state */}
           <button
             onClick={() => setIsOpen(!isOpen)}
             className={`lg:hidden p-2 transition-all hover:scale-110 z-50 text-white`}
             aria-label="Toggle menu"
           >
             {isOpen ? <X size={26} strokeWidth={3} /> : <Menu size={26} strokeWidth={3} />}
           </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-primary/95 backdrop-blur-3xl z-40 lg:hidden transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-full pointer-events-none invisible'}`}>
        <div className="h-full flex flex-col items-center justify-center space-y-6 overflow-y-auto pt-24 pb-12">
          <Link href="/" className="text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase italic" onClick={() => setIsOpen(false)}>Home</Link>
          
          <div className="w-full max-w-[280px] text-center space-y-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center gap-3 w-full text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase italic"
            >
              Products
              <svg className={`w-5 h-5 text-secondary transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            <div className={`grid transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="flex flex-col gap-3 py-2">
                {productCategories.map(item => (
                  <Link 
                    key={item} 
                    href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                    className="text-[13px] font-black text-white/60 hover:text-secondary transition-colors tracking-widest uppercase italic"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase italic" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" className="text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase italic" onClick={() => setIsOpen(false)}>Contact</Link>
          <a href="/profile.pdf" target="_blank" rel="noopener noreferrer" className="text-3xl font-black text-white hover:text-secondary transition-colors tracking-tighter uppercase italic" onClick={() => setIsOpen(false)}>Download</a>
        </div>
      </div>
    </header>
  )
}
