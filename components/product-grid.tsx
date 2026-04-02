'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllCategories, products } from '@/lib/products'
import { X, Search, Filter, Box, ArrowRight, Table, Cpu, Target, ShieldCheck } from 'lucide-react'

interface ProductGridProps {
  initialCategory?: string
}

export function ProductGrid({ initialCategory }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory || null
  )
  const [searchQuery, setSearchQuery] = useState('')

  const categories = getAllCategories()

  const categoriesWithProducts = useMemo(() => {
    return categories.map((cat, index) => ({
      name: cat,
      isImageRight: index % 2 === 0,
      items: products.filter(p => {
        const matchesCategory = p.category === cat
        const matchesSearch = !searchQuery || 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
      })
    })).filter(c => c.items.length > 0)
  }, [categories, searchQuery])

  return (
    <div className="grid lg:grid-cols-12 gap-16 relative">
      {/* Sticky Left Sidebar */}
      <aside className="lg:col-span-3 space-y-12">
        <div className="sticky top-32 space-y-12">
          {/* Search Area */}
          <div className="space-y-6">
             <div className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest text-primary/40">
                <Search size={14} className="text-secondary" />
                Live Asset Scan
             </div>
             <div className="relative group">
               <input
                 type="text"
                 placeholder="SCAN..."
                 value={searchQuery}
                 onChange={e => setSearchQuery(e.target.value)}
                 className="w-full bg-white px-6 py-4 rounded-xl border-2 border-transparent focus:border-secondary focus:ring-0 transition-all font-black text-primary placeholder:text-primary/10 tracking-widest uppercase text-[10px] shadow-sm"
               />
             </div>
          </div>

          {/* Sidebar Navigation - Conditional Index or Categories */}
          <div className="space-y-6">
             <div className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest text-primary/40">
                {initialCategory ? <Table size={14} className="text-secondary" /> : <Filter size={14} className="text-secondary" />}
                {initialCategory ? 'Domain Index' : 'Category Domains'}
             </div>
             <div className="flex flex-col gap-2">
               {initialCategory ? (
                 /* Index Mode: List products in current category */
                 products
                   .filter(p => p.category === initialCategory && 
                     (!searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase())))
                   .map(product => (
                     <a
                       key={product.id}
                       href={`#${product.id}`}
                       className="w-full text-left px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest bg-white text-primary border border-border/40 hover:bg-secondary hover:text-secondary-foreground hover:translate-x-2 transition-all shadow-sm"
                     >
                       {product.name}
                     </a>
                   ))
               ) : (
                 /* Global Mode: List all categories */
                 <>
                   <button
                     onClick={() => setSelectedCategory(null)}
                     className={`w-full text-left px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                       selectedCategory === null
                         ? 'bg-primary text-white shadow-xl translate-x-2'
                         : 'bg-white text-primary border border-border/40 hover:bg-white/80'
                     }`}
                   >
                     All Systems
                   </button>
                   {categories.map(category => (
                     <button
                       key={category}
                       onClick={() => setSelectedCategory(category)}
                       className={`w-full text-left px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                         selectedCategory === category
                           ? 'bg-primary text-white shadow-xl translate-x-2'
                           : 'bg-white text-primary border border-border/40 hover:bg-white/80'
                       }`}
                     >
                       {category}
                     </button>
                   ))}
                 </>
               )}
             </div>
          </div>

          {/* Sidebar decorative element */}
          <div className="flex items-center gap-4 py-8 border-t border-border/40 opacity-20 select-none">
             <Cpu size={14} />
             <div className="h-px flex-1 bg-primary" />
             <Target size={14} />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:col-span-9">
        {selectedCategory === null ? (
          /* Editorial Row View for "All Systems" */
          <div className="space-y-40">
            {categoriesWithProducts.map((category) => (
              <section key={category.name} className="relative group">
                {/* Row Layout: Text & Image */}
                <div className={`flex flex-col lg:items-center gap-16 lg:gap-24 mb-24 ${category.isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-3/5 space-y-10">
                    <div className="space-y-4">
                      <span className="text-secondary font-black tracking-[0.4em] uppercase text-xs">Technical Vertical</span>
                      <h2 className="text-5xl lg:text-7xl font-black text-primary tracking-tighter leading-[0.9]">{category.name}</h2>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
                      High-performance {category.name.toLowerCase()} engineered with the latest smart connection suite. Optimized for integration with existing control systems.
                    </p>
                    <Link 
                      href={`/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-secondary transition-colors"
                    >
                      EXPLORE COLLECION <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="lg:w-2/5">
                    <div className="aspect-[4/3] bg-[#F8F9FA] rounded-[3rem] relative overflow-hidden group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700">
                        <Image 
                          src={category.items[0]?.image || "/premium_gauge_product_1775038995087.png"} 
                          alt={category.name}
                          fill
                          className="object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* High-Fidelity Catalog Stack for Specific Categories */
          <div className="space-y-32">
             <div className="flex items-center gap-4 py-8 border-b-2 border-primary mb-20 scroll-mt-40">
                <Box className="text-secondary" size={18} />
                <h2 className="text-5xl font-black text-primary tracking-tighter uppercase">{selectedCategory}</h2>
             </div>
             
             <div className="space-y-40">
                {categoriesWithProducts
                  .find(c => c.name === selectedCategory)?.items
                  .map((item, idx) => (
                    <div key={item.id} id={item.id} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 group/item scroll-mt-40 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                       <div className="lg:w-1/2 space-y-8">
                          <h4 className="text-4xl font-black text-primary group-hover/item:text-secondary transition-colors italic tracking-tighter uppercase">
                            {item.name}
                          </h4>
                          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            {item.longDescription ? item.longDescription : `Precision engineered ${item.name} featuring high-stability sensors and rugged industrial housing. Designed to lower total cost of ownership while providing maximum system integration.`}
                          </p>
                          
                          <div className="space-y-6 pt-6 border-t border-border/20">
                             <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                {Object.entries(item.specifications).map(([key, value]) => (
                                  <div key={key} className="space-y-1">
                                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">{key}</p>
                                     <p className="text-sm font-bold text-primary italic uppercase">{value}</p>
                                  </div>
                                ))}
                             </div>
                             
                             <div className="pt-8">
                                <Link 
                                  href={`/products/${item.id}`} 
                                  className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-secondary hover:text-secondary-foreground shadow-xl transition-all hover:scale-105"
                                >
                                   Technical Data Sheet
                                   <ArrowRight size={14} />
                                </Link>
                             </div>
                          </div>
                       </div>
                       
                       <div className="lg:w-1/2">
                          <div className="aspect-[4/5] bg-[#F8F9FA] rounded-[3rem] relative flex items-center justify-center p-12 overflow-hidden group-hover/item:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700">
                             <Image 
                               src={item.image} 
                               alt={item.name}
                               fill
                               className="object-contain p-12 group-hover/item:scale-105 transition-transform duration-700"
                             />
                             <div className="absolute top-8 left-8">
                                <span className="bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-primary/10 shadow-sm">
                                   Certified Component
                                </span>
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
             </div>
          </div>
        )}

        {categoriesWithProducts.length === 0 && (
          <div className="text-center py-40 bg-[#F8F9FA] rounded-[3rem]">
            <Box size={40} className="text-primary/10 mx-auto mb-6" />
            <p className="text-2xl font-black text-primary mb-2 tracking-tighter uppercase italic">No units found</p>
            <p className="text-muted-foreground font-medium mb-10">Adjust your frequency or scan parameters.</p>
            <button
              onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}
              className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              Master Reset
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
