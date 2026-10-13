import { research } from "@/data/profile";
import { openSource } from "@/data/openSource";

export function Research() {
  const graphify = openSource[0];

  return (
    <section id="now" className="scroll-mt-24 py-6 sm:py-8" aria-labelledby="now-title">
      <h2 id="now-title" className="text-[11px] tracking-[0.16em] text-faint uppercase">
        Now
      </h2>
      <ol className="mt-5 border-l border-line">
        <li className="relative pb-8 pl-6">
          <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-fg" aria-hidden="true" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-sm font-semibold">
              Research <span className="font-normal text-muted">· {research.title}</span>
            </p>
            <p className="text-xs text-faint">2026</p>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Agents that inspect their own runs, find what failed, and change the harness from
            evaluation rather than another prompt.
          </p>
        </li>
        {graphify ? (
          <li className="relative pl-6">
            <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-faint" aria-hidden="true" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-semibold">
                Open source{" "}
                <a href={graphify.repositoryUrl} target="_blank" rel="noreferrer" className="font-normal hover:underline">
                  · {graphify.name}
                </a>
              </p>
              <p className="text-xs text-faint">In progress</p>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              Local knowledge graphs over a repository. Current patch stops PHP supertype edges from
              binding to a same-named symbol in another language.
            </p>
          </li>
        ) : null}
      </ol>
    </section>
  );
}
