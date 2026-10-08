import Head from "next/head";
import { ProjectCard } from "../components/project-card";
import { projects } from "../components/project-data";

export default function Projects() {
  return (
    <>
      <Head><title>Projects | Alexander Turco</title></Head>
      <section className="page-container standalone-section">
        <header className="section-header"><div><p className="eyebrow">Selected work</p><h1 className="page-title">Projects & research</h1></div><p className="section-description">Projects spanning computational biology, biomedical AI, and interpretable machine learning.</p></header>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>
    </>
  );
}
