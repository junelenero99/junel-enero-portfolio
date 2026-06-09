import { useEffect } from 'react'
import { About } from '@/components/sections/About/About'
import { Skills } from '@/components/sections/Skills/Skills'

export function AboutPage() {
  useEffect(() => {
    document.title = 'Junel Enero | About'
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <About />
      <Skills />
    </>
  )
}
