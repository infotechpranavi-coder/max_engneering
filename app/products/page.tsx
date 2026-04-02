import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-grid'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Inventory - MAX ENGINEERING',
  description: 'Precision measurement instruments engineered for industrial excellence.',
}

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function ProductsPage(props: ProductsPageProps) {
  const searchParams = await props.searchParams
  const categoryParam = searchParams.category

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Cinematic Header */}
        <section className="relative pt-40 pb-32 overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0 opacity-30">
             <Image 
               src="/industrial_hero_bg_1775038948618.png"
               alt="Background"
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary to-primary" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Inventory Hub</span>
            <h1 className="text-6xl sm:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              OUR <span className="italic opacity-40">COLLECTIONS.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-xl mx-auto font-medium leading-relaxed">
              Browse our comprehensive range of high-accuracy pressure and temperature monitoring systems.
            </p>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <ProductGrid initialCategory={categoryParam} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
