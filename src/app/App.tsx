import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
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
        <FoundationSection
          id="work"
          eyebrow="Work"
          title="Project evidence, structured before it is presented."
          description="The project system is ready for verified case studies. Public work will appear only after its claims, links, and disclosure level pass review."
          links={[
            { label: 'Selected projects scaffold', href: '#projects' },
            { label: 'Case-study scaffold', href: '#case-studies' },
          ]}
        />
        <FoundationSection
          id="projects"
          eyebrow="Selected projects"
          title="No unverified projects are rendered."
          description="The typed project collection is intentionally empty during initialization. Issue #2 will add the first inventory-grounded project through the reusable content path."
        />
        <FoundationSection
          id="case-studies"
          eyebrow="Case studies"
          title="Problem → System → Engineering → Outcome → Evolution"
          description="Every featured project will use this shared five-part structure. The foundation does not fabricate unfinished case-study content."
        />
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
