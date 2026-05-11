import Head from "next/head";
import { ProjectCard } from "../components/project-card";
import { projects } from "../components/project-data";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Projects | Alexander Turco</title>
      </Head>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <header className="grid gap-6 border-b border-teal-950/80 pb-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
          <h1 className="text-4xl tracking-tight text-white">Projects</h1>
          <p className="max-w-3xl leading-relaxed text-gray-300/90">
            All biological projects I have worked on have a computational aspect
            to them. Feel free to take a look at the cool projects I have been
            fortunate enough to be involved with.
          </p>
        </header>

        <div className="grid gap-5 pt-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
