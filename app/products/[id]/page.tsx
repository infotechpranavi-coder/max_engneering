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
        <div className="bg-gradient-to-r from-muted/40 to-muted/20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="opacity-50">/</span>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <span className="opacity-50">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 font-medium transition-all mb-12 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Product Image */}
              <div className="flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 rounded-xl aspect-square border border-border shadow-sm">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg font-semibold">{product.image}</p>
                  <p className="text-sm mt-2 opacity-60">[Product Image Placeholder]</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-block px-4 py-2 bg-secondary/15 text-secondary rounded-full text-xs font-bold uppercase mb-6 tracking-wider">
                    {product.category}
                  </div>
                  <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {product.longDescription}
                  </p>

                  <div className="mb-10">
                    <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Price</p>
                    <p className="text-4xl font-bold text-primary">{product.price}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                    <button className="flex-1 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300">
                      Request Quote
                    </button>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mt-10 p-5 bg-gradient-to-r from-green-50 to-green-50/50 border border-green-200 rounded-lg">
                  <p className="text-sm font-semibold text-green-900">✓ In Stock - Ready to Ship</p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Specifications</h2>
              <SpecificationsTable specifications={product.specifications} />
            </section>

            {/* Features */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Precision-engineered for accuracy',
                  'Durable construction for longevity',
                  'Wide temperature range operation',
                  'Industrial-grade materials',
                  'Easy installation and maintenance',
                  'Certified for safety standards'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all">
                      ✓
                    </div>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">{feature}</p>
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
