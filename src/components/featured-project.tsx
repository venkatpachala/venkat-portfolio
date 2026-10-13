import type { Project } from "@/data/projects";

export function ProjectRow({ project }: { project: Project }) {
  const github = project.links.find((link) => link.label === "GitHub") ?? project.links[0];

  return (
    <article className="border-t border-line">
      <a
        href={github?.href}
        target="_blank"
        rel="noreferrer"
        className="group block py-5 transition-transform duration-200 hover:translate-x-1.5 sm:py-6"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base text-fg sm:text-lg">
            <span className="mr-3 text-[11px] text-faint">{project.index}</span>
            {project.name}
          </h3>
          <span className="shrink-0 text-[11px] tracking-wide text-faint uppercase">
            {project.status}
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              ↗
            </span>
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-2 text-[11px] tracking-wide text-faint">{project.pipeline.slice(0, 5).join(" → ")}</p>
      </a>
    </article>
  );
}
