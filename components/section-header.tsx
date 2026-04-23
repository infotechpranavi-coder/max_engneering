import { ReactNode } from 'react'

interface SectionHeaderProps {
  preTitle: string
  title: string
  highlightedTitle?: string
  description?: string
  light?: boolean
  centered?: boolean
}

export function SectionHeader({
  preTitle,
  title,
  highlightedTitle,
  description,
  light = false,
  centered = true
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      
      <h2 
        className={`font-bold ${light ? 'text-white' : 'text-primary'} uppercase font-poppins mb-4`}
        style={{ fontSize: '52px', letterSpacing: '0.8px', lineHeight: '1.2' }}
      >
        {title} {highlightedTitle && <span className="text-secondary">{highlightedTitle}</span>}
      </h2>
      
      {description && (
        <p 
          className={`${light ? 'text-white/60' : 'text-muted-foreground'} max-w-2xl ${centered ? 'mx-auto' : ''} font-poppins font-normal`}
          style={{ fontSize: '15px', lineHeight: '1.7' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
