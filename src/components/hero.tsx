import { Github, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

const iconLink = "inline-flex size-10 items-center justify-center text-fg hover:opacity-50";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 pt-6 pb-2">
      <div className="flex items-center gap-4">
        <img
          src="/profile.jpg"
          alt=""
          width={72}
          height={72}
          className="size-16 rounded-2xl border border-line bg-surface object-contain sm:size-[72px]"
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-fg sm:text-[2rem]">{profile.name}</h1>
          <p className="mt-1 text-sm text-muted">AI Engineer</p>
        </div>
      </div>

      <dl className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3">
        <div>
          <dt className="text-[11px] tracking-wider text-faint uppercase">Location</dt>
          <dd className="mt-1 flex items-center gap-1.5 text-sm text-fg">
            <MapPin className="size-3.5" aria-hidden="true" />
            India
          </dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-wider text-faint uppercase">Email</dt>
          <dd className="mt-1 text-sm">
            <a href={`mailto:${socials.email}`} className="inline-flex max-w-full items-center gap-1.5 break-all hover:underline">
              <Mail className="size-3.5" aria-hidden="true" />
              {socials.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-wider text-faint uppercase">GitHub</dt>
          <dd className="mt-1 text-sm">
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:underline">
              venkatpachala
            </a>
          </dd>
        </div>
      </dl>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-fg sm:text-[15px]">
        I build agentic systems, retrieval, and the backends around them. The model can reason.
        Policy still decides. Currently working on self-corrective and self-evolving agents.
      </p>

      <div className="mt-4 flex items-center gap-1">
        <a href={socials.x} target="_blank" rel="noreferrer" aria-label="X" className={iconLink}>
          <XIcon />
        </a>
        <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
          <Github className="size-4" aria-hidden="true" />
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
          <LinkedInIcon />
        </a>
      </div>
    </section>
  );
}
