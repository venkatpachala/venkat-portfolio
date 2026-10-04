import { openSource, openSourcePending } from "@/data/openSource";
import { SectionHeading } from "@/components/section-heading";

export function OpenSource() {
  return (
    <section id="open-source" className="scroll-mt-24 py-8 sm:py-12" aria-labelledby="oss-title">
      <SectionHeading id="oss-title" title="open source" />
      <div className="mt-5 flex flex-col gap-6">
        {openSource.map((item) => (
          <article key={item.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-base font-medium text-fg">
                <a href={item.repositoryUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  {item.name}
                </a>
              </h3>
              {item.contributionsUrl ? (
                <a
                  href={item.contributionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted hover:text-fg"
                >
                  Contribution
                </a>
              ) : null}
            </div>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
              Local knowledge graphs over a repository so agents can query code relationships. The
              current patch stops PHP supertype edges from binding to a same-named symbol in
              another language.
            </p>
          </article>
        ))}
        <p className="text-sm text-faint">{openSourcePending}</p>
      </div>
    </section>
  );
}
