import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CyberButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  download?: boolean
  target?: string
  rel?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const variants = {
  primary: cn(
    'bg-[var(--neon-blue)] text-white border border-[var(--neon-blue)]',
    'hover:bg-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] hover:text-[var(--background)]',
    'shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]'
  ),
  outline: cn(
    'bg-transparent text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/50',
    'hover:bg-[var(--neon-cyan)]/10 hover:border-[var(--neon-cyan)]',
    'shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]'
  ),
  ghost: cn(
    'bg-transparent text-[var(--muted-foreground)] border border-transparent',
    'hover:text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/5'
  ),
}

const sizes = {
  sm: 'h-8 px-4 text-xs gap-1.5',
  md: 'h-10 px-5 text-sm gap-2',
  lg: 'h-12 px-8 text-sm gap-2.5',
}

export function CyberButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  download,
  target,
  rel,
  className,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: CyberButtonProps) {
  const baseClass = cn(
    'inline-flex items-center justify-center font-mono tracking-wider uppercase',
    'rounded transition-all duration-300 font-medium',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]',
    'disabled:opacity-40 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={baseClass}
        aria-label={ariaLabel}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
