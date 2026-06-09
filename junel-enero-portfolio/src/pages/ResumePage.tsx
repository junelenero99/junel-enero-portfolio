import { useEffect } from 'react'
import { Resume } from '@/components/sections/Resume/Resume'

export function ResumePage() {
  useEffect(() => {
    document.title = 'Junel Enero | Resume'
    window.scrollTo({ top: 0 })
  }, [])

  return <Resume />
}
