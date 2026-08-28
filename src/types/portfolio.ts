export type ProjectStatus =
  'Operational' | 'Working MVP' | 'Maintained' | 'Paused' | 'Archived';

export type DisclosureLevel =
  'public' | 'public-case-study' | 'sanitized-case-study' | 'private-reference';

export type ProjectCategory =
  | 'AI & Agents'
  | 'Automation'
  | 'Scheduling'
  | 'Data / Workflow'
  | 'Sports Operations'
  | 'Web Applications';

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'github' | 'demo' | 'document' | 'external';
}

export interface ProjectEvidence {
  type:
    | 'screenshot'
    | 'diagram'
    | 'workflow'
    | 'demo'
    | 'repository'
    | 'sample-output';
  src?: string;
  alt?: string;
  caption?: string;
  steps?: string[];
  sampleRows?: Array<{
    label: string;
    value: string;
  }>;
}

export interface DevelopmentNote {
  date: string;
  type: 'Build' | 'Iteration' | 'Experiment' | 'Reflection';
  text: string;
}

export interface PortfolioProject {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  disclosure: DisclosureLevel;
  featured: boolean;
  categories: ProjectCategory[];
  technologies: string[];
  problem: string;
  system: string;
  engineering: string;
  outcome: string;
  evolution: string;
  evidence: ProjectEvidence[];
  links: ProjectLink[];
  developmentNotes: DevelopmentNote[];
  contribution?: string;
  confidentialityNote?: string;
}
