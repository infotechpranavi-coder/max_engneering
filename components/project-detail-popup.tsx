'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { ArrowRight, MapPin, X } from 'lucide-react'
import { getCategoryLabel, type Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectDetailPopup({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const isElectrical = project.category === 'electrical'
  const contactSubject = encodeURIComponent(`Similar Project — ${project.client}`)

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      <button
        type="button"
        className="fixed inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close project details"
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_32px_100px_rgba(0,0,0,0.28)] overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col">
        {/* Header */}
        <div className="bg-primary px-6 sm:px-8 pt-7 pb-8 relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[3rem_3rem] pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={16} strokeWidth={2.5} />
          </button>

          <div className="relative z-10 pr-10">
            <span
              className={cn(
                'inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4',
                isElectrical ? 'bg-secondary text-primary' : 'bg-sky-200 text-sky-950',
              )}
            >
              {getCategoryLabel(project.category)}
            </span>

            <h2
              id="project-detail-title"
              className="text-xl sm:text-2xl font-bold text-white font-poppins leading-snug mb-3"
            >
              {project.client}
            </h2>

            <div className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <MapPin size={14} className="text-secondary shrink-0" strokeWidth={2.5} />
              {project.location}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-6 flex-1">
          <div className="border-l-[3px] border-secondary pl-4">
            <p className="text-xs font-semibold text-primary/50 mb-2">Scope of work</p>
            <p className="text-sm sm:text-[15px] text-primary/80 leading-relaxed">
              {project.scopeOfWork}
            </p>
          </div>

          <div className="bg-primary rounded-2xl p-5 border border-primary border-l-[3px] border-l-secondary shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <p className="text-xs font-semibold text-secondary mb-2">Project details</p>
            <p className="text-sm sm:text-[15px] text-white leading-relaxed">
              {project.projectDetails}
            </p>
          </div>
        </div>

        {/* Actions footer */}
        <div className="px-6 sm:px-8 py-6 border-t border-primary/8 bg-white shrink-0">
          <Link
            href={`/contact?subject=${contactSubject}`}
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-primary px-6 py-3.5 rounded-xl text-sm font-bold hover:brightness-105 transition-all shadow-[0_4px_16px_rgba(235,191,46,0.35)]"
          >
            Request similar project
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  )
}
