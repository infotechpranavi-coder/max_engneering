import { CheckCircle2, Eye, Rocket } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { companyStrengths, missionVision } from '@/lib/about-content'

export function AboutMissionSection() {
  return (
    <>
      <section className="relative py-16 sm:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-secondary">
              Purpose & direction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-poppins tracking-tight mt-3">
              What drives Max Engineering
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-0 max-w-5xl mx-auto">
            <ScrollReveal direction="right">
              <article className="h-full md:pr-8 lg:pr-12 md:border-r border-white/10 p-6 sm:p-8 rounded-3xl md:rounded-none bg-white/[0.03] md:bg-transparent border border-white/10 md:border-0">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center">
                    <Rocket className="text-secondary" size={20} strokeWidth={2} />
                  </div>
                  <span className="text-4xl sm:text-5xl font-black text-secondary font-poppins leading-none tabular-nums">
                    01
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-poppins mb-4">
                  Our mission
                </h3>
                <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed">
                  {missionVision.mission}
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <article className="h-full md:pl-8 lg:pl-12 p-6 sm:p-8 rounded-3xl md:rounded-none bg-white/[0.03] md:bg-transparent border border-white/10 md:border-0">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-secondary/15 border border-secondary/25 flex items-center justify-center">
                    <Eye className="text-secondary" size={20} strokeWidth={2} />
                  </div>
                  <span className="text-4xl sm:text-5xl font-black text-secondary font-poppins leading-none tabular-nums">
                    02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-poppins mb-4">
                  Our vision
                </h3>
                <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed">
                  {missionVision.vision}
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <ScrollReveal direction="right" className="lg:col-span-4">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-secondary">
                Core capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-poppins tracking-tight mt-3 mb-4 leading-tight">
                Company strength
              </h2>
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                Our core technical capabilities and expertise areas — built through decades of
                on-site delivery across India&apos;s most demanding industrial environments.
              </p>
              <div className="hidden lg:block mt-10 h-px w-16 bg-secondary" />
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.08} className="lg:col-span-8">
              <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {companyStrengths.map((strength, index) => (
                  <li
                    key={strength}
                    className="group flex items-start gap-3.5 rounded-2xl border border-primary/8 bg-[#FAFBFC] px-4 py-4 sm:px-5 sm:py-4 hover:border-secondary/35 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <CheckCircle2
                      className="text-secondary shrink-0 mt-0.5 opacity-80 group-hover:opacity-100"
                      size={18}
                      strokeWidth={2}
                    />
                    <div>
                      <span className="block text-[10px] font-bold text-primary/35 uppercase tracking-wider mb-0.5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm font-medium text-primary/85 leading-snug">{strength}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
