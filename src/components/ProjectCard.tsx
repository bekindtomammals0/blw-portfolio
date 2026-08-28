import type { PortfolioProject } from '../types/portfolio';
import { ProjectEvidence } from './ProjectEvidence';

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-copy">
        <div className="metadata-row">
          <span className="status-tag">{project.status}</span>
          {project.categories.slice(0, 2).map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <h3>{project.name}</h3>
        <p>{project.tagline}</p>
        <a className="text-link project-link" href={`#project-${project.slug}`}>
          Explore system <span aria-hidden="true">↓</span>
        </a>
      </div>
      {project.evidence[0] ? (
        <ProjectEvidence evidence={project.evidence[0]} />
      ) : null}
    </article>
  );
}
