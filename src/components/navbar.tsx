import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-fg hover:bg-raised"
    >
      {dark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-bg/75 backdrop-blur-md">
      <nav
        aria-label="Page"
        className="mx-auto flex max-w-4xl items-center gap-x-4 px-5 py-2 sm:gap-x-6 sm:px-8"
      >
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-1 sm:justify-start">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm text-fg hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
