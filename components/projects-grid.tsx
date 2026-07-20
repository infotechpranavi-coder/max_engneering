'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import {
  getCategoryLabel,
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from '@/lib/projects'
import { ProjectDetailPopup } from '@/components/project-detail-popup'
import { ScrollReveal } from '@/components/scroll-reveal'
import { cn } from '@/lib/utils'

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const isElectrical = project.category === 'electrical'

  return (
    <article className="group/card relative h-full bg-white rounded-3xl border-2 border-transparent hover:border-secondary shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

      <button
        type="button"
        onClick={onClick}
        className="flex flex-col flex-1 text-left p-6 sm:p-7 pb-4 min-h-0"
      >
        <div className="flex items-start justify-between gap-3 mb-4 shrink-0">
          <span
            className={cn(
              'inline-flex px-3 py-1 rounded-full text-xs font-semibold',
              isElectrical
                ? 'bg-secondary/15 text-amber-900 border border-secondary/20'
                : 'bg-sky-100 text-sky-900 border border-sky-200',
            )}
          >
            {getCategoryLabel(project.category)}
          </span>

          <div className="w-8 h-8 rounded-full bg-[#F8F9FA] group-hover/card:bg-secondary/10 flex items-center justify-center transition-colors duration-300 shrink-0">
            <ArrowUpRight
              className="text-primary/25 group-hover/card:text-secondary transition-colors duration-300"
              size={16}
              strokeWidth={2.5}
            />
          </div>
        </div>

        <h3 className="text-lg font-bold text-primary font-poppins leading-snug mb-3 line-clamp-2 min-h-[3.25rem]">
          {project.client}
        </h3>

        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-4 w-fit shrink-0">
          <MapPin size={13} className="text-secondary shrink-0" strokeWidth={2.5} />
          <span className="line-clamp-1">{project.location}</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.5rem] flex-1">
          {project.scopeOfWork}
        </p>
      </button>

      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 mt-auto shrink-0">
        <button
          type="button"
          onClick={onClick}
          className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#F8F9FA] border border-primary/8 text-primary group-hover/card:bg-primary group-hover/card:text-white group-hover/card:border-primary transition-all duration-300"
        >
          <span className="text-sm font-semibold">View details</span>
          <ArrowRight
            size={15}
            className="text-secondary group-hover/card:text-secondary shrink-0"
            strokeWidth={2.5}
          />
        </button>
      </div>
    </article>
  )
}

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const selectedProject = projects.find((p) => p.id === selectedId)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300',
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-primary/70 border border-primary/10 hover:border-secondary hover:text-primary',
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground font-medium tabular-nums">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.04} className="h-full">
              <ProjectCard project={project} onClick={() => setSelectedId(project.id)} />
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-16">
            No projects found for this category.
          </p>
        )}
      </div>

      {mounted && selectedProject && (
        <ProjectDetailPopup project={selectedProject} onClose={() => setSelectedId(null)} />
      )}
    </>
  )
}
