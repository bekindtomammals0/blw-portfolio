import type { DisclosureLevel, PortfolioProject } from '../types/portfolio';
import { ProjectEvidence } from './ProjectEvidence';

interface ProjectCaseStudyProps {
  project: PortfolioProject;
}

const caseStudyFields = [
  ['Problem', 'problem'],
  ['System', 'system'],
  ['Engineering', 'engineering'],
  ['Outcome', 'outcome'],
  ['Evolution', 'evolution'],
] as const;

const disclosureLabels: Record<DisclosureLevel, string> = {
  public: 'Public',
  'public-case-study': 'Public case study',
  'sanitized-case-study': 'Sanitized case study',
  'private-reference': 'Private reference',
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article
      id={`project-${project.slug}`}
      className="project-case-study section-anchor"
      aria-label={`${project.name} case study`}
    >
      <header className="case-study-header">
        <div>
          <p className="eyebrow">Featured case study</p>
          <h3>{project.name}</h3>
          <p className="case-study-tagline">{project.tagline}</p>
        </div>
        <dl className="project-metadata">
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Disclosure</dt>
            <dd>{disclosureLabels[project.disclosure]}</dd>
          </div>
          {project.categories.length > 0 ? (
            <div>
              <dt>Category</dt>
              <dd>{project.categories.join(', ')}</dd>
            </div>
          ) : null}
          {project.technologies.length > 0 ? (
            <div>
              <dt>Technologies</dt>
              <dd>{project.technologies.join(', ')}</dd>
            </div>
          ) : null}
        </dl>
      </header>

      {project.confidentialityNote ? (
        <p className="disclosure-note">{project.confidentialityNote}</p>
      ) : null}

      {project.contribution ? (
        <section
          className="contribution-note"
          aria-labelledby={`${project.slug}-contribution`}
        >
          <h4 id={`${project.slug}-contribution`}>Contribution</h4>
          <p>{project.contribution}</p>
        </section>
      ) : null}

      {project.evidence.map((evidence, index) => (
        <ProjectEvidence
          evidence={evidence}
          key={`${evidence.type}-${index}`}
        />
      ))}

      <div className="case-study-grid">
        {caseStudyFields.map(([label, field]) => (
          <section key={field} aria-labelledby={`${project.slug}-${field}`}>
            <p className="case-study-number" aria-hidden="true">
              {String(
                caseStudyFields.findIndex((item) => item[1] === field) + 1,
              ).padStart(2, '0')}
            </p>
            <h4 id={`${project.slug}-${field}`}>{label}</h4>
            <p>{project[field]}</p>
          </section>
        ))}
      </div>

      {project.links.length > 0 ? (
        <ul className="project-links" aria-label={`${project.name} links`}>
          {project.links.map((link) => (
            <li key={link.href}>
              <a className="text-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
