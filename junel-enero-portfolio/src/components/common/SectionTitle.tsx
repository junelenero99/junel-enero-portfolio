import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <p className="mb-2 font-mono text-sm uppercase tracking-widest text-[var(--primary)]">
        {title.split(' ')[0]}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-[var(--muted-foreground)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
