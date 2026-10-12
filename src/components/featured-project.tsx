import type { Project } from "@/data/projects";

export function ProjectRow({ project }: { project: Project }) {
  const github = project.links.find((link) => link.label === "GitHub") ?? project.links[0];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex h-36 flex-col justify-between border-b border-line bg-raised p-4">
        <p className="text-[11px] tracking-wide text-faint uppercase">{project.category}</p>
        <p className="text-sm text-muted">{project.pipeline.slice(0, 4).join(" → ")}</p>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-fg">
            {github ? (
              <a href={github.href} target="_blank" rel="noreferrer" className="hover:underline">
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <span className="shrink-0 text-[11px] text-faint">{project.status}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((item) => (
            <li key={item} className="rounded-full border border-line px-2 py-0.5 text-[11px] text-fg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
