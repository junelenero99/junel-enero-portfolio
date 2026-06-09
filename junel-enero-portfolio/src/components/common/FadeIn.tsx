import { type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  once = true,
}: FadeInProps) {
  const reduce = useReducedMotion()

  const dirMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  }

  const initial = reduce ? { opacity: 0 } : { opacity: 0, ...dirMap[direction] }
  const animate = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
