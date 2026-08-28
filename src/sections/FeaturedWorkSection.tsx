import { ProjectCard } from '../components/ProjectCard';
import type { PortfolioProject } from '../types/portfolio';

interface FeaturedWorkSectionProps {
  projects: PortfolioProject[];
}

export function FeaturedWorkSection({ projects }: FeaturedWorkSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section
      id="work"
      className="section-anchor border-t border-slate-300"
      aria-labelledby="work-title"
    >
      <div className="page-shell py-16 sm:py-24">
        <p className="eyebrow">Featured work</p>
        <h2 id="work-title" className="section-title">
          Systems built around real operational problems.
        </h2>
        <div className="mt-10 grid gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
