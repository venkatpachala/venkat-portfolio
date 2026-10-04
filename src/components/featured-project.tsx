import type { Project } from "@/data/projects";

export function ProjectRow({ project }: { project: Project }) {
  const github = project.links.find((link) => link.label === "GitHub") ?? project.links[0];

  return (
    <article>
      <h3 className="text-base font-medium text-fg">
        {github ? (
          <a href={github.href} target="_blank" rel="noreferrer" className="hover:underline">
            {project.name}
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{project.summary}</p>
    </article>
  );
}
