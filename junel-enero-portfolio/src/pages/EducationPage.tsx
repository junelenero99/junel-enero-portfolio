import { useEffect } from 'react'
import { Education } from '@/components/sections/Education/Education'

export function EducationPage() {
  useEffect(() => {
    document.title = 'Junel Enero | Education'
    window.scrollTo({ top: 0 })
  }, [])

  return <Education />
}
