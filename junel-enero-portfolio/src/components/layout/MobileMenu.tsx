// Mobile menu is now fully integrated into Navbar.tsx for the cyberpunk design.
// This file is kept as a no-op to avoid breaking existing imports.
import type { SectionId } from '@/types'

interface MobileMenuProps {
  activeSection: SectionId
}

export function MobileMenu(_props: MobileMenuProps) {
  return null
}
