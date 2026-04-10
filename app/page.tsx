import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Box, Cpu, Globe, Infinity,
  Radio, Gauge, ToggleRight, Thermometer,
  Activity, Zap, Link2, Droplets,
  CircleDot, Layout, Wifi
} from 'lucide-react'

export default function Home() {
  const featuredProducts = products.slice(0, 5)
  const categories = [
    { name: 'Transmitters', icon: Radio, href: '/transmitters' },
    { name: 'Gauges', icon: Gauge, href: '/gauges' },
    { name: 'Switches', icon: ToggleRight, href: '/switches' },
    { name: 'Temperature Sensors', icon: Thermometer, href: '/temperature-sensors' },
    { name: 'Digital Indicators & Controllers', icon: Activity, href: '/digital-indicators-controllers' },
    { name: 'Multimeters & Testers', icon: Zap, href: '/multimeters-testers' },
    { name: 'Variable Wires & Cables', icon: Link2, href: '/variable-wires-cables' },
    { name: 'Online Moisture Analyser', icon: Droplets, href: '/online-moisture-analyser' },
    { name: 'SS Pipe & Fittings', icon: CircleDot, href: '/ss-pipe-fittings' },
    { name: 'Panel Buildings', icon: Layout, href: '/panel-buildings' },
    { name: 'Wireless System', icon: Wifi, href: '/wireless-system' }
  ]

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        <Hero />

        {/* Welcome Section - Professional Introduction */}
        <section className="py-32 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-12 mb-12">
                <h2 className="text-4xl sm:text-6xl font-black text-primary tracking-tighter uppercase italic leading-none text-center">
                  Welcome to <span className="text-secondary">MAX ENGINEERING</span>
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <p className="text-xl text-muted-foreground leading-[1.6] font-medium">
                  We are pleased to introduce ourselves as <span className="text-primary font-bold">M/S. Max Engineering</span>, a premier provider for the supply, erection, and commissioning of specialized Process Control Instruments. As a general order supplier and authorized partner of leading global manufacturers, we bridge the gap between world-class technology and industrial application.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed italic border-l-4 border-secondary pl-8">
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
                <div className="relative group aspect-square bg-[#F8F9FA] rounded-[3rem] p-12 overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2">
                  <Image
                    src="/clean-team welcome.jpg"
                    alt="Max Engineering Technical Team"
                    fill
                    className="object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent pointer-events-none" />
                </div>
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
                  <span className="text-secondary font-black tracking-[0.4em] uppercase text-xs mb-4 block">Specialized Engineering</span>
                  <h2 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[0.9]">
                    VARIABLE <br />
                    VALVE STANDS.
                  </h2>
                </div>
                <p className="text-xl text-white/60 leading-relaxed font-medium">
                  We specialize in custom engineering and design of <span className="text-white">Variable Valve Stands</span> for critical industrial lines including Nitrogen, Oxygen, Argon, HSD, and Spray Cooling.
                </p>
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

        {/* Featured Categories - Glass Cards */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
              <div>
                <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Product Ecosystem</span>
                <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tighter">
                  Explore <span className="italic font-serif opacity-60 uppercase">Repository</span>
                </h2>
              </div>
              <p className="text-white/40 max-w-sm text-sm font-bold uppercase tracking-widest leading-relaxed">
                Precision instruments across eleven high-integrity industrial verticals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {categories.map((cat, idx) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group relative h-[320px] bg-primary/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 overflow-hidden hover:bg-primary/60 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center text-center gap-8"
                >
                  {/* Decorative Icon Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/5 rounded-full blur-[60px] group-hover:bg-secondary/15 transition-all duration-700" />

                  <div className="relative z-10 space-y-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-secondary bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/20 shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-700`}>
                      <cat.icon size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[11px] font-black text-white leading-tight uppercase tracking-[0.2em] italic max-w-[120px] mx-auto group-hover:text-secondary transition-colors duration-500">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-secondary/20 rounded-full group-hover:w-16 group-hover:bg-secondary transition-all duration-700" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partners - Infinite Marquee */}
        <section className="py-24 bg-white overflow-hidden border-y border-primary/5">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <span className="text-primary/30 font-black tracking-[0.5em] uppercase text-[10px] mb-4 block underline decoration-secondary decoration-2 underline-offset-8">Global Affiliations</span>
            <h2 className="text-4xl sm:text-6xl font-black text-primary tracking-tighter uppercase italic leading-none">
              Strategic <span className="text-secondary">Partners</span>
            </h2>
          </div>

          <div className="relative group">
            {/* Overlay Gradients for smooth fade-in/out */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex w-fit whitespace-nowrap animate-marquee-reverse group-hover:[animation-play-state:paused]">
              {/* Two sets of same items for infinite seamless scroll */}
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-10 pr-10">
                  {['ABB', 'Honeywell', 'HNL', 'Precision MASS', 'Wika', 'Fluke', 'Baumer', 'Schneider', 'Festo', 'Aira', 'Masibus', 'Hager', 'Polycab', 'Yokogawa India', 'Jupiter Electronics'].map((partner) => (
                    <div
                      key={`${setIdx}-${partner}`}
                      className="w-64 h-32 flex items-center justify-center bg-[#F8F9FA] rounded-[1.5rem] border border-primary/5 shadow-sm grayscale hover:grayscale-0 hover:bg-white hover:shadow-xl transition-all duration-500"
                    >
                      <span className="font-black text-xl italic tracking-tighter text-primary/60 hover:text-primary transition-colors">{partner}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flagship Models - Tactical Technical List */}
        <section className="py-32 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 gap-8">
              <div>
                <span className="text-primary/40 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block underline decoration-secondary decoration-2 underline-offset-8">Precision Series</span>
                <h2 className="text-4xl sm:text-6xl font-black text-primary tracking-tighter uppercase italic leading-none">
                  Featured <span className="text-secondary">Products</span>
                </h2>
              </div>
            </div>

            <div className="divide-y-2 divide-primary/10 border-y-2 border-primary/10">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group flex flex-col md:flex-row md:items-center py-10 gap-10 hover:bg-[#F8F9FA] transition-all px-6 -mx-6"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-secondary font-black text-[10px] uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded">FS-PRO</span>
                      <h4 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors italic tracking-tighter uppercase">
                        {product.name}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
                      {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">{key}:</span>
                          <span className="text-xs font-bold text-primary group-hover:italic transition-all">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-12">
                    <div className="hidden lg:block w-px h-12 bg-primary/10" />
                    <div className="w-24 h-24 bg-white rounded-2xl relative flex items-center justify-center p-4 border border-primary/5 group-hover:shadow-lg transition-all group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2 transition-all duration-700"
                      />
                    </div>
                    <ArrowRight className="text-primary group-hover:translate-x-2 group-hover:text-secondary transition-all" size={24} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Tactical Minimal */}
        <section className="py-8 bg-white relative overflow-hidden border-t border-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4 transform -rotate-12">
              <Cpu className="text-primary size-5" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-primary mb-4 leading-[0.95] tracking-tighter uppercase italic">
              READY FOR <span className="text-secondary">INTEGRATION?</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground/80 mb-6 max-w-xl mx-auto font-medium leading-relaxed">
              Precision-engineered monitoring solutions for the world's most demanding industrial environments. Connect now.
            </p>
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
          <div className="absolute top-1/2 -translate-y-1/2 left-10 text-[80px] font-black text-primary/[0.02] select-none pointer-events-none">04</div>
          <div className="absolute top-1/2 -translate-y-1/2 right-10 text-[80px] font-black text-primary/[0.02] select-none pointer-events-none italic">REQ</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
