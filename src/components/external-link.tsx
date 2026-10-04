import { ArrowUpRight } from "lucide-react";

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex min-h-11 items-center gap-1 text-sm text-fg ${className}`}
    >
      {children}
      <ArrowUpRight
        className="size-3.5 text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
