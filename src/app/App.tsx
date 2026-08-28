import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { projects } from '../data/projects';
import { CaseStudiesSection } from '../sections/CaseStudiesSection';
import { FeaturedWorkSection } from '../sections/FeaturedWorkSection';
import { FoundationSection } from '../sections/FoundationSection';
import { HeroSection } from '../sections/HeroSection';

export function App() {
  return (
    <div id="top" className="min-h-screen bg-stone-50 text-slate-950">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <FeaturedWorkSection projects={projects} />
        <FoundationSection
          id="projects"
          eyebrow="Selected projects"
          title="Additional work stays evidence-gated."
          description="No non-featured projects are published yet. Each project must reach a working state and pass factual, contribution, evidence, and disclosure review before it enters this collection."
        />
        <CaseStudiesSection projects={projects} />
        <FoundationSection
          id="notes"
          eyebrow="Development notes"
          title="Optional by design."
          description="The notes data source is empty. Later work can add verified Build, Iteration, Experiment, or Reflection entries without making the portfolio depend on frequent publishing."
        />
        <FoundationSection
          id="approach"
          eyebrow="Approach"
          title="A section anchor ready for verified copy."
          description="The final section will explain the documented path from understanding a bottleneck to testing and evolving the simplest system that handles its constraints."
        />
        <FoundationSection
          id="about"
          eyebrow="About"
          title="Professional context without a resume wall."
          description="The initialized layout keeps this section independent of a photograph and leaves the final concise biography to its implementation issue."
        />
        <FoundationSection
          id="contact"
          eyebrow="Contact"
          title="Public contact links are awaiting verification."
          description="Brian is based in the Philippines. Email, GitHub, LinkedIn, and Upwork links remain omitted until their production values are supplied and approved."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
