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
      <div className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="aspect-square bg-muted overflow-hidden relative">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            {image ? image : `${name} Product Image`}
          </div>
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold text-accent uppercase mb-2">{category}</div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">{price}</span>
            <ArrowRight
              size={20}
              className="text-primary opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 transform"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
