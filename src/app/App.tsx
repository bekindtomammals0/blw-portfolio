import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { projects } from '../data/projects';
import { notes } from '../data/notes';
import { AboutSection } from '../sections/AboutSection';
import { ApproachSection } from '../sections/ApproachSection';
import { CaseStudiesSection } from '../sections/CaseStudiesSection';
import { ContactSection } from '../sections/ContactSection';
import { FeaturedWorkSection } from '../sections/FeaturedWorkSection';
import { FoundationSection } from '../sections/FoundationSection';
import { HeroSection } from '../sections/HeroSection';
import { NotesSection } from '../sections/NotesSection';
import type { DevelopmentNote } from '../types/portfolio';

interface AppProps {
  developmentNotes?: DevelopmentNote[];
}

export function App({ developmentNotes = notes }: AppProps) {
  const hasNotes = developmentNotes.length > 0;

  return (
    <div id="top" className="min-h-screen bg-stone-50 text-slate-950">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader hasNotes={hasNotes} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <FeaturedWorkSection projects={projects} />
        <FoundationSection
          id="projects"
          eyebrow="Selected projects"
          title="Additional work stays evidence-gated."
          description="No non-featured projects are published yet. Each project must reach a working state and pass factual, contribution, evidence, and disclosure review before it enters this collection."
        />
        <CaseStudiesSection projects={projects} />
        <NotesSection notes={developmentNotes} projects={projects} />
        <ApproachSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
