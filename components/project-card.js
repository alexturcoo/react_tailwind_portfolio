import Image from "next/image";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ProjectCard = ({ project }) => {
  const isExternal = project.href.startsWith("http");
  return (
    <article className="project-card">
      <a href={project.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="project-image-link" aria-label={`Open ${project.title}`}>
        <Image src={project.image} alt={project.imageAlt || project.title} fill sizes="(max-width: 760px) 90vw, (max-width: 1200px) 45vw, 550px" className="project-image" />
        <span className="project-open-icon" aria-hidden="true"><AiOutlineArrowUp /></span>
      </a>
      <div className="project-copy">
        <div className="project-meta"><span>{project.category}</span><time dateTime={project.dateTime}>{project.date}</time></div>
        <h3><a href={project.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>{project.title}</a></h3>
        <p className="project-summary">{project.summary}</p>
        <details className="project-details"><summary>About this project</summary><p>{project.description}</p></details>
        <a href={project.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="text-link project-link">{project.linkLabel} <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
};
