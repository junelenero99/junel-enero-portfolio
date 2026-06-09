import type { Project } from '@/types'

export const projectsData: Project[] = [
  {
    id: 'project-1',
    name: 'Portfolio Website',
    description:
      'Personal portfolio showcasing skills, projects, and professional experience. Built with React, TypeScript, and modern web technologies.',
    image: '/images/projects/portfolio.svg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    githubUrl: 'https://github.com/junelenero99',
    featured: true,
    tags: ['frontend', 'portfolio'],
  },
  {
    id: 'project-2',
    name: 'Fitness Website Redesign',
    description:
      'Modern redesign concept focused on user experience, responsive layouts, and clean visual hierarchy.',
    image: '/images/projects/fitness.svg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    githubUrl: 'https://github.com/junelenero99',
    featured: true,
    tags: ['frontend', 'ui-ux'],
  },
  {
    id: 'project-3',
    name: 'Payroll Management System',
    description:
      'A payroll management system designed to automate employee salary calculations, attendance tracking, deductions, and payroll reporting.',
    image: '/images/projects/payroll.svg',
    technologies: ['TBD'],
    featured: true,
    tags: ['fullstack', 'management'],
  },
]
