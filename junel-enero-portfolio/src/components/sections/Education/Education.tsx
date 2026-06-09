import { motion } from 'framer-motion'
import { GraduationCap, Calendar, ChevronRight } from 'lucide-react'
import { educationData } from '@/data/education'
import { SectionHeader } from '@/components/common/SectionHeader'
import { GlowCard } from '@/components/common/GlowCard'
import { FadeIn } from '@/components/common/FadeIn'
import { HUDFrame } from '@/components/common/HUDFrame'

export function Education() {
  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden bg-[var(--background)]"
      aria-labelledby="education-heading"
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sysLabel="sys.database"
          title="EDUCATION DB"
          subtitle="Academic records and learning credentials."
        />

        <div className="space-y-6">
          {educationData.map((edu, i) => (
            <FadeIn key={edu.id} delay={i * 0.1}>
              <GlowCard glowColor="sky" className="h-full">
                <HUDFrame
                  label={`RECORD_${String(i + 1).padStart(2, '0')}`}
                  sublabel={edu.status === 'current' ? 'ACTIVE' : 'COMPLETE'}
                  accent="sky"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-[var(--neon-sky)]/30 bg-[var(--neon-sky)]/8">
                      <GraduationCap className="h-7 w-7 text-[var(--neon-sky)]" />
                    </div>

                    <div className="flex-1">
                      {/* Course */}
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3
                          id={i === 0 ? 'education-heading' : undefined}
                          className="font-heading text-base font-bold tracking-wider text-[var(--foreground)]"
                        >
                          {edu.course.toUpperCase()}
                        </h3>
                        {edu.status === 'current' && (
                          <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/8 text-[var(--neon-cyan)]">
                            ■ Current
                          </span>
                        )}
                      </div>

                      {/* School */}
                      <p className="text-[var(--neon-sky)] font-mono text-sm mb-2">
                        {edu.school}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--muted-foreground)] mb-4">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {edu.duration}
                      </div>

                      {/* Achievements */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="space-y-2">
                          {edu.achievements.map((item, j) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 + j * 0.06 + 0.2 }}
                              className="flex gap-2 items-start text-sm text-[var(--muted-foreground)]"
                            >
                              <ChevronRight className="h-4 w-4 text-[var(--neon-sky)] shrink-0 mt-0.5" aria-hidden="true" />
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </HUDFrame>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
