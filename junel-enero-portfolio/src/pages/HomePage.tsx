import { useEffect } from 'react'
import { Hero } from '@/components/sections/Hero/Hero'

export function HomePage() {
  useEffect(() => {
    document.title = 'Junel Enero | Home'
  }, [])

  return <Hero />
}
