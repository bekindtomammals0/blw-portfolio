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
  {
    slug: 'badminton-tournament-operations',
    name: 'Badminton Tournament Operations System',
    tagline:
      'An evolving family of event tools that structures registration, scheduling, match progression, and event-day coordination.',
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
      'The engineering centered on shared information structures and dependable handoffs between stages. Spreadsheet-based event artifacts organized participant records, schedule assignments, match state, and event-day information so organizers could move from intake to live operations through one coherent model. The public diagrams use synthetic participant records and abstract states rather than copied event data.',
    outcome:
      'The organizing team had a more structured way to coordinate tournament information across registration, scheduling, live match progression, and event-day decisions. Outcomes remain qualitative because no reviewed source supports a public claim about participant scale, time saved, or performance improvement.',
    evolution:
      'Tools created for multiple events evolved as one operational system family rather than as duplicate projects. Later artifacts extended the recurring lifecycle and adapted the shared structure to new event needs; specific redesigns or measured improvements remain unclaimed until their source evidence is reviewed.',
    evidence: [
      {
        type: 'workflow',
        alt: 'Abstract workflow showing registration records flow into scheduling, match progression, and event-day coordination.',
        caption:
          'Synthetic tournament lifecycle — reconstructed from the system model with no participant or production data.',
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
          'Synthetic event-day flow — abstract states illustrate how one match update informs the next action.',
        steps: [
          'Scheduled match',
          'Court assignment',
          'Result update',
          'Next action',
        ],
      },
    ],
    links: [],
    developmentNotes: [],
    contribution:
      'Brian structured the tournament lifecycle across the related event tools and adapted their operational views as event needs changed.',
    confidentialityNote:
      'Sanitized case study. Synthetic participant records replace names and contact details; production spreadsheets, links, and event records are excluded.',
  },
  {
    slug: 'blwfinbot',
    name: 'BLWFinBot',
    tagline:
      'A conversational personal-finance system for recording transactions and checking whether income can support a goal.',
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
      'Python services separate Telegram interaction, deterministic parsing and ordered categorization rules, speech transcription, scheduling, and storage. Google Sheets is the verified operational Ledger behind a shared storage interface; a SQLAlchemy/PostgreSQL-capable implementation also exists, but a production cutover is not claimed. TF-IDF and K-Means discover recurring Uncategorized descriptions for rule improvement rather than deciding transaction categories at runtime.',
    outcome:
      'The operational v1 system made transaction capture, correction, categorization, and goal checks available through one conversational workflow. No quantitative time-saving, accuracy, or financial-outcome claim is made because none has an approved verification source.',
    evolution:
      'The current public baseline is the verified v1 runtime. Planned v2 work—including a production PostgreSQL cutover, Financial Accounts, Transfers, liabilities, balance reconciliation, a structured analytics Dashboard, and portfolio-aware Goals—is incomplete and is not presented as implemented behavior.',
    evidence: [
      {
        type: 'workflow',
        alt: 'Synthetic Telegram message flows through deterministic parsing, ordered categorization, and the Ledger.',
        caption:
          'Synthetic capture flow — reconstructed behavior with no real messages, receipts, or financial values.',
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
          'Synthetic goal flow — an abstract example of verified v1 behavior, not personal financial advice or data.',
        steps: [
          'Contract income',
          'Income projection',
          'Goal feasibility',
          'Drift alert',
        ],
      },
    ],
    links: [],
    developmentNotes: [],
    contribution:
      'Brian directed the problem definition, requirements, architecture and implementation decisions, validation, debugging, release baseline, and deployment constraints. AI-assisted development accelerated implementation, debugging, documentation, and iteration; requirements, system behavior, constraints, validation, and final engineering decisions remained human-directed.',
    confidentialityNote:
      'Sanitized case study. Synthetic financial data replaces personal values, messages, Ledger rows, goals, and receipts; credentials, contract rates, internal deployment details, and the private repository are excluded.',
  },
] satisfies PortfolioProject[];
