import { useEffect } from 'react'
import { Experience } from '@/components/sections/Experience/Experience'

export function ExperiencePage() {
  useEffect(() => {
    document.title = 'Junel Enero | Experience'
    window.scrollTo({ top: 0 })
  }, [])

  return <Experience />
}
