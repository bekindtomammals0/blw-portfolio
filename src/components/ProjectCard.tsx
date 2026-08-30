import type { PortfolioProject } from '../types/portfolio';
import { imageEvidenceFor } from '../data/imageEvidence';
import { ProjectEvidence } from './ProjectEvidence';

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const headingId = `project-card-${project.slug}`;
  const cardEvidence = imageEvidenceFor(project.imageEvidenceSlug, 'card')[0];

  return (
    <article className="project-card" aria-labelledby={headingId}>
      <div className="project-card-copy">
        <div className="metadata-row">
          <span className="status-tag">{project.status}</span>
          {project.categories.slice(0, 2).map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <h3 id={headingId}>{project.name}</h3>
        <p>{project.tagline}</p>
        <a
          className="text-link project-link"
          href={`#project-${project.slug}`}
          aria-label={`Explore ${project.name}`}
        >
          Explore system <span aria-hidden="true">↓</span>
        </a>
      </div>
      {(cardEvidence ?? project.evidence[0]) ? (
        <ProjectEvidence evidence={cardEvidence ?? project.evidence[0]} />
      ) : null}
    </article>
  );
}
