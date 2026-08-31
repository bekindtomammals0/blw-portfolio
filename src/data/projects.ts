import type { PortfolioProject } from '../types/portfolio';

export const projects = [
  {
    slug: 'ui-greenmetric',
    name: 'UI GreenMetric Coordination Dashboard',
    tagline:
      'A shared coordination system for organizing requirements, evidence references, ownership, missing items, and submission status.',
    cardSummary: {
      contribution:
        'Brian designed the shared requirement, evidence, ownership, missing-item, and status structure used to coordinate the workflow.',
      outcome:
        'Made requirements, ownership, missing items, and submission status visible in one shared workflow.',
    },
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
      'The core engineering work was information and workflow design: defining a consistent record for requirements, connecting evidence to responsibility and status, and arranging the shared view around coordination decisions.',
    outcome:
      'The working process became more structured and observable: the coordinating team could use a shared view of what was required, what evidence was referenced, who owned the next action, and which items were still missing.',
    evolution:
      'The operational dashboard is the current verified baseline. No reviewed source documents a specific post-use redesign yet, so further system changes are deliberately left unclaimed until supporting evidence is available.',
    evidence: [
      {
        type: 'workflow',
        alt: 'Abstract workflow showing requirements moving through evidence reference, ownership review, and submission status.',
        caption:
          'Synthetic reconstruction of requirement, evidence, ownership, and status handoffs.',
        steps: ['Requirement', 'Evidence reference', 'Owner review', 'Status'],
      },
    ],
    imageEvidenceSlug: 'ui-greenmetric',
    links: [],
    developmentNotes: [],
    confidentialityNote:
      'Synthetic reconstruction; no institutional records, internal links, credentials, or operational data shown.',
  },
  {
    slug: 'badminton-tournament-operations',
    name: 'Badminton Tournament Operations System',
    tagline:
      'An evolving family of event tools that structures registration, scheduling, match progression, and event-day coordination.',
    cardSummary: {
      contribution:
        'Brian designed the tournament lifecycle structure and implemented operational views that adapted as event needs changed.',
      outcome:
        'Made tournament information more manageable across registration, scheduling, match progression, and event-day decisions.',
    },
    status: 'Operational',
    disclosure: 'sanitized-case-study',
    featured: true,
    categories: ['Sports Operations', 'Data / Workflow'],
    technologies: ['Google Sheets'],
    problem:
      'Tournament organizers needed to carry participant information through registration, scheduling, match progression, and event-day coordination without losing the state of the event between separate activities. The recurring challenge was operational continuity: each stage depended on accurate information from the stage before it.',
    system:
      'The system family connects registration records to scheduling inputs, match assignments, progression updates, and the operational views used during an event. Each tool supports a stage of the same tournament lifecycle, while manual organizer control remains available for event-specific decisions and exceptions.',
    engineering:
      'The engineering centered on shared information structures and dependable handoffs between stages. Spreadsheet-based event artifacts organized participant records, schedule assignments, match state, and event-day information so organizers could move from intake to live operations through one coherent model.',
    outcome:
      'The organizing team had a more structured way to coordinate tournament information across registration, scheduling, live match progression, and event-day decisions. Outcomes remain qualitative because no reviewed source supports a public claim about participant scale, time saved, or performance improvement.',
    evolution:
      'Tools created for multiple events evolved as one operational system family rather than as duplicate projects. Later artifacts extended the recurring lifecycle and adapted the shared structure to new event needs; specific redesigns or measured improvements remain unclaimed until their source evidence is reviewed.',
    evidence: [
      {
        type: 'workflow',
        alt: 'Abstract workflow showing registration records flow into scheduling, match progression, and event-day coordination.',
        caption:
          'Synthetic reconstruction of the tournament lifecycle and its stage-to-stage handoffs.',
        steps: [
          'Registration',
          'Scheduling',
          'Match progression',
          'Event-day coordination',
        ],
      },
      {
        type: 'workflow',
        alt: 'Abstract event-day information flow from scheduled match through result update to the next operational action.',
        caption:
          'Synthetic reconstruction of how a match update informs the next event-day action.',
        steps: [
          'Scheduled match',
          'Court assignment',
          'Result update',
          'Next action',
        ],
      },
    ],
    imageEvidenceSlug: 'badminton-tournament-operations',
    links: [],
    developmentNotes: [],
    contribution:
      'Brian structured the tournament lifecycle across the related event tools and adapted their operational views as event needs changed.',
    confidentialityNote:
      'Synthetic reconstruction; no participant data, production spreadsheets, private links, or event records shown.',
  },
  {
    slug: 'blwfinbot',
    name: 'BLWFinBot',
    tagline:
      'A conversational personal-finance system for recording transactions and checking whether income can support a goal.',
    cardSummary: {
      contribution:
        'Brian directed the requirements, architecture, implementation decisions, validation, debugging, release baseline, and deployment constraints.',
      outcome:
        'Unified transaction capture, correction, categorization, and goal checks in one conversational workflow.',
    },
    status: 'Operational',
    disclosure: 'sanitized-case-study',
    featured: true,
    categories: ['AI & Agents', 'Automation'],
    technologies: [
      'Python',
      'Telegram Bot API',
      'Google Sheets',
      'SQLAlchemy',
      'PostgreSQL',
      'scikit-learn',
      'APScheduler',
    ],
    problem:
      'Personal financial activity arrived in small, everyday moments, while understanding progress toward a goal required records to stay consistent over time. The system needed to make capture convenient without sacrificing deterministic behavior, correction, traceability, or privacy.',
    system:
      'Verified v1 accepts one Income or Expense per Telegram text or voice message, then parses, categorizes, and stores the record in a Ledger. It supports correction and deletion, contract-based Income projection, persisted Goal-feasibility checks, scheduled Goal-drift alerts, and optional read-only receipt import. Manila-time handling keeps dated behavior aligned with the user’s operating context.',
    engineering:
      'Python services separate Telegram interaction, deterministic parsing and ordered categorization rules, speech transcription, scheduling, and storage, with support for an always-on VM deployment. Google Sheets is the verified operational Ledger behind a shared storage interface; a SQLAlchemy/PostgreSQL-capable implementation also exists, but a production cutover is not claimed. TF-IDF and K-Means discover recurring Uncategorized descriptions for rule improvement rather than deciding transaction categories at runtime.',
    outcome:
      'The operational v1 system made transaction capture, correction, categorization, and goal checks available through one conversational workflow. No quantitative time-saving, accuracy, or financial-outcome claim is made because none has an approved verification source.',
    evolution:
      'The current public baseline is the verified v1 runtime. Planned v2 work—including a production PostgreSQL cutover, Financial Accounts, Transfers, liabilities, balance reconciliation, a structured analytics Dashboard, and portfolio-aware Goals—is incomplete and is not presented as implemented behavior.',
    evidence: [
      {
        type: 'workflow',
        alt: 'Synthetic Telegram message flows through deterministic parsing, ordered categorization, and the Ledger.',
        caption:
          'Synthetic reconstruction of the verified v1 capture and categorization flow.',
        steps: [
          'Text or voice',
          'Deterministic parser',
          'Ordered categorization',
          'Ledger',
        ],
      },
      {
        type: 'workflow',
        alt: 'Synthetic goal check flows from contract income projection through persisted feasibility and drift alerts.',
        caption:
          'Synthetic reconstruction of verified v1 income projection, Goal feasibility, and drift alerts.',
        steps: [
          'Contract income',
          'Income projection',
          'Goal feasibility',
          'Drift alert',
        ],
      },
      {
        type: 'sample-output',
        alt: 'Synthetic Ledger sample with one Income and one Expense record.',
        caption:
          'Synthetic Ledger rows illustrating the Income and Expense record structure.',
        sampleRows: [
          {
            label: 'Income · Project payment',
            value: 'PHP 1,200',
          },
          {
            label: 'Expense · Transport',
            value: 'PHP 180',
          },
        ],
      },
    ],
    imageEvidenceSlug: 'blwfinbot',
    links: [],
    developmentNotes: [],
    contribution:
      'Brian directed the problem definition, requirements, architecture and implementation decisions, validation, debugging, release baseline, and deployment constraints. AI-assisted development accelerated implementation, debugging, documentation, and iteration; requirements, system behavior, constraints, validation, and final engineering decisions remained human-directed.',
    confidentialityNote:
      'Synthetic reconstruction; no personal financial data, messages, receipts, contract rates, credentials, deployment details, or private repository links shown.',
  },
  {
    slug: 'b-loom',
    name: 'B-Loom Class & Exam Scheduling System',
    tagline:
      'A constraint-aware application for importing academic data, generating exam schedules, reviewing conflicts, and exporting schedule artifacts.',
    cardSummary: {
      contribution:
        'Brian directed the domain and constraint model, architecture, implementation decisions, validation, debugging, and private deployment constraints.',
      outcome:
        'Brought import, constraint checking, heuristic generation, human review, editing, and export into one scheduling workflow.',
    },
    status: 'Paused',
    disclosure: 'sanitized-case-study',
    featured: true,
    categories: ['Scheduling', 'Web Applications'],
    technologies: [
      'Laravel 13',
      'Vue 3',
      'Inertia',
      'PostgreSQL 16',
      'PgBouncer',
      'Docker Compose',
      'Tailwind CSS 4',
      'Vite 8',
      'Vitest 4',
    ],
    problem:
      'Class and examination scheduling must reconcile limited rooms and periods with overlapping student blocks, instructors, proctors, course groups, and institution-specific review rules. The work needed one system that could make those constraints visible while preserving human control over unresolved or exceptional assignments.',
    system:
      'B-Loom imports class and exam data into period-scoped offerings and schedules, detects conflicts, generates exam assignments with a custom greedy heuristic, supports manual review and edits, and exports schedule artifacts. Its generator scores candidate periods and rooms, places departmental and major groups, and uses an orphan-shaker swap process to attempt recovery of groups that remain unplaced.',
    engineering:
      'A Vue 3 and Inertia interface sits over a Laravel 13 modular monolith backed by PostgreSQL 16. Controllers delegate to domain services, constraint registries, and Eloquent models. Implemented hard placement blockers cover room capacity plus student-block, room, and instructor or proctor overlaps. Other rules—including grouping, adjacent rooms, student daily load, day density, large-group GYM priority, major-room ownership, and graduate-course checks—act as scoring preferences or review advisories where appropriate.',
    outcome:
      'The demonstrable application brings import, constraint checking, heuristic generation, manual review, editing, and export into one scheduling workflow. It is not presented as release-ready or proven conflict-free: the reviewed backend suite is not clean, there is no tagged release or public deployment, and optimizer output remains sensitive to heuristic ordering and weights.',
    evolution:
      'B-Loom is the canonical scheduling application; the earlier university_sched repository is historical evolution rather than the current implementation. Development is paused indefinitely. CP-SAT, genetic algorithms, simulated annealing, and local search are future algorithm families to evaluate, not implemented behavior.',
    evidence: [
      {
        type: 'workflow',
        alt: 'Synthetic scheduling data flows from import through validation, heuristic generation, human review, and export.',
        caption:
          'Synthetic reconstruction of the verified import-to-export scheduling workflow.',
        steps: [
          'Data import',
          'Constraint validation',
          'Greedy generation',
          'Human review',
          'Schedule export',
        ],
      },
      {
        type: 'workflow',
        alt: 'Constraint flow distinguishes hard placement blockers from scoring preferences and review advisories.',
        caption:
          'Synthetic constraint flow distinguishing hard blockers, scoring preferences, and review advisories.',
        steps: [
          'Candidate assignment',
          'Hard blockers',
          'Scoring preferences',
          'Review advisories',
          'Human decision',
        ],
      },
      {
        type: 'workflow',
        alt: 'Synthetic architecture diagram connects the Vue and Inertia interface to Laravel domain services, constraint registries, and PostgreSQL.',
        caption:
          'Synthetic architecture overview of the verified interface, application, domain, and persistence layers.',
        steps: [
          'Vue 3 interface',
          'Inertia',
          'Laravel 13',
          'Domain services and constraints',
          'PostgreSQL 16',
        ],
      },
      {
        type: 'sample-output',
        alt: 'Synthetic schedule review sample with one assigned exam, one conflict, and one TBA room.',
        caption:
          'Reconstructed schedule grid showing assigned, conflicted, and unresolved states.',
        sampleRows: [
          { label: 'SYN-201 · Period A', value: 'Room North-12' },
          { label: 'SYN-305 · Period A', value: 'Block overlap · Review' },
          { label: 'SYN-410 · Period B', value: 'Room TBA' },
        ],
      },
      {
        type: 'sample-output',
        alt: 'Synthetic before and after review sample showing an unresolved assignment becoming a reviewed schedule.',
        caption:
          'Reconstructed before-and-after review — a fictional unresolved input is updated through human review, not an optimizer guarantee.',
        sampleRows: [
          { label: 'Before · SYN-410', value: 'Period B · Room TBA' },
          {
            label: 'After human review · SYN-410',
            value: 'Period C · Room South-04',
          },
        ],
      },
    ],
    imageEvidenceSlug: 'b-loom',
    links: [],
    developmentNotes: [],
    contribution:
      'Brian directed the problem definition, requirements, domain and constraint modeling, architecture and implementation decisions, validation, debugging, and private deployment constraints. AI-assisted development accelerated implementation, debugging, documentation, and iteration; requirements, system behavior, constraints, validation, and final engineering decisions remained Brian-directed.',
    confidentialityNote:
      'Synthetic reconstruction; no institutional records, actual schedules, credentials, internal network details, operational screenshots, or private repository links shown.',
  },
] satisfies PortfolioProject[];

const featuredProjectOrder = [
  'blwfinbot',
  'badminton-tournament-operations',
  'b-loom',
  'ui-greenmetric',
] as const;

export function orderedFeaturedProjects(allProjects: PortfolioProject[]) {
  return allProjects
    .filter((project) => project.featured)
    .slice()
    .sort((left, right) => {
      const leftRank = featuredProjectOrder.indexOf(
        left.slug as (typeof featuredProjectOrder)[number],
      );
      const rightRank = featuredProjectOrder.indexOf(
        right.slug as (typeof featuredProjectOrder)[number],
      );
      return (
        (leftRank === -1 ? Number.MAX_SAFE_INTEGER : leftRank) -
        (rightRank === -1 ? Number.MAX_SAFE_INTEGER : rightRank)
      );
    });
}
