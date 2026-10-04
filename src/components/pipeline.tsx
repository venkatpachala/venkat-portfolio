import { ChevronRight } from "lucide-react";

export function Pipeline({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-1.5">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-1.5">
          <span className="rounded-md border border-line bg-bg px-2 py-1 font-mono text-xs text-fg">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ChevronRight className="size-3.5 text-faint" aria-hidden="true" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-bg/40 px-3 py-1 text-sm text-fg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
