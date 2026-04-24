import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ShieldCheck, Award, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Company Profile - MAX ENGINEERING',
  description: 'M/S. Max Engineering - Supplier, Erection & Commissioning for Process Control Instruments.',
}

export default function AboutPage() {


  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Merged Hero & Core Profile Section */}
        <section className="bg-[#0A0A0A] pt-48 pb-32 relative overflow-hidden">
          {/* Technical Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
          
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative border border-white/10">
                    <Image 
                      src="/abt_1.jpg"
                      alt="Industrial Installation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                  </div>
                  {/* Floating Stat Badge */}
                  <div className="absolute -bottom-10 -right-10 bg-white/10 backdrop-blur-xl text-white p-10 rounded-[2rem] shadow-2xl border border-white/20 hidden md:block group">
                    <div className="text-6xl font-black text-secondary tracking-tighter font-poppins mb-2 group-hover:scale-110 transition-transform duration-500">10+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/60">Years of<br/>Excellence</div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-10">
                  <div>
                    <div className="flex flex-col gap-1 mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Established 2005</span>
                      </div>
                      <span className="text-secondary font-black tracking-[0.4em] uppercase text-[9px] mt-4 ml-1">Premium Industrial Solutions</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tighter uppercase font-poppins mb-8 leading-[1.1]">
                      MAX <span className="text-secondary">ENGINEERING</span>
                    </h1>
                  </div>

                  <div className="space-y-8 text-white/80">
                    <p className="text-lg leading-relaxed font-medium border-l-2 border-secondary/50 pl-6">
                      This is to introduce ourselves <span className="text-white font-bold">M/S. Max Engineering</span> as a Supplier Erection & Commissioning for Process Control Instruments as well as general Order Supplier for all Items & also authorized Partner of M/s Precision MASS, HNL, Honeywell, ABB, YBL, Wika, Fluke, Baumer, Schnider, Festo, Aira, Masibus, Hager & Polycab. Our aim is to provide better service to the customers and we will also do commissioning and calibration of industrial process control equipment's. Our team has over 10 years experience in the field of industrial process control equipment's like field instruments.
                    </p>
                    <p className="text-lg leading-relaxed font-medium pl-6">
                      We also supply Pipes, Tubes, Fittings, Flanges Materials Like S.S, M.S, C.S Copper, Brass, Gunmetal and Alloy Steel, Air filter regulators, Solenoid Valves, Reducers, Power Cylinders, Isolation valves, Nut & Ferrules, Locknuts, Nipples, Sockets, Control Valves, Instrumentation, Power & Control Cables, Online Moisture Analysers, Gas & Water Analysers & Systems, Thermal Imagers, Pyrometers Online & Portable, Digital Indicators, PU-Tube, PU-Fittings and all variable Instruments and related Instrumentation Job & it's hardware fittings and accessories Products.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <a href="/profile.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-secondary text-secondary-foreground px-8 py-5 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all shadow-xl hover:-translate-y-1 group">
                      Download Official Profile
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Global Partners Marquee */}
        <section className="py-12 bg-white overflow-hidden border-y border-primary/10">
           <ScrollReveal>
              <div className="text-center mb-8">
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">Authorized Partners & Integrators</span>
              </div>
           </ScrollReveal>
           <div className="relative group">
              {/* Overlay Gradients for smooth fade-in/out */}
              <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="flex w-fit whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
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
                          className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* Certification Section - Premium Layout */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-24 max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-6xl font-bold text-primary tracking-tighter uppercase font-poppins mb-6 leading-tight">
                  CERTIFIED <span className="text-secondary italic">QUALITY</span>
                </h2>
                <p className="text-xl text-muted-foreground font-medium">
                  Operating with absolute transparency and rigorous standards. We are an ISO 9001:2015 certified entity and an MSME registered enterprise.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Text Side */}
              <div className="lg:col-span-5 space-y-8">
                <ScrollReveal direction="right" delay={0.1}>
                  <div className="bg-[#F8F9FA] p-8 rounded-[2rem] border-l-4 border-secondary shadow-sm hover:shadow-xl transition-shadow">
                    <ShieldCheck className="text-secondary mb-4" size={32} strokeWidth={1.5} />
                    <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-3 font-poppins">ISO 9001:2015 Accreditation</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Awarded by the United Accreditation Foundation (UAF) USA, ensuring our quality management system consistently meets client needs with zero non-conformances.
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction="right" delay={0.2}>
                  <div className="bg-[#F8F9FA] p-8 rounded-[2rem] border-l-4 border-primary shadow-sm hover:shadow-xl transition-shadow">
                    <Award className="text-primary mb-4" size={32} strokeWidth={1.5} />
                    <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-3 font-poppins">MSME Registration</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Officially registered with the Ministry of Micro, Small & Medium Enterprises, reinforcing our commitment to national industrial growth and structural transparency.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Certificates Side */}
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-8">
                  <ScrollReveal direction="up" delay={0.3}>
                    <div className="group relative">
                      <div className="aspect-[1/1.4] bg-[#F8F9FA] rounded-[2rem] p-6 shadow-xl border border-primary/5 transition-transform duration-700 group-hover:-translate-y-2">
                        <Image src="/abt_2.jpg" alt="ISO 9001 Certificate" fill className="object-contain p-6" />
                      </div>
                      <div className="mt-6 text-center">
                        <h4 className="font-bold text-primary tracking-tight uppercase font-poppins">ISO 9001:2015</h4>
                        <p className="text-[10px] font-black text-secondary tracking-widest uppercase mt-1">Quality Management</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal direction="up" delay={0.4}>
                    <div className="group relative">
                      <div className="aspect-[1/1.4] bg-[#F8F9FA] rounded-[2rem] p-6 shadow-xl border border-primary/5 transition-transform duration-700 group-hover:-translate-y-2">
                        <Image src="/abt_3.jpg" alt="MSME Certificate" fill className="object-contain p-6" />
                      </div>
                      <div className="mt-6 text-center">
                        <h4 className="font-bold text-primary tracking-tight uppercase font-poppins">MSME Udyog Aadhaar</h4>
                        <p className="text-[10px] font-black text-secondary tracking-widest uppercase mt-1">Enterprise Registration</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
