import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-grid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - FastGauge Industrial Gauges',
  description: 'Browse our complete range of industrial pressure and temperature gauges',
}

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function ProductsPage(props: ProductsPageProps) {
  const searchParams = await props.searchParams
  const categoryParam = searchParams.category

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight">Our Products</h1>
            <p className="text-lg opacity-90 max-w-3xl leading-relaxed">
              Discover our comprehensive range of precision measurement instruments engineered for industrial excellence and optimal performance.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductGrid initialCategory={categoryParam} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
