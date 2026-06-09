import { useEffect } from 'react'
import { Projects } from '@/components/sections/Projects/Projects'

export function ProjectsPage() {
  useEffect(() => {
    document.title = 'Junel Enero | Projects'
    window.scrollTo({ top: 0 })
  }, [])

  return <Projects />
}
