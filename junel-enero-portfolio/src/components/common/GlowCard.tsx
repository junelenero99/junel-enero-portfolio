import { type ReactNode, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'cyan' | 'blue' | 'sky' | 'purple'
  hover?: boolean
  corners?: boolean
  onClick?: () => void
}

const glowMap = {
  cyan: {
    border: 'rgba(34, 211, 238, 0.25)',
    glow: 'rgba(34, 211, 238, 0.15)',
    hover: 'rgba(34, 211, 238, 0.35)',
    corner: 'border-[var(--neon-cyan)]',
  },
  blue: {
    border: 'rgba(37, 99, 235, 0.25)',
    glow: 'rgba(37, 99, 235, 0.15)',
    hover: 'rgba(37, 99, 235, 0.35)',
    corner: 'border-[var(--neon-blue)]',
  },
  sky: {
    border: 'rgba(14, 165, 233, 0.25)',
    glow: 'rgba(14, 165, 233, 0.15)',
    hover: 'rgba(14, 165, 233, 0.35)',
    corner: 'border-[var(--neon-sky)]',
  },
  purple: {
    border: 'rgba(139, 92, 246, 0.25)',
    glow: 'rgba(139, 92, 246, 0.15)',
    hover: 'rgba(139, 92, 246, 0.35)',
    corner: 'border-[var(--neon-purple)]',
  },
}

export function GlowCard({
  children,
  className,
  glowColor = 'cyan',
  hover = true,
  corners = true,
  onClick,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const g = glowMap[glowColor]

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      whileHover={hover ? { scale: 1.01, y: -2 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'relative glass-card rounded-lg p-6 overflow-hidden transition-all duration-300',
        hover && 'cursor-pointer group',
        className
      )}
      style={{
        borderColor: g.border,
        boxShadow: `0 0 20px ${g.glow}, inset 0 0 20px ${g.glow}`,
      }}
    >
      {/* Hover glow overlay */}
      {hover && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
          style={{ boxShadow: `inset 0 0 30px ${g.glow}` }}
        />
      )}

      {/* Corner decorations */}
      {corners && (
        <>
          <span
            className={cn('absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-70', g.corner)}
            aria-hidden="true"
          />
          <span
            className={cn('absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 opacity-70', g.corner)}
            aria-hidden="true"
          />
          <span
            className={cn('absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 opacity-70', g.corner)}
            aria-hidden="true"
          />
          <span
            className={cn('absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-70', g.corner)}
            aria-hidden="true"
          />
        </>
      )}

      {children}
    </motion.div>
  )
}
