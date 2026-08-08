# Project Content Model

## Goal

Project content must be data-driven so a spreadsheet workflow, private institutional system, AI agent, and public code repository can all use the same portfolio components.

Do not hardcode a unique JSX layout for every project.

---

## Recommended TypeScript model

```ts
export type ProjectStatus =
  | "Operational"
  | "Working MVP"
  | "Maintained"
  | "Paused"
  | "Archived";

export type DisclosureLevel =
  | "public"
  | "public-case-study"
  | "sanitized-case-study"
  | "private-reference";

export type ProjectCategory =
  | "AI & Agents"
  | "Automation"
  | "Scheduling"
  | "Data / Workflow"
  | "Sports Operations"
  | "Web Applications";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "github" | "demo" | "document" | "external";
}

export interface ProjectEvidence {
  type:
    | "screenshot"
    | "diagram"
    | "workflow"
    | "demo"
    | "repository"
    | "sample-output";
  src?: string;
  alt?: string;
  caption?: string;
}

export interface DevelopmentNote {
  date: string; // ISO YYYY-MM-DD
  type: "Build" | "Iteration" | "Experiment" | "Reflection";
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
```

---

## Important modeling rules

### Do not require GitHub

`links` may be empty.

Private and spreadsheet systems must render normally.

### Do not require version numbers

Versions are not highlighted portfolio information.

If version history matters, express it inside `evolution` or development notes.

### Do not require start dates

Dates should not become visual clutter.

### Do not equate privacy with incompleteness

A private operational system can be stronger portfolio evidence than a public tutorial repository.

### Keep outcome separate from implementation

Example:

**Implementation**
> Google Sheets formulas, validation rules, structured tables, and workflow views.

**Outcome**
> Organizers could coordinate registration, scheduling, and match operations from a shared source of truth.

---

## Project card content

Each card should use:

- name;
- tagline or one-sentence purpose;
- status;
- 1–2 categories;
- evidence thumbnail;
- anchor to case study.

Optional:
- GitHub/demo icon.

Do not display all technologies on cards when it creates visual noise.

---

## Case-study content

### Problem

Answer:
- What was happening before?
- What was hard to predict, coordinate, or repeat?
- Who was affected?
- What scale or constraints mattered?

### System

Answer:
- What information enters the system?
- What rules or workflow does it apply?
- What does it produce?
- How do users interact with it?

### Engineering

Answer:
- What architecture or data model matters?
- Why were these technologies selected?
- What automation or algorithm is important?
- Where did AI-assisted development contribute?
- What technical constraint shaped the solution?

### Outcome

Answer:
- What became easier to coordinate?
- What errors or ambiguity were reduced?
- What new visibility became possible?
- What scale could a small team handle?

Only include quantitative metrics when verified.

### Evolution

Answer:
- What changed after actual use?
- What was simplified?
- What earlier design failed or became unnecessary?
- What would the next version improve?

---

## Evidence prioritization

For a major project, prefer:

1. system overview diagram;
2. one strong interface/workflow screenshot;
3. one technical/data-flow diagram;
4. optional sanitized sample output;
5. GitHub/demo link.

Do not dump many screenshots into a gallery without narrative context.

---

## Development note model

Notes must remain optional.

Example data:

```ts
{
  date: "2026-08-07",
  type: "Iteration",
  text: "Reworked the project model so private systems can be documented without requiring a public repository."
}
```

Do not fabricate historical notes. Add only events Brian can verify.
