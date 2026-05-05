import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-grid'
import Image from 'next/image'

interface CategoryPageContentProps {
  category: string
  description?: string
  children?: React.ReactNode
}

export function CategoryPageContent({ category, description, children }: CategoryPageContentProps) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        <section className="pt-40 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <ProductGrid initialCategory={category} description={description} />
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </div>
  )
}
