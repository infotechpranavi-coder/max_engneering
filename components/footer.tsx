import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-12">
              {/* Left Logo - Official Mark 1 (Iconographic) */}
              <div className="w-48 h-32 relative shrink-0 translate-y-4">
                <Image 
                  src="/max_eng_old.png" 
                  alt="Max Engineering"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-px h-20 bg-white/10" />
              {/* Right Logo - official Mark 2 (Typographic) */}
              <div className="w-64 h-24 relative shrink-0 -ml-18">
                <Image 
                  src="/Transparent Logo.png" 
                  alt="Max Engineering Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-sm mb-10 font-bold tracking-tight italic">
              This is to introduce ourselves <span className="text-white">M/S. Max Engineering</span> as a Supplier Erection & Commissioning for Process Control Instruments as well as general Order Supplier for all Items & also authorized Partner of M/s Precision MASS, HNL, Honeywell, ABB, YBL, Wika, Fluke, Baumer, Schnider, Festo, Aira, Masibus, Hager & Polycab.
            </p>
            <div className="flex gap-5">
               {[Twitter, Linkedin, Facebook, Instagram].map((Icon, idx) => (
                 <a key={idx} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-500 border border-white/10 hover:border-transparent">
                    <Icon size={20} strokeWidth={2.5} />
                 </a>
               ))}
            </div>
          </div>

          {/* Expanded Quick Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Solutions - Shifted Left */}
            <div className="md:col-span-6 lg:col-span-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-8 underline underline-offset-8 decoration-2 decoration-secondary/30">Solutions</h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { name: 'Transmitters', href: '/transmitters' },
                  { name: 'Gauges', href: '/gauges' },
                  { name: 'Switches', href: '/switches' },
                  { name: 'Temperature Sensors', href: '/temperature-sensors' },
                  { name: 'Digital Indicators & Controllers', href: '/digital-indicators-controllers' },
                  { name: 'Multimeters & Testers', href: '/multimeters-testers' },
                  { name: 'Variable Wires & Cables', href: '/variable-wires-cables' },
                  { name: 'Online Moisture Analyser', href: '/online-moisture-analyser' },
                  { name: 'SS Pipe & Fittings', href: '/ss-pipe-fittings' },
                  { name: 'Panel Buildings', href: '/panel-buildings' },
                  { name: 'Wireless System', href: '/wireless-system' }
                ].map(item => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-white/60 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.15em] flex items-start gap-2 group/link leading-relaxed">
                      <div className="w-1 h-1 bg-white/10 rounded-full group-hover/link:bg-secondary transition-colors mt-1.5 shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Link Set */}
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-8">Company</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Privacy Policy', href: '/privacy-policy' },
                  { name: 'Terms of Service', href: '/terms-of-service' }
                ].map(item => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-[11px] font-black uppercase tracking-[0.1em]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tactical Contact Desk */}
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-8">Contact</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500 shrink-0">
                    <MapPin size={16} strokeWidth={3} />
                  </div>
                  <span className="text-[10px] font-black text-white/80 group-hover:text-white transition-colors uppercase leading-relaxed tracking-[0.05em]">
                    New Purulia Road, Near Sindhi Hotel Mango, Jamshedpur - 831012. Jharkhand
                  </span>
                </div>
                <a href="tel:+919835139863" className="flex items-center gap-4 group whitespace-nowrap">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500 shrink-0">
                    <Phone size={16} strokeWidth={3} />
                  </div>
                  <span className="text-[11px] font-black text-white/80 group-hover:text-white transition-colors uppercase tracking-[0.05em]">+91 98351 39863</span>
                </a>
                <a href="mailto:info@maxengineering.com" className="flex items-center gap-4 group whitespace-nowrap">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500 shrink-0">
                    <Mail size={16} strokeWidth={3} />
                  </div>
                  <span className="text-[11px] font-black text-white/80 group-hover:text-white transition-colors uppercase tracking-[0.05em]">info@maxengineering.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-white/40">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
             <p>&copy; {currentYear} MAX ENGINEERING. ALL RIGHTS RESERVED.</p>
             <div className="hidden md:block w-px h-3 bg-white/10" />
             <a href="https://pranaviinfotech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
               POWERED BY <span className="text-secondary">PRANAVI INFOTECH</span>
             </a>
           </div>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
              <Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link>
           </div>
        </div>
      </div>
    </footer>
  )
}
