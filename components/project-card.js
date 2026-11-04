import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";

export const ProjectCard = ({ project, headingLevel = "h3" }) => {
  const isExternal = project.href.startsWith("http");
  const Heading = headingLevel;
  const linkProps = {
    href: project.href,
    ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };

  return (
    <article className="project-card">
      <a {...linkProps} className="project-image-link" aria-label={`Open ${project.title}${isExternal ? " (opens in a new tab)" : ""}`}>
        <Image
          src={project.image}
          alt={project.imageAlt || project.title}
          fill
          sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1216px) calc((100vw - 96px) / 2), 544px"
          className="project-image"
        />
        <span className="project-open-icon" aria-hidden="true"><AiOutlineArrowUp /></span>
      </a>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          <time dateTime={project.dateTime}>{project.date}</time>
        </div>
        <Heading className="project-title">{project.title}</Heading>
        <p className="project-summary">{project.summary}</p>
        <details className="project-details">
          <summary>
            <span>About this project<span className="sr-only">: {project.title}</span></span>
            <AiOutlinePlus aria-hidden="true" />
          </summary>
          <p>{project.description}</p>
        </details>
        <a {...linkProps} className="text-link project-link" aria-label={`${project.linkLabel}: ${project.title}${isExternal ? " (opens in a new tab)" : ""}`}>
          {project.linkLabel}
          {isExternal ? <span aria-hidden="true">↗</span> : <AiOutlineArrowRight aria-hidden="true" />}
        </a>
      </div>
    </article>
  );
};
