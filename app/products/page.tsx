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
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Discover our comprehensive range of precision measurement instruments designed for industrial excellence.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductGrid initialCategory={categoryParam} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
