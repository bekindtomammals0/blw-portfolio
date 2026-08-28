import type { PortfolioProject } from '../types/portfolio';

export const projects = [
  {
    slug: 'ui-greenmetric',
    name: 'UI GreenMetric Coordination Dashboard',
    tagline:
      'A shared coordination system for organizing requirements, evidence references, ownership, missing items, and submission status.',
    status: 'Operational',
    disclosure: 'sanitized-case-study',
    featured: true,
    categories: ['Data / Workflow'],
    technologies: [],
    problem:
      'A broad evidence-submission process required many requirements, references, owners, missing items, and status updates to be coordinated. Without one explicit structure, the state of the work was harder to see and manage.',
    system:
      'The dashboard organizes each requirement with its evidence reference, responsible owner, missing-item state, and submission status. These shared fields turn a broad coordination process into a visible workflow that can be reviewed and updated.',
    engineering:
      'The core engineering work was information and workflow design: defining a consistent record for requirements, connecting evidence to responsibility and status, and arranging the shared view around coordination decisions. The public evidence below recreates that flow without copying operational records.',
    outcome:
      'The working process became more structured and observable: the coordinating team could use a shared view of what was required, what evidence was referenced, who owned the next action, and which items were still missing.',
    evolution:
      'The operational dashboard is the current verified baseline. No reviewed source documents a specific post-use redesign yet, so further system changes are deliberately left unclaimed until supporting evidence is available.',
    evidence: [
      {
        type: 'workflow',
        alt: 'Abstract workflow showing requirements moving through evidence reference, ownership review, and submission status.',
        caption:
          'Synthetic workflow — a disclosure-safe reconstruction of the coordination model, not operational data.',
        steps: ['Requirement', 'Evidence reference', 'Owner review', 'Status'],
      },
    ],
    links: [],
    developmentNotes: [],
    confidentialityNote:
      'Sanitized case study. Institutional records, internal links, credentials, and operational data are excluded.',
  },
] satisfies PortfolioProject[];
