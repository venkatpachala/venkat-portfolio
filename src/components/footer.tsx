import type { FormEvent } from "react";
import { Github } from "lucide-react";
import { meetUrl, socials } from "@/data/socials";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Contact() {
  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(`Hello from ${name || "portfolio"}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 py-6 sm:py-8" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-[11px] tracking-[0.16em] text-faint uppercase">
        Let's work together
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-5">
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Pick a way to reach me. I'm open to AI engineering roles and serious collaborations.
          </p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            <li>
              <a href={meetUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between py-3 hover:opacity-70">
                <span>
                  <span className="block text-sm font-semibold">Schedule a call</span>
                  <span className="text-xs text-faint">Put a time on my calendar</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${socials.email}`} className="flex items-center justify-between py-3 hover:opacity-70">
                <span>
                  <span className="block text-sm font-semibold">{socials.email}</span>
                  <span className="text-xs text-faint">Quick questions</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={socials.x} target="_blank" rel="noreferrer" className="flex items-center justify-between py-3 hover:opacity-70">
                <span>
                  <span className="block text-sm font-semibold">Message on X</span>
                  <span className="text-xs text-faint">@Venkatpachalaa</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
        <form onSubmit={send} className="rounded-2xl border border-line bg-surface p-5">
          <h3 className="text-lg font-semibold">Send a message</h3>
          <p className="mt-2 text-sm text-muted">This opens your email app with the note filled in.</p>
          <label className="mt-4 block text-xs text-faint">
            Name
            <input name="name" required className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm text-fg outline-none focus:border-fg" />
          </label>
          <label className="mt-3 block text-xs text-faint">
            Email
            <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm text-fg outline-none focus:border-fg" />
          </label>
          <label className="mt-3 block text-xs text-faint">
            Message
            <textarea name="message" required rows={4} className="mt-1 w-full resize-y rounded-xl border border-line bg-bg px-3 py-2 text-sm text-fg outline-none focus:border-fg" />
          </label>
          <button type="submit" className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-line text-sm font-semibold hover:bg-fg hover:text-bg">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 text-sm text-muted">
      <p>© {new Date().getFullYear()} Venkat.</p>
      <div className="flex items-center gap-3">
        <a href={socials.x} target="_blank" rel="noreferrer" aria-label="X" className="hover:text-fg">
          <XIcon />
        </a>
        <a href={`mailto:${socials.email}`} aria-label="Email" className="hover:text-fg">
          Email
        </a>
        <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg">
          <Github className="size-4" />
        </a>
      </div>
    </footer>
  );
}
