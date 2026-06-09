import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-[var(--card-foreground)] shadow-sm',
        hover &&
          'transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}
