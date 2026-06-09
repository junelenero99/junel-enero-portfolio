import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  className?: string
  label?: string
}

export function LoadingSpinner({
  className,
  label = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center gap-3', className)}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <Loader2 className="h-8 w-8 animate-spin text-[var(--primary)]" />
      <span className="text-sm text-[var(--muted-foreground)]">{label}</span>
    </div>
  )
}
