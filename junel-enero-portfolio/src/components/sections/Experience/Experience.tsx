import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { experienceData } from '@/data/experience'
import { SectionHeader } from '@/components/common/SectionHeader'
import { GlowCard } from '@/components/common/GlowCard'
import { FadeIn } from '@/components/common/FadeIn'
import { HUDFrame } from '@/components/common/HUDFrame'

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-[var(--background)]"
      aria-labelledby="experience-heading"
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sysLabel="sys.timeline"
          title="EXPERIENCE LOG"
          subtitle="Professional missions and operational history."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                'linear-gradient(180deg, transparent, rgba(34,211,238,0.4) 20%, rgba(34,211,238,0.4) 80%, transparent)',
            }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experienceData.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.12}>
                <div className="relative flex gap-6 md:gap-10">
                  {/* Timeline node */}
                  <div className="relative hidden md:flex flex-col items-center" aria-hidden="true">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.2, type: 'spring' }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--neon-cyan)]/40 bg-[var(--background)] z-10 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    >
                      <Briefcase className="h-4 w-4 text-[var(--neon-cyan)]" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <GlowCard glowColor="cyan" className="flex-1">
                    <HUDFrame label={`MISSION_${String(i + 1).padStart(2, '0')}`} accent="cyan">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                        <div>
                          <h3
                            id={i === 0 ? 'experience-heading' : undefined}
                            className="font-heading text-base font-bold tracking-wider text-[var(--foreground)]"
                          >
                            {exp.position.toUpperCase()}
                          </h3>
                          <p className="text-[var(--neon-cyan)] font-mono text-sm mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1 text-right shrink-0">
                          <div className="flex items-center justify-end gap-1 font-mono text-xs text-[var(--muted-foreground)]">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {exp.duration}
                          </div>
                          {exp.location && (
                            <div className="flex items-center justify-end gap-1 font-mono text-xs text-[var(--muted-foreground)]">
                              <MapPin className="h-3 w-3" aria-hidden="true" />
                              {exp.location}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-2">
                        {exp.responsibilities.map((item, j) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                            className="flex gap-2 items-start text-sm text-[var(--muted-foreground)]"
                          >
                            <ChevronRight className="h-4 w-4 text-[var(--neon-cyan)] shrink-0 mt-0.5" aria-hidden="true" />
                            {item}
                          </motion.div>
                        ))}
                      </div>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-[var(--neon-cyan)]/10">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--neon-cyan)] mb-3 opacity-70">
                            Achievements
                          </p>
                          <ul className="space-y-1">
                            {exp.achievements.map((item) => (
                              <li key={item} className="text-sm text-[var(--muted-foreground)] flex gap-2">
                                <span className="text-[var(--neon-cyan)]" aria-hidden="true">■</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </HUDFrame>
                  </GlowCard>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
