import type { ComponentType } from 'react'
import { Mail } from 'lucide-react'
import type { SocialLink } from '@/types'
import { GitHubIcon, LinkedInIcon } from '@/components/common/BrandIcons'
import { cn } from '@/lib/utils'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  iconSize?: string
}

export function SocialLinks({
  links,
  className,
  iconSize = 'h-5 w-5',
}: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.platform] ?? Mail
        return (
          <a
            key={link.platform}
            href={link.url}
            target={link.platform === 'email' ? undefined : '_blank'}
            rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
            aria-label={link.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <Icon className={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
