import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { SpecificationsTable } from '@/components/specifications-table'
import { getProductById, getProductsByCategory } from '@/lib/products'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata(props: ProductDetailPageProps): Promise<Metadata> {
  const params = await props.params
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - FastGauge`,
    description: product.description,
  }
}

export default async function ProductDetailPage(props: ProductDetailPageProps) {
  const params = await props.params
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 font-medium transition-all mb-8"
            >
              <ArrowLeft size={20} />
              Back to Products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Product Image */}
              <div className="flex items-center justify-center bg-muted rounded-lg aspect-square border border-border">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg font-semibold">{product.image}</p>
                  <p className="text-sm mt-2">[Product Image Placeholder]</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold uppercase mb-4">
                    {product.category}
                  </div>
                  <h1 className="text-4xl font-bold text-foreground mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    {product.longDescription}
                  </p>

                  <div className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Price</p>
                    <p className="text-3xl font-bold text-primary">{product.price}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Add to Cart
                    </button>
                    <button className="flex-1 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                      Request Quote
                    </button>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm font-medium text-green-900">In Stock - Ready to Ship</p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
              <SpecificationsTable specifications={product.specifications} />
            </section>

            {/* Features */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Precision-engineered for accuracy',
                  'Durable construction for longevity',
                  'Wide temperature range operation',
                  'Industrial-grade materials',
                  'Easy installation and maintenance',
                  'Certified for safety standards'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Related Products
                  </h2>
                  <Link
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    View All
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedProducts.map(relatedProduct => (
                    <ProductCard key={relatedProduct.id} {...relatedProduct} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
