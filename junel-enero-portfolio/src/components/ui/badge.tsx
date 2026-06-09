import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--primary)] text-[var(--primary-foreground)]',
        secondary:
          'border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)]',
        outline: 'border-[var(--border)] text-[var(--muted-foreground)]',
        accent:
          'border-transparent bg-[var(--accent)]/15 text-[var(--accent)]',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
