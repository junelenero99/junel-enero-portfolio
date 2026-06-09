import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  sysLabel: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  sysLabel,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-3 opacity-80">
        <span className="opacity-50">// </span>{sysLabel}
      </p>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--foreground)] tracking-wider">
        {title}
      </h2>
      {/* Glow line */}
      <div
        className={cn(
          'mt-4 h-px w-24 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)]',
          align === 'center' && 'mx-auto'
        )}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mt-4 text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
