import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "@/components/activity";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { OpenSource } from "@/components/open-source";
import { ProjectRow } from "@/components/featured-project";
import { Research } from "@/components/research";
import { SectionHeading } from "@/components/section-heading";
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
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="content" className="mx-auto w-full max-w-2xl px-4 pb-12 sm:px-6 sm:pb-16">
        <Hero />
        <Activity activity={activity} />
        <Research />
        <OpenSource />
        <section id="projects" className="scroll-mt-24 py-8 sm:py-12" aria-labelledby="work-title">
          <SectionHeading id="work-title" title="projects" />
          <div className="mt-5 flex flex-col gap-7">
            {projects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </section>
        <Skills />
        <Footer />
      </main>
    </>
  );
}
