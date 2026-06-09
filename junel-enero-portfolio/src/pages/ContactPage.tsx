import { useEffect } from 'react'
import { Contact } from '@/components/sections/Contact/Contact'

export function ContactPage() {
  useEffect(() => {
    document.title = 'Junel Enero | Contact'
    window.scrollTo({ top: 0 })
  }, [])

  return <Contact />
}
