import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ServicesGrid } from '@/components/services-grid'
import { ScrollReveal } from '@/components/scroll-reveal'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Services - MAX ENGINEERING',
  description:
    'Comprehensive electrical and instrumentation solutions for industrial plants across India.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary pt-28 pb-10 sm:pb-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/industrial_hero_bg_1775038948618.png"
              alt="Industrial Services"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="right">
              <div className="max-w-3xl">
                <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-2 block">
                  Precise Solutions
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none tracking-tighter uppercase font-poppins mb-3">
                  Our <span className="text-secondary">Services</span>
                </h1>
                <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed max-w-2xl">
                  Comprehensive electrical and instrumentation solutions for industrial plants across India.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 sm:py-14 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <p className="text-center text-muted-foreground font-medium mb-8 max-w-2xl mx-auto">
                Click on any service to learn more about our capabilities, process, and key clients.
              </p>
            </ScrollReveal>

            <ServicesGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
