import { motion } from 'framer-motion'
import { ArrowRight, Download, Terminal, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { ParticleField } from '@/components/common/ParticleField'
import { TerminalText } from '@/components/common/TerminalText'
import { CyberButton } from '@/components/common/CyberButton'
import { GitHubIcon, LinkedInIcon } from '@/components/common/BrandIcons'
import { Mail } from 'lucide-react'

const TYPING_TEXTS = [
  'Building Modern Software',
  'Crafting Digital Experiences',
  'Engineering Intelligent Systems',
  'Developing Web Applications',
]

const STATS = [
  { label: 'Projects',     value: '3+'   },
  { label: 'Technologies', value: '10+'  },
  { label: 'Experience',   value: 'OJT'  },
]

export function Hero() {
  const navigate = useNavigate()

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.15) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(34,211,238,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Particles */}
      <ParticleField count={50} />

      {/* HUD decorations */}
      <div className="absolute top-24 left-8 hidden lg:block pointer-events-none" aria-hidden="true">
        <div className="flex flex-col gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-px bg-[var(--neon-cyan)]"
              style={{ width: `${(i + 1) * 12}px` }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.3 + i * 0.05, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-32 right-8 hidden lg:block pointer-events-none" aria-hidden="true">
        <div className="flex flex-col items-end gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-px bg-[var(--neon-blue)]"
              style={{ width: `${(6 - i) * 12}px` }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.3 + i * 0.05, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* System label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs text-[var(--neon-cyan)] uppercase tracking-[0.4em] mb-6 flex items-center gap-2"
          >
            <Terminal className="h-3 w-3" aria-hidden="true" />
            <span className="opacity-50">//</span> System Initialized
            <span
              className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse ml-2"
              aria-hidden="true"
            />
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading font-black tracking-wider leading-none mb-4"
          >
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-[var(--foreground)]">
              JUNEL
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-gradient-cyber">
              ENERO
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-mono text-sm sm:text-base text-[var(--neon-sky)] uppercase tracking-[0.3em] mb-6"
          >
            Aspiring Software Engineer
          </motion.p>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-mono text-base sm:text-lg text-[var(--muted-foreground)] mb-8 h-7"
          >
            <TerminalText texts={TYPING_TEXTS} />
          </motion.div>

          {/* Short intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-[var(--muted-foreground)] leading-relaxed max-w-xl mb-10 text-sm sm:text-base"
          >
            {siteConfig.shortIntro}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <CyberButton
              variant="primary"
              size="lg"
              onClick={() => navigate('/projects')}
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              View Projects
            </CyberButton>
            <CyberButton
              variant="outline"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </CyberButton>
            <CyberButton
              variant="ghost"
              size="lg"
              href={siteConfig.resumePath}
              download
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </CyberButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest">
              Connect
            </span>
            <div className="h-px flex-1 max-w-12 bg-[var(--neon-cyan)]/20" aria-hidden="true" />
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
                  className="flex h-10 w-10 items-center justify-center rounded border border-[var(--neon-cyan)]/20 text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </motion.div>
        </div>

        {/* Floating stats panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded p-4 text-center border border-[var(--neon-cyan)]/20 min-w-[100px]"
            >
              <p className="font-heading text-2xl font-bold text-gradient-cyber">{stat.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => navigate('/about')}
        role="button"
        aria-label="Navigate to About"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/about')}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-[var(--neon-cyan)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
