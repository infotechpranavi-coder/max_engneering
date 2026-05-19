'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Package } from 'lucide-react'

interface ProductImageGalleryProps {
  name: string
  primaryImage: string
  images?: string[]
}

export function ProductImageGallery({ name, primaryImage, images = [] }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(primaryImage)

  // Ensure all images list includes the primary image as the first item if not present
  const allImages = images.length > 0 ? images : [primaryImage]

  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full">
      {/* Cinematic Main Display */}
      <div className="relative aspect-[4/3] bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden group border border-border/40 w-full">
        <div className="absolute inset-8 flex items-center justify-center">
          <Image
            src={selectedImage}
            alt={name}
            fill
            sizes="(max-w-768px) 100vw, 600px"
            className="object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-102"
            priority
          />
        </div>
        <div className="absolute top-8 left-8 pointer-events-none">
          <div className="w-12 h-12 bg-primary/5 rounded-[1.2rem] flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-700">
            <Package className="text-primary size-6" />
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {allImages.map((img, idx) => {
            const isSelected = selectedImage === img
            return (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`aspect-square bg-[#F8F9FA] rounded-2xl p-4 border flex items-center justify-center cursor-pointer transition-all overflow-hidden group/thumb outline-none ${
                  isSelected
                    ? 'border-secondary ring-2 ring-secondary/20 scale-[1.02]'
                    : 'border-border/40 hover:border-secondary/60'
                }`}
              >
                <Image
                  src={img}
                  alt={`${name} view ${idx + 1}`}
                  width={100}
                  height={100}
                  className="object-contain mix-blend-multiply transition-transform group-hover/thumb:scale-110"
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
