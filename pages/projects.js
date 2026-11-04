import Head from "next/head";
import { ProjectCollection } from "../components/project-collection";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Alexander Turco</title>
        <meta name="description" content="Explore Alexander Turco’s projects in computational biology, biomedical AI, genomics tools, and interpretable machine learning." />
      </Head>
      <section className="page-container standalone-section" aria-labelledby="projects-title">
        <header className="section-header">
          <div>
            <p className="eyebrow">Selected work</p>
            <h1 className="page-title" id="projects-title">Projects & research</h1>
          </div>
          <p className="section-description">Projects spanning computational biology, biomedical AI, and interpretable machine learning.</p>
        </header>
        <ProjectCollection headingLevel="h2" />
      </section>
    </>
  );
}
