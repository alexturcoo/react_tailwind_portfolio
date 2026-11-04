import { useId, useState } from "react";
import { ProjectCard } from "./project-card";
import { projects } from "./project-data";

const filters = ["All work", "Machine learning", "Genomics", "Tools & teaching"];

export const ProjectCollection = ({ headingLevel = "h3" }) => {
  const [filter, setFilter] = useState("All work");
  const resultsId = useId();
  const visibleProjects = filter === "All work"
    ? projects
    : projects.filter((project) => project.topics.includes(filter));

  return (
    <>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects by topic">
          {filters.map((topic) => (
            <button
              key={topic}
              type="button"
              aria-pressed={filter === topic}
              aria-controls={resultsId}
              onClick={() => setFilter(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
        <p className="project-count" role="status" aria-live="polite" aria-atomic="true">
          {visibleProjects.length} projects<span className="sr-only">{filter === "All work" ? " in all work" : ` in ${filter}`}</span>
        </p>
      </div>
      <div className="project-grid" id={resultsId}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.href} project={project} headingLevel={headingLevel} />
        ))}
      </div>
    </>
  );
};
