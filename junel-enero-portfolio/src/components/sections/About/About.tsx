import { motion } from 'framer-motion'
import { User, MapPin, Target, Code2, Lightbulb, Rocket } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { SectionHeader } from '@/components/common/SectionHeader'
import { GlowCard } from '@/components/common/GlowCard'
import { FadeIn } from '@/components/common/FadeIn'
import { HUDFrame } from '@/components/common/HUDFrame'

const PROFILE_DATA = [
  { label: 'DESIGNATION', value: 'Aspiring Software Engineer', icon: User },
  { label: 'LOCATION', value: 'Philippines', icon: MapPin },
  { label: 'MISSION', value: 'Build impactful digital solutions', icon: Target },
  { label: 'STATUS', value: 'Available for opportunities', icon: Code2 },
]

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    desc: 'Writing maintainable, scalable code with TypeScript and modern best practices.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    desc: 'Exploring new technologies, frameworks, and tools to stay at the frontier of software engineering.',
  },
  {
    icon: Rocket,
    title: 'Impact-Driven',
    desc: 'Focused on building solutions that solve real-world problems and elevate user experiences.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-[var(--background)]"
      aria-labelledby="about-heading"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sysLabel="sys.profile"
          title="SYSTEM PROFILE"
          subtitle="Personal background, mission parameters, and operational directives."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Profile panel */}
          <FadeIn delay={0.1}>
            <GlowCard glowColor="blue" corners className="h-full">
              <HUDFrame label="IDENTITY.DAT" accent="blue">
                <div className="space-y-4">
                  {PROFILE_DATA.map(({ label, value, icon: Icon }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-3 p-3 rounded border border-[var(--neon-blue)]/10 bg-[var(--neon-blue)]/3 hover:border-[var(--neon-blue)]/25 transition-colors duration-200"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/10">
                        <Icon className="h-4 w-4 text-[var(--neon-blue)]" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] mb-0.5">
                          {label}
                        </p>
                        <p className="text-sm text-[var(--foreground)]">{value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--neon-blue)]/10">
                  <p className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mb-3">
                    ABOUT.EXE
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {siteConfig.aboutText}
                  </p>
                  <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Currently building my foundation in full-stack development while
                    strengthening my frontend expertise with React, TypeScript, and modern
                    design systems inspired by industry leaders like Vercel and Linear.
                  </p>
                </div>
              </HUDFrame>
            </GlowCard>
          </FadeIn>

          {/* Highlights */}
          <div className="flex flex-col gap-5">
            {HIGHLIGHTS.map((item, i) => (
              <FadeIn key={item.title} delay={0.15 + i * 0.1} direction="left">
                <GlowCard glowColor="cyan" corners={false} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/8">
                    <item.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold tracking-wider text-[var(--foreground)] mb-1">
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}

            {/* Terminal output */}
            <FadeIn delay={0.45}>
              <div className="rounded border border-[var(--neon-cyan)]/15 bg-[var(--muted)]/50 p-4 font-mono text-xs">
                <p className="text-[var(--neon-cyan)] mb-2 uppercase tracking-widest opacity-60">
                  $ junel --status
                </p>
                <p className="text-[var(--neon-sky)]">
                  {'>'} Frontend: <span className="text-[var(--neon-cyan)]">OPERATIONAL</span>
                </p>
                <p className="text-[var(--neon-sky)]">
                  {'>'} Backend: <span className="text-yellow-400">LEARNING</span>
                </p>
                <p className="text-[var(--neon-sky)]">
                  {'>'} Availability:{' '}
                  <span className="text-[var(--neon-cyan)] animate-pulse">ONLINE</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
