import { useEffect } from 'react'
import { Certifications } from '@/components/sections/Certifications/Certifications'

export function CertificationsPage() {
  useEffect(() => {
    document.title = 'Junel Enero | Certifications'
    window.scrollTo({ top: 0 })
  }, [])

  return <Certifications />
}
