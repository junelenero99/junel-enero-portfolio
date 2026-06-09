import { useEffect, useState } from 'react'
import type { SectionId } from '@/types'

export function useScrollSpy(sectionIds: SectionId[], offset = 100) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
