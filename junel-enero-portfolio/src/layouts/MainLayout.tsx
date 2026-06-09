import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-[var(--background)]">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[var(--neon-cyan)] focus:px-4 focus:py-2 focus:text-[var(--background)] focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
