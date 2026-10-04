import { contactLinks } from "@/data/socials";

export function Footer() {
  const links = contactLinks();

  return (
    <footer id="contact" className="scroll-mt-24 py-8 sm:py-12">
      <h2 className="font-mono text-[15px] text-muted">
        <span className="text-faint"># </span>
        contact
      </h2>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-fg underline decoration-white/25 underline-offset-4 hover:decoration-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-faint">Venkat · AI Engineer</p>
    </footer>
  );
}
