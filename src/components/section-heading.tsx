export function SectionHeading({
  id,
  title,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
}) {
  return (
    <h2 id={id} className="font-mono text-[15px] text-muted">
      <span className="text-faint"># </span>
      {title}
    </h2>
  );
}
