'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, Building2, Check, ChevronUp } from 'lucide-react'
import { serviceCategories, type ServiceCategory } from '@/lib/services'
import { ScrollReveal } from '@/components/scroll-reveal'

function ServiceSummaryCard({
  service,
  onClick,
}: {
  service: ServiceCategory
  onClick: () => void
}) {
  const Icon = service.icon

  return (
    <button
      type="button"
      onClick={onClick}
      className="group/card relative w-full min-h-80 bg-white rounded-3xl p-7 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-2 border-transparent hover:border-secondary hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-start text-left translate-z-0"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover/card:bg-secondary transition-all duration-500">
        <Icon
          className="text-secondary group-hover/card:text-secondary-foreground size-7"
          strokeWidth={2.5}
        />
      </div>

      <h3
        className="font-bold text-primary mb-3 tracking-tight uppercase font-poppins whitespace-normal"
        style={{ fontSize: '20px', lineHeight: '1.2' }}
      >
        {service.title}
      </h3>

      <p
        className="text-muted-foreground font-poppins font-normal whitespace-normal line-clamp-3 mb-4"
        style={{ fontSize: '15px', lineHeight: '1.6' }}
      >
        {service.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {service.highlights.map((highlight) => (
          <span
            key={highlight}
            className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium"
          >
            <span className="w-3.5 h-3.5 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <Check className="text-primary" size={8} strokeWidth={3} />
            </span>
            {highlight}
          </span>
        ))}
      </div>

      <div
        className="mt-auto flex items-center gap-2 text-secondary font-bold font-poppins uppercase tracking-widest opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-500"
        style={{ fontSize: '10px' }}
      >
        VIEW DETAILS
        <ArrowRight size={14} />
      </div>
    </button>
  )
}

function ServiceDetailPopup({
  service,
  onClose,
}: {
  service: ServiceCategory
  onClose: () => void
}) {
  const Icon = service.icon

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 overflow-y-auto overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
    >
      <button
        type="button"
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close service details"
      />

      <div className="relative w-full sm:max-w-3xl max-h-[92dvh] sm:max-h-[88vh] bg-white rounded-t-2xl sm:rounded-2xl border border-primary/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 overflow-hidden flex flex-col">
        <div className="overflow-y-auto overscroll-contain p-4 sm:p-6">
          {/* Header */}
          <div className="relative pb-4 border-b border-primary/10">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-0 right-0 text-primary/40 hover:text-primary shrink-0 p-1.5 rounded-md hover:bg-primary/5 transition-colors"
              aria-label="Close service details"
            >
              <ChevronUp size={18} strokeWidth={2.5} />
            </button>

            <div className="flex items-start gap-3 pr-10">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                <Icon className="text-primary" size={20} strokeWidth={2} />
              </div>

              <div className="min-w-0 flex-1">
                <h2
                  id="service-detail-title"
                  className="text-base sm:text-xl font-bold text-primary tracking-tight font-poppins leading-snug"
                >
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1.5 sm:pl-[3.25rem]">
              {service.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground font-medium"
                >
                  <span className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Check className="text-primary" size={9} strokeWidth={3} />
                  </span>
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4 sm:space-y-5 pt-4 sm:pt-5">
            <p className="text-muted-foreground leading-relaxed font-medium text-sm">
              {service.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {service.items.map((item) => (
                <div key={item.title} className="bg-[#F4F7F9] rounded-xl p-3.5 sm:p-4">
                  <h3 className="text-sm font-bold text-primary font-poppins mb-1.5 sm:mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-2.5 pt-3 border-t border-primary/8 sm:border-0 sm:pt-0">
              <Building2 className="text-secondary shrink-0 hidden sm:block mt-0.5" size={16} strokeWidth={2} />
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <span className="inline-flex items-center gap-1.5 font-bold text-primary sm:inline">
                  <Building2 className="text-secondary sm:hidden" size={14} strokeWidth={2} />
                  Key Clients:
                </span>{' '}
                {service.keyClients}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export function ServicesGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const selectedService = serviceCategories.find((s) => s.id === selectedId)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((service, index) => (
          <ScrollReveal key={service.id} delay={index * 0.05}>
            <ServiceSummaryCard service={service} onClick={() => setSelectedId(service.id)} />
          </ScrollReveal>
        ))}
      </div>

      {mounted && selectedService && (
        <ServiceDetailPopup service={selectedService} onClose={() => setSelectedId(null)} />
      )}
    </>
  )
}
