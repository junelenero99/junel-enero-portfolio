import { useState } from 'react'
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { copyToClipboard } from '@/utils/helpers'
import { SectionHeader } from '@/components/common/SectionHeader'
import { GlowCard } from '@/components/common/GlowCard'
import { FadeIn } from '@/components/common/FadeIn'
import { HUDFrame } from '@/components/common/HUDFrame'
import { ContactForm } from '@/components/sections/Contact/ContactForm'
import { GitHubIcon, LinkedInIcon } from '@/components/common/BrandIcons'

const CONTACT_INFO = [
  { icon: Mail,  label: 'EMAIL',    value: 'junelenero99@gmail.com', copyable: true  },
  { icon: Phone, label: 'PHONE',    value: '09454321193',            copyable: false },
  { icon: MapPin,label: 'LOCATION', value: 'Makati, Philippines',    copyable: false },
]

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(siteConfig.email)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-[var(--background)]"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sysLabel="sys.console"
          title="CONTACT CONSOLE"
          subtitle="Initiate contact. Open to collaborations, opportunities, and projects."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <GlowCard glowColor="blue" className="h-full">
              <HUDFrame label="CHANNELS" accent="blue">
                <div className="space-y-4 mb-8">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, copyable }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-3 rounded border border-[var(--neon-blue)]/10 bg-[var(--neon-blue)]/3 hover:border-[var(--neon-blue)]/25 transition-colors duration-200"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/10">
                        <Icon className="h-4 w-4 text-[var(--neon-blue)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] mb-0.5">
                          {label}
                        </p>
                        {copyable ? (
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="flex items-center gap-2 text-sm text-[var(--foreground)] hover:text-[var(--neon-cyan)] transition-colors duration-200 font-mono"
                            aria-label="Copy email address"
                          >
                            <span className="truncate">{value}</span>
                            {copied ? (
                              <Check className="h-3.5 w-3.5 text-[var(--neon-cyan)] shrink-0" />
                            ) : (
                              <Copy className="h-3.5 w-3.5 text-[var(--muted-foreground)] shrink-0" />
                            )}
                          </button>
                        ) : (
                          <p className="text-sm text-[var(--foreground)] font-mono">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
                    Network Links
                  </p>
                  <div className="flex gap-3">
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
                          className="flex h-10 w-10 items-center justify-center rounded border border-[var(--neon-cyan)]/20 text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/50 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all duration-200"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </HUDFrame>
            </GlowCard>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.2} className="lg:col-span-3">
            <GlowCard glowColor="cyan" className="h-full">
              <HUDFrame label="TRANSMIT.MSG" accent="cyan">
                <h3 id="contact-heading" className="font-heading text-sm font-bold tracking-wider text-[var(--foreground)] mb-6">
                  SEND TRANSMISSION
                </h3>
                <ContactForm />
              </HUDFrame>
            </GlowCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
