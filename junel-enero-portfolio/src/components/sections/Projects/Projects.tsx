import { projectsData } from '@/data/projects'
import { SectionHeader } from '@/components/common/SectionHeader'
import { FadeIn } from '@/components/common/FadeIn'
import { ProjectCard } from '@/components/sections/Projects/ProjectCard'

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-[var(--background)]"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Glow accent */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sysLabel="sys.laboratory"
          title="PROJECT LAB"
          subtitle="Selected builds from the development lab."
        />

        <h2 id="projects-heading" className="sr-only">Project Laboratory</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
