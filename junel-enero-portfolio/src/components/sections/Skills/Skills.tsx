import { motion } from 'framer-motion'
import { skillsData } from '@/data/skills'
import { SectionHeader } from '@/components/common/SectionHeader'
import { GlowCard } from '@/components/common/GlowCard'
import { FadeIn } from '@/components/common/FadeIn'
import { HUDFrame } from '@/components/common/HUDFrame'
import { cn } from '@/lib/utils'

const proficiencyConfig = {
  advanced: { label: 'ADV', bars: 3, color: 'bg-[var(--neon-cyan)]', text: 'text-[var(--neon-cyan)]' },
  intermediate: { label: 'INT', bars: 2, color: 'bg-[var(--neon-sky)]', text: 'text-[var(--neon-sky)]' },
  learning: { label: 'LRN', bars: 1, color: 'bg-yellow-400', text: 'text-yellow-400' },
}

const categoryGlow: Record<string, 'cyan' | 'blue' | 'sky' | 'purple'> = {
  frontend: 'cyan',
  backend: 'blue',
  database: 'sky',
  tools: 'purple',
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      aria-labelledby="skills-heading"
      style={{ background: 'linear-gradient(180deg, var(--background) 0%, rgba(15,23,41,0.5) 50%, var(--background) 100%)' }}
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sysLabel="sys.matrix"
          title="SKILLS MATRIX"
          subtitle="Technologies, tools, and proficiency levels."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillsData.map((category, catIdx) => (
            <FadeIn key={category.id} delay={catIdx * 0.1}>
              <GlowCard
                glowColor={categoryGlow[category.id] ?? 'cyan'}
                className="h-full"
              >
                <HUDFrame
                  label={category.title.toUpperCase()}
                  sublabel={category.isFuture ? 'FUTURE' : 'ACTIVE'}
                  accent={categoryGlow[category.id] === 'purple' ? 'cyan' : (categoryGlow[category.id] as 'cyan' | 'blue' | 'sky')}
                >
                  <div className="flex flex-col gap-3" id={catIdx === 0 ? 'skills-heading' : undefined}>
                    {category.skills.map((skill, skillIdx) => {
                      const prof = skill.proficiency
                        ? proficiencyConfig[skill.proficiency]
                        : proficiencyConfig.intermediate

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIdx * 0.05 + skillIdx * 0.05 }}
                          className="flex items-center justify-between gap-3 group"
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <span className="w-1 h-1 rounded-full bg-[var(--neon-cyan)] opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                            <span className="text-sm text-[var(--foreground)] font-mono">
                              {skill.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {/* Bar indicators */}
                            <div className="flex gap-1" aria-label={`Proficiency: ${skill.proficiency}`}>
                              {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={cn(
                                    'w-4 h-1.5 rounded-full transition-all duration-300',
                                    i < prof.bars
                                      ? cn(prof.color, 'shadow-sm')
                                      : 'bg-[var(--border)]'
                                  )}
                                />
                              ))}
                            </div>
                            <span
                              className={cn(
                                'font-mono text-[10px] w-7 text-right',
                                prof.text
                              )}
                            >
                              {prof.label}
                            </span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </HUDFrame>
              </GlowCard>
            </FadeIn>
          ))}
        </div>

        {/* Legend */}
        <FadeIn delay={0.5}>
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            {Object.entries(proficiencyConfig).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        'w-4 h-1.5 rounded-full',
                        i < cfg.bars ? cfg.color : 'bg-[var(--border)]'
                      )}
                    />
                  ))}
                </div>
                <span className={cn('font-mono text-xs capitalize', cfg.text)}>
                  {key}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
