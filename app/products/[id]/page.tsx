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
        <div className="bg-white border-b border-border/40 pb-4 pt-32 px-6">
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
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 ${(!product.image || product.image === '/placeholder.jpg' || product.image === '/placeholder.svg') ? 'lg:grid-cols-1 max-w-4xl mx-auto' : 'lg:grid-cols-2'} gap-12 items-start`}>
              
              {/* Cinematic Product Display */}
              {product.image && product.image !== '/placeholder.jpg' && product.image !== '/placeholder.svg' && (
                <div className="relative aspect-[4/3] bg-[#F8F9FA] rounded-[2.5rem] p-12 flex items-center justify-center overflow-hidden group border border-border/40 max-w-2xl mx-auto w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-8 left-8">
                     <div className="w-12 h-12 bg-primary/5 rounded-[1.2rem] flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-700">
                        <Package className="text-primary size-6" />
                     </div>
                  </div>
                  <div className="absolute bottom-8 right-8 text-right">
                     <span className="text-[9px] font-black text-primary/20 uppercase tracking-[0.5em] block mb-1">PRECISION LEVEL</span>
                     <span className="text-xl font-black text-primary tracking-tighter italic">NIST-0.05</span>
                  </div>
                </div>
              )}

              {/* Product Info - Editorial Style */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                   <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 py-1.5 rounded-full mb-6">
                      <Zap className="size-3.5 text-secondary-foreground" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-secondary-foreground">{product.category}</span>
                   </div>
                   <h1 className="text-4xl lg:text-5xl font-black text-primary mb-6 tracking-tighter leading-[1] uppercase italic">
                     {product.name}
                   </h1>
                   <p className="text-base text-muted-foreground font-medium leading-relaxed mb-8">
                     {product.longDescription}
                   </p>
                   
                   <div className="flex items-end gap-6 mb-10 border-t border-border/40 pt-8">
                      <div>
                        <span className="text-[9px] font-black text-primary/40 uppercase tracking-[0.3em] block mb-1">UNIT COST</span>
                        <span className="text-4xl font-black text-primary tracking-tighter">{product.price}</span>
                      </div>
                      <div className="pb-1.5">
                        <span className="bg-green-100 text-green-700 text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest">READY-TO-SHIP</span>
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-4">
                     <button className="flex-1 bg-primary text-white px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95">
                       PROCEED TO CART
                     </button>
                     <button className="flex-1 bg-white border-2 border-primary text-primary px-8 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
                       REQUEST SPEC
                     </button>
                   </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 border-t border-border/40 pt-8 mt-2 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700">
                   <div className="flex items-center gap-2">
                      <ShieldCheck className="size-4" />
                      <span className="text-[9px] font-black uppercase tracking-widest">MIL-SPEC CERTIFIED</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Globe className="size-4" />
                      <span className="text-[9px] font-black uppercase tracking-widest">GLOBAL LOGISTICS</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-20 bg-[#F8F9FA] relative rounded-[4rem] mx-6 mb-16 overflow-hidden">
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
        <section className="py-20 bg-white">
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
