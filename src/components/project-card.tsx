import type { Project } from "@/data/projects";
import { Pipeline, TechList } from "@/components/pipeline";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-faint">{project.index}</p>
          <h3 className="mt-1 text-lg font-bold tracking-tight text-fg">{project.name}</h3>
          <p className="text-sm text-muted">{project.category}</p>
        </div>
        <span className="rounded-full border border-line px-2 py-1 text-xs text-faint">
          {project.status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-3">
        <Pipeline steps={project.pipeline} />
      </div>
      <div className="mt-3">
        <TechList items={project.tech} />
      </div>
      <div className="mt-auto flex flex-wrap gap-x-4 pt-2">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-sm text-fg hover:text-primary-soft"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </article>
  );
}
