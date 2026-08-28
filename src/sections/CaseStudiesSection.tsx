import { ProjectCaseStudy } from '../components/ProjectCaseStudy';
import type { PortfolioProject } from '../types/portfolio';

interface CaseStudiesSectionProps {
  projects: PortfolioProject[];
}

export function CaseStudiesSection({ projects }: CaseStudiesSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section
      id="case-studies"
      className="section-anchor border-t border-slate-300"
      aria-labelledby="case-studies-title"
    >
      <div className="page-shell py-16 sm:py-24">
        <p className="eyebrow">Case studies</p>
        <h2 id="case-studies-title" className="section-title">
          Problem → System → Engineering → Outcome → Evolution
        </h2>
        <div className="mt-12 grid gap-20">
          {featuredProjects.map((project) => (
            <ProjectCaseStudy project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
