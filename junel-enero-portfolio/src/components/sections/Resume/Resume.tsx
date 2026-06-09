import { useEffect, useState } from 'react'
import { Download, Eye, FileText, AlertCircle, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { SectionHeader } from '@/components/common/SectionHeader'
import { GlowCard } from '@/components/common/GlowCard'
import { FadeIn } from '@/components/common/FadeIn'
import { CyberButton } from '@/components/common/CyberButton'
import { HUDFrame } from '@/components/common/HUDFrame'

export function Resume() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(siteConfig.resumePath, { method: 'HEAD' })
      .then((res) => { if (!res.ok) setError(true) })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section
      id="resume"
      className="section-padding relative overflow-hidden bg-[var(--background)]"
      aria-labelledby="resume-heading"
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sysLabel="sys.terminal"
          title="RESUME TERMINAL"
          subtitle="Access and download the latest resume document."
        />

        <FadeIn delay={0.1}>
          <GlowCard glowColor="cyan" className="overflow-hidden">
            <HUDFrame accent="cyan">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/8">
                    <FileText className="h-5 w-5 text-[var(--neon-cyan)]" />
                  </div>
                  <div>
                    <h3 id="resume-heading" className="font-heading text-sm font-bold tracking-wider text-[var(--foreground)]">
                      {siteConfig.name.toUpperCase()} — RESUME
                    </h3>
                    <p className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-widest mt-0.5">
                      PDF Format · Latest Version
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <CyberButton
                    variant="primary"
                    size="sm"
                    href={siteConfig.resumePath}
                    download
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download
                  </CyberButton>
                  <CyberButton
                    variant="outline"
                    size="sm"
                    href={siteConfig.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    Preview
                  </CyberButton>
                </div>
              </div>

              {/* Preview area */}
              <div className="relative min-h-[500px] rounded border border-[var(--neon-cyan)]/15 bg-[var(--muted)]/40 overflow-hidden">
                {/* Scan line effect */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.015) 2px, rgba(34,211,238,0.015) 4px)',
                  }}
                  aria-hidden="true"
                />

                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 border border-[var(--neon-cyan)]/40 rounded-full animate-spin border-t-[var(--neon-cyan)]" />
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                        Loading document...
                      </span>
                    </div>
                  </div>
                )}

                {error ? (
                  <div className="flex min-h-[500px] flex-col items-center justify-center gap-5 p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded border border-[var(--neon-cyan)]/20 bg-[var(--neon-cyan)]/5">
                      <AlertCircle className="h-8 w-8 text-[var(--neon-cyan)]/60" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold tracking-wider text-[var(--foreground)] mb-2">
                        DOCUMENT NOT FOUND
                      </p>
                      <p className="font-mono text-xs text-[var(--muted-foreground)] max-w-xs">
                        Add{' '}
                        <code className="text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10 px-1.5 py-0.5 rounded">
                          resume.pdf
                        </code>{' '}
                        to the{' '}
                        <code className="text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10 px-1.5 py-0.5 rounded">
                          public/
                        </code>{' '}
                        folder to enable preview.
                      </p>
                    </div>
                    <CyberButton
                      variant="outline"
                      size="sm"
                      href={`mailto:${siteConfig.email}`}
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Request via Email
                    </CyberButton>
                  </div>
                ) : (
                  !loading && (
                    <iframe
                      src={`${siteConfig.resumePath}#toolbar=0`}
                      title={`${siteConfig.name} Resume`}
                      className="w-full h-[600px]"
                      loading="lazy"
                    />
                  )
                )}
              </div>
            </HUDFrame>
          </GlowCard>
        </FadeIn>
      </div>
    </section>
  )
}
