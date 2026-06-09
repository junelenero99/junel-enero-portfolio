import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Hash } from 'lucide-react'
import { certificationsData } from '@/data/certifications'
import { formatDate } from '@/utils/helpers'
import { SectionHeader } from '@/components/common/SectionHeader'
import { GlowCard } from '@/components/common/GlowCard'
import { FadeIn } from '@/components/common/FadeIn'
import { HUDFrame } from '@/components/common/HUDFrame'

export function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding relative overflow-hidden"
      aria-labelledby="certifications-heading"
      style={{ background: 'linear-gradient(180deg, var(--background) 0%, rgba(15,23,41,0.4) 50%, var(--background) 100%)' }}
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div
        className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sysLabel="sys.archive"
          title="CERT ARCHIVE"
          subtitle="Professional credentials and verified certifications."
        />

        <div className="grid gap-6 md:grid-cols-2" id="certifications-heading">
          {certificationsData.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.1}>
              <GlowCard glowColor="blue" className="h-full">
                <HUDFrame
                  label={`CERT_${String(i + 1).padStart(2, '0')}`}
                  sublabel="VERIFIED"
                  accent="blue"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/8">
                      <Award className="h-6 w-6 text-[var(--neon-blue)]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-sm font-bold tracking-wider text-[var(--foreground)] mb-1">
                        {cert.name.toUpperCase()}
                      </h3>
                      <p className="font-mono text-xs text-[var(--neon-sky)] mb-3">
                        {cert.organization}
                      </p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3">
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted-foreground)]">
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          {formatDate(cert.issueDate)}
                        </div>
                        {cert.credentialId && (
                          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted-foreground)]">
                            <Hash className="h-3 w-3" aria-hidden="true" />
                            <span className="truncate max-w-[160px]">{cert.credentialId}</span>
                          </div>
                        )}
                      </div>

                      {cert.credentialUrl && cert.credentialUrl !== '#' && (
                        <motion.a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--neon-blue)] hover:text-[var(--neon-cyan)] transition-colors duration-200"
                          whileHover={{ x: 2 }}
                        >
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          Verify Credential
                        </motion.a>
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
