import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const featuredProducts = products.slice(0, 6)
  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />

        {/* Featured Categories */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Product Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map(category => (
                <Link
                  key={category}
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="group bg-white rounded-lg border border-border p-8 text-center hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                    {category.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {products.filter(p => p.category === category).length} products
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 sm:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Featured Products
              </h2>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View All
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose FastGauge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Premium Quality',
                  description:
                    'All products undergo rigorous testing and quality control to ensure reliability in demanding industrial environments.'
                },
                {
                  title: 'Expert Support',
                  description:
                    'Our experienced technical team is available to help with product selection, installation, and troubleshooting.'
                },
                {
                  title: 'Custom Solutions',
                  description:
                    'Need something specialized? We offer custom gauges and systems tailored to your specific requirements.'
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-muted/50 rounded-lg p-8 border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Upgrade Your Monitoring Systems?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your industrial measurement needs and find the perfect solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
