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
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of industrial measurement solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map(category => (
                <Link
                  key={category}
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="group bg-white rounded-xl border border-border p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="text-5xl font-bold bg-gradient-to-br from-primary/30 to-secondary/30 bg-clip-text text-transparent mb-4 group-hover:from-primary/50 group-hover:to-secondary/50 transition-all">
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
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 tracking-tight">
                  Featured Products
                </h2>
                <p className="text-lg text-muted-foreground">
                  Discover our most popular industrial measurement instruments
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                View All Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
        <section className="py-20 sm:py-28 bg-gradient-to-b from-muted/40 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Why Choose FastGauge
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry-leading solutions backed by expertise, quality, and innovation
              </p>
            </div>
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
                <div key={idx} className="group bg-white rounded-xl p-8 border border-border hover:border-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-xl flex items-center justify-center font-bold mb-6 text-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Ready to Upgrade Your Monitoring Systems?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact our team today to discuss your industrial measurement needs and find the perfect solution tailored to your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
