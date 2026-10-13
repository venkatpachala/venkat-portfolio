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
    <section id="stack" className="scroll-mt-24 py-6 sm:py-8" aria-labelledby="stack-title">
      <h2 id="stack-title" className="text-[11px] tracking-[0.16em] text-faint uppercase">
        Tech stack
      </h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {icons.map((icon) => (
          <li key={icon.slug} title={icon.title}>
            <span className="sr-only">{icon.title}</span>
            <svg viewBox="0 0 24 24" className="size-8 text-fg" aria-hidden="true">
              <path
                d={icon.path}
                fill={isDark(icon.hex) ? "currentColor" : `#${icon.hex}`}
              />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
}
