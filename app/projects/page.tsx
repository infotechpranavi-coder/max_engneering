import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProjectsGrid } from '@/components/projects-grid'
import { ScrollReveal } from '@/components/scroll-reveal'
import { portfolioStats } from '@/lib/projects'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Work - MAX ENGINEERING',
  description:
    'A legacy of precision and technical excellence — reputed clients across India including Tata Steel, SMC Power Generation, KIC Metaliks and more.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary pt-28 pb-12 sm:pb-14 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/industrial_hero_bg_1775038948618.png"
              alt="Industrial Projects"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="right">
              <div className="max-w-3xl">
                <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                  Portfolio
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none tracking-tighter font-poppins mb-3">
                  Our <span className="text-secondary">Work</span>
                </h1>

                <p className="text-sm sm:text-base text-white/60 font-medium leading-relaxed max-w-2xl mb-6">
                  A legacy of precision and technical excellence — 19+ reputed clients across India
                  including Tata Steel, SMC Power Generation, KIC Metaliks and more.
                </p>

                <div className="grid grid-cols-3 gap-4 sm:gap-8">
                  {portfolioStats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl sm:text-3xl font-black text-secondary font-poppins tracking-tight mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-10 sm:py-14 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-6">
            <ProjectsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
