import { useState, type FormEvent } from 'react'
import { Send, Check, AlertTriangle } from 'lucide-react'
import type { ContactFormData } from '@/types'
import { CyberButton } from '@/components/common/CyberButton'
import { cn } from '@/lib/utils'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const initialForm: ContactFormData = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

interface FieldProps {
  id: string
  label: string
  type?: string
  value: string
  onChange: (val: string) => void
  placeholder: string
  multiline?: boolean
  required?: boolean
}

function CyberField({ id, label, type = 'text', value, onChange, placeholder, multiline, required }: FieldProps) {
  const inputClass = cn(
    'w-full bg-[var(--background)]/60 border border-[var(--neon-cyan)]/20 rounded px-4 py-2.5 text-sm text-[var(--foreground)] font-mono',
    'placeholder:text-[var(--muted-foreground)]/50',
    'focus:outline-none focus:border-[var(--neon-cyan)]/60 focus:shadow-[0_0_10px_rgba(34,211,238,0.1)]',
    'transition-all duration-200',
    'hover:border-[var(--neon-cyan)]/30'
  )

  return (
    <div>
      <label htmlFor={id} className="block font-mono text-[11px] uppercase tracking-widest text-[var(--neon-cyan)] mb-1.5 opacity-70">
        <span className="opacity-50">{'>'} </span>{label}
        {required && <span className="text-[var(--neon-cyan)] ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          rows={5}
          className={cn(inputClass, 'resize-none')}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          className={inputClass}
        />
      )}
    </div>
  )
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        const mailto = `mailto:${form.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
          `From: ${form.fullName} (${form.email})\n\n${form.message}`
        )}`
        window.location.href = mailto
        await new Promise((r) => setTimeout(r, 500))
      }
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setErrorMsg('Transmission failed. Try again or email directly.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === 'success' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/5 px-4 py-3 text-sm text-[var(--neon-cyan)]"
        >
          <Check className="h-4 w-4 shrink-0 mt-0.5" />
          <span className="font-mono text-xs">Transmission successful. I&apos;ll respond shortly.</span>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400"
        >
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
          <span className="font-mono text-xs">{errorMsg}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <CyberField
          id="fullName"
          label="Full Name"
          value={form.fullName}
          onChange={(v) => setForm({ ...form, fullName: v })}
          placeholder="John Doe"
          required
        />
        <CyberField
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          placeholder="john@example.com"
          required
        />
      </div>

      <CyberField
        id="subject"
        label="Subject"
        value={form.subject}
        onChange={(v) => setForm({ ...form, subject: v })}
        placeholder="Project inquiry"
        required
      />

      <CyberField
        id="message"
        label="Message"
        value={form.message}
        onChange={(v) => setForm({ ...form, message: v })}
        placeholder="Tell me about your project..."
        multiline
        required
      />

      <CyberButton
        type="submit"
        variant="primary"
        size="md"
        disabled={status === 'loading'}
        className="w-full sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <div className="w-4 h-4 border border-white/40 rounded-full animate-spin border-t-white" aria-hidden="true" />
            Transmitting...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </CyberButton>
    </form>
  )
}
