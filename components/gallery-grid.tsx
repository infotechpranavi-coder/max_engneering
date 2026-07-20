'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { galleryItems, type GalleryItem } from '@/lib/gallery'
import { ScrollReveal } from '@/components/scroll-reveal'

const ZOOM_LEVELS = [1, 1.5, 2, 2.5] as const

function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[]
  activeIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const item = items[activeIndex]
  const [zoomIndex, setZoomIndex] = useState(0)
  const zoom = ZOOM_LEVELS[zoomIndex]
  const hasPrev = activeIndex > 0
  const hasNext = activeIndex < items.length - 1

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(activeIndex - 1)
  }, [activeIndex, hasPrev, onNavigate])

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(activeIndex + 1)
  }, [activeIndex, hasNext, onNavigate])

  useEffect(() => {
    setZoomIndex(0)
  }, [activeIndex])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
      if (event.key === '+' || event.key === '=') {
        setZoomIndex((i) => Math.min(i + 1, ZOOM_LEVELS.length - 1))
      }
      if (event.key === '-') {
        setZoomIndex((i) => Math.max(i - 1, 0))
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, goPrev, goNext])

  if (!item) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 shrink-0">
        <p className="text-white/50 text-sm tabular-nums">
          {activeIndex + 1} / {items.length}
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setZoomIndex((i) => Math.max(i - 1, 0))}
            disabled={zoomIndex === 0}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30"
            aria-label="Zoom out"
          >
            <ZoomOut size={16} />
          </button>
          <span className="text-white/60 text-xs font-medium w-10 text-center tabular-nums">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoomIndex((i) => Math.min(i + 1, ZOOM_LEVELS.length - 1))}
            disabled={zoomIndex === ZOOM_LEVELS.length - 1}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30"
            aria-label="Zoom in"
          >
            <ZoomIn size={16} />
          </button>
          <button
            type="button"
            onClick={() => setZoomIndex(0)}
            disabled={zoomIndex === 0}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30"
            aria-label="Reset zoom"
          >
            <RotateCcw size={15} />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors ml-1"
            aria-label="Close"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center min-h-0 px-14 sm:px-20 py-2">
        <button
          type="button"
          onClick={goPrev}
          disabled={!hasPrev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-secondary hover:text-primary text-white flex items-center justify-center transition-all disabled:opacity-20 disabled:pointer-events-none z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        <div className="relative flex-1 w-full min-h-0 overflow-auto flex items-center justify-center">
          <div
            className="relative w-[min(92vw,960px)] h-[min(70vh,720px)] transition-transform duration-300 ease-out origin-center"
            style={{ transform: `scale(${zoom})` }}
          >
            <Image
              src={item.image}
              alt=""
              fill
              className="object-contain"
              sizes="960px"
              priority
            />
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={!hasNext}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-secondary hover:text-primary text-white flex items-center justify-center transition-all disabled:opacity-20 disabled:pointer-events-none z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>,
    document.body,
  )
}

function GalleryThumbnail({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F8F9FA] border border-primary/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    >
      <Image
        src={item.image}
        alt=""
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </button>
  )
}

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <p className="text-center text-muted-foreground font-medium mb-10 max-w-2xl mx-auto">
        Click any image to open the viewer with zoom and navigation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
        {galleryItems.map((item, index) => (
          <ScrollReveal key={item.id} delay={(index % 12) * 0.03}>
            <GalleryThumbnail item={item} onClick={() => setActiveIndex(index)} />
          </ScrollReveal>
        ))}
      </div>

      {mounted && activeIndex !== null && (
        <GalleryLightbox
          items={galleryItems}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  )
}
