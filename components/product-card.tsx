import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plus } from 'lucide-react'

export interface ProductCardProps {
  id: string
  name: string
  category: string
  description: string
  price: string
  image: string
}

export function ProductCard({ id, name, category, description, price, image }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="block group">
      <div className="relative bg-white rounded-[2rem] border border-border/60 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-3">
        {/* Product Image Area */}
        {image && image !== '/placeholder.jpg' && image !== '/placeholder.svg' && (
          <div className="aspect-[4/5] bg-[#F8F9FB] overflow-hidden relative flex items-center justify-center p-8">
            <Image
              src={image}
              alt={name}
              width={400}
              height={400}
              className="object-contain group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Discount/Badge tag */}
            <div className="absolute top-6 left-6">
               <span className="bg-primary/5 backdrop-blur-md border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                 Standard Edition
               </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Quick Add / Interaction */}
            <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
               <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl">
                 <Plus size={24} strokeWidth={3} />
               </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className={`p-8 ${(!image || image === '/placeholder.jpg' || image === '/placeholder.svg') ? 'pt-8' : 'pt-0 -mt-4'} relative z-10`}>
          <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-border/40">
            <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] mb-2">{category}</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground/80 mb-5 line-clamp-2 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center justify-between border-t border-border/40 pt-4">
              <span className="text-2xl font-black text-foreground tracking-tighter">{price}</span>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore <ArrowRight size={14} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
