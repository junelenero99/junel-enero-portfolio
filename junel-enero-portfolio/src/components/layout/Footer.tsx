import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { GitHubIcon, LinkedInIcon } from '@/components/common/BrandIcons'
import { Mail, Zap } from 'lucide-react'

// Deduplicated nav items
const footerItems = siteConfig.nav
  .filter((item, idx, arr) => arr.findIndex((n) => n.href === item.href) === idx)
  .slice(1, 7)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[var(--neon-cyan)]/10 bg-[var(--background)] py-12 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-2 w-fit group">
              <Zap className="h-4 w-4 text-[var(--neon-cyan)]" />
              <p className="font-heading text-base font-bold tracking-widest text-[var(--foreground)] group-hover:text-[var(--neon-cyan)] transition-colors">
                {siteConfig.name.toUpperCase()}
              </p>
            </Link>
            <p className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-wider">
              {siteConfig.title}
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {siteConfig.social.map((link) => {
              const Icon =
                link.platform === 'github'
                  ? GitHubIcon
                  : link.platform === 'linkedin'
                  ? LinkedInIcon
                  : Mail
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform === 'email' ? undefined : '_blank'}
                  rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-[var(--neon-cyan)]/20 text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/50 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--neon-cyan)]/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-[var(--muted-foreground)]">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[var(--muted-foreground)]">
            <span className="text-[var(--neon-cyan)]">■</span>{' '}
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
