import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'
import { ScrollReveal } from '@/components/scroll-reveal'
import { galleryItems } from '@/lib/gallery'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Gallery - MAX ENGINEERING',
  description:
    'Industrial instrumentation, electrical installations, and project gallery from Max Engineering.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary pt-28 pb-10 sm:pb-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/industrial_hero_bg_1775038948618.png"
              alt="Industrial Gallery"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="right">
              <div className="max-w-3xl">
                <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                  Visual Archive
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none tracking-tighter font-poppins mb-3">
                  Our <span className="text-secondary">Gallery</span>
                </h1>

                <p className="text-sm sm:text-base text-white/60 font-medium leading-relaxed max-w-2xl">
                  Visual showcase of our industrial instrumentation and field work —{' '}
                  {galleryItems.length} photos.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-10 sm:py-14 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-6">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
