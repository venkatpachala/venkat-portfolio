import { Github } from "lucide-react";
import { profile } from "@/data/profile";
import { meetUrl, socials } from "@/data/socials";

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

const iconLink = "inline-flex size-10 items-center justify-center text-fg hover:text-muted";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 pt-8 pb-2">
      <h1 className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[1.85rem] leading-tight font-semibold tracking-tight text-fg sm:gap-x-3 sm:text-5xl sm:leading-[1.15] lg:text-[3.375rem] lg:leading-[1.2]">
        <span>Hey, I'm</span>
        <img
          src="/profile.jpg"
          alt=""
          width={46}
          height={46}
          className="size-9 rounded-lg bg-white object-contain sm:size-11 sm:rounded-xl"
        />
        <span>{profile.name}</span>
      </h1>
      <div className="mt-6 max-w-xl space-y-3 text-[15px] leading-relaxed text-fg/90 sm:mt-8 sm:space-y-4 sm:text-base">
        <p>
          I'm an <span className="font-semibold text-fg">AI Engineer</span>.
        </p>
        <p>
          I build agentic systems, retrieval, and the backends around them. The model can reason.{" "}
          <span className="font-semibold text-fg">Policy still decides</span>.
        </p>
        <p>
          I mostly work with <span className="font-medium text-fg">Python</span>,{" "}
          <span className="font-medium text-fg">FastAPI</span>,{" "}
          <span className="font-medium text-fg">LangGraph</span>, and{" "}
          <span className="font-medium text-fg">local LLMs</span>.
        </p>
        <p>
          Want to work together?{" "}
          <a href={meetUrl} target="_blank" rel="noreferrer" className="text-fg underline underline-offset-4">
            Let's talk
          </a>
          . Based in India.
        </p>
      </div>
      <div className="mt-5 flex items-center gap-1">
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
