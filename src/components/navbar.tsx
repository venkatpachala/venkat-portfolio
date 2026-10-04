const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#open-source", label: "Open Source" },
  { href: "#stack", label: "Stack" },
];

export function Navbar() {
  return (
    <header className="relative z-30">
      <nav
        aria-label="Page"
        className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-4 sm:gap-x-6 sm:px-6 sm:py-5"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 shrink-0 items-center text-sm text-muted hover:text-fg"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
