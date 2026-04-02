import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Brief Hero */}
        <section className="bg-primary pt-40 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Legal Repository</span>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic">
               Terms of <span className="text-secondary opacity-60">Service</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-primary">
            <div className="space-y-12">
              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">01. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the MAX ENGINEERING repository, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our technical assets or services.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">02. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                   All technical documentation, product specifications, and industrial designs within this repository are the exclusive property of MAX ENGINEERING or its strategic partners. Unauthorized reproduction or distribution is strictly prohibited.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">03. Quotes & Enquiries</h2>
                <p className="text-muted-foreground leading-relaxed">
                   All technical quotes provided by our engineering desk are valid for 30 days unless otherwise specified. Submitting an enquiry does not constitute a binding purchase agreement until a formal purchase order is accepted by our team.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">04. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                   MAX ENGINEERING shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our specialized process control instruments, regardless of the cause of action.
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
