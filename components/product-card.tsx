import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
    <Link href={`/products/${id}`}>
      <div className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="aspect-square bg-gradient-to-br from-muted to-muted/70 overflow-hidden relative">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-medium">
            {image ? image : `${name} Product Image`}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-7">
          <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-3 opacity-80">{category}</div>
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
