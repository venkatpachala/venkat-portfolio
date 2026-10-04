import {
  siDocker,
  siFastapi,
  siGrafana,
  siHuggingface,
  siLangchain,
  siLanggraph,
  siNeo4j,
  siOllama,
  siPostgresql,
  siPrometheus,
  siPydantic,
  siPython,
  siQdrant,
  type SimpleIcon,
} from "simple-icons";
import { SectionHeading } from "@/components/section-heading";

const icons: SimpleIcon[] = [
  siPython,
  siFastapi,
  siPydantic,
  siPostgresql,
  siDocker,
  siLangchain,
  siLanggraph,
  siOllama,
  siHuggingface,
  siQdrant,
  siNeo4j,
  siGrafana,
  siPrometheus,
];

function isDark(hex: string) {
  const r = Number.parseInt(hex.slice(0, 2), 16);
  const g = Number.parseInt(hex.slice(2, 4), 16);
  const b = Number.parseInt(hex.slice(4, 6), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 48;
}

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-24 py-8 sm:py-12" aria-labelledby="stack-title">
      <SectionHeading id="stack-title" title="tech stack" />
      <ul className="mt-5 flex flex-wrap gap-2">
        {icons.map((icon) => (
          <li
            key={icon.slug}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-transparent px-2.5 py-1.5 text-[13px] text-fg transition-transform hover:-translate-y-0.5"
          >
            <span
              className={`flex size-4 shrink-0 items-center justify-center ${isDark(icon.hex) ? "rounded-[3px] bg-white" : ""}`}
            >
              <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
                <path d={icon.path} fill={`#${icon.hex}`} />
              </svg>
            </span>
            {icon.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
