import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
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
              Privacy <span className="text-secondary opacity-60">Policy</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-primary">
            <div className="space-y-12">
              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">01. Data Collection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information that you provide directly to us, such as when you submit an enquiry, request a technical quote, or contact our engineering team. This may include your name, email address, company details, and technical specifications related to your industrial requirements.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">02. Technical Information Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information is used exclusively to provide specialized engineering services, process technical enquiries, and improve the precision of our measurement instrument recommendations. We do not sell or distribute your data to third-party marketing entities.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">03. Security Protocols</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement robust technical and organizational security measures to protect your industrial data against unauthorized access, alteration, or disclosure. Our repository access is strictly monitored by our systems engineering team.
                </p>
              </div>

              <div className="pb-12 border-b border-primary/5">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tighter italic mb-6">04. Contact Desk</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions regarding our privacy protocols or to request data modification, please connect with our technical desk at <span className="text-primary font-bold">info@maxengineering.com</span>.
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
