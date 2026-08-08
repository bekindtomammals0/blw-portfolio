# GitHub Issue Backlog

Copy each issue body into GitHub after creating `blw-portfolio`.

Labels are recommendations only.

---

# Issue 1 — Initialize the portfolio application

**Labels:** `foundation`, `frontend`, `priority:high`

## Goal

Initialize the single-page portfolio using React, TypeScript, Vite, and Tailwind CSS while preserving the architecture in `CONTEXT.md`.

## Requirements

- React + TypeScript + Vite
- Tailwind CSS
- semantic app shell
- no backend
- no database
- no auth
- no CMS
- lint/format configuration
- basic production build
- preserve repository documentation

## Acceptance criteria

- [ ] `npm install` succeeds.
- [ ] `npm run dev` starts the app.
- [ ] `npm run build` succeeds.
- [ ] Site has semantic `header`, `main`, and `footer`.
- [ ] No confidential project data is added.
- [ ] `CONTEXT.md` remains authoritative.

---

# Issue 2 — Implement structured project content model

**Labels:** `content-model`, `frontend`, `priority:high`

## Goal

Create typed project data so all portfolio work can render from one reusable model.

## Requirements

Implement the model described in `docs/PROJECT_CONTENT_MODEL.md`.

Must support:
- projects with no GitHub repository;
- private/sanitized projects;
- project status;
- disclosure;
- five case-study sections;
- evidence;
- optional development notes.

## Acceptance criteria

- [ ] Project type compiles under strict TypeScript.
- [ ] At least two safe seed projects render from data.
- [ ] No component assumes `githubUrl` exists.
- [ ] No version/start date is required.
- [ ] Status and disclosure use controlled values.

---

# Issue 3 — Build global navigation and hero

**Labels:** `ui`, `accessibility`, `priority:high`

## Goal

Establish the first-screen professional identity.

## Content

- Brian Christopher Bulawan
- AI, Automation & Systems Developer
- concise positioning statement
- View Selected Work
- Contact
- Email / GitHub / LinkedIn / Upwork placeholders must remain clearly non-production until resolved

## Requirements

Navigation:
- Work
- Notes
- Approach
- About
- Contact

## Acceptance criteria

- [ ] Identity is understandable without scrolling.
- [ ] CTA scrolls to Work.
- [ ] Navigation is keyboard accessible.
- [ ] Hero does not become a technology-badge wall.
- [ ] Photo is optional and layout-safe when absent.

---

# Issue 4 — Build Featured Work section

**Labels:** `ui`, `projects`, `priority:high`

## Goal

Create reusable featured-project cards driven by structured data.

## Card content

- title;
- concise purpose;
- status;
- category;
- meaningful visual when available;
- Explore System anchor.

## Acceptance criteria

- [ ] Supports 3–5 projects.
- [ ] A project without code/demo still looks complete.
- [ ] Cards do not overflow on mobile.
- [ ] Featured order comes from data.
- [ ] Cards link to same-page case-study anchors.

---

# Issue 5 — Build five-part project case-study component

**Labels:** `ui`, `projects`, `content`, `priority:high`

## Goal

Implement the shared project detail layout.

## Required sections

1. Problem
2. System
3. Engineering
4. Outcome
5. Evolution

## Additional content

- status;
- technologies;
- categories;
- disclosure note;
- evidence;
- verified external links.

## Acceptance criteria

- [ ] All sections are rendered from project data.
- [ ] Deep-link anchor exists per project.
- [ ] Layout supports screenshots and diagrams.
- [ ] Code snippets are not part of the default component.
- [ ] Private projects do not show fake/disabled GitHub links.

---

# Issue 6 — Prepare UI GreenMetric sanitized case study

**Labels:** `content`, `case-study`, `privacy`, `priority:high`

## Goal

Turn the operational coordination dashboard into a public-safe featured case study.

## Tasks

- write five-part case study;
- reconstruct or sanitize screenshot;
- diagram evidence/ownership/status workflow;
- remove institutional/private data;
- verify all outcome claims.

## Acceptance criteria

- [ ] Project passes disclosure checklist.
- [ ] No real internal links or sensitive records.
- [ ] Outcome is accurate without invented metrics.
- [ ] Evidence can be understood without repository access.

---

# Issue 7 — Prepare Badminton Tournament Operations case study

**Labels:** `content`, `case-study`, `privacy`, `priority:high`

## Goal

Combine multiple tournament spreadsheets/tools into one systems case study.

## Narrative

Show how structured registration, scheduling, match progression, and event operations help a small team coordinate larger tournaments.

## Tasks

- verify participant-scale wording before publishing;
- use synthetic participant data;
- select representative scheduling workflow;
- show system evolution across events;
- decide whether training tools remain separate.

## Acceptance criteria

- [ ] No participant PII.
- [ ] Multiple event artifacts are presented as system evolution, not duplicate projects.
- [ ] Implementation technology is secondary to operational problem.
- [ ] Contribution is clearly described.

---

# Issue 8 — Verify and prepare first AI project

**Labels:** `content`, `ai`, `verification`, `priority:high`

## Goal

Select the strongest verified AI project for the first public release.

Candidates:
- BLWFinBot v2
- Enterprise Chatbot / Agent

## Verification required

- working MVP;
- repository status;
- demo/screenshots;
- architecture;
- data/privacy review;
- exact AI-assisted development contribution.

## Acceptance criteria

- [ ] Candidate passes portfolio gate.
- [ ] No planned capability is presented as implemented.
- [ ] AI role is described accurately.
- [ ] Synthetic data is used where necessary.

---

# Issue 9 — Verify Class & Exam Scheduling System

**Labels:** `content`, `scheduling`, `verification`

## Goal

Determine whether the scheduling system is ready for main portfolio inclusion.

## Verify

- current running state;
- implemented stack;
- implemented conflict rules;
- current solver/optimization state;
- repository;
- demo;
- safe sample dataset.

## Important

Do not describe future CP-SAT/optimization work as already implemented unless verified.

## Acceptance criteria

- [ ] MVP state classified accurately.
- [ ] Architecture diagram drafted.
- [ ] Constraint model is understandable.
- [ ] Public evidence uses synthetic/safe data.

---

# Issue 10 — Implement Development Notes

**Labels:** `feature`, `content`

## Goal

Add optional engineering-journal updates.

## Requirements

Each note supports:
- date;
- project;
- type;
- 1–3 sentence text.

Types:
- Build
- Iteration
- Experiment
- Reflection

## Acceptance criteria

- [ ] Notes render from structured data.
- [ ] Removing all notes removes the section cleanly.
- [ ] No “inactive for X days” language.
- [ ] Notes do not become the main navigation focus.

---

# Issue 11 — Implement Approach, About, and Contact

**Labels:** `content`, `ui`

## Approach

Explain:
1. understand the bottleneck;
2. make the process explicit;
3. build the simplest system that handles the constraints;
4. test, simplify, and evolve.

## About

Keep university employment as secondary context.

## Contact

Surface:
- Email
- GitHub
- LinkedIn
- Upwork
- Philippines

## Acceptance criteria

- [ ] No full resume duplication.
- [ ] Freelance language is subtle and scoped.
- [ ] No contact placeholder is treated as production data.
- [ ] Layout works with or without photograph.

---

# Issue 12 — Establish BLW/Balanse visual system

**Labels:** `design`, `ui`

## Goal

Translate Kalma, Bagsik, Balanse, and experimental engineering into a professional design system.

## Tasks

- define final color tokens;
- choose typography;
- define spacing/grid;
- define project status styling;
- define evidence/diagram styles;
- define focus states;
- define motion.

## Acceptance criteria

- [ ] Professional/corporate base.
- [ ] Engineering/technical clarity.
- [ ] Experimental detail remains restrained.
- [ ] WCAG AA color contrast.
- [ ] Reduced motion supported.
- [ ] Not styled like a sports-team page.

---

# Issue 13 — Accessibility and responsive QA

**Labels:** `accessibility`, `qa`, `priority:high`

## Acceptance criteria

- [ ] Keyboard-only navigation.
- [ ] Skip link.
- [ ] Visible focus.
- [ ] Correct heading hierarchy.
- [ ] Meaningful image alt text.
- [ ] No hover-only critical information.
- [ ] Reduced-motion support.
- [ ] Mobile touch targets.
- [ ] No horizontal overflow at common phone widths.
- [ ] Case-study anchors remain usable with sticky nav.

---

# Issue 14 — Production metadata and deployment

**Labels:** `deployment`, `seo`, `priority:high`

## Goal

Ship v1 publicly.

## Tasks

- final contact URLs;
- title and description;
- Open Graph image;
- canonical URL;
- favicon;
- image optimization;
- broken-link check;
- production build;
- GitHub Pages or Vercel deployment.

## Acceptance criteria

- [ ] No `TODO_*` appears in production.
- [ ] No secrets in bundle/repository.
- [ ] All featured-project disclosures reviewed.
- [ ] Production URL works.
- [ ] Social preview works.
- [ ] Build remains static; no backend introduced.

---

# Issue 15 — Post-launch portfolio audit

**Labels:** `qa`, `content`

## Goal

Review the live site as a recruiter, technical reviewer, and potential client.

## Test questions

Can a visitor answer:
1. What does Brian build?
2. What problems does he solve?
3. What projects are actually working?
4. How does AI fit into his workflow?
5. What evidence supports each project?
6. How can he be contacted?

## Acceptance criteria

- [ ] 30-second recruiter scan succeeds.
- [ ] Technical depth is available without overwhelming the homepage.
- [ ] Site still looks complete with Notes hidden.
- [ ] No duplicated project narratives.
- [ ] No confidential evidence.
