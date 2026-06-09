import type { SkillCategory } from '@/types'

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML5', proficiency: 'advanced' },
      { name: 'CSS3', proficiency: 'advanced' },
      { name: 'JavaScript', proficiency: 'advanced' },
      { name: 'TypeScript', proficiency: 'intermediate' },
      { name: 'React', proficiency: 'intermediate' },
      { name: 'Tailwind CSS', proficiency: 'intermediate' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    isFuture: true,
    skills: [
      { name: 'Node.js', proficiency: 'learning' },
      { name: 'Express.js', proficiency: 'learning' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    isFuture: true,
    skills: [{ name: 'MySQL', proficiency: 'learning' }],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', proficiency: 'intermediate' },
      { name: 'GitHub', proficiency: 'intermediate' },
      { name: 'VS Code', proficiency: 'advanced' },
      { name: 'Cursor AI', proficiency: 'intermediate' },
      { name: 'Figma', proficiency: 'learning' },
      { name: 'Kiro AI', proficiency: 'learning' },
    ],
  },
]
