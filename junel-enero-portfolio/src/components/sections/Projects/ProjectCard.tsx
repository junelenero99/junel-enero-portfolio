import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Folder, ChevronDown, ChevronUp } from 'lucide-react'
import { GitHubIcon } from '@/components/common/BrandIcons'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgLoading, setImgLoading] = useState(true)
  const [imgError, setImgError] = useState(false)
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      className={cn(
        'relative glass-card rounded-lg overflow-hidden border transition-all duration-300 group',
        project.featured
          ? 'border-[var(--neon-cyan)]/25 shadow-[0_0_20px_rgba(34,211,238,0.08)]'
          : 'border-[var(--neon-blue)]/15',
        'hover:border-[var(--neon-cyan)]/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]'
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Corner decorations */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--neon-cyan)] opacity-60 z-10" aria-hidden="true" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--neon-cyan)] opacity-60 z-10" aria-hidden="true" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--neon-cyan)] opacity-60 z-10" aria-hidden="true" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--neon-cyan)] opacity-60 z-10" aria-hidden="true" />

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[var(--muted)]">
        {imgLoading && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border border-[var(--neon-cyan)]/40 rounded animate-spin border-t-[var(--neon-cyan)]" />
              <span className="font-mono text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest">
                Loading
              </span>
            </div>
          </div>
        )}
        {imgError ? (
          <div className="flex h-full items-center justify-center">
            <Folder className="h-12 w-12 text-[var(--neon-cyan)]/20" />
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onLoad={() => setImgLoading(false)}
            onError={() => { setImgLoading(false); setImgError(true) }}
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/30 text-[var(--neon-cyan)]">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-sm font-bold tracking-wider text-[var(--foreground)] group-hover:text-[var(--neon-cyan)] transition-colors duration-200">
            {project.name.toUpperCase()}
          </h3>
          <span className="font-mono text-[10px] text-[var(--neon-cyan)] opacity-50 shrink-0 pt-0.5">
            [{String(project.id).split('-')[1] ?? '01'}]
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--neon-cyan)]/15 text-[var(--muted-foreground)] bg-[var(--neon-cyan)]/3 hover:border-[var(--neon-cyan)]/30 hover:text-[var(--neon-cyan)] transition-all duration-150"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] transition-colors duration-200"
            >
              <GitHubIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--neon-sky)] transition-colors duration-200"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}

          {project.tags && project.tags.length > 0 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--neon-cyan)] transition-colors ml-auto"
              aria-expanded={expanded}
            >
              {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              Tags
            </button>
          )}
        </div>

        {/* Expanded tags */}
        <AnimatePresence>
          {expanded && project.tags && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--neon-cyan)]/10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/20 text-[var(--neon-sky)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
