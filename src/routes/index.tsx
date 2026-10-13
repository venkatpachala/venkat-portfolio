import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "@/components/activity";
import { Contact, Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectRow } from "@/components/featured-project";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";
import { fetchGithubActivity } from "@/data/github";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  loader: () => fetchGithubActivity(),
  component: Home,
});

function Home() {
  const activity = Route.useLoaderData();

  return (
    <>
      <div className="frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="content" className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-10 sm:px-8 sm:pb-14">
        <Hero />
        <Activity activity={activity} />
        <Skills />
        <section id="projects" className="scroll-mt-24 py-6 sm:py-8" aria-labelledby="work-title">
          <h2 id="work-title" className="text-[11px] tracking-[0.16em] text-faint uppercase">
            Featured projects
          </h2>
          <div className="mt-5 border-b border-line">
            {projects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </section>
        <Research />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
