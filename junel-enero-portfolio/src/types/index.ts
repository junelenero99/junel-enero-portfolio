export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'education'
  | 'certifications'
  | 'resume'
  | 'contact'

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | string
  url: string
  label: string
}

export interface NavItem {
  id: SectionId
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  title: string
  headline: string
  shortIntro: string
  aboutText: string
  email: string
  phone: string
  resumePath: string
  social: SocialLink[]
  nav: NavItem[]
}

export type SkillCategoryId = 'frontend' | 'backend' | 'database' | 'tools'

export interface Skill {
  name: string
  icon?: string
  proficiency?: 'learning' | 'intermediate' | 'advanced'
}

export interface SkillCategory {
  id: SkillCategoryId
  title: string
  skills: Skill[]
  isFuture?: boolean
}

export interface Experience {
  id: string
  position: string
  company: string
  duration: string
  location?: string
  responsibilities: string[]
  achievements?: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  tags?: string[]
}

export interface Education {
  id: string
  school: string
  course: string
  duration: string
  status?: 'current' | 'completed'
  achievements?: string[]
}

export interface Certification {
  id: string
  name: string
  organization: string
  issueDate: string
  credentialUrl?: string
  credentialId?: string
}

export interface ContactFormData {
  fullName: string
  email: string
  subject: string
  message: string
}

export interface ImageAsset {
  src: string
  alt: string
  width?: number
  height?: number
}
