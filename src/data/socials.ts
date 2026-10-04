/** Public handles only. Leave a field empty to hide that link. */
export const socials = {
  github: "https://github.com/venkatpachala",
  x: "https://x.com/Venkatpachalaa",
  linkedin: "https://www.linkedin.com/in/venkata-sai-teja-vnrvjiet",
  email: "",
} as const;

/** Opens Google Calendar so someone can put a meeting on the primary calendar. */
export const meetUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meet%20with%20Venkat&details=Scheduled%20from%20the%20portfolio.&add=venkatasai.store%40gmail.com&ctz=Asia%2FKolkata";

export type SocialLink = {
  label: string;
  href: string;
};

export function contactLinks(): SocialLink[] {
  const links: SocialLink[] = [
    { label: "Book a call", href: meetUrl },
    { label: "DM on X", href: socials.x },
    { label: "GitHub", href: socials.github },
  ];
  if (socials.linkedin) links.push({ label: "LinkedIn", href: socials.linkedin });
  if (socials.email) links.push({ label: "Email", href: `mailto:${socials.email}` });
  return links;
}