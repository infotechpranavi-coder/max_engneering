'use client'

import { useState, useMemo } from 'react'
import { ProductCard } from './product-card'
import { getAllCategories, products } from '@/lib/products'
import { X } from 'lucide-react'

interface ProductGridProps {
  initialCategory?: string
}

export function ProductGrid({ initialCategory }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory || null
  )
  const [searchQuery, setSearchQuery] = useState('')

  const categories = getAllCategories()

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Filter Products</h3>

        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            All Products
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active filters */}
        {selectedCategory && (
          <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
            <span className="text-sm text-foreground">
              Showing: <strong>{selectedCategory}</strong>
            </span>
            <button
              onClick={() => setSelectedCategory(null)}
              className="ml-auto text-primary hover:text-primary/80"
              aria-label="Clear filter"
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredProducts.length} of {products.length} products
        </p>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-2">No products found</p>
            <button
              onClick={() => {
                setSelectedCategory(null)
                setSearchQuery('')
              }}
              className="text-primary hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
