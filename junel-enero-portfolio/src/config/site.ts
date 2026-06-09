import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Junel Enero',
  title: 'Aspiring Software Engineer',
  headline: 'Building Modern Software, Intelligent Systems, and Digital Experiences.',
  shortIntro:
    "Hi, I'm Junel Enero, an aspiring Software Engineer passionate about building modern, scalable, and user-friendly applications. I enjoy transforming ideas into real digital solutions through clean code, continuous learning, and innovative thinking.",
  aboutText:
    "I am an aspiring Software Engineer who enjoys building modern web applications and continuously learning new technologies. My goal is to create impactful software solutions that improve people's lives and solve real-world problems.",
  email: 'junelenero99@gmail.com',
  phone: '09454321193',
  resumePath: '/resume.pdf',
  social: [
    {
      platform: 'github',
      url: 'https://github.com/junelenero99',
      label: 'GitHub',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      platform: 'email',
      url: 'mailto:junelenero99@gmail.com',
      label: 'Email',
    },
  ],
  nav: [
    { id: 'home',           label: 'Home',           href: '/'               },
    { id: 'about',          label: 'About',          href: '/about'          },
    { id: 'skills',         label: 'Skills',         href: '/about'          },
    { id: 'experience',     label: 'Experience',     href: '/experience'     },
    { id: 'projects',       label: 'Projects',       href: '/projects'       },
    { id: 'education',      label: 'Education',      href: '/education'      },
    { id: 'certifications', label: 'Certifications', href: '/certifications' },
    { id: 'resume',         label: 'Resume',         href: '/resume'         },
    { id: 'contact',        label: 'Contact',        href: '/contact'        },
  ],
}
