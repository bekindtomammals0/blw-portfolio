import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { projects } from '../data/projects';
import { AboutSection } from '../sections/AboutSection';
import { ApproachSection } from '../sections/ApproachSection';
import { CaseStudiesSection } from '../sections/CaseStudiesSection';
import { ContactSection } from '../sections/ContactSection';
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
        <ApproachSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
