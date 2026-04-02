import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Compliance() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Brief Hero */}
        <section className="bg-primary pt-40 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Regulatory Repository</span>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic">
               Technical <span className="text-secondary opacity-60">Compliance</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-primary">
            <div className="space-y-12">
              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">01. Standard Certification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All process control instruments within the MAX ENGINEERING repository are certified to international industrial standards (ISO, CE, ANSI) as specified in their individual technical data sheets.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">02. Environmental Compliance</h2>
                <p className="text-muted-foreground leading-relaxed">
                   We are committed to providing technical solutions that comply with current environmental regulations, including RoHS and REACH directives, ensuring safe operation within your specialized industrial sectors.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">03. Calibration & Testing</h2>
                <p className="text-muted-foreground leading-relaxed">
                   Our equipment undergoes rigorous factory testing and calibration before deployment. Detailed certification reports are provided upon request to support your facility's operational compliance requirements.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">04. Safety Protocols</h2>
                <p className="text-muted-foreground leading-relaxed">
                   All technical assets are designed for high-integrity operation in critical process lines. For hazard monitoring or ATEX-certified installations, please consult our engineering team for specialized compliance verification.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
