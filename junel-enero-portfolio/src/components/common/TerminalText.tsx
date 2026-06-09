import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TerminalTextProps {
  texts: string[]
  className?: string
  speed?: number
  pauseDuration?: number
  prefix?: string
}

export function TerminalText({
  texts,
  className,
  speed = 80,
  pauseDuration = 2000,
  prefix = '> ',
}: TerminalTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setDisplayText(current.slice(0, charIndex + 1))
            setCharIndex((c) => c + 1)
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(current.slice(0, charIndex - 1))
            setCharIndex((c) => c - 1)
          } else {
            setIsDeleting(false)
            setTextIndex((i) => (i + 1) % texts.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, pauseDuration])

  return (
    <span className={cn('font-mono', className)}>
      <span className="text-[var(--neon-cyan)] opacity-60">{prefix}</span>
      {displayText}
      <span className="animate-pulse text-[var(--neon-cyan)]">_</span>
    </span>
  )
}
