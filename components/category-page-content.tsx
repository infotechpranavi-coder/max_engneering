import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-grid'
import Image from 'next/image'

interface CategoryPageContentProps {
  category: string
  children?: React.ReactNode
}

export function CategoryPageContent({ category, children }: CategoryPageContentProps) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Brief Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-primary border-b border-white/5">
          <div className="absolute inset-0 z-0 opacity-40">
             <Image 
               src="/industrial_hero_bg_1775038948618.png"
               alt="Background"
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary to-primary" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block underline underline-offset-8 decoration-2 decoration-secondary/30">Repository</span>
            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter leading-none uppercase italic">
              PRODUCTS
            </h1>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <ProductGrid initialCategory={category} />
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </div>
  )
}
