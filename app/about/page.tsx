import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technical Profile - MAX ENGINEERING',
  description: 'M/S. Max Engineering - Supplier, Erection & Commissioning for Process Control Instruments.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Brief Technical Hero */}
        <section className="bg-primary pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="/industrial_hero_bg_1775038948618.png"
              alt="Industrial Banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl sm:text-7xl font-black text-white leading-none tracking-tighter uppercase italic mb-4">
              COMPANY <span className="text-secondary opacity-60">PROFILE</span>
            </h1>
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-12 bg-secondary/30" />
              <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">Repository</span>
              <div className="h-px w-12 bg-secondary/30" />
            </div>
          </div>
        </section>

        {/* Core Profile Section - Editorial Grid */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Technical Imagery */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-primary/5">
                <Image 
                  src="/industrial_hero_bg_1775038948618.png"
                  alt="Industrial Installation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Company Introduction */}
              <div className="space-y-8 py-6">
                <div className="space-y-4">
                  <h1 className="text-sm font-black text-secondary tracking-[0.3em] uppercase block">Asset Repository</h1>
                  <p className="text-lg text-primary/80 leading-relaxed font-medium">
                    This is to introduce ourselves <span className="text-primary font-black">M/S. Max Engineering</span> as a Supplier Erection & Commissioning for Process Control Instruments as well as general Order Supplier for all Items & also authorized Partner of M/s Precision MASS, HNL, Honeywell, ABB, YBL, Wika, Fluke, Baumer, Schnider, Festo, Aira, Masibus, Hager & Polycab. Our aim is to provide better service to the customers and we will also do commissioning and calibration of industrial process control equipment's. Our team has over 10 years experience in the field of industrial process control equipment's like field instruments.
                  </p>
                  <p className="text-lg text-primary/80 leading-relaxed font-medium">
                    We also supply Pipes, Tubes, Fittings, Flanges Materials Like S.S, M.S, C.S Copper, Brass, Gunmetal and Alloy Steel, Air filter regulators, Solenoid Valves, Reducers, Power Cylinders, Isolation valves, Nut & Ferrules, Locknuts, Nipples, Sockets, Control Valves, Instrumentation, Power & Control Cables, Online Moisture Analysers, Gas & Water Analysers & Systems, Thermal Imagers, Pyrometers Online & Portable, Digital Indicators, PU-Tube, PU-Fittings and all variable Instruments and related Instrumentation Job & it's hardware fittings and accessories Products.
                  </p>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 border-2 border-primary/10 text-primary px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all shadow-sm group"
                >
                  COMPANY PROFILE
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-secondary" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Overview - Technical Registry */}
        <section className="py-24 bg-[#F8F9FA] border-y border-primary/5">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tighter uppercase italic mb-16 leading-tight">
              We are <span className="text-secondary opacity-80 underline decoration-secondary decoration-4 underline-offset-8">ISO 9001 - 2015</span> Certified Company with MSME
            </h2>
            
            <div className="space-y-12 text-left">
              <div className="space-y-6">
                <p className="text-lg text-primary/70 leading-relaxed font-bold italic border-l-4 border-secondary pl-8">
                  MAX ENGINEERING is proud to be awarded ISO 9001 - 2015 certification, an internationally recognized standard that ensures that our products and services meet the needs of our clients through an effective quality management system.
                </p>
                <p className="text-lg text-primary/70 leading-relaxed font-medium">
                  We have developed and implemented our quality management system in order to improve the overall performance, maintain a high-level of quality and strong customer service and to provide a sound basis for sustainable development initiatives. Our decision to work towards ISO 9001 accreditation demonstrates the commitment to providing a high-quality and consistent products and services to our clients and our ongoing investment in technology and development.
                </p>
                <p className="text-lg text-primary/70 leading-relaxed font-medium">
                  To become ISO 9001 - 2015 compliant, MAX ENGINEERING underwent an evaluation process that included quality management system development, a management system documentation review, audit and initial assessment which was very successful as no non-conformances were identified.
                </p>
                <p className="text-lg text-primary/70 leading-relaxed font-medium">
                  In achieving compliance with the standard requirements, we chose a reliable partner United Accreditation Foundation (UAF) USA. a global leader in Testing, Inspection and Certification, delivering high quality services to help companies to meet the growing challenges of quality, safety, environmental protection and social responsibility. UAF reviewed our management system and provided certification to the standard as an independent third party specialist. It provides our clients with independent assurance that our commitment to quality permeates everything we do.
                </p>
                <p className="text-lg text-primary/70 leading-relaxed font-medium">
                  The ISO 9001 - 2015 certification is the assurance that we have robust, clearly defined procedures in place in all our business areas such as R&D, production, supply chain management, risk management, handling of documents and data and strong business continuity processes. It is worth mentioning that as all the processes inside the company, our production processes are managed using a state-of-the-art Tally system. Information, which is constantly collected there gives us valuable insights about the statistics of project management that we carry out every day. Also, it not just ensures 100% traceability of our supply chain, but also helps us by converting customer feedback into project tasks for our core team.
                </p>
                <p className="text-lg text-primary/70 leading-relaxed font-medium">
                  Therefore, we can proudly and safely state that MAX ENGINEERING is built with quality and transparency in mind. We integrate the attitude of quality in our daily work and continuously challenge ourselves to improve the quality management system to provide products that meet or exceed the needs and expectations of our customers, always complying with the specifications and regulations.
                </p>
                <p className="text-lg text-primary/70 leading-relaxed font-bold uppercase tracking-widest pt-8 border-t border-primary/10">
                  We are also happy to announce you that we have been also registered our self with Ministry of Micro, Small & Medium Enterprises (MSME)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Display Repository */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
              {/* ISO Certificate */}
              <div className="space-y-8 group">
                <div className="relative aspect-[1/1.4] bg-[#F8F9FA] rounded-3xl overflow-hidden shadow-2xl border border-primary/5 transition-transform duration-700 group-hover:-translate-y-4">
                  <Image 
                    src="/media__1775100258357.png"
                    alt="ISO 9001:2015 Certificate"
                    fill
                    className="object-contain p-8 md:p-12"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-black text-primary tracking-tighter uppercase italic">ISO 9001 : 2015</h3>
                  <p className="text-xs font-black text-secondary tracking-[0.3em] uppercase mt-2">Quality Management System</p>
                </div>
              </div>

              {/* MSME Certificate */}
              <div className="space-y-8 group">
                <div className="relative aspect-[1/1.4] bg-[#F8F9FA] rounded-3xl overflow-hidden shadow-2xl border border-primary/5 transition-transform duration-700 group-hover:-translate-y-4">
                  <Image 
                    src="/media__1775100565332.png"
                    alt="MSME Udyog Aadhaar Certificate"
                    fill
                    className="object-contain p-8 md:p-12"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-black text-primary tracking-tighter uppercase italic">MSME REGISTRATION</h3>
                  <p className="text-xs font-black text-secondary tracking-[0.3em] uppercase mt-2">Udyog Aadhaar Certificate</p>
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
