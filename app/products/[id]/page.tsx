import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { SpecificationsTable } from '@/components/specifications-table'
import { getProductById, getProductsByCategory } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Globe, Package } from 'lucide-react'
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
    title: `${product.name} - MAX ENGINEERING`,
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
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main className="flex-1">
        {/* Breadcrumb - Subtle */}
        <div className="bg-white border-b border-border/40 pb-4 pt-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
              <Link href="/" className="hover:text-primary transition-colors">ROOT</Link>
              <span className="text-secondary/30">/</span>
              <Link href="/products" className="hover:text-primary transition-colors">REPOSITORY</Link>
              <span className="text-secondary/30">/</span>
              <span className="text-primary">{product.id.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Cinematic Product Display */}
              <div className="lg:col-span-7">
                <div className="relative aspect-square bg-[#F8F9FA] rounded-[3rem] p-16 flex items-center justify-center overflow-hidden group border border-border/40">
                  <Image
                    src="/premium_gauge_product_1775038995087.png"
                    alt={product.name}
                    width={800}
                    height={800}
                    className="object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-12 left-12">
                     <div className="w-16 h-16 bg-primary/5 rounded-[1.5rem] flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-700">
                        <Package className="text-primary size-8" />
                     </div>
                  </div>
                  <div className="absolute bottom-12 right-12 text-right">
                     <span className="text-[10px] font-black text-primary/20 uppercase tracking-[0.5em] block mb-2">PRECISION LEVEL</span>
                     <span className="text-2xl font-black text-primary tracking-tighter italic">NIST-0.05</span>
                  </div>
                </div>
              </div>

              {/* Product Info - Editorial Style */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="mb-10">
                   <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-8">
                      <Zap className="size-4 text-secondary-foreground" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-secondary-foreground">{product.category}</span>
                   </div>
                   <h1 className="text-5xl lg:text-7xl font-black text-primary mb-8 tracking-tighter leading-[0.9] uppercase italic sticky top-0">
                     {product.name}
                   </h1>
                   <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-12">
                     {product.longDescription}
                   </p>
                   
                   <div className="flex items-end gap-6 mb-16 border-t border-border/40 pt-10">
                      <div>
                        <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em] block mb-2">UNIT COST</span>
                        <span className="text-5xl font-black text-primary tracking-tighter">{product.price}</span>
                      </div>
                      <div className="pb-2">
                        <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">READY-TO-SHIP</span>
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-5">
                     <button className="flex-1 bg-primary text-white px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95">
                       PROCEED TO CART
                     </button>
                     <button className="flex-1 bg-white border-2 border-primary text-primary px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
                       REQUEST SPEC
                     </button>
                   </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-6 border-t border-border/40 pt-12 mt-4 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                   <div className="flex items-center gap-3">
                      <ShieldCheck className="size-5" />
                      <span className="text-[10px] font-black uppercase tracking-widest">MIL-SPEC CERTIFIED</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Globe className="size-5" />
                      <span className="text-[10px] font-black uppercase tracking-widest">GLOBAL LOGISTICS</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-32 bg-[#F8F9FA] relative rounded-[4rem] mx-6 mb-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-secondary/5 blur-[120px]" />
          <div className="max-w-7xl mx-auto px-10 relative z-10">
            <div className="grid lg:grid-cols-12 gap-20">
               {/* Spec Table */}
               <div className="lg:col-span-12">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8 text-center md:text-left">
                    <div>
                      <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Tech Specs</span>
                      <h2 className="text-4xl sm:text-6xl font-black text-primary tracking-tighter">DATA <span className="italic opacity-40">MATRIX</span></h2>
                    </div>
                  </div>
                  <div className="bg-white rounded-[3rem] p-4 shadow-xl border border-border/20 overflow-hidden">
                    <SpecificationsTable specifications={product.specifications} />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="py-32 bg-white">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { title: 'PRECISION CORE', desc: 'Surgical accuracy within 0.05% margin error.' },
                   { title: 'INDESTRUCTIBLE', desc: 'Grade 5 Titanium and 316L Stainless Steel.' },
                   { title: 'IOT READY', desc: 'Wireless 5G data relay for remote monitoring.' },
                   { title: 'HYPER-TEMP', desc: 'Engineered for thermal extremes up to 1200°C.' },
                   { title: 'QUICK-MOUNT', desc: 'Universal threading system for rapid integration.' },
                   { title: 'LIFETIME CAL', desc: 'Auto-zero technology reduces maintenance cycles.' }
                 ].map((feat, idx) => (
                   <div key={idx} className="bg-[#FDFDFD] border border-border/40 p-10 rounded-[2.5rem] group hover:border-secondary transition-all duration-500">
                      <span className="text-[10px] font-black text-secondary block mb-4 tracking-[0.3em]">UNIT-F{idx+1}</span>
                      <h3 className="text-xl font-black text-primary mb-3 tracking-tighter">{feat.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed italic">{feat.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Related Inventory */}
        {relatedProducts.length > 0 && (
          <section className="py-32 bg-primary">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
                <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                  RELATED <br />
                  <span className="text-secondary italic">SYSTEMS</span>
                </h2>
                <Link
                  href={`/products?category=${encodeURIComponent(product.category)}`}
                  className="bg-white text-primary px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-secondary-foreground transition-all shadow-2xl"
                >
                  View Collection
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} {...relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
