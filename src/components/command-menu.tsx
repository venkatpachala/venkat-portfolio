"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Search } from "lucide-react";

const items = [
  { href: "#top", label: "Home" },
  { href: "#research", label: "Research" },
  { href: "#stack", label: "Tech stack" },
  { href: "#open-source", label: "Open source" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3 text-sm text-muted hover:text-fg">
        <Search className="size-3.5" aria-hidden="true" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-xs text-faint">⌘K</kbd>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60" />
        <Dialog.Content className="fixed top-24 left-1/2 z-50 w-[min(100%-2rem,28rem)] -translate-x-1/2 rounded-2xl border border-line bg-surface p-2 shadow-none">
          <Dialog.Title className="px-3 py-2 text-sm text-muted">Jump to</Dialog.Title>
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-xl px-3 text-sm text-fg hover:bg-raised"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
