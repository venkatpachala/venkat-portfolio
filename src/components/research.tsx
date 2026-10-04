import { research } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 py-8 sm:py-12" aria-labelledby="research-title">
      <SectionHeading id="research-title" title="now" />
      <p className="mt-4 text-base font-medium text-fg">{research.title}</p>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
        Agents that inspect their own runs, find what failed, and change the harness from
        evaluation rather than another prompt.
      </p>
      <p className="mt-3 font-mono text-xs tracking-wide text-faint">{research.loop.join("  ·  ")}</p>
    </section>
  );
}
