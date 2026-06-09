import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HUDFrameProps {
  children: ReactNode
  label?: string
  sublabel?: string
  className?: string
  accent?: 'cyan' | 'blue' | 'sky'
}

const accentColors = {
  cyan: {
    text: 'text-[var(--neon-cyan)]',
    border: 'border-[var(--neon-cyan)]/20',
    bg: 'bg-[var(--neon-cyan)]/5',
    line: 'bg-[var(--neon-cyan)]',
  },
  blue: {
    text: 'text-[var(--neon-blue)]',
    border: 'border-[var(--neon-blue)]/20',
    bg: 'bg-[var(--neon-blue)]/5',
    line: 'bg-[var(--neon-blue)]',
  },
  sky: {
    text: 'text-[var(--neon-sky)]',
    border: 'border-[var(--neon-sky)]/20',
    bg: 'bg-[var(--neon-sky)]/5',
    line: 'bg-[var(--neon-sky)]',
  },
}

export function HUDFrame({
  children,
  label,
  sublabel,
  className,
  accent = 'cyan',
}: HUDFrameProps) {
  const c = accentColors[accent]

  return (
    <div className={cn('relative', className)}>
      {/* Top bar */}
      {label && (
        <div className={cn('flex items-center gap-3 mb-4 pb-3 border-b', c.border)}>
          <div className={cn('w-1 h-4 rounded-full', c.line)} aria-hidden="true" />
          <span className={cn('font-mono text-xs uppercase tracking-widest', c.text)}>
            {label}
          </span>
          {sublabel && (
            <span className="font-mono text-xs text-[var(--muted-foreground)] ml-auto">
              {sublabel}
            </span>
          )}
          {/* Status dots */}
          <div className="flex gap-1 ml-auto" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] opacity-60 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] opacity-40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] opacity-20" />
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
